<template>
  <div id="product-list">
    <div class='wrapper'>
      <h2>{{ categoryId }}</h2>
      <div v-for="product in products">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  computed: mapGetters({products: 'products'}),

  data () {
    return {
      categoryId: this.$route.params.id
    }
  },

  mounted () {
    this.$store.dispatch('LOAD_PRODUCTS')
    console.log(this.products)
  }
}
</script>
