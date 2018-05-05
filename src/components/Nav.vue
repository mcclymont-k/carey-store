<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="about" exact>About</router-link>
      </li>
      <li>
        <router-link to="events" exact>Events</router-link>
      </li>
      <li>
        <a v-on:click="handleClick()">Contact</a>
      </li>
    </ul>
    <ul class='right'>
      <li>
        <i class="fas fa-shopping-cart"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import ContactModal from '@/components/ContactModal'
import router from '../router'

export default {
  name: 'Nav',
  computed: mapState([
    'contactModalOpen'
  ]),

  components: { ContactModal },

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
