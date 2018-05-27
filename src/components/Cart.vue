<template>
  <div id="cart" class="main">
      <div  v-if="cart.length > 0">
        <h1>Cart</h1>
        <table>
          <tr v-for="cartItem in cart">
            <td><img :src="cartItem.itemImg"/></td>
            <td>{{ cartItem.itemName }}</td>
            <td class="item_price">${{ cartItem.itemPrice }}</td>
            <td class="item_quantity">{{ cartItem.itemQuantity}}</td>
            <td><i v-on:click="handleRemoveItem(cartItem)" class="fas fa-minus-circle"></i></td>
          </tr>
        </table>
          <h3> Subtotal: ${{ cartSubtotal }}</h3>
          <p>(Shipping + taxes calculated at checkout)</p>
          <button v-on:click="handleCheckout()">I'm ready to checkout!</button>
      </div>
      <div v-else>
        <h2>You haven't added anything to your cart yet!</h2>
        <div class="link-wrapper">
          <router-link to='/product_categories' exact>View Collection</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Cart',
  computed: {
  ...mapGetters(['cart'])
  },
  data () {
    return {
      cartSubtotal: 0
    }
  },

  beforeCreate () {
    this.$store.dispatch('LOAD_PRODUCTS')
  },

  mounted () {
    this.cartSubtotal = this.calculateSubtotal(this.cart)
  },

  methods: {

    calculateSubtotal(cart) {
      let subtotal = 0
      this.cart.forEach((cartItem) => {
        subtotal += (cartItem.itemPrice * cartItem.itemQuantity)
      })

      return parseInt(subtotal).toFixed(2)
    },

    handleRemoveItem(itemToRemove) {
      this.$store.dispatch('REMOVE_ITEM_FROM_CART', itemToRemove)
      this.cartSubtotal = this.calculateSubtotal(this.cart)
    },

    handleCheckout() {
      // Send to Checkout Form
    }
  }

}
</script>
