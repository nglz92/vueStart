<template>
  <div class="p-4 group viewport-animation">
    <div class="w-full h-fit relative">
      <div
        class="absolute bottom-0 left-0 text-red z-10 h-fit w-full py-12 pl-8 overflow-hidden"
      >
        <h4 class="mb-3 text-left duration-200 group-hover:-translate-y-10">Services</h4>
        <h5 class="duration-200 group-hover:-translate-y-10">{{ title }}</h5>
        <div class="duration-200 group-hover:-translate-y-10">
          <p
            class="mt-4 w-10/12 text-white feature-text"
          >
            {{ text }}
          </p>
        </div>
      </div>
      <div
        class="black-gradient absolute left-0 bottom-0 w-full h-full bg-gradient-to-t duration-700 from-primary to-transparent group-hover:bg-gradient-to-t group-hover:bg-black/75 "
      ></div>
    <img
      class="object-cover w-full h-full max-h-96"
      :src="`/src/assets/img/${imageUrl}`"
      :alt= imageUrl
    />

    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    text: {
      type: String,
      required: true,
      default: "Text",
    },
    imageUrl:{
      type: String,
      required: true,

    }
  },
};
</script>

<style lang="scss" scoped>
.feature-text{
  line-height: 2em;
}
</style>