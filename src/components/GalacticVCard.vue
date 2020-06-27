<template>
  <v-card hover class="mx-auto" max-width="344" :style="cssProps">
    <v-img id="cardImg" :src="this.cardImageUrl"></v-img>
    <div class="cardFooter">
      <v-card-title id="cardTitle" class="starJediFont textGlow">{{this.cardTitle}}</v-card-title>
      <v-card-subtitle class="white--text">{{this.cardSubtitle}}</v-card-subtitle>
      <v-card-text class="cardText gvgray--text">{{this.cardText}}</v-card-text>
      <v-card-actions>
        <v-btn text class="cardButton">READ MORE</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "GalacticVCard",
  props: {
    cardImageUrl: {
      type: String,
      required: true,
      default: "https://img.ecartelera.com/noticias/fotos/56300/56320/1.jpg"
    },
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

.starJediFont {
  font-family: GalaxyVue !important;
}

.v-card:hover > .cardFooter > #cardTitle {
  color: #ffffff;
  text-align: center;
  -webkit-animation: textGlow 1s ease-in-out infinite alternate;
  -moz-animation: textGlow 1s ease-in-out infinite alternate;
  animation: textGlow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes textGlow {
  to {
    text-shadow: 0 0 2px #ffffff, 0 0 2px #ffffff, 0 0 2px #ffffff;
  }
}

.v-card {
  position: relative;
  height: 400px;
  width: 340px;
  overflow: hidden;
  border-radius: 15px !important;
  -webkit-transition: box-shadow 0.2s linear;
  -moz-transition: box-shadow 0.2s linear;
  -ms-transition: box-shadow 0.2s linear;
  -o-transition: box-shadow 0.2s linear;
  transition: box-shadow 0.2s linear;
}

.v-card:hover {
  box-shadow: 0 0 15px var(--forceColor) !important;
}

.cardFooter {
  height: 55%;
  position: absolute;
  bottom: 0;
}

.cardText {
  height: 30%;
  overflow: hidden;
}

.cardButton {
  color: var(--forceColor) !important;
}

.v-card > #cardImg {
  height: 45%;
  transition: height 0.3s, opacity 0.3s;
}
.v-card:hover > #cardImg {
  height: 400px;
  opacity: 0.3;
}
</style>