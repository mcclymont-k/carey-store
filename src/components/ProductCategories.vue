<template>
  <div id="product-categories">
    <div class='wrapper'>
      {{ categories }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductCategories',
  computed: mapState(['productCategories']),

  data () {
    return {
      msg: 'Here are the categories',
      categories: []
    }
  },

  mounted () {
    this.$store.dispatch('LOAD_PRODUCT_CATEGORIES')
    console.log(this.$store.state.squareUp)
  }
}
</script>
