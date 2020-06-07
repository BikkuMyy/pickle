<template>
  <div id="tabs">
    <md-tabs md-sync-route class="md-transparent">
      <md-tab id="home" md-label="Home" to="/home">Helloo</md-tab>
      <md-tab id="topics" md-label="Topics" to="/topics">
        <TopicContainer />
      </md-tab>
      <md-tab id="tasks" md-label="Tasks" to="/tasks">
        <TaskContainer />
      </md-tab>
      <md-tab id="groups" md-label="Groups" to="/groups">
        <GroupContainer />
      </md-tab>
      <md-tab id="upload" md-label="Upload" to="/upload">
        <PictureUpload />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import TopicContainer from "./TopicContainer";
import TaskContainer from "./TaskContainer";
import GroupContainer from "./GroupContainer";
import PictureUpload from "./PictureUpload";

export default {
  name: "TabsContainer",
  components: {
    TopicContainer,
    TaskContainer,
    GroupContainer,
    PictureUpload
  }
};
</script>