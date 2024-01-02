import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('../views/LogAnswers.vue')
    },
    {
        path: '/log/:slugName',
        name: 'showcontent',
        component: () => import('../views/ShowContent.vue')
    },
    {
      path: "/:notFound",
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
