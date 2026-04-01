import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e209cb0 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _16170cce = () => interopDefault(import('../pages/home/account.vue' /* webpackChunkName: "pages/home/account" */))
const _58ae40d1 = () => interopDefault(import('../pages/home/account/index.vue' /* webpackChunkName: "pages/home/account/index" */))
const _ee93a712 = () => interopDefault(import('../pages/home/account/basketinplaymarkets.vue' /* webpackChunkName: "pages/home/account/basketinplaymarkets" */))
const _2f11faa3 = () => interopDefault(import('../pages/home/account/basketliverate.vue' /* webpackChunkName: "pages/home/account/basketliverate" */))
const _e9ab6ea0 = () => interopDefault(import('../pages/home/account/basketmarkets.vue' /* webpackChunkName: "pages/home/account/basketmarkets" */))
const _26282592 = () => interopDefault(import('../pages/home/account/basketrate.vue' /* webpackChunkName: "pages/home/account/basketrate" */))
const _518d683e = () => interopDefault(import('../pages/home/account/boss.vue' /* webpackChunkName: "pages/home/account/boss" */))
const _384e349a = () => interopDefault(import('../pages/home/account/branch.vue' /* webpackChunkName: "pages/home/account/branch" */))
const _dbfd6d48 = () => interopDefault(import('../pages/home/account/codelist.vue' /* webpackChunkName: "pages/home/account/codelist" */))
const _b0333cac = () => interopDefault(import('../pages/home/account/creditlog.vue' /* webpackChunkName: "pages/home/account/creditlog" */))
const _da361788 = () => interopDefault(import('../pages/home/account/detailsaccount.vue' /* webpackChunkName: "pages/home/account/detailsaccount" */))
const _75488b22 = () => interopDefault(import('../pages/home/account/detailscomission.vue' /* webpackChunkName: "pages/home/account/detailscomission" */))
const _7e31f451 = () => interopDefault(import('../pages/home/account/gamelog.vue' /* webpackChunkName: "pages/home/account/gamelog" */))
const _0342da0b = () => interopDefault(import('../pages/home/account/generalset.vue' /* webpackChunkName: "pages/home/account/generalset" */))
const _452fee02 = () => interopDefault(import('../pages/home/account/info.vue' /* webpackChunkName: "pages/home/account/info" */))
const _6c18a08c = () => interopDefault(import('../pages/home/account/loginlog.vue' /* webpackChunkName: "pages/home/account/loginlog" */))
const _5ac9dfac = () => interopDefault(import('../pages/home/account/nextgoals.vue' /* webpackChunkName: "pages/home/account/nextgoals" */))
const _3ea496c6 = () => interopDefault(import('../pages/home/account/paycupons.vue' /* webpackChunkName: "pages/home/account/paycupons" */))
const _40cd3f30 = () => interopDefault(import('../pages/home/account/profile.vue' /* webpackChunkName: "pages/home/account/profile" */))
const _6775cbf4 = () => interopDefault(import('../pages/home/account/register.vue' /* webpackChunkName: "pages/home/account/register" */))
const _3dc1594f = () => interopDefault(import('../pages/home/account/resetaccount.vue' /* webpackChunkName: "pages/home/account/resetaccount" */))
const _1987aeea = () => interopDefault(import('../pages/home/account/setlimit.vue' /* webpackChunkName: "pages/home/account/setlimit" */))
const _682f9c24 = () => interopDefault(import('../pages/home/account/settime.vue' /* webpackChunkName: "pages/home/account/settime" */))
const _ca4921ee = () => interopDefault(import('../pages/home/account/singelbets.vue' /* webpackChunkName: "pages/home/account/singelbets" */))
const _418fbf34 = () => interopDefault(import('../pages/home/account/soccerinplaymarkets.vue' /* webpackChunkName: "pages/home/account/soccerinplaymarkets" */))
const _3de63474 = () => interopDefault(import('../pages/home/account/soccerliverate.vue' /* webpackChunkName: "pages/home/account/soccerliverate" */))
const _ff3825a6 = () => interopDefault(import('../pages/home/account/soccermarkets.vue' /* webpackChunkName: "pages/home/account/soccermarkets" */))
const _a5f03c4c = () => interopDefault(import('../pages/home/account/soccerrate.vue' /* webpackChunkName: "pages/home/account/soccerrate" */))
const _158a3ae7 = () => interopDefault(import('../pages/home/account/Users.vue' /* webpackChunkName: "pages/home/account/Users" */))
const _3c94e59c = () => interopDefault(import('../pages/home/account/users/_id.vue' /* webpackChunkName: "pages/home/account/users/_id" */))
const _2e45f264 = () => interopDefault(import('../pages/home/basketfixture.vue' /* webpackChunkName: "pages/home/basketfixture" */))
const _57355564 = () => interopDefault(import('../pages/home/basketinplay.vue' /* webpackChunkName: "pages/home/basketinplay" */))
const _237f96e1 = () => interopDefault(import('../pages/home/soccerfixture.vue' /* webpackChunkName: "pages/home/soccerfixture" */))
const _0552a59e = () => interopDefault(import('../pages/home/soccerinplay.vue' /* webpackChunkName: "pages/home/soccerinplay" */))
const _a0fcd942 = () => interopDefault(import('../pages/resetpass.vue' /* webpackChunkName: "pages/resetpass" */))
const _1dbbe9a1 = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _0b9f865e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _1e209cb0,
    name: "home",
    children: [{
      path: "account",
      component: _16170cce,
      children: [{
        path: "",
        component: _58ae40d1,
        name: "home-account"
      }, {
        path: "basketinplaymarkets",
        component: _ee93a712,
        name: "home-account-basketinplaymarkets"
      }, {
        path: "basketliverate",
        component: _2f11faa3,
        name: "home-account-basketliverate"
      }, {
        path: "basketmarkets",
        component: _e9ab6ea0,
        name: "home-account-basketmarkets"
      }, {
        path: "basketrate",
        component: _26282592,
        name: "home-account-basketrate"
      }, {
        path: "boss",
        component: _518d683e,
        name: "home-account-boss"
      }, {
        path: "branch",
        component: _384e349a,
        name: "home-account-branch"
      }, {
        path: "codelist",
        component: _dbfd6d48,
        name: "home-account-codelist"
      }, {
        path: "creditlog",
        component: _b0333cac,
        name: "home-account-creditlog"
      }, {
        path: "detailsaccount",
        component: _da361788,
        name: "home-account-detailsaccount"
      }, {
        path: "detailscomission",
        component: _75488b22,
        name: "home-account-detailscomission"
      }, {
        path: "gamelog",
        component: _7e31f451,
        name: "home-account-gamelog"
      }, {
        path: "generalset",
        component: _0342da0b,
        name: "home-account-generalset"
      }, {
        path: "info",
        component: _452fee02,
        name: "home-account-info"
      }, {
        path: "loginlog",
        component: _6c18a08c,
        name: "home-account-loginlog"
      }, {
        path: "nextgoals",
        component: _5ac9dfac,
        name: "home-account-nextgoals"
      }, {
        path: "paycupons",
        component: _3ea496c6,
        name: "home-account-paycupons"
      }, {
        path: "profile",
        component: _40cd3f30,
        name: "home-account-profile"
      }, {
        path: "register",
        component: _6775cbf4,
        name: "home-account-register"
      }, {
        path: "resetaccount",
        component: _3dc1594f,
        name: "home-account-resetaccount"
      }, {
        path: "setlimit",
        component: _1987aeea,
        name: "home-account-setlimit"
      }, {
        path: "settime",
        component: _682f9c24,
        name: "home-account-settime"
      }, {
        path: "singelbets",
        component: _ca4921ee,
        name: "home-account-singelbets"
      }, {
        path: "soccerinplaymarkets",
        component: _418fbf34,
        name: "home-account-soccerinplaymarkets"
      }, {
        path: "soccerliverate",
        component: _3de63474,
        name: "home-account-soccerliverate"
      }, {
        path: "soccermarkets",
        component: _ff3825a6,
        name: "home-account-soccermarkets"
      }, {
        path: "soccerrate",
        component: _a5f03c4c,
        name: "home-account-soccerrate"
      }, {
        path: "Users",
        component: _158a3ae7,
        name: "home-account-Users"
      }, {
        path: "users/:id?",
        component: _3c94e59c,
        name: "home-account-users-id"
      }]
    }, {
      path: "basketfixture",
      component: _2e45f264,
      name: "home-basketfixture"
    }, {
      path: "basketinplay",
      component: _57355564,
      name: "home-basketinplay"
    }, {
      path: "soccerfixture",
      component: _237f96e1,
      name: "home-soccerfixture"
    }, {
      path: "soccerinplay",
      component: _0552a59e,
      name: "home-soccerinplay"
    }]
  }, {
    path: "/resetpass",
    component: _a0fcd942,
    name: "resetpass"
  }, {
    path: "/welcome",
    component: _1dbbe9a1,
    name: "welcome"
  }, {
    path: "/",
    component: _0b9f865e,
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
