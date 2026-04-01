import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name:'RegisterView',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: "/login",
    name:'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: "/users",
    name:'UsersView',
    component: () => import('../views/UsersView.vue')
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
