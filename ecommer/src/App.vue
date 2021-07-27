<template>
  <div id="app">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductsList'

export default {
  name: 'App',
  components: {
    ProductList
  }
}
</script>
