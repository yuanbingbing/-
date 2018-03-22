import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 创建vuex应用
const store = new Vuex.Store({
  state: {
    login: 0,
    uname: ''
  },
  mutations: {
    changeLogin (state, data) {
      state.login = data
    }
  }
})
// 向外导出
export default store
