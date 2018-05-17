<template>
  <div id="home">
      <img src='../assets/SelfPortrait-01.png' />
      <div>
        <h1>Carey Dueweke</h1>
        <p>Creativity ...by Design</p>
      </div>
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

  mounted () {
    this.show = true
  }
}
</script>
