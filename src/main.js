import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/index.css';
import store from './store';
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
Vue.config.productionTip = false

export const bus = new Vue();

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'Home',
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

//console.log(process.env);
