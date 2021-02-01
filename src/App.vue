<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
    <FooterSection />
  </div>
</template>
<script>
import Nav from './components/partials/Nav'
import FooterSection from './components/FooterSection'

export default {
  name: 'app',
  components: {
    Nav,
    FooterSection
  }
}
</script>
