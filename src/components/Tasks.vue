<template>
  <div>
    <div>
      <h1>Tasks</h1>
    </div>
    <div>
      <CardContainer />
    </div>
  </div>
</template>

<script>
import CardContainer from "./CardContainer";

export default {
  name: "Tasks",
  components: {
    CardContainer
  }
};
</script>