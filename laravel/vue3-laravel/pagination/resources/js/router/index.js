import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/home.vue";
import Products from "../views/Products.vue";
import ProductDetails from "../views/products/_id.vue";
import NotFound from "../views/notfound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
