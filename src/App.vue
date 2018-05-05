<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  created() {
    axios.get('http://localhost:5000/products')
      .then(response => console.log(response))
      }
}
</script>
