<template>
  <div id="home">
      <img src='../assets/SelfPortrait-01.png' />
      <h1>Carey Dueweke</h1>
      <p>Creativity ...by Design</p>
      <button style='background-color: orange; position: absolute; top: 0; right: 0; border: none' v-on:click='goToCheckout()'>to checkout</button>
      <div>
        <router-link to='/product_categories' exact>View Collection</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      show: false
    }
  },

  methods: {
    goToCheckout() {
      window.location.href = window.location.href + 'checkout'
    }
  },

  mounted () {
    this.show = true
  }
}
</script>
