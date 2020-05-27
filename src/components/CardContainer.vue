<template>
  <div>
    <div class="md-layout">
      <BaseCard></BaseCard>
      <BaseCard></BaseCard>
      <BaseCard></BaseCard>
      <BaseCard></BaseCard>
      <BaseCard></BaseCard>
      <BaseCard></BaseCard>
    </div>
  </div>
</template>

<script>
import BaseCard from "./BaseCard";

export default {
  name: "CardContainer",
  components: {
    BaseCard
  }
};
</script>