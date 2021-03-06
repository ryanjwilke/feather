import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home.vue'
import PageNotFound from '@/views/404/404.vue'

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
