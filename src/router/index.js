import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/views/Splash'
import Contact from '@/views/Contact'
import Donation from '@/views/Donation'

const Networks = () => import(/* webpackChunkName: "guests" */ '@/views/Networks')
const Users = () => import(/* webpackChunkName: "social" */ '@/views/members/Users')
const Home = () => import(/* webpackChunkName: "social" */ '@/views/members/Home')
const Messages = () => import(/* webpackChunkName: "social" */ '@/views/members/Messages')
const Settings = () => import(/* webpackChunkName: "config" */ '@/views/members/Settings')
const Songs = () => import(/* webpackChunkName: "music" */ '@/views/music/Songs')

Vue.use(Router)

const routes = [
  { path: '/', name: 'Splash', component: Splash },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/donate', name: 'Donate', component: Donation },
  { path: '/networks', name: 'Networks', component: Networks },
  { path: '/songs', name: 'Songs', component: Songs },
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
