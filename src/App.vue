<template>
  <v-app>
    <v-app-bar app dark>
      <h1>Galactic Vue</h1>
      <v-spacer></v-spacer>

      <v-btn href="https://github.com/RexusWolf/GalacticVue" target="_blank" text>
        <span class="mr-2">GitHub Repository</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="mt-5">
      <div class="d-flex">
        <galactic-v-card></galactic-v-card>
        <galactic-v-card
          cardTitle="Darth Maul"
          cardSubtitle="SITH"
          cardImageUrl="https://sm.ign.com/t/ign_latam/screenshot/default/darthmaul-1_a2ev.1280.jpg"
          cardText="Maul was a Force-sensitive Dathomirian Zabrak male and dark side warrior who served as the apprentice Dark Lord of the Sith Darth Maul during the final years of the Galactic Republic and reigned as a crime lord during the rule of the Galactic Empire. "
          forceColor="red"
          infoUrl="https://starwars.fandom.com/wiki/Maul"
        ></galactic-v-card>
        <galactic-v-card
          cardTitle="Mace Windu"
          cardSubtitle="JEDI MASTER"
          cardImageUrl="https://www.cinemascomics.com/wp-content/uploads/2020/05/samuel-l-jackson-mace-windu-star-wars-960x720.jpg"
          cardText="Mace Windu, a Force-sensitive human male, was a revered Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. "
          forceColor="fuchsia"
          infoUrl="https://starwars.fandom.com/wiki/Mace_Windu"
        ></galactic-v-card>
        <galactic-v-card
          cardTitle="Luke Skywalker"
          cardSubtitle="JEDI MASTER"
          cardImageUrl="https://dreager1.files.wordpress.com/2010/11/lukeskywalkerwallpaper-777357.jpg"
          cardText="Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire.Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. "
          forceColor="lawngreen"
          infoUrl="https://starwars.fandom.com/wiki/Luke_Skywalker"
        ></galactic-v-card>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import GalacticVCard from "./components/GalacticVCard";

export default {
  name: "App",

  components: {
    GalacticVCard
  },

  data: () => ({
    //
  })
};
</script>
