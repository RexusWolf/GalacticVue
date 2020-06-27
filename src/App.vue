<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="mt-5">
      <div class="d-flex">
        <galactic-v-card
          cardTitle="Rexus Wolf"
          cardImageUrl="https://pbs.twimg.com/profile_images/1210727756331225088/ML543-zh_400x400.jpg"
          cardText="Rexus Wolf, a Force-sensitive human male, was a Jedi Knight of the Galactic Republic and the Chosen One of the Force."
        ></galactic-v-card>
        <galactic-v-card
          cardTitle="Mace Windu"
          cardSubtitle="JEDI MASTER"
          cardImageUrl="https://www.cinemascomics.com/wp-content/uploads/2020/05/samuel-l-jackson-mace-windu-star-wars-960x720.jpg"
          cardText="Mace Windu, a Force-sensitive human male, was a revered Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. "
          forceColor="fuchsia"
        ></galactic-v-card>
        <galactic-v-card
          cardTitle="Luke Skywalker"
          cardSubtitle="JEDI MASTER"
          cardImageUrl="https://dreager1.files.wordpress.com/2010/11/lukeskywalkerwallpaper-777357.jpg"
          cardText="Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire.Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. "
          forceColor="lawngreen"
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
