<template>
  <div id="app">
    <b-container>
      <b-nav>
        <b-nav-item :to="{name: 'todos'}">Listado de TODOS</b-nav-item>
        <b-nav-item :to="{name: 'todos-create'}">Crear TODO</b-nav-item>
      </b-nav>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>