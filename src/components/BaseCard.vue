<template>
  <div>
    <md-card>
      <md-card-media>
        <img src="@/assets/arctic.jpg" alt="Arctic" />
      </md-card-media>
      <md-card-content>
        <md-card-header>
          <span class="md-title">At the Arctic Sea</span>
        </md-card-header>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "BaseCard"
};
</script>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
}
img {
  max-height: 225px;
}
</style>