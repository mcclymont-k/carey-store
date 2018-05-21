<template>
    <div id="product-list" class="main">
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
            <a v-on:click="openProductModal(product.id)">{{ product.item_data.name }}</a>
          </div>
        </div>
      </transition>

    <div id="product-modal" v-if="showProductModal && productModalProduct">
      <div class="selected-product-box">
        <i class="fas fa-times" v-on:click="closeProductModal()"></i>
        <img :src="productModalProduct.item_data.image_url" />
        <h1>{{ productModalProduct.item_data.name }}</h1>
        <h3>{{ productModalProduct.item_data.description}}</h3>
          <table>
            <tr v-for="variation in productModalProduct.item_data.variations">
              <td>{{ variation.item_variation_data.name }} </td>
              <td>${{variation.item_variation_data.price_money.amount}}</td>
              <td><button v-on:click="addItemToCart(variation)">I'll take it!</button></td>
            </tr>
          </table>
        <p>{{ message }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ProductList',
  computed: {
  ...mapGetters(['products', 'productCategories', 'cart'])
  },

  data () {
    return {
      filteredProducts: {},
      show: false,
      showProductModal: false,
      productModalProduct: null,
      message: ""
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
    },

    setProductModalProduct(id) {
      let selectedProduct = this.products.find(product => product.id == id)
      return selectedProduct
    },

    openProductModal(id) {
      this.productModalProduct = this.setProductModalProduct(id)
      this.showProductModal = true
    },

    closeProductModal() {
      this.productModalProduct = null
      this.showProductModal = false
      this.message = ""
    },

    addItemToCart(itemVariation) {
      let item = this.productModalProduct
      let itemArray = [item, itemVariation]
      this.$store.dispatch('ADD_ITEM_TO_CART', itemArray)
      this.message = "This item has been added to your cart! Yay!"
    }

  }
}

</script>
