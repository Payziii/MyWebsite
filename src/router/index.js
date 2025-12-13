import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/'
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

export default router
