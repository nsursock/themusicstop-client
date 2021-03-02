<template>
  <div v-on:refreshPage="refreshPage" class="mb-5">
    <Heading v-if="table.rows" :data="table.rows"/>
    <ListTable v-if="table.rows" :table="table" />
    <SlideOver v-on:toggleSlideOver="toggleSlideOver" v-show="showSlideOver" :item="item"/>
    <RatingModal v-on:toggleRatingModal="toggleRatingModal" v-on:toggleFeedbackModal="toggleFeedbackModal" v-show="showModal" :songId="songId"/>
    <FeedbackModal v-on:refreshPage="toggleFeedbackModal" v-show="showFeedback"/>
  </div>
</template>

<script>
import ListTable from '@/components/music/ListTable'
import Heading from '@/components/music/Heading'
import SlideOver from '@/components/music/SlideOver'
import RatingModal from '@/components/music/RatingModal'
import FeedbackModal from '@/components/music/FeedbackModal'

import moment from 'moment'
import { bus } from '@/main'
import { apiUrl } from '@/env.json'
import axios from 'axios'
const albumArt = require( 'album-art' )
import $ from 'jquery'

export default {
  components: {
    Heading,
    ListTable,
    SlideOver,
    RatingModal,
    FeedbackModal
  },
  created () {
    bus.$on('toggleSlideOver', (val) => {
      if (val !== undefined) {
        this.item = this.table.rows.find(item => item._id === val);
        this.item.releaseDate = moment(this.item.releaseDate).format('MMM DD, YYYY');
      }
      else
        this.item = {
          _id: null,
          title: null,
          artist: null,
          album: null,
          genre: null,
          time: null,
          rating: null,
          trackNumber: null,
          releaseDate: null,
          label: null
        };

      this.toggleSlideOver();
    });
    bus.$on('toggleRatingModal', (val) => {
      this.songId = val;
      this.toggleRatingModal();
    });
  },
  async mounted() {
    await this.getTableFromApi();
    this.getArtwork();
  },
  methods: {
    toggleSlideOver() {
      this.showSlideOver = !this.showSlideOver;
    },
    toggleRatingModal() {
      this.showModal = !this.showModal;
    },
    toggleFeedbackModal() {
      this.showFeedback = !this.showFeedback;
    },
    async refreshPage() { // #todo not working
      await this.getTableFromApi();
      this.getArtwork();
      this.$forceUpdate();
    },
    async getTableFromApi() {
      let query = `
      query {
        songMany(limit: 2000) {
          _id
          title
          artist
          album
          genre
          releaseDate
          time
          trackNumber
          label
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.table = {
          rows: response.data.data.songMany,
          cols: [
            'Title', 'Artist', 'Album', 'Genre', 'Time', 'Track Number', 'Release Date', 'Label', 'Rating',
          ]
        };
        this.table.rows.forEach(async (item) => {
          // compute human readable time
          const min = Math.floor(item.time / 60);
          let sec = item.time % 60;
          sec = sec < 10 ? '0' + sec : sec;
          item.time = min + ':' + sec;

          // fetch ratings
          query = `query {
            ratingMany(filter: {
              songId: "${item._id}"
            }) {
              rating
            }
          }`;
          let r = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
          const arr = r.data.data.ratingMany.map(s => { return s.rating });
          const avg = arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;
          this.$set(item, 'rating', arr.length > 0 ? +avg.toFixed() : 'N/A');
        });
      }).catch(error => {
        console.log(error);
      });
    },
    getArtwork() {
      this.table.rows.forEach(async (song) => {
        this.$set(song, 'artworkUrl', await albumArt( song.artist, {album: song.album, size: 'small'} ));
      });
    },

    handleImport: function() {
      var files = event.target.files;
      var reader = new FileReader();
      reader.onload = async (event) => {
        var xmlDoc = $.parseXML( event.target.result );
        var $xml = $( xmlDoc );
        var lib = [];
        $xml.find("key:contains('Tracks')+dict > dict").each(function(i, elem) {
          var $dict = $(elem);
          var dict = {};
          $dict.find("key").each(function(j, thiskey) {
            dict[$(thiskey).text()] = $(thiskey).next().text();
          });
          lib.push(dict);
        });

        // insert songs in database
        let query = `mutation {
          songCreateMany(
            records: [\n`;
        lib.forEach((song) => {
          query += `{
            title: """${song.Name}"""
            artist: """${song.Artist}"""
            album: """${song.Album}"""
            genre: "${song.Genre}"
            releaseDate: "${song.Year + '-01-01'}"
            time: ${Math.floor(song['Total Time'] / 1000)}
            trackNumber: ${song['Track Number'] ? song['Track Number'] : null}
            label: "N/A"
            songId: """${song.Name + ' by ' + song.Artist + ' on ' + song.Album}"""
          }\n`;
        });
        query += `]
          ) {
            recordIds
          }
        }`;
        // const res =
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        // const songIds = res.data.data.songCreateMany.recordIds;

        // add ratings to each song
        // songIds.forEach(async (id, index) => {
        //   const query = `mutation {
        //     ratingCreateOne (
        //       record: {
        //         songId: "${id}"
        //         userId: "${this.$store.getters.loggedInUserId}"
        //         rating: ${lib[index].Rating}
        //       }
        //     ) {
        //       recordId
        //     }
        //   }`;
        //   await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        // });
      };
      reader.readAsText(files[0]);
    }
  },

  data() {
    return {
      table: {},
      item: {},
      songId: null,
      showSlideOver: false,
      showModal: false,
      showFeedback: false,
    }
  }
}
</script>
