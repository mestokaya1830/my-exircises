import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/json-csv',
      name: 'json-csv',
      component: () => import('@/views/Json-Csv.vue')
    },
    {
      path: '/json-excel',
      name: 'json-excel',
      component: () => import('@/views/Json-Excel.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue')
    }
   
  ]
})

export default router
