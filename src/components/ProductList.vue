<template>
  <div id="product-list">
    <div id='sidebar'>
      <ul>
        <li><a v-on:click="filterProducts()">View All</a></li>
        <li v-for="category in productCategories">
          <a v-on:click="filterProducts(category.id)">
            {{ category.category_data.name }}
          </a>
        </li>
      </ul>
    </div>
    <transition name='fade'>
      <div class='product-list-wrapper' v-if="show">
        <div class='product-box' v-for="product in filteredProducts">
          <img :src="product.item_data.image_url" />
          <h3>{{ product.item_data.name }}</h3>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ProductList',
  computed: {
  ...mapGetters(['products', 'productCategories'])
  },

  data () {
    return {
      filteredProducts: {},
      show: false
    }
  },

  beforeCreate () {
    this.$store.dispatch('LOAD_PRODUCTS')
    this.$store.dispatch('LOAD_PRODUCT_CATEGORIES')
  },

  mounted () {
    setTimeout(() => {
      this.filterProducts()
    }, 1500)
  },

  methods: {
    filterProducts(id) {
      let filteredProductList
      this.show = false
      if (id) {
        filteredProductList = this.products.filter(product => {
          return product.item_data.category_id == id
        })
      } else {
        filteredProductList = this.products
      }
      setTimeout(() => {
        this.filteredProducts = filteredProductList
        this.show = true
      }, 1000)
    }
  }
}

</script>
