import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b6b08ce = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _ef8b0a28 = () => interopDefault(import('../pages/home/account.vue' /* webpackChunkName: "pages/home/account" */))
const _f5fbbf22 = () => interopDefault(import('../pages/home/account/index.vue' /* webpackChunkName: "pages/home/account/index" */))
const _827940d6 = () => interopDefault(import('../pages/home/account/basketinplaymarkets.vue' /* webpackChunkName: "pages/home/account/basketinplaymarkets" */))
const _22066676 = () => interopDefault(import('../pages/home/account/basketliverate.vue' /* webpackChunkName: "pages/home/account/basketliverate" */))
const _5928ab64 = () => interopDefault(import('../pages/home/account/basketmarkets.vue' /* webpackChunkName: "pages/home/account/basketmarkets" */))
const _12c92059 = () => interopDefault(import('../pages/home/account/basketrate.vue' /* webpackChunkName: "pages/home/account/basketrate" */))
const _7e08abb2 = () => interopDefault(import('../pages/home/account/basketratelimit.vue' /* webpackChunkName: "pages/home/account/basketratelimit" */))
const _b4dfc640 = () => interopDefault(import('../pages/home/account/boss.vue' /* webpackChunkName: "pages/home/account/boss" */))
const _4200f9d5 = () => interopDefault(import('../pages/home/account/branch.vue' /* webpackChunkName: "pages/home/account/branch" */))
const _0674dcfe = () => interopDefault(import('../pages/home/account/codelist.vue' /* webpackChunkName: "pages/home/account/codelist" */))
const _7c357b70 = () => interopDefault(import('../pages/home/account/creditlog.vue' /* webpackChunkName: "pages/home/account/creditlog" */))
const _52cfc65e = () => interopDefault(import('../pages/home/account/detailsaccount.vue' /* webpackChunkName: "pages/home/account/detailsaccount" */))
const _35da8c11 = () => interopDefault(import('../pages/home/account/detailscomission.vue' /* webpackChunkName: "pages/home/account/detailscomission" */))
const _35e73722 = () => interopDefault(import('../pages/home/account/gamelog.vue' /* webpackChunkName: "pages/home/account/gamelog" */))
const _29200d2d = () => interopDefault(import('../pages/home/account/generalset.vue' /* webpackChunkName: "pages/home/account/generalset" */))
const _316abda1 = () => interopDefault(import('../pages/home/account/info.vue' /* webpackChunkName: "pages/home/account/info" */))
const _3ee797a4 = () => interopDefault(import('../pages/home/account/loginlog.vue' /* webpackChunkName: "pages/home/account/loginlog" */))
const _74c8c04a = () => interopDefault(import('../pages/home/account/nextgoals.vue' /* webpackChunkName: "pages/home/account/nextgoals" */))
const _0aa6d58a = () => interopDefault(import('../pages/home/account/paycupons.vue' /* webpackChunkName: "pages/home/account/paycupons" */))
const _4673d086 = () => interopDefault(import('../pages/home/account/profile.vue' /* webpackChunkName: "pages/home/account/profile" */))
const _482d40d4 = () => interopDefault(import('../pages/home/account/register.vue' /* webpackChunkName: "pages/home/account/register" */))
const _e4097ae8 = () => interopDefault(import('../pages/home/account/setlimit.vue' /* webpackChunkName: "pages/home/account/setlimit" */))
const _32c2a20c = () => interopDefault(import('../pages/home/account/settime.vue' /* webpackChunkName: "pages/home/account/settime" */))
const _7e8ebbaa = () => interopDefault(import('../pages/home/account/singelbets.vue' /* webpackChunkName: "pages/home/account/singelbets" */))
const _779cf252 = () => interopDefault(import('../pages/home/account/soccerinplaymarkets.vue' /* webpackChunkName: "pages/home/account/soccerinplaymarkets" */))
const _be109030 = () => interopDefault(import('../pages/home/account/soccerliverate.vue' /* webpackChunkName: "pages/home/account/soccerliverate" */))
const _6eb5626a = () => interopDefault(import('../pages/home/account/soccermarkets.vue' /* webpackChunkName: "pages/home/account/soccermarkets" */))
const _5a35d608 = () => interopDefault(import('../pages/home/account/soccerrate.vue' /* webpackChunkName: "pages/home/account/soccerrate" */))
const _0b6b24ef = () => interopDefault(import('../pages/home/account/soccerratelimit.vue' /* webpackChunkName: "pages/home/account/soccerratelimit" */))
const _41de1a85 = () => interopDefault(import('../pages/home/account/Users.vue' /* webpackChunkName: "pages/home/account/Users" */))
const _08972460 = () => interopDefault(import('../pages/home/account/users/_id.vue' /* webpackChunkName: "pages/home/account/users/_id" */))
const _5a99d202 = () => interopDefault(import('../pages/home/basketfixture.vue' /* webpackChunkName: "pages/home/basketfixture" */))
const _286809f0 = () => interopDefault(import('../pages/home/basketinplay.vue' /* webpackChunkName: "pages/home/basketinplay" */))
const _4fd3767f = () => interopDefault(import('../pages/home/soccerfixture.vue' /* webpackChunkName: "pages/home/soccerfixture" */))
const _515961d3 = () => interopDefault(import('../pages/home/soccerinplay.vue' /* webpackChunkName: "pages/home/soccerinplay" */))
const _61e7ebfe = () => interopDefault(import('../pages/resetpass.vue' /* webpackChunkName: "pages/resetpass" */))
const _9550be7a = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _f399571a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3b6b08ce,
    name: "home",
    children: [{
      path: "account",
      component: _ef8b0a28,
      children: [{
        path: "",
        component: _f5fbbf22,
        name: "home-account"
      }, {
        path: "basketinplaymarkets",
        component: _827940d6,
        name: "home-account-basketinplaymarkets"
      }, {
        path: "basketliverate",
        component: _22066676,
        name: "home-account-basketliverate"
      }, {
        path: "basketmarkets",
        component: _5928ab64,
        name: "home-account-basketmarkets"
      }, {
        path: "basketrate",
        component: _12c92059,
        name: "home-account-basketrate"
      }, {
        path: "basketratelimit",
        component: _7e08abb2,
        name: "home-account-basketratelimit"
      }, {
        path: "boss",
        component: _b4dfc640,
        name: "home-account-boss"
      }, {
        path: "branch",
        component: _4200f9d5,
        name: "home-account-branch"
      }, {
        path: "codelist",
        component: _0674dcfe,
        name: "home-account-codelist"
      }, {
        path: "creditlog",
        component: _7c357b70,
        name: "home-account-creditlog"
      }, {
        path: "detailsaccount",
        component: _52cfc65e,
        name: "home-account-detailsaccount"
      }, {
        path: "detailscomission",
        component: _35da8c11,
        name: "home-account-detailscomission"
      }, {
        path: "gamelog",
        component: _35e73722,
        name: "home-account-gamelog"
      }, {
        path: "generalset",
        component: _29200d2d,
        name: "home-account-generalset"
      }, {
        path: "info",
        component: _316abda1,
        name: "home-account-info"
      }, {
        path: "loginlog",
        component: _3ee797a4,
        name: "home-account-loginlog"
      }, {
        path: "nextgoals",
        component: _74c8c04a,
        name: "home-account-nextgoals"
      }, {
        path: "paycupons",
        component: _0aa6d58a,
        name: "home-account-paycupons"
      }, {
        path: "profile",
        component: _4673d086,
        name: "home-account-profile"
      }, {
        path: "register",
        component: _482d40d4,
        name: "home-account-register"
      }, {
        path: "setlimit",
        component: _e4097ae8,
        name: "home-account-setlimit"
      }, {
        path: "settime",
        component: _32c2a20c,
        name: "home-account-settime"
      }, {
        path: "singelbets",
        component: _7e8ebbaa,
        name: "home-account-singelbets"
      }, {
        path: "soccerinplaymarkets",
        component: _779cf252,
        name: "home-account-soccerinplaymarkets"
      }, {
        path: "soccerliverate",
        component: _be109030,
        name: "home-account-soccerliverate"
      }, {
        path: "soccermarkets",
        component: _6eb5626a,
        name: "home-account-soccermarkets"
      }, {
        path: "soccerrate",
        component: _5a35d608,
        name: "home-account-soccerrate"
      }, {
        path: "soccerratelimit",
        component: _0b6b24ef,
        name: "home-account-soccerratelimit"
      }, {
        path: "Users",
        component: _41de1a85,
        name: "home-account-Users"
      }, {
        path: "users/:id?",
        component: _08972460,
        name: "home-account-users-id"
      }]
    }, {
      path: "basketfixture",
      component: _5a99d202,
      name: "home-basketfixture"
    }, {
      path: "basketinplay",
      component: _286809f0,
      name: "home-basketinplay"
    }, {
      path: "soccerfixture",
      component: _4fd3767f,
      name: "home-soccerfixture"
    }, {
      path: "soccerinplay",
      component: _515961d3,
      name: "home-soccerinplay"
    }]
  }, {
    path: "/resetpass",
    component: _61e7ebfe,
    name: "resetpass"
  }, {
    path: "/welcome",
    component: _9550be7a,
    name: "welcome"
  }, {
    path: "/",
    component: _f399571a,
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
