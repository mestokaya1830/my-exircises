import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/form",
    name: "Form",
    component:() => import("../views/FormView.vue")
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component:() => import("../views/CheckboxView.vue")
  },
  {
    path: "/radio",
    name: "Radio",
    component:() => import("../views/RadioView.vue")
  },
  {
    path: "/select",
    name: "Select",
    component:() => import("../views/SelectView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;