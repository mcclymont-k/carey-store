<template>
  <div id="product-list">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'ProductModal',
  data () {
    return {
      msg: 'Here are the products by category'
    }
  }
}
</script>
