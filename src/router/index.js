import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Setlist from '@/components/setlist'
import About from '@/components/about'
import Contact from '@/components/contact'
import Photos from '@/components/photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Conact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/setlist',
      name: 'SetList',
      component: Setlist
    },
    {
      path: '/Photos',
      name: 'Photos',
      component: Photos
    },
  ]
})
