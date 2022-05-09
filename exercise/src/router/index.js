import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  },
  {
    path: '/demo-home',
    component: ()=>import('../App/pra')
  },
  {
    path:'/practise',
    component: ()=>import('../views/practise.vue')
  },
  {
    path:'/veeValidate',
    component: ()=>import('../views/veeValidate.vue')
  },
  {
    path:'/composition',
    component: ()=>import('../views/composition.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
