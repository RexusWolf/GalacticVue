<template>
  <v-card hover class="mx-auto mb-5 pt-4" max-width="290" :style="cssProps">
    <v-container fluid class="pl-8">
      <v-row class="mb-2" v-bind:key="index" v-for="(key, index) in keys">
        <h3 class="gvyellow--text starJediOutlineFont">{{key}}:</h3>
        <h3 class="ml-2 starJediNewsFont">{{values[index]}}</h3>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "GalacticVCardBack",
  props: {
    species: {
      type: String,
      default: "Human"
    },
    height: {
      type: String,
      default: "1,77"
    },
    mass: {
      type: String,
      default: "77"
    },
    hairColor: {
      type: String,
      default: "Blonde"
    },
    skinColor: {
      type: String,
      default: "Fair"
    },
    eyeColor: {
      type: String,
      default: "Blue"
    },
    birthYear: {
      type: String,
      default: "19BBY"
    },
    gender: {
      type: String,
      default: "Male"
    },
    homeworld: {
      type: String,
      default: "Tatooine"
    },
    starship: {
      type: String,
      default: "X-wing"
    },
    forceColor: {
      type: String,
      required: true,
      default: "deepskyblue"
    }
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        "--forceColor": this.forceColor
      };
    },
    keys() {
      let keys = Object.keys(this.$props);
      keys.pop();
      for (var key in keys) {
        keys[key] = keys[key].replace(/([A-Z])/g, " $1").trim();
      }
      return keys;
    },
    values() {
      return Object.values(this.$props);
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