<template>
  <div ref="headlineContainer" class="w-full h-20vh my-20 relative scale-150 ">
    <div class="text-center w-8/12 mx-auto">
      <h2 class="h-full w-full text-8xl mb-6">{{ title }}</h2>
      <h3 v-if="subtitle" class="h-full w-8/12 mx-auto text-3xl">
        {{ subtitle }}
      </h3>
    </div>
  </div>
</template>

<script>
import {gsap} from "gsap";

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
    // Element Animation
    $_headlineAnimation() {
     var container =this.$refs.headlineContainer;
        gsap.to(container, {
          scrollTrigger: {
            trigger: this.$refs.headlineContainer,
            start: "center center",
            end: "bottom center",
            markers: false,
            scrub: true,
          },
          scale: 1 ,
          ease: "none",
        })
    },
  },
  mounted() {
    this.$_headlineAnimation();
  },
};
</script>
