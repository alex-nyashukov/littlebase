import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3620c087 = () => interopDefault(import('..\\pages\\buses.vue' /* webpackChunkName: "pages_buses" */))
const _37772f44 = () => interopDefault(import('..\\pages\\downloads.vue' /* webpackChunkName: "pages_downloads" */))
const _284f7fe4 = () => interopDefault(import('..\\pages\\drivers.vue' /* webpackChunkName: "pages_drivers" */))
const _1d482f42 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _f5ba8d0c = () => interopDefault(import('..\\pages\\outfit.vue' /* webpackChunkName: "pages_outfit" */))
const _2dfb6341 = () => interopDefault(import('..\\pages\\routes.vue' /* webpackChunkName: "pages_routes" */))
const _6a1463ca = () => interopDefault(import('..\\pages\\ways.vue' /* webpackChunkName: "pages_ways" */))
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
      path: "/login",
      component: _1d482f42,
      name: "login"
    }, {
      path: "/outfit",
      component: _f5ba8d0c,
      name: "outfit"
    }, {
      path: "/routes",
      component: _2dfb6341,
      name: "routes"
    }, {
      path: "/ways",
      component: _6a1463ca,
      name: "ways"
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
