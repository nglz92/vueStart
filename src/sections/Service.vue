<script setup>
import LandingPage from "@/components/LandingPage.vue";
import EffectHeadline from "@/components/EffectHeadline.vue";
import FeatureOverview from "@/components/FeatureOverview.vue";
import EffectImagePin from "@/components/EffectImagePin.vue";
</script>

<template>
  <div class="">
    <LandingPage />
    <EffectHeadline id="service" title="Unsere Dienste" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna" />
    <div  class="flex h-fit">
      <div class="w-2/12 h-full"></div>
      <div class="w-8/12 h-fit 1">
      <FeatureOverview />
      </div> 
      <div class="w-2/12 h-screen">
      <EffectImagePin direction="down" />
      </div>
    </div>
  </div>
</template>

<style>
h5{
  @apply
  text-5xl
}

</style>
