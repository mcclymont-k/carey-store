import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let usersAPI = 'http://localhost:5000/products'
let categoryAPI = 'http://localhost:5000/categoryList'

const state = {
  contactModalOpen: false,
  products: [],
  productCategories: []
}

const actions = {
  LOAD_PRODUCTS ({ commit }) {
    axios.get(usersAPI).then((response) => {
      commit('SET_PRODUCTS', { products: response.data })
    }, (err) => {
      console.log(err)
    })
  },

  LOAD_PRODUCT_CATEGORIES ({ commit }) {
    axios.get(categoryAPI).then((response) => {
      commit('SET_PRODUCT_CATEGORIES', { productCategories: response.data })
    }, (err) => {
      console.log(err)
    })
  }
}

const mutations = {
  OPEN_CONTACT_MODAL: (state) => {
    state.contactModalOpen = true
  },

  CLOSE_CONTACT_MODAL: (state) => {
    state.contactModalOpen = false
  },

  SET_PRODUCTS: (state, { products }) => {
    state.products = products
  },

  SET_PRODUCT_CATEGORIES: (state, { productCategories }) => {
    state.productCategories = productCategories
  }

}

const getters = {
  contactModalOpen: state => state.contactModalOpen,
  products: state => state.products,
  productCategories: state => state.productCategories
}

export default {
  state,
  getters,
  actions,
  mutations
}
