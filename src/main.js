import Vue from 'vue'
import store from '@/chuan/vuex.js'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 引入验证用户是否登录的函数
import {login} from '@/chuan/login'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 调用验证是否登录信息的函数
login(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    logins: store.state.login
  },
  store,
  router,
  render: h => h(App)
})
