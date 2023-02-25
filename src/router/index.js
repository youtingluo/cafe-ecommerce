import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    
  ]
})

export default router
