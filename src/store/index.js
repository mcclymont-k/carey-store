import Vue from 'vue'
import Vuex from 'vuex'
import shoppingCart from './modules/shoppingCart'
import squareUp from './modules/squareUp'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // shoppingCart,
    squareUp
  }
})

export default store
