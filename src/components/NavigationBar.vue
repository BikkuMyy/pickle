<template>
  <div>
    <md-toolbar class="md-large">
      <div class="md-toolbar-row">
        <h3 class="md-title">PICKLE</h3>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
      </div>
      <div class="md-toolbar-row">
        <md-tabs md-sync-route class="md-transparent" md-alignment="centered">
          <md-tab id="home" md-label="Home" to="/home">
          Helloo
          </md-tab>
          <md-tab id="topics" md-label="Topics" to="/topics"><Topics/></md-tab>
          <md-tab id="tasks" md-label="Tasks" to="/tasks"><Tasks/></md-tab>
          <md-tab id="groups" md-label="Groups" to="/groups"><Groups/></md-tab>
        </md-tabs>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
import Topics from './Topics'
import Tasks from './Tasks'
import Groups from './Groups'

export default {
  name: "NavigationBar",
  components: {
    Topics,
    Tasks,
    Groups
  }
};
</script>