import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home', // name은 unique값
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // , webpackPrefetch: true
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/AboutView.vue')
    // component: AboutView
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
