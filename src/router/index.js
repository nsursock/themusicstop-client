import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/views/Splash'
import Contact from '@/views/Contact'
// import About from '@/views/About'
// import Users from '@/views/Users'
// import Settings from '@/views/Settings'

const Users = () => import(/* webpackChunkName: "display" */ '@/views/Users')
const Home = () => import(/* webpackChunkName: "display" */ '@/views/Home')
const Messages = () => import(/* webpackChunkName: "display" */ '@/views/Messages')
const Settings = () => import(/* webpackChunkName: "config" */ '@/views/Settings')

Vue.use(Router)

const routes = [
  { path: '/', name: 'Splash', component: Splash },
  { path: '/contact', name: 'Contact', component: Contact },
  // { path: '/about', name: 'About', component: About },
  { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/messages', name: 'Messages', component: Messages, meta: { requiresAuth: true } },
  { path: '/users', name: 'Users', component: Users, meta: { requiresAuth: true } },
  { path: '/settings', name: 'Settings', component: Settings, meta: { requiresAuth: true } }
];

const router = new Router({
//  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
