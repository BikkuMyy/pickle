<template>
  <div id="app">
    <div>
      <NavigationBar></NavigationBar>
    </div>
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
</style>
