import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let usersAPI = 'http://localhost:5000/items'
let categoryAPI = 'http://localhost:5000/categoryList'

const state = {
  cart: []
}

const actions = {
  ADD_ITEM_TO_CART ({ commit }, item ) {
    commit('ADD_NEW_ITEM_TO_CART', item)
  }

}

const mutations = {
  ADD_NEW_ITEM_TO_CART: (state, item) => {
    state.cart.push(item)
  }
}

const getters = {
  cart: state => state.cart
}

export default {
  state,
  getters,
  actions,
  mutations
}
