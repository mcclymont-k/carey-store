<template>
  <div id="contact-modal">
    {{ msg }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContactModal',
  data () {
    return {
      msg: 'Welcome to Your Contact Page'
    }
  },
  computed: mapState(['contactModalOpen']),

  methods: {
    handleClose () {
      this.$store.dispatch('CLOSE_CONTACT_MODAL')
    }
  }
}
</script>
