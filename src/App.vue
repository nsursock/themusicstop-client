<template>
  <div id="app">
    <Nav />
    <div @click="emitCloseMenu">
      <router-view></router-view>
      <ExitIntentPopup @toggleExitPopup="toggleExitPopup" v-show="showPopup && !$store.getters.loggedIn"/>
      <FooterSection />
    </div>
  </div>
</template>
<script>
import Nav from './components/partials/Nav'
import FooterSection from './components/FooterSection'
import ExitIntentPopup from './components/ExitIntentPopup'
import { bus } from '@/main'

export default {
  name: 'app',
  components: {
    Nav,
    FooterSection,
    ExitIntentPopup
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
          if (window.scrollY === 0) {
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
    }
  },
  methods: {
    emitCloseMenu: function() {
      bus.$emit('closeMenu');
    },
    toggleExitPopup() {
      this.showPopup = !this.showPopup;
    }
  }
}
</script>
