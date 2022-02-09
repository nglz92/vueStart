<template>
  <div ref="landingContainer" class="h-screen w-full relative overflow-hidden">
    <div class="absolute w-full h-full left-0 bottom-0">
      <div class="h-screen-1/2 my-auto flex">
        <h1
          class="relative landing-text m-auto w-11/12 h-fit my-auto text-white text-center font-bold z-20 align-middle pointer-events-none"
        >
          Jewelry
        </h1>
      </div>
    </div>
    <div class="w-full h-full flex">
      <div
        class="border-r border-white"
        v-for="(thumbnail, index) in thumbnails"
        :key="index"
      >
        <LandingCol :imageUrl="thumbnail.src" />
      </div>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import LandingCol from "./LandingCol.vue";
import gsap from "gsap";
export default {
  name: "LandingPage",
  components: {
    LandingCol,
  },

  methods: {
    $_scrollAnimation() {
      gsap
        .timeline()
        .add([this.$_fixedHeaderAnimation(), this.$_colHeightAnimation()]);
    },

    $_colHeightAnimation() {
      gsap.utils.toArray(".movingCol").forEach((colum) => {
        gsap.to(colum, {
          scrollTrigger: {
            trigger: this.$refs.landingContainer,
            start: "center center",
            end: "bottom center",
            markers: false,
            scrub: true,
          },
          y: 100 + "%",
          ease: "none",
        });
      });
    },

    $_fixedHeaderAnimation() {
      gsap.to(this.$refs.landingContainer, {
        scrollTrigger: {
          trigger: this.$refs.landingContainer,
          start: "center center",
          end: "bottom center",
          markers: false,
          scrub: true,
          pin: true,
        },
      });
    },
    checkScrolling() {
      console.log(window.pageYOffset);
      console.log(document.documentElement.scrollTop);
      console.log(document.body.scrollTop);
      console.log(window.innerHeight);
    },
  },
  setup() {},
  mounted() {
    this.$refs.landingContainer;
    this.$_scrollAnimation();
  },
  data: function () {
    return {
      thumbnails: [
        { src: "pexels-photo-3641056.jpeg" },
        { src: "pexels-photo-10581426.jpeg" },
        { src: "pexels-photo-5157291.jpeg" },
        { src: "pexels-photo-5681439.jpeg" },
        { src: "pexels-photo-691046.webp" },
        { src: "pexels-photo-265906.jpeg" },
      ],
    };
  },
};
</script>
<style scoped>
.landing-text {
  font-size: 13vw;
}
</style>
