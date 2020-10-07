import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: function () {
      return import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
    }
  },
  {
    path: '/network',
    name: 'network',
    component: function () {
      return import(/* webpackChunkName: "profile" */ '../views/Network.vue')
    }
  },
  {
    path: '/',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "profile" */ '../views/LoginLanding.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
