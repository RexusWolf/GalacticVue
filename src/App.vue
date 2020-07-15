<template>
  <v-app>
    <galactic-v-nav-bar sidebar theme="empireTheme"></galactic-v-nav-bar>
    <v-content class="mx-auto pt-5">
      <v-row>
        <flip-galactic-v-card class="ml-5 mr-5">
          <template slot="front">
            <galactic-v-card
              cardTitle="Darth Maul"
              cardSubtitle="SITH"
              cardImageUrl="https://sm.ign.com/t/ign_latam/screenshot/default/darthmaul-1_a2ev.1280.jpg"
              cardText="Maul was a Force-sensitive Dathomirian Zabrak male and dark side warrior who served as the apprentice Dark Lord of the Sith Darth Maul during the final years of the Galactic Republic and reigned as a crime lord during the rule of the Galactic Empire. "
              forceColor="red"
              infoUrl="https://starwars.fandom.com/wiki/Maul"
            ></galactic-v-card>
          </template>
          <template slot="back">
            <galactic-v-card-back
              forceColor="red"
              backImageUrl="https://i.pinimg.com/originals/e7/a0/55/e7a0550a21ffc8933f26526a57254265.jpg"
            ></galactic-v-card-back>
          </template>
        </flip-galactic-v-card>
        <flip-galactic-v-card class="ml-5">
          <template slot="front">
            <galactic-v-card
              cardTitle="Luke Skywalker"
              cardSubtitle="JEDI MASTER"
              cardImageUrl="https://dreager1.files.wordpress.com/2010/11/lukeskywalkerwallpaper-777357.jpg"
              cardText="Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire.Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. "
              forceColor="lawngreen"
              infoUrl="https://starwars.fandom.com/wiki/Luke_Skywalker"
            ></galactic-v-card>
          </template>
          <template slot="back">
            <galactic-v-card-back
              forceColor="lawngreen"
              backImageUrl="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/curiosidades.batanga.com/files/Segun-la-ciencia-la-princesa-Leia-es-mayor-que-Luke-Skywalker-a-pesar-de-ser-su-hermana-melliza-0.jpeg"
            ></galactic-v-card-back>
          </template>
        </flip-galactic-v-card>
      </v-row>
      <v-row class="mx-auto">
        <galactic-v-button outlined theme="originalTheme">ORIGINAL OUTLINED</galactic-v-button>
        <galactic-v-button theme="cloneTheme">CLONES NOT OUTLINED</galactic-v-button>
        <galactic-v-button outlined theme="sithTheme">SITH</galactic-v-button>
        <galactic-v-button theme="empireTheme">EMPIRE</galactic-v-button>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import FlipGalacticVCard from "./components/FlipGalacticVCard";
import GalacticVCard from "./components/GalacticVCard";
import GalacticVCardBack from "./components/GalacticVCardBack";
import GalacticVButton from "./components/GalacticVButton";
import GalacticVNavBar from "./components/GalacticVNavBar";

export default {
  name: "App",
  components: {
    FlipGalacticVCard,
    GalacticVCard,
    GalacticVCardBack,
    GalacticVButton,
    GalacticVNavBar
  },
  data: () => ({
    //
  })
};
</script>