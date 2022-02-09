<template>
  <carousel :items-to-show="10" :wrapAround="true" class="w-full h-full">
    <slide
      @click="slideCarousel(index)"
      v-for="(brand, index) in brands"
      :key="index"
    >
      <img :src="brand.imageUrl" class="h-full w-full" />
    </slide>

    <template #addons>
      <!-- <navigation /> -->
      <pagination />
    </template>
  </carousel>
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "BrandOverview",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    slideCarousel(index) {
      alert(index);
    },
  },
  // TODO images -> svg -> hovereffect
  data: function () {
    return {
      brands: [
         {imageUrl:"0000025723.jpg",brand:"ICE",headline:"ICE Watch",text:"Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna "},
      ],
    };
  },
};
</script>
