<script setup>
import Service from '@/sections/Service.vue'
import Brands from '@/sections/Brands.vue'
</script>

<template>
<div>
  <section class="section-scroll"> 
    <Service/>
  </section>
  <section class="section-scroll">
    <Brands/>
  </section>
</div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default {
  
  methods:
  {
      enterViewAnimation(){
        // 
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".viewport-animation").forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            onEnter(){
              element.classList.add("enters-viewport");
            }
          });
        });
      }
      
  },
  mounted(){
        this.enterViewAnimation()  
      }
}
</script>
<style>
h5{
  @apply
  text-5xl
}
/* Enters viewport Animation */
.viewport-animation{
  transform:translateY(2rem);
 opacity: 0;
 transition-duration: 2s;
 animation-delay: 2s;
}

.enters-viewport{
  transform:translateY(0);
 opacity: 1 !important;
}
</style>
