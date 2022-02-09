<template>
  <div class="w-full relative h-full">
    <ThreeWatchScene />
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <ThreeHeader />
    </div>
  </div>
</template>

<script>
import ThreeHeader from "./ThreeHeader.vue";
import ThreeWatchScene from "./ThreeWatchScene.vue";

export default {
  components: {
    ThreeHeader,
    ThreeWatchScene,
  },
};
</script>
