<template>
  <div class="relative">
    <carousel
      ref="carousel"
      class="w-full h-sreen duration-700"
      :settings="settings"
      style="height: 60vh"
    >
      <slide
        v-on:click="$_slideCarousel(index)"
        v-for="(thumbnail, index) in thumbnails"
        :key="index"
      >
        <div
          v-on:click="$_showBrand($event)"
          class="carousel__item h-full w-full mx-8"
        >
          <div class="h-full mx-auto w-auto relative">
            <div
              class="absolute top-0-left-0 pointer-events-none w-full h-full"
            >
              <div class="w-2/12 h-full text-left">
                <!-- {{lorem.text}} -->
              </div>
            </div>
            <div class="content flex w-full h-full">
              <img
                class="h-full w-auto object-cover imageThumbnail"
                :src="`/src/assets/img/brands/watches/${thumbnail.imageUrl}`"
                :alt="thumbnail.imageUrl"
              />
              <div
                class="brand-description my-10 h-fit text-left ml-8 mr-8 duration-500"
                style="width: 25vw; opacity: 0"
              >
                <h3 class="text-4xl mb-8 whitespace-nowrap">
                  {{ thumbnail.headline }}
                </h3>
                <p class="brand-text max-w-6xl">
                  {{ thumbnail.text }}
                </p>
              </div>
            </div>
            <svg class="absolute h-full left-0 top-0">
              <text
                x="10"
                y="-15"
                class="text-5xl rotate-90 fill-secondary stroke-4 pointer-events-none"
              >
                {{ thumbnail.brand }}
              </text>
            </svg>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { gsap } from "gsap";

export default {
  name: "WatchCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  watch: {},

  methods: {
    $_hideBrand() {
      let brandDescription = document.querySelectorAll(".brand-description");
      brandDescription.forEach((element) => {
        element.style.opacity = "0";
      });
    },

    $_showBrand(event) {
      // only show if clicked slide is the activ slide

      if (
        event.target.parentElement.parentElement.parentElement.classList.contains(
          "carousel__slide--active"
        ) &&
        this.settings.itemsToShow != 1
      ) {
        // load BrandDetails
        this.$_setCarouselFullscreen();
      } else {
        this.$_hideBrand();
      }
    },

    $_updateSettings() {
      this.settings.itemsToShow = 1;
      this.$refs.carousel.updateCarousel();
    },

    $_defaultSettings() {
      (this.settings.itemsToShow = 1),
        (this.settings.snapAlign = "center"),
        (this.settings.itemsToShow = 5.5),
        (this.settings.wrapAround = true),
        this.$refs.carousel.updateCarousel();
    },

    $_showText(activeSlide) {
      // selects TextWrapper
      let textWrapper = activeSlide.querySelector(".brand-description");
      gsap
        .timeline()
        .from(textWrapper, {
          x: 1000,
          opacity: 0,
        })
        .to(textWrapper, {
          x: 0,
          opacity: 1,
        });
    },

    $_setCarouselFullscreen() {
      const slides = document.querySelectorAll(
        ".carousel__slide:not(.carousel__slide--active)"
      );
      const activeSlide = document.querySelector(".carousel__slide--active");
      gsap.timeline().to(
        slides,
        {
          duration: 1,
          width: "10%",
        },
        gsap.timeline().to(activeSlide, {
          duration: 1,
          width: "80%",
        })
      );
      this.$_showText(activeSlide);
    },
    $_slideCarousel(tragetSlideNumber) {
      this.$refs.carousel.slideTo(tragetSlideNumber);
    },
  },

  data: function () {
    return {
      lorem: {
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      thumbnails: [
        {
          imageUrl: "0000025723.jpg",
          brand: "ICE",
          headline: "ICE Watch",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
        {
          imageUrl: "j369503_013.102.webp",
          brand: "TIMBERLAND",
          headline: "TIMBERLAND Watch",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
        {
          imageUrl: "sm34012.03.jpg",
          brand: "SWISS MILITARY",
          headline: "SWISS MILITARY Watch",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
        {
          imageUrl:
            "swiss-military-hanowa-herrenuhr-06-723070400130_87856933.jpg",
          brand: "HANOWA",
          headline: "HANOWA Watch",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
        {
          imageUrl: "0000025723.jpg",
          brand: "REGENT",
          headline: "REGENT Watch",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
        {
          imageUrl: "0000025723.jpg",
          brand: "KALB Atrium",
          headline: "KALB Atrium Watch",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
        {
          imageUrl: "0000025723.jpg",
          brand: "CLAUDE PASCALE",
          headline: "CLAUDE PASCALE Watch",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
        {
          imageUrl: "0000025723.jpg",
          brand: "OTHER",
          headline: "Wecker und Wanduhren",
          text: "Markenbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ",
        },
      ],
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        itemsToShow: 5,
        wrapAround: true,
      },
    };
  },
};
</script>

<style>
.carousel__viewport {
  height: 100%;
}

.carousel__track {
  padding-top: 3rem;
  padding-bottom: 3rem;
  height: 100%;
}

.carousel__slide {
  height: 100%;
}

.carousel__slide--visible {
  height: 100%;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}

.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}

.carousel__slide--next > .carousel__item {
  transform: scale(1) translate(-10px);
}

.carousel__slide--prev > .carousel__item {
  transform: scale(1) translate(10px);
}

.carousel__slide--active > .carousel__item {
  transform: scaleY(1.2);
}
</style>
