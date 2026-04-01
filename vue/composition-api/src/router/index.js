import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/index.vue";
import Admin from "../views/admin.vue";

const routes = [
  { 
    path: "/",
    name: 'home',
    component: Home
  },
  { 
    path: "/admin",
    name: 'admin',
    component: Admin },
  { 
    path: "/props",
    name: 'props',
    component: () => import("../views/props.vue")
   },
  { 
    path: "/reactive",
    name: 'reactive',
    component: () => import("../views/reactive.vue")
   },
  { 
    path: "/computed",
    name: 'computed',
    component: () => import("../views/computed.vue")
   },
  { 
    path: "/form",
    name: 'form',
    component: () => import("../views/form.vue")
   },
  { 
    path: "/state",
    name: 'state',
    component: () => import("../views/state.vue")
   },
  { 
    path: "/fetch",
    name: 'fetch',
    component: () => import("../views/fetch.vue")
   },
  { 
    path: "/:catchAll(.*)",
    name: 'notfound',
    component: () => import("../views/notfound.vue")
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

export default router;
