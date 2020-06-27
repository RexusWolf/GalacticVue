<template>
  <v-card hover class="mx-auto" max-width="344">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://img.ecartelera.com/noticias/fotos/56300/56320/1.jpg"
    ></v-img>
    <v-card-title id="cardTitle" class="starJediFont glow">ANAKIN SKYWALKER</v-card-title>
    <v-card-subtitle class="white--text">JEDI KNIGHT</v-card-subtitle>
    <v-card-text
      class="gvgray--text"
    >Anakin Skywalker, a Force-sensitive human male, was a Jedi Knight of the Galactic Republic and the Chosen One of the Force.</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GalactivVCard",

  data: () => ({})
};
</script>
<style scoped>
@import "../assets/fonts/fonts.css";

.starJediFont {
  font-family: GalaxyVue !important;
}

.v-card:hover > #cardTitle {
  color: #ffffff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  to {
    text-shadow: 0 0 2px #ffffff, 0 0 2px #ffffff, 0 0 2px #ffffff;
  }
}
</style>