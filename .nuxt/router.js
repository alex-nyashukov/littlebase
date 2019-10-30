import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8e4ea44e = () => interopDefault(import('..\\pages\\buses.vue' /* webpackChunkName: "pages_buses" */))
const _d217b8d4 = () => interopDefault(import('..\\pages\\downloads.vue' /* webpackChunkName: "pages_downloads" */))
const _467d3e94 = () => interopDefault(import('..\\pages\\drivers.vue' /* webpackChunkName: "pages_drivers" */))
const _bfffc6d8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _59687668 = () => interopDefault(import('..\\pages\\outfit.vue' /* webpackChunkName: "pages_outfit" */))
const _0241202f = () => interopDefault(import('..\\pages\\routes.vue' /* webpackChunkName: "pages_routes" */))
const _21c1ee89 = () => interopDefault(import('..\\pages\\ways.vue' /* webpackChunkName: "pages_ways" */))
const _534f0d06 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/buses",
      component: _8e4ea44e,
      name: "buses"
    }, {
      path: "/downloads",
      component: _d217b8d4,
      name: "downloads"
    }, {
      path: "/drivers",
      component: _467d3e94,
      name: "drivers"
    }, {
      path: "/login",
      component: _bfffc6d8,
      name: "login"
    }, {
      path: "/outfit",
      component: _59687668,
      name: "outfit"
    }, {
      path: "/routes",
      component: _0241202f,
      name: "routes"
    }, {
      path: "/ways",
      component: _21c1ee89,
      name: "ways"
    }, {
      path: "/",
      component: _534f0d06,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
