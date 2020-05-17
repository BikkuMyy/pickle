<template>
  <div>
    <div class="md-layout md-aligment-center">
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