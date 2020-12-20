<template>
  <v-app>
    <galactic-v-nav-bar
      sidebar
      v-bind:theme="selectedTheme"
    ></galactic-v-nav-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import GalacticVNavBar from './shared/GalacticVNavBar';

export default {
  name: 'App',
  props: {
    selectedTheme: {
      type: String,
      default: 'originalTheme',
    },
  },
  components: {
    GalacticVNavBar,
  },
  data: () => ({
    page: 1,
    themes: ['originalTheme', 'cloneTheme', 'sithTheme', 'empireTheme'],
    characters: [],
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
};
</script>
<style scoped>
@media (min-width: 1920px) {
  .cardsGrid{
    width: 20%;
  }
}
</style>