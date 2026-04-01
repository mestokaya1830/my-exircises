import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/Events.vue')
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('@/views/Dynamic.vue')
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: () => import('@/views/Lazy.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/views/Slot.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
