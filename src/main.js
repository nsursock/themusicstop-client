import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/index.css';
import store from './store';
import LoadScript from 'vue-plugin-load-script';
import VueGtag from "vue-gtag";

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import linkify from 'vue-linkify'
Vue.directive('linkified', linkify)

Vue.use(LoadScript);
Vue.config.productionTip = false

Vue.prototype.winWidth = window.innerWidth;
Vue.prototype.winHeight = window.innerHeight;

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: { id: "G-2M87ZHQY1B" }
  }, router);
}

export const bus = new Vue();

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn && to.path !== '/') {
      next({
        name: 'Splash',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app')
