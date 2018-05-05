<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',
  created() {
    axios.get('http://localhost:5000/products')
      .then(response => console.log(response))
      }
}
</script>
