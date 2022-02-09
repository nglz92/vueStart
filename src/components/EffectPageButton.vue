<template>
  <!-- TODO https://dribbble.com/shots/16855442-Historical-Museum-Website -->
  <div
    class="relative w-full h-screen-1/2 duration-1000 overflow-hidden bg-gradient-animation"
  >
    <div class="absolute top-0 w-full my-auto pl-12">
      <!-- <h3 class="text-white font-bold my-auto" style="font-size:15vh; line-height:80%;">Unsere</h3> -->
      <div
        class="text-white font-bold my-auto text-center"
        style="font-size: 30vh; line-height: 100%"
      >
        <p class="h-full">
          <span class="letter-bg"
            ><span
              class="h-full font-black letter-bg"
              style="font-size: 46vh; line-height: 100%"
              >C</span
            >
            <span class="h-full">h</span></span
          >ronik
        </p>
      </div>
    </div>
    <div class="bg-loading-animation"></div>
  </div>
</template>

<script>
// https://dribbble.com/shots/15047380-Victorinox-History-of-Company
// https://masteringjs.io/tutorials/vue/select-onchange
export default {
  name: "ChronikButton",
  components: {},
  props: {},
  methods: {},
  data: function () {},
};
</script>

<style scoped>
.letter-bg {
  background-image: url(https://brutkasten.com/wp-content/uploads/2020/01/AdobeStock_40572208-766x395.jpeg.webp);
  object-fit: cover;
  height: 100%;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
}

.bg-gradient-animation {
  background: linear-gradient(237deg, #5a4c30, #332d23);
  -webkit-animation-play-state: paused;
  -webkit-animation: 0;
}

.bg-gradient-animation:hover {
  transition: 2s;
  background: linear-gradient(237deg, #bd9850, #1b1b1b);
  background-size: 400% 400%;
  -webkit-animation: gradientAnimation 5s ease;
  -moz-animation: gradientAnimation 5s ease;
  -o-animation: gradientAnimation 5s ease;
  animation: gradientAnimation 5s ease;
}

@-webkit-keyframes gradientAnimation {
  0% {
    background-position: 2% 0%;
  }
  100% {
    background-position: 99% 100%;
  }
}
@-moz-keyframes gradientAnimation {
  0% {
    background-position: 2% 0%;
  }
  100% {
    background-position: 99% 100%;
  }
}
@-o-keyframes gradientAnimation {
  0% {
    background-position: 2% 0%;
  }
  100% {
    background-position: 99% 100%;
  }
}
@keyframes gradientAnimation {
  0% {
    background-position: 2% 0%;
  }
  100% {
    background-position: 99% 100%;
  }
}
</style>
