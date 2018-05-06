<template>
  <div id="home">
    <transition name='fade'>
      <img v-if="show" src='../assets/SelfPortrait-01.png' />
    </transition>
    <ProductCategories />
  </div>
</template>

<script>
import ProductCategories from './ProductCategories'
export default {
  name: 'Home',
  components: { ProductCategories },
  data () {
    return {
      show: false,
      msg: 'Welcome to Your Home Page'
    }
  },

  mounted () {
    this.show = true
  }
}
</script>
