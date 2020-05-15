<template>
  <div id="app">
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'



export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
