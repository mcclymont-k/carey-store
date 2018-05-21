<template>
  <div id="cart" class="main">
      <div>
        <h1>Cart</h1>
      </div>
      <table v-if="shoppingCart.length > 0">
        <tr v-for="item in shoppingCart">
          <td>{{ item[0].item_data.name }}</td>
          <td>{{ item[1].item_variation_data.price }}</td>
        </tr>
      </table>
      <h2 v-else>You haven't added anything to your cart yet!</h2>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Cart',
  computed: {
  ...mapGetters(['products', 'cart'])
  },
  data () {
    return {
      shoppingCart: []
    }
  },

  beforeCreate () {
    this.$store.dispatch('LOAD_PRODUCTS')
  },

  mounted () {
    this.shoppingCart = this.setShoppingCart()
  },

  methods: {

    setShoppingCart() {
      let shoppingCartList
      shoppingCartList = this.cart
      return shoppingCartList
    }
  }

}
</script>
