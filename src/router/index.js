import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
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
          path: 'products',
          component: () => import('../views/frontPages/ProductsView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/frontPages/AboutUsView.vue')
        },
        {
          path: 'collect',
          component: () => import('../views/frontPages/CollectView.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/frontPages/CartView.vue')
        },
        {
          path: 'cart/:id',
          name: 'pay',
          component: () => import('../views/frontPages/PayView.vue')
        },
        {
          path: 'order/:id',
          name: 'confirmPay',
          component: () => import('../views/frontPages/ConfirmPay.vue'),
        },
        {
          path: 'products/:id',
          component: () => import('../views/frontPages/ProductView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/frontPages/LoginView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/frontPages/NotFoundView.vue'),
        },
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/BackLayout.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/backPages/AdminProductsView.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/backPages/AdminCouponView.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/backPages/AdminOrderView.vue')
        }
      ]
    }
  ],
  scrollBehavior () {
    return { top: 0, behavior: "smooth" };
  }
})

export default router
