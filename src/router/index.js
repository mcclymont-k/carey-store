import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Events from '@/components/Events'
import Home from '@/components/Home'
import ProductCategories from '@/components/ProductCategories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/product_categories/:id',
      name: 'ProductCategories',
      component: ProductCategories
    }
  ]
})
