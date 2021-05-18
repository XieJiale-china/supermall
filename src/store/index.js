import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import modules from './modules.js'

const state = {
  //购物车
  cartList: []
}

export default createStore({
  state,
  mutations,
  actions,
  modules
})
