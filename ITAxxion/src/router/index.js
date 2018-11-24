import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require(['../components/HelloWorld.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '/corp',
      name: 'Corp',
      component: resolve => {
        require(['../components/Corp.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
