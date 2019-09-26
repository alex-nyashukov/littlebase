import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3620c087 = () => interopDefault(import('..\\pages\\buses.vue' /* webpackChunkName: "pages_buses" */))
const _37772f44 = () => interopDefault(import('..\\pages\\downloads.vue' /* webpackChunkName: "pages_downloads" */))
const _284f7fe4 = () => interopDefault(import('..\\pages\\drivers.vue' /* webpackChunkName: "pages_drivers" */))
const _53a08c2b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/buses",
      component: _3620c087,
      name: "buses"
    }, {
      path: "/downloads",
      component: _37772f44,
      name: "downloads"
    }, {
      path: "/drivers",
      component: _284f7fe4,
      name: "drivers"
    }, {
      path: "/",
      component: _53a08c2b,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
