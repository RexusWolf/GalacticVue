<template>
  <v-card hover class="mx-auto mb-5 pt-2" max-width="290" :style="cssProps">
    <v-container fluid class="starJediFont pl-7 pb-0">
      <v-row class="mb-2">
        <h3 class="white--text">Height:</h3>
        <h3 class="ml-2 white--text">1,72</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Mass:</h3>
        <h3 class="ml-2 white--text">77</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Hair Color:</h3>
        <h3 class="ml-2 white--text">Blond</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Skin Color:</h3>
        <h3 class="ml-2 white--text">Fair</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Eye Color:</h3>
        <h3 class="ml-2 white--text">Blue</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Birth Year:</h3>
        <h3 class="ml-2 white--text">19BBY</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Gender:</h3>
        <h3 class="ml-2 white--text">Male</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Homeworld:</h3>
        <h3 class="ml-2 white--text">Tatooine</h3>
      </v-row>
      <v-row class="mb-2">
        <h3 class="white--text">Starship:</h3>
        <h3 class="ml-2 white--text">X-Wing</h3>
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
    cardTitle: {
      type: String,
      required: true,
      default: "Anakin Skywalker"
    },
    cardSubtitle: {
      type: String,
      required: true,
      default: "JEDI KNIGHT"
    },
    cardText: {
      type: String,
      required: true,
      default:
        "Anakin Skywalker, a Force-sensitive human male, was a Jedi Knight of the Galactic Republic and the Chosen One of the Force."
    },
    forceColor: {
      type: String,
      required: true,
      default: "deepskyblue"
    },
    infoUrl: {
      type: String,
      required: true,
      default: "https://starwars.fandom.com/wiki/Anakin_Skywalker"
    }
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        "--forceColor": this.forceColor
      };
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