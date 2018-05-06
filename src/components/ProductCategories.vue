<template>
  <div id="product-categories">
    <div class='wrapper'>
      <div v-for="category in categories">
          <router-link :to="{ name: 'ProductList', params: { id: category.id }}">
            {{ category.category_data.name }}
          </router-link>
      </div>
      <div>
        <router-link to='/product_categories/view_all'>View All</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductCategories',
  computed: mapGetters({categories: 'productCategories'}),

  mounted () {
    this.$store.dispatch('LOAD_PRODUCT_CATEGORIES')
    console.log(this.categories)
  }
}
</script>
