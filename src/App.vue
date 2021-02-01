<template>
  <div id="app">
    <Nav />
    <div @click="emitCloseMenu">
      <router-view></router-view>
      <FooterSection />
    </div>
  </div>
</template>
<script>
import Nav from './components/partials/Nav'
import FooterSection from './components/FooterSection'
import { bus } from '@/main'

export default {
  name: 'app',
  components: {
    Nav,
    FooterSection
  },
  methods: {
    emitCloseMenu: function() {
      bus.$emit('closeMenu');
    }
  }
}
</script>
