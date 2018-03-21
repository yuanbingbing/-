import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
// 引入登录页面
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {path: 'login', component: Login},
        { path: '*', redirect: '/login' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})
