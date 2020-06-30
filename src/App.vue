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
        <flip-galactic-v-card></flip-galactic-v-card>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import FlipGalacticVCard from "./components/FlipGalacticVCard";
export default {
  name: "App",
  components: {
    FlipGalacticVCard
  },
  data: () => ({
    //
  })
};
</script>