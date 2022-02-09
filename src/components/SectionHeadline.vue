<template>
  <div class="w-full relative">
    <div ref="headlineContainer" class="test w-8/12 mx-auto p-24">
      <h2 class="h-full w-full text-9xl mb-6">{{ title }}</h2>
      <h3 v-if="subtitle" class="h-full w-full text-6xl text-center">
        {{ subtitle }}
      </h3>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
  methods: {
    $_getDirection(direction) {
      // declares the direction of the moving Element leftToRight/rightToLeft
      switch (direction) {
        case "leftToRight": {
          direction = "-";
        }
        case "rightToLeft": {
          direction = "+";
        }
      }
      return direction;
    },

    $_AnimateHeadlines() {
      let screenWidth = window.screen.width,
        headlineMarginDistance =
          (screenWidth - this.$refs.headlineContainer.clientWidth) * 0.5,
        masterTimeline = gsap.timeline();

      masterTimeline.add([
        this.$_Animation(
          Array.from(this.$refs.headlineContainer.children)[0],
          headlineMarginDistance,
          "leftToRight",
          1
        ),
        this.$_Animation(
          Array.from(this.$refs.headlineContainer.children)[1],
          headlineMarginDistance,
          "rightToLeft",
          1
        ),
      ]);
    },
    // Element Animation
    $_Animation(element, distance, direction, time, timeline) {
      timeline = gsap.timeline();
      direction = this.$_getDirection(direction);
      timeline
        .from(
          element,
          {
            scrollTrigger: {
              trigger: this.$refs.headlineContainer,
              start: "top center",
              end: "center center",
              markers: true,
              scrub: true,
            },
          },
          {
            scale: 4,
            duration: time,
          }
        )
        .to(element, {
          scale: 1,
          duration: time,
        });
      return timeline;
    },
  },
  mounted() {
    this.$_AnimateHeadlines();
  },
};
</script>
