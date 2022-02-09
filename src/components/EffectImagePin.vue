<template>
  <div ref="startTrigger" class="w-full h-full relative flex-col">
    <div ref="image" class="w-full h-auto overflow-clip p-4">
      <video width="100%" height="100%" autoplay="true" muted loop="loop" class="w-full h-auto hover:scale-150 duration-100 hover:rotate-6">
         <source src="/src/assets/video/pexels-сергей-6806905.mp4" type='video/webm; codecs="vp8, vorbis"'>
         <source src="/src/assets/video/pexels-сергей-6806905.webm" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' > 
      </video>
    </div>
    <div class="h-24"></div>
    <div ref="endTrigger" class="absolute bottom-0 left-0 h-0"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ImageScroller",
  components: {},
  props: ["direction", "ImageUrl"],
  methods: {
    scrollTriggerAnimation() {
      if (this.$props.direction == "down") {
        gsap.to(this.$refs.image, {
          scrollTrigger: {
            trigger: this.$refs.startTrigger,
            start: "top center",
            end: "bottom center",
            markers: false,
            scrub: true,
            pin: true,
          },
          ease: "none",
        });
      }


      if (this.$props.direction == "up") {
        console.log(
          this.$refs.startTrigger.offsetHeight - this.$refs.image.offsetHeight
        );
        gsap
          .timeline()
          .from(this.$refs.image, {
            scrollTrigger: {
              trigger: this.$refs.startTrigger,
              start: "top center",
              end: "center center",
              markers: false,
            },
            y:
              this.$refs.startTrigger.offsetHeight +
              this.$refs.image.offsetHeight,
            ease: "none",
          })
          .to(this.$refs.image, {
            y: 0,
          });
      }
    },
  },
  mounted() {
    this.scrollTriggerAnimation();
  },
};
</script>
