<template lang="html">
<div>
  <FeedbackModal v-show="showFeedback" v-on:refreshPage="$emit('refreshPage'), showFeedback = false"/>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">

      <div class="mt-5 md:mt-0 md:col-span-3">
        <form @submit.prevent="saveSongInfo">
          <div class="shadow sm:rounded-md sm:overflow-hidden">

<div class="bg-white shadow overflow-hidden sm:rounded-t-lg">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Song Information
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      Metadata and other details.
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="title" class="block text-sm font-medium ">Title</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.title" type="text" name="title" id="title" autocomplete="title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="artist" class="block text-sm font-medium ">Artist</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.artist" type="text" name="artist" id="artist" autocomplete="artist" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="album" class="block text-sm font-medium ">Album</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.album" type="text" name="album" id="album" autocomplete="album" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="genre" class="block text-sm font-medium ">Genre</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.genre" type="text" name="genre" id="genre" autocomplete="genre" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="time" class="block text-sm font-medium ">Time</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.time" type="text" name="time" id="time" autocomplete="time" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>

      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="track-number" class="block text-sm font-medium ">Track #</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.trackNumber" type="text" name="track-number" id="track-number" autocomplete="track-number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="release-date" class="block text-sm font-medium ">Release Date</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.releaseDate" type="text" name="release-date" id="release-date" autocomplete="release-date" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 my-auto">
          <label for="record-label" class="block text-sm font-medium ">Record Label</label>
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 my-auto">
          <input v-model="item.label" type="text" name="record-label" id="record-label" autocomplete="record-label" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </dd>
      </div>


      <!-- <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          About
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </dd>
      </div> -->
      <!-- <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Attachments
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
            <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 flex-1 w-0 truncate">
                  resume_back_end_developer.pdf
                </span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
            <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 flex-1 w-0 truncate">
                  coverletter_back_end_developer.pdf
                </span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </div> -->
    </dl>
  </div>
</div>

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { apiUrl } from '@/env.json'
import axios from 'axios'
import FeedbackModal from './FeedbackModal'
export default {
  components: {
    FeedbackModal
  },
  props: {
    item: Object
  },
  methods: {
    saveSongInfo() {
      if (this.item._id === null)
        this.createSong();
      else
        this.updateSong();
    },
    async createSong() {
      const time = this.item.time.split(':');
      const query = `mutation {
        songCreateOne(
          record: {
            title:       """${this.item.title}"""
            artist:      """${this.item.artist}"""
            album:       """${this.item.album}"""
            genre:       "${this.item.genre}"
            time:        ${parseInt(time[0] * 60) + parseInt(time[1])}
            trackNumber: ${this.item.trackNumber}
            releaseDate: "${this.item.releaseDate}"
            label:       """${this.item.label}"""
          }
        ) {
          recordId
        }
      }`;
      await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      this.showFeedback = true;
    },
    async updateSong() {
      const time = this.item.time.split(':');
      const query = `mutation {
        songUpdateById(_id: "${this.item._id}",
          record: {
            title:       """${this.item.title}"""
            artist:      """${this.item.artist}"""
            album:       """${this.item.album}"""
            genre:       "${this.item.genre}"
            time:        ${parseInt(time[0] * 60) + parseInt(time[1])}
            trackNumber: ${this.item.trackNumber}
            releaseDate: "${this.item.releaseDate}"
            label:       """${this.item.label}"""
          }
        ) {
          recordId
        }
      }`; console.log(query);
      await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      this.showFeedback = true;
    }
  },
  data() {
    return {
      showFeedback: false,
    }
  }
}
</script>
