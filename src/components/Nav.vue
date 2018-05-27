<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
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
        <router-link :to="{ name: 'Cart' }"><i class="fas fa-shopping-cart"></i></router-link>
        <button style='display: none; background-color: orange; position: absolute; top: 0; right: 0; border: none' v-on:click='goToCheckout()'>to checkout</button>
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
    },
    goToCheckout() {
      window.location.href = window.location.href + 'checkout'
    }
  }
}
</script>
