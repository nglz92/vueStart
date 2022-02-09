<template>
  <div>
    <header :class="{'fixed-navbar': !view.topPage}" class="bg-white shadow w-full z-40 relative" v-if="$route.meta.title">
      <div  class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <nav>
            <a href="#home" class="scrollactive-item">Home</a>
            <a href="#service" class="scrollactive-item">Services</a>
            <a href="#brands" class="scrollactive-item">Marken</a>
          </nav>
      </div>
      
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <!-- <transition v-on:leave="leaveScreen"> -->
             <component class="h-screen w-screen" :is="Component"></component>
        <!-- </transition> -->
      </router-view>
    </main>
  </div>
</template>
<script>
import gsap from "gsap"
export default {
  methods:{
  $_scrollHandler(){
      if(window.pageYOffset>0){
        if(this.view.topPage) 
        this.view.topPage = false
      } 
      else {
        if(!this.view.topPage) this.view.topPage = true
      }
    },
  },
  
  mounted(){
     window.addEventListener('scroll', this.$_scrollHandler)
  },
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
}
</script>      
<style> 
/* fonts */
/* @font-face{
  font-family: "";
} */
body{
  overflow-x: hidden;
}
.page{
  @apply
  absolute
  top-0
}
.fixed-navbar{
  @apply
  fixed;
}
nav a{
  @apply
  mx-4
}
.text-orientation-mixed{
writing-mode: vertical-rl;
text-orientation: mixed;
}
.text-orientation-vertical{
  writing-mode: vertical-rl;
text-orientation: upright;
}
a.router-link-active {
  border-bottom: 2px solid blue;
}

.v-enter-from, .v-leave-to{
  opacity: 0;
}

.v-enter-active, .v-leave-active{
   z-index: 100;
}
</style>