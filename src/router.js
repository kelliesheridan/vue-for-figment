import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('./views/Vuex.vue')
    },
    {
      path: '/route',
      name: 'route',
      component: () => import('./views/Route.vue')
    }
  ]
})
