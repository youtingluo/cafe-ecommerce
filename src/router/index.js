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
          path: '/about',
          component: () => import('../views/frontPages/AboutView.vue')
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
