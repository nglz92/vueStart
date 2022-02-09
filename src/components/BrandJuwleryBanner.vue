<template>
  <div class="relative h-screen-1/4">
    <div class="absolute wrapper w-screen bg-white h-80 overflow-hidden">
      <div class="slides h-fit p-14">
        <div class="slide flex" v-for="(brand, index) in brands" :key="index">
          <img class="mx-auto my-auto max-h-60 h-60 w-auto p-8" :src="`/src/assets/img/brands/BrandLogo/${brand.imageUrl}`" />
        </div>
        <div class="slide" v-for="(brand, index) in brands" :key="index">
          <img
            class="mx-auto my-auto max-h-60 h-60 w-auto p-8"
            :src="`/src/assets/img/brands/BrandLogo/${brand.imageUrl}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  components: {},
  props: {
    direction: {
      type: String,
      default: "left",
    },
  },

  methods: {
    $_getDirection(direction) {
      switch (direction) {
        case "left":
          return "-=";
          break;

        default:
          return "+=";
          break;
      }
    },

    $_marquee(direction) {
      var slide = document.querySelector(".slide"),
        slideWidth = slide.getBoundingClientRect().width,
        noslidees = document.querySelectorAll(".slide").length,
        totalWidth = slideWidth * noslidees,
        allSlides = document.querySelectorAll(".slide");

      var mod = gsap.utils.wrap(0, totalWidth);
      gsap.set(allSlides, {
        x: function (i) {
          return i * slideWidth;
        },
      });

      var action = gsap.timeline().to(allSlides, {
        x: direction + totalWidth,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: 30,
        ease: "none",
        repeat: -1,
      });
      return action;
    },
  },
  data: function () {
    return {
      brands: [
        {
          imageUrl: "1200px-ICE-WATCH-logo.svg.png",
        },
        {
          imageUrl: "bastian-inverun-logo5aaba82a78355.png",
        },
        {
          imageUrl: "index.png",
        },
        {
          imageUrl: "Logo_BN_Silver-1.jpg",
        },
        {
          imageUrl: "Ratius-Logo-black.png",
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.$_marquee(this.$_getDirection(this.direction));
  },
};
</script>

<style scoped>
.wrapper .slide {
  position: absolute;
  width: 25vw;
  height: 100%;
  color: black;
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  text-align: center;
  border-left: 3px solid black;
}
.wrapper .slides {
  position: relative;
  left: -40vw;
  height: 25vh;
  width: 120vw;
}
</style>
