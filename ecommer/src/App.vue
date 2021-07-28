<template>
  <div id="app">
    <layout>
      <template slot="products">
          <product-list></product-list>
      </template>
      <template slot="cart">
          <cart></cart>
      </template>
    </layout>
  </div>
</template>

<script>
import Layout from '@/layouts/Layout'
import ProductList from '@/components/ProductsList'
import Cart from '@/components/Cart'

export default {
  name: 'App',
  components: {
    Layout, ProductList, Cart
  }
}
</script>
