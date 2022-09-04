import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/Booking.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue')
  },
  {
    path: '/booking/:pathMatch(.*)*',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
