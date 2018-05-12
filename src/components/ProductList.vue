<template>
  <div id="product-list">
    <div id='sidebar'>
      <ul>
        <li v-for="category in categories">
          {{ category.category_data.name }}
        </li>
      </ul>
    </div>
    <div class='product-list-wrapper'>
      <div class='product-box' v-for="product in products">
          <h3>{{ product.item_data.name }}</h3>
          <img :src="product.item_data.image_url" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  computed: mapGetters({products: 'products', categories: 'productCategories'}),

  data () {
    return {
      categoryId: this.$route.params.id
    }
  },

  beforeCreate () {
    this.$store.dispatch('LOAD_PRODUCTS')
    this.$store.dispatch('LOAD_PRODUCT_CATEGORIES')
  }
}
</script>
