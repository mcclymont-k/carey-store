import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const state = {
  cart: []
}

const actions = {
  ADD_ITEM_TO_CART ({ commit }, item ) {
    commit('ADD_NEW_ITEM_TO_CART', item)
  },

  REMOVE_ITEM_FROM_CART ({ commit }, item ) {
    commit('REMOVE_ITEM', item)
  }

}

const mutations = {

  ADD_NEW_ITEM_TO_CART: (state, newItem) => {
    let newItemData = newItem[1].item_variation_data
    let match = false

    state.cart.forEach((cartItem) => {
      if (cartItem.itemId == newItemData.item_id) {
        cartItem.itemQuantity +=1
        match = true
      }

    })

    if (!match) {
      state.cart.push({
        itemId: newItemData.item_id,
        itemImg: newItem[0].item_data.image_url,
        itemName: newItem[0].item_data.name,
        itemVariationName: newItemData.name,
        itemPrice: newItemData.price_money.amount,
        itemQuantity: 1
      })
    }
  },

  REMOVE_ITEM: (state, itemToRemove) => {
    state.cart.forEach((cartItem, index) => {
      if (itemToRemove.itemId == cartItem.itemId) {
        cartItem.itemQuantity -=1
      }

      if (cartItem.itemQuantity == 0) {
        state.cart.splice(index, 1)
      }
    })
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
