import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let usersAPI = ''
let categoryAPI = ''

// Determines if the app is runniny locally or not
if (window.location.hostname == 'localhost') {
  usersAPI = 'http://localhost:5000/items'
  categoryAPI = 'http://localhost:5000/categoryList'
} else {
  usersAPI = 'https://carey-store.herokuapp.com/items'
  categoryAPI = 'https://carey-store.herokuapp.com/categoryList'
}


const state = {
  contactModalOpen: false,
  products: [],
  productCategories: []
}

const actions = {
  OPEN_CONTACT_MODAL_POPUP ({ commit }) {
    commit('OPEN_CONTACT_MODAL')
  },

  CLOSE_CONTACT_MODAL_POPUP ({ commit }) {
    commit('CLOSE_CONTACT_MODAL')
  },

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
