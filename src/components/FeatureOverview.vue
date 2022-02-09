<template>
  <div class="mx-auto flex">
    <div class="w-3/6 my-auto relative block">
      <FeatureCard
        :key="card.id"
        v-for="card in leftCol"
        :title="card.title"
        :text="card.text"
        :imageUrl="card.img"
      />
    </div>
    <div class="w-3/6 my-auto relative block">
      <FeatureCard
        :key="card.id"
        v-for="card in rightCol"
        :title="card.title"
        :text="card.text"
        :imageUrl="card.img"
      />
    </div>
  </div>
</template>

<script>
import FeatureCard from "./FeatureCard.vue";

export default {
  name: "FeatureOverview",
  components: {
    FeatureCard,
  },
  methods: {},
  data: function () {
    return {
      cards: [
        {
          id: 1,
          title: "Schmuckreperatur",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          col: "left",
          img: "jewellery-4603233_960_720.jpg",
        },
        {
          id: 2,
          title: "Reinigung & Pflege ",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,. ",
          col: "left",
          img: "pexels-photo-9953655.webp",
        },
        {
          id: 3,
          title: "Reparaturen von Uhren ",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
          col: "left",
          img: "pexels-photo-8327874.jpeg",
        },
        {
          id: 4,
          title: "Geschenkgutscheine ",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. ",
          col: "right",
          img: "pexels-photo-3641056.jpeg",
        },
        {
          id: 5,
          title: "Schmuckanfertigung",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          col: "right",
          img: "jewellery-4603231_960_720.jpg",
        },
      ],
    };
  },
  computed: {
    leftCol: function () {
      return this.cards.filter((i) => i.col == "left");
    },
    rightCol: function () {
      return this.cards.filter((i) => i.col == "right");
    },
  },
};
</script>
