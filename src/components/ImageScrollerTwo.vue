<template>
  <div ref="startTrigger" class="w-full h-full relative flex-col">
    <div ref="image" class="w-full h-auto overflow-clip p-4">
      <img
        class="w-full h-auto hover:scale-110 duration-100 hover:rotate-6"
        src="https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
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
        gsap.timeline().to(this.$refs.image, {
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
