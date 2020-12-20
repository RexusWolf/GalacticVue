<template>
  <v-card hover :style="cssProps">
    <v-img id="cardImg" :src="this.cardImageUrl"></v-img>
    <div class="cardFooter">
      <v-card-title id="name" class="starJediFont textGlow">{{
        this.name
      }}</v-card-title>
      <v-card-subtitle class="white--text starJediNewsFont">{{
        this.homeworld
      }}</v-card-subtitle>
      <v-card-actions>
        <v-btn
          :href="this.infoUrl"
          target="_blank"
          text
          class="cardButton starJediFont"
          >READ MORE</v-btn
        >
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'GalacticVCard',
  props: {
    cardImageUrl: {
      type: String,
      required: true,
      default: 'https://img.ecartelera.com/noticias/fotos/56300/56320/1.jpg',
    },
    name: {
      type: String,
      required: true,
      default: 'Anakin Skywalker',
    },
    homeworld: {
      type: String,
      required: true,
      default: 'JEDI KNIGHT',
    },
    cardText: {
      type: String,
      required: true,
      default:
        'Anakin Skywalker, a Force-sensitive human male, was a Jedi Knight of the Galactic Republic and the Chosen One of the Force.',
    },
    forceColor: {
      type: String,
      required: false,
      default: 'deepskyblue',
    },
    infoUrl: {
      type: String,
      required: true,
      default: 'https://starwars.fandom.com/wiki/Anakin_Skywalker',
    },
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        '--forceColor': this.forceColor,
      };
    },
  },
};
</script>
<style scoped>
@import '../assets/fonts/fonts.css';
@import '../assets/styles/GalacticVCard.css';
</style>
