<template>
  <v-app>
    <v-app-bar app dark>
      <h3>Galactic Vue</h3>
      <v-spacer></v-spacer>

      <v-btn href="https://github.com/RexusWolf/GalacticVue" target="_blank" text>
        <span class="mr-2">GitHub Repository</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="mx-auto mt-5">
      <v-row>
        <flip-galactic-v-card>
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
            <galactic-v-card-back forceColor="lawngreen"></galactic-v-card-back>
          </template>
        </flip-galactic-v-card>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import FlipGalacticVCard from "./components/FlipGalacticVCard";
import GalacticVCard from "./components/GalacticVCard";
import GalacticVCardBack from "./components/GalacticVCardBack";

export default {
  name: "App",
  components: {
    FlipGalacticVCard,
    GalacticVCard,
    GalacticVCardBack
  },
  data: () => ({
    //
  })
};
</script>