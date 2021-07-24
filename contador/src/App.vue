<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>{{ message }}</h2>
    <div class="container">
      <div class="row">
        <div class="col col-6">
          <counter></counter>
        </div>
        <div class="col col-6">
          <result></result>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import result from '@/components/showResult'
export default {
  name: 'App',
  data(){
    return {
      message: "Hola mundo"
    }
  },
  components: {
    Counter, result
  }
}
</script>