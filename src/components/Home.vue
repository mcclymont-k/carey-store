<template>
  <div id="home">
    <transition name='fade'>
      <img src='../assets/SelfPortrait-01.png' / />
    </transition>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Home Page'
    }
  }
}
</script>
