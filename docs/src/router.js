import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/utilities/',
      name: 'utilities-index',
      component: () =>
        import(
          /* webpackChunkName: "utilities" */ '@/views/utilities/index/index.vue'
        ),
    },
    {
      path: '/utilities/:name',
      name: 'utilities-show',
      component: () =>
        import(
          /* webpackChunkName: "utilities" */ '@/views/utilities/show/show.vue'
        ),
    },
    {
      path: '/*',
      name: '404',
      component: PageNotFound,
    },
  ],
})
