<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import router from './router'
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: {Nav},
  created() {
    axios.get('http://localhost:5000/products')
      .then(response => console.log(response))
      }
}
</script>

<style lang="css">
   @import './styles/stylus/index.css'
</style>
