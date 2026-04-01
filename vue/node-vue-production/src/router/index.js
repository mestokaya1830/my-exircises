import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/creditlogs",
    name: "CreditLogs",
    component: () => import('@/views/CreditLogs.vue')
  },
  {
    path: "/gamelogs",
    name: "GameLogs",
    component: () => import('@/views/GameLogs.vue')
  },
  {
    path: "/limitsettings",
    name: "LimitSettings",
    component: () => import('@/views/LimitSettings.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;