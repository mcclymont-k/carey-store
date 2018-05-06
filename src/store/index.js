import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let usersAPI = 'http://localhost:5000/products'

const state = {
  contactModalOpen: false,
  products: []
}

const actions = {
  LOAD_PRODUCTS ({ commit }) {
    axios.get(usersAPI).then((response) => {
      commit('SET_PRODUCTS', { products: response.products })
    }, (err) => {
      console.log(err)
    })
  },
}

const mutations = {
  OPEN_CONTACT_MODAL: (state) => {
    state.contactModalOpen = true
  },

  CLOSE_CONTACT_MODAL: (state) => {
    state.contactModalOpen = false
  },

  SET_PRODUCTS: (state, { products }) => {
    state.products = { products }
  }

}

const getters = {
  contactModalOpen: state => state.contactModalOpen,
  products: state => state.products
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
