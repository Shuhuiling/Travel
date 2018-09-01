import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

// 导出vuex创建的仓库
export default new Vuex.Store({
  state,
  mutations,
  getters: {
  	doubleCity (state) {
  	  return state.city + ' ' + state.city
  	}
  }
})
