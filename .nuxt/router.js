import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fe6b02a = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _955b1632 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _d04cb0b8 = () => interopDefault(import('..\\pages\\admin\\new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _4d622962 = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _3019f9d3 = () => interopDefault(import('..\\pages\\posts\\_postId\\index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _2815268c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _1fe6b02a,
    name: "admin"
  }, {
    path: "/posts",
    component: _955b1632,
    name: "posts"
  }, {
    path: "/admin/new-post",
    component: _d04cb0b8,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _4d622962,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _3019f9d3,
    name: "posts-postId"
  }, {
    path: "/",
    component: _2815268c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
