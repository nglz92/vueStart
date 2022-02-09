<template>
  <div class="w-full relative h-full">
    <ThreeRing />
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <ThreeHeader />
    </div>
  </div>
</template>

<script>
import ThreeHeader from "./ThreeHeader.vue";
import ThreeRing from "./ThreeRing.vue";

export default {
  components: {
    ThreeHeader,
    ThreeRing,
  },
};
</script>
