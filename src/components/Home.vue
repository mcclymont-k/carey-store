<template>
  <div id="home">
    <transition name='fade'>
      <img v-if="show" src='../assets/SelfPortrait-01.png' />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
