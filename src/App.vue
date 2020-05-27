<template>
  <div id="app">
    <div>
      <NavigationBar></NavigationBar>
      <TabsContainer></TabsContainer>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import TabsContainer from './components/TabsContainer.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    TabsContainer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>
