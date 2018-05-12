<template>
  <div id="product-categories">
    <div class='category-wrapper'>
      <div>
        <router-link to='/product_categories/view_all' exact>View Collection</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductList from './ProductList'

export default {
  name: 'ProductCategories',
  components: { ProductList },
  computed: mapGetters({categories: 'productCategories'}),

  beforeCreate () {
    this.$store.dispatch('LOAD_PRODUCT_CATEGORIES')
  }

}
</script>
