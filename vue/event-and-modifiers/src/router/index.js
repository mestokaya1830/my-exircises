import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clickevents",
    name:'ClickEvents',
    component: () => import('../views/ClickEvents.vue')
  },
  {
    path: "/keyevents",
    name:'KeyEvents',
    component: () => import('../views/KeyEvents.vue')
  },
  {
    path: "/mouseevents",
    name:'MouseEvents',
    component: () => import('../views/MouseEvents.vue')
  },
  {
    path: "/inputevents",
    name:'InputEvents',
    component: () => import('../views/InputEvents.vue')
  },
  {
    path: "/eventmodifiers",
    name:'EventModifiers',
    component: () => import('../views/EventModifiers.vue')
  },
  {
    path: "/:catchAll(.*)",
    name:'NotFound',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;