<template>
  <v-card hover class="mx-auto mb-5 pt-2" max-width="290" :style="cssProps">
    <v-container fluid class="starJediFont pl-7 pb-0">
      <v-row class="mb-2" v-bind:key="prop" v-for="prop in props">
        <h3 class="white--text">{{prop[0].replace(/([A-Z])/g, ' $1').trim()}}:</h3>
        <h3 class="ml-2 white--text">{{prop[1]}}</h3>
      </v-row>
    </v-container>
    <v-card-actions class>
      <v-btn :href="this.infoUrl" target="_blank" text class="cardButton starJediFont">READ MORE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "GalacticVCardBack",
  props: {
    height: {
      type: String,
      required: true,
      default: "1,77"
    },
    mass: {
      type: String,
      required: true,
      default: "77"
    },
    hairColor: {
      type: String,
      required: true,
      default: "Blonde"
    },
    skinColor: {
      type: String,
      required: true,
      default: "Fair"
    },
    eyeColor: {
      type: String,
      required: true,
      default: "Blue"
    },
    birthYear: {
      type: String,
      required: true,
      default: "19BBY"
    },
    gender: {
      type: String,
      required: true,
      default: "Male"
    },
    homeworld: {
      type: String,
      required: true,
      default: "Tattooine"
    },
    starship: {
      type: String,
      required: true,
      default: "X-wing"
    }
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        "--forceColor": this.forceColor
      };
    },
    props() {
      return Object.entries(this.$props);
    }
  }
};
</script>
<style scoped>
@import "../assets/fonts/fonts.css";
@import "../assets/styles/GalacticVCard.css";

.propertyContainer {
  width: 100%;
  height: 30px;
}
</style>