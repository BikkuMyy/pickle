<template>
  <div id="tabs">
    <md-tabs md-sync-route class="md-transparent">
      <md-tab id="home" md-label="Home" to="/home">Helloo</md-tab>
      <md-tab id="topics" md-label="Topics" to="/topics">
        <Topics />
      </md-tab>
      <md-tab id="tasks" md-label="Tasks" to="/tasks">
        <Tasks />
      </md-tab>
      <md-tab id="groups" md-label="Groups" to="/groups">
        <Groups />
      </md-tab>
      <md-tab id="upload" md-label="Upload" to="/upload">
        <PictureUpload />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Topics from "./Topics";
import Tasks from "./Tasks";
import Groups from "./Groups";
import PictureUpload from "./PictureUpload";

export default {
  name: "TabsContainer",
  components: {
    Topics,
    Tasks,
    Groups,
    PictureUpload
  }
};
</script>