import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/frontPages/HomeView.vue')
        },
        {
          path: '/products',
          component: () => import('../views/frontPages/ProductsView.vue')
        },
        {
          path: '/collect',
          component: () => import('../views/frontPages/CollectView.vue')
        },
        {
          path: '/cart',
          component: () => import('../views/frontPages/CartView.vue')
        },
        {
          path: '/pay',
          component: () => import('../views/frontPages/PayView.vue')
        },
        {
          path: '/products/:id',
          component: () => import('../views/frontPages/ProductView.vue')
        }
      ]
    },
    
  ]
})

export default router
