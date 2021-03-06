<template>
  <div id="app">
    <Nav class=""/>
    <div @click="emitCloseMenu" class="">
      <router-view class=""></router-view>
    </div>
    <ExitIntentPopup @toggleExitPopup="toggleExitPopup" v-show="showPopup && !$store.getters.loggedIn"/>
    <FooterSection />
    <NotificationCard v-on:closeNotif="showNotif = false" class="animate-bounce-once" v-show="showNotif && index === currentIndex" v-for="(card, index) in details" :key="index" :details="card"/>
  </div>
</template>

<script>
import Nav from './components/partials/Nav'
import FooterSection from './components/FooterSection'
import ExitIntentPopup from './components/ExitIntentPopup'
import NotificationCard from './components/NotificationCard'
import { bus } from '@/main'
import { apiUrl } from '@/env.json'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Nav,
    FooterSection,
    ExitIntentPopup,
    NotificationCard
  },
  async mounted() {
    const query = `query {
      userMany {
        firstName
        lastName
        city
        country
        createdAt
        profileImage
      }
    }`;
    await axios.post(process.env.VUE_APP_API || apiUrl, { query })
      .then(response => {
        this.details = response.data.data.userMany;
    });

    setInterval(() => {
      this.currentIndex = Math.floor(Math.random() * (this.details.length - 1));
      // if (!this.showNotif) clearInterval(timer);
    }, 5000);
  },
  created() {
    document.addEventListener("DOMContentLoaded", () => {
      // desktop
      document.addEventListener("mouseout", (event) => {
        if (!event.toElement && !event.relatedTarget) {
          setTimeout(() => {
            this.showPopup = true;
          }, 1000)
        }
      });
      // mobile
      window.addEventListener('scroll', (event) => {
        if (!event.toElement && !event.relatedTarget) {
          if (this.isMobile() && window.scrollY === 0) {
            setTimeout(() => {
              this.showPopup = true;
            }, 1000)
          }
        }
      }, {passive: true});
    })
  },
  data () {
    return {
      showPopup: false,
      showNotif: true,
      details: [],
      currentIndex: 0,
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    emitCloseMenu: function() {
      bus.$emit('closeMenu');
    },
    toggleExitPopup() {
      this.showPopup = !this.showPopup;
    }
  }
}
</script>
