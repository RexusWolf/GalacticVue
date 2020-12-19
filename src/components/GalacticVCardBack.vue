<template>
  <v-card hover :style="cssProps">
    <v-img id="cardBackImg" :src="this.backImageUrl"></v-img>
    <v-container fluid class="cardBackInfo pa-8">
      <v-row class="mb-2" v-bind:key="index" v-for="(key, index) in keys">
        <h3 class="gvyellow--text starJediOutlineFont">{{ key }}:</h3>
        <h3 class="ml-2 starJediNewsFont">{{ values[index] }}</h3>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'GalacticVCardBack',
  props: {
    species: {
      type: String,
      default: 'Human',
    },
    height: {
      type: String,
      default: '1,77',
    },
    mass: {
      type: String,
      default: '77',
    },
    hairColor: {
      type: String,
      default: 'Blonde',
    },
    skinColor: {
      type: String,
      default: 'Fair',
    },
    eyeColor: {
      type: String,
      default: 'Blue',
    },
    birthYear: {
      type: String,
      default: '19BBY',
    },
    gender: {
      type: String,
      default: 'Male',
    },
    homeworld: {
      type: String,
      default: 'Tatooine',
    },
    starship: {
      type: String,
      default: 'X-wing',
    },
    forceColor: {
      type: String,
      required: true,
      default: 'deepskyblue',
    },
    backImageUrl: {
      type: String,
      default:
        'https://cf.geekdo-images.com/itemrep/img/z5ZY5go3LRJ82pFQPWkWR-6MEHw=/fit-in/246x300/pic1720375.jpg',
    },
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        '--forceColor': this.forceColor,
      };
    },
    keys() {
      let keys = Object.keys(this.$props);
      keys.pop();
      keys.pop();
      for (var key in keys) {
        keys[key] = keys[key].replace(/([A-Z])/g, ' $1').trim();
      }
      return keys;
    },
    values() {
      return Object.values(this.$props);
    },
  },
};
</script>
<style scoped>
@import '../assets/fonts/fonts.css';
@import '../assets/styles/GalacticVCard.css';
</style>
