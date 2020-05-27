<template>
  <div>
    <md-card>
      <md-card-media-cover md-text-scrim>
        <md-card-media>
        <img src="@/assets/arctic.jpg" alt="Arctic" />
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">At the Arctic Sea</span>
          <span class="md-subhead">In March</span>
        </md-card-header>
      </md-card-area>

      </md-card-media-cover>
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
  width: 300px;
  margin: 4px;
}
img {
  max-height: 225px;
}
</style>