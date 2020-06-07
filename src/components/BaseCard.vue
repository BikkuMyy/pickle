<template>
  <div>
    <md-card md-with-hover>
      <md-card-media-cover md-text-scrim>
        <md-card-media>
          <img :src="require(`@/assets/${img}`)" alt="Arctic" />
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ title }}</span>
            <span class="md-subhead">{{ subhead }}</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: ["type", "img", "title", "subhead"]
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