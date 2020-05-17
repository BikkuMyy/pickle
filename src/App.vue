<template>
  <div id="app">
    <div>
      <NavigationBar></NavigationBar>
    </div>
    <div>
      <CardContainer></CardContainer>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import CardContainer from './components/CardContainer.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    CardContainer
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
