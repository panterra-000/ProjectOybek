import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CreateCreditView from '../views/CreateCreditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:id/',
    name: 'about',
    component: AboutView
  },
  
  {
    path: '/create_credit/:id/',
    name: 'credit',
    component: CreateCreditView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
