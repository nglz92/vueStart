<template>
  <div class="h-full w-full relative" @mouseenter="this.$_showImage()" @mouseleave="$_randomPosition()">
    <div ref="movingCol" class="movingCol absolute bottom-0 w-full bg-white" >
      <div class="">
      </div>
    </div>
    <img
      class="w-full h-full object-cover"
      :src="`@/assets/img/${imageUrl}`"
      :alt= imageUrl
    />
  </div>
</template>

<script>
import { gsap, Power2 } from "gsap";
export default {
  name:"LandingCol",
  props:["imageUrl"],
  methods: {
    init() {
      // Sets first position 
      this.$_randomPosition();

    },

    $_showImage() {
      // shows the full image on MouseEnter
      this.$_heightAnimation(1, 1);
    },
    $_randomPosition(){
      this.$_heightAnimation(gsap.utils.random(15, 40, 1), 1);
    },

    $_heightAnimation(height, duration) {
      let timeline = gsap.timeline().to(this.$refs.movingCol, {
        height: height + "%",
        duration: duration,
        ease: Power2.inOut,
      });
      return timeline;
    },

    $_idleAnimation() {
      var animation = gsap.to(this.$refs.movingCol, {
        height: gsap.utils.random(15, 40, 1) + "%",
        duration: gsap.utils.random(2, 4, 1),
        ease: Power2.in,
        repeatRefresh: false,
      });

      return animation;
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style></style>
