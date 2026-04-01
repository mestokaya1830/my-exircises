import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('../views/notfound.vue')
    }
  ]
})

export default router
