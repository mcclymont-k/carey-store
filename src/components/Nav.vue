<template>
  <nav id="navbar">
    <img src='../assets/cd_2017_WebClipIcon.png' />
    <ul>
      <li>
        <router-link :to="/about">{{ route.name }}</router-link>
      </li>
      <li>
        <router-link :to="/events">{{ route.name }}</router-link>
      </li>
      <li>
        <a v-on:click="handleClick()">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import ContactModal from '@/components/ContactModal'

export default {
  name: 'Navbar',
  components: { ContactModal },
  data () {
    return {
      msg: "Welcome to the nav!"
    }
  },

  computed: {
    ...mapState('contactModalOpen')
  },

  methods: {
    handleClick () {
      this.$store.dispatch('OPEN_CONTACT_MODAL')
    },
    handleClose () {
      this.$store.dispatch('CLOSE_CONTACT_MODAL')
    }
  }
}
</script>
