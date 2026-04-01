import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('../views/AxiosView.vue')
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: () => import('../views/FetchView.vue')
  },
  {
    path: '/local',
    name: 'local',
    component: () => import('../views/LocalView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
