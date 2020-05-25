<template>
  <div>
    <div>
      <h1>Topics</h1>
    </div>
    <div>
      <CardContainer />
    </div>
  </div>
</template>

<script>
import CardContainer from "./CardContainer";

export default {
  name: "Topics",
  components: {
    CardContainer
  }
};
</script>