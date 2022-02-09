<template>
  <div class="w-full">
    <div class="w-11/12 mx-auto">
      <div class="text-container w-3/6 mx-auto pt-32 pb-8">
        <h2 class="text-white text-6xl text-center">
          Schmuckstücke Kollektion
        </h2>
      </div>
      <div>
        <RingButton />
      </div>
    </div>
  </div>
</template>

<script>
import RingButton from "./RingButton.vue";
export default {
  components: {
    RingButton,
  },
};
</script>
