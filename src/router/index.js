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
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckboxView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: 'databinding', webpackPrefetch: true */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: 'event', webpackPrefetch: true */ '../views/2_event/EventClickView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
