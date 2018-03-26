import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
// 引入登录页面
import Login from '@/components/login/login'
// 引入周报首页
import Main from '@/components/main/mian'
// 使用路由
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'login', component: Login},
        {path: 'main', component: Main},
        {path: '/*', redirect: '/home/login'}
      ]
    },
    { path: '*', redirect: '/home' }
  ]
})
