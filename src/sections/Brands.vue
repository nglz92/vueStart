<script setup>
import BaseHeadline from '@/components/EffectHeadline.vue'
import BrandJuwleryBanner from '@/components/BrandJuwleryBanner.vue'
import BrandWatchCarousel from '@/components/BrandWatchCarousel.vue'

</script>

<template>
  <div id="brands" class="Brands">
    <BaseHeadline title="Unsere Marken" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"/>
    <h2 class="viewport-animation">Uhren</h2>
    <BrandWatchCarousel/>
    <h2 class="viewport-animation">Schmuck</h2>
    <BrandJuwleryBanner direction="left"/>
  </div>
</template>

<style scoped>
h2{
  @apply
  my-10
  text-primary;
  padding-left:16.6%;
  font-size:12vh;
  height:12vh;
  line-height:12vh;

}
</style>