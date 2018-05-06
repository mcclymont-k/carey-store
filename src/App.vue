<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import router from './router'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: {Nav, Footer}
}
</script>

<style lang="css">
   @import './styles/stylus/index.css'
</style>
