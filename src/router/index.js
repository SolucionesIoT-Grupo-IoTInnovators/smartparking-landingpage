import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/main.view.vue'),

    },
    {
      path: '/owners',
      name: 'owners',
      component: () => import('../views/parking.view.vue'),
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('../views/drivers.view.vue'),
    },
    {
      path: '/about-us',
      name: 'about us',
      component: () => import('../views/about.us.view.vue'),
    },
    {
      path: '/about-product',
      name: 'about product',
      component: () => import('../views/about.product.view.vue'),
    }
  ],
})

export default router
