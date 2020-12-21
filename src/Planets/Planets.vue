<template>
      <v-container fill-height>
        <v-row class="fill-height" align="center" justify="center">
          <v-row>
            <v-col
              class="cardsGrid"
              align="center"
              v-for="(planet, index) in this.planets"
              :key="index"
            >
              <flip-galactic-v-card>
                <template slot="front">
                  <galactic-v-card
                    :name="planet.name"
                    :cardImageUrl="planet.cardImageUrl"
                  ></galactic-v-card>
                </template>
                <template slot="back">
                  <galactic-v-card-back
                  ></galactic-v-card-back>
                </template>
              </flip-galactic-v-card>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-pagination
              v-model="page"
              :length="this.numberOfPages"
              @input="addPagePlanets()"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import FlipGalacticVCard from '../shared/FlipGalacticVCard';
import GalacticVCard from '../shared/GalacticVCard';
import GalacticVCardBack from '../shared/GalacticVCardBack';
import axios from 'axios';
import { getId, getImage, getNumberOfPages } from '../shared/methods';

export default {
  name: 'Planets',
  props: {
    selectedTheme: {
      type: String,
      default: 'originalTheme',
    },
  },
  components: {
    FlipGalacticVCard,
    GalacticVCard,
    GalacticVCardBack,
  },
  data: () => ({
    page: 1,
    themes: ['originalTheme', 'cloneTheme', 'sithTheme', 'empireTheme'],
    planets: [],
    numberOfPages: 0,
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
  async mounted() {
    this.numberOfPages = await this.addPagePlanets();
  },
  methods: {
    async addPagePlanets(){
      return axios
        .get('https://swapi.dev/api/planets/?page=' + this.page)
        .then(async (response) => {
          this.planets = [];
          const apiPlanets = response.data.results;
          apiPlanets.map(async (planet) => {
            const id = getId(planet);
            await this.addPlanetInfo(planet, id);
            this.planets.push(planet);
          });
          return getNumberOfPages(response.data.count);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },

    async addPlanetInfo(planet, id){
      planet.infoUrl = 'https://starwars.fandom.com/wiki/' + planet.name;
      planet.cardImageUrl = await getImage('planets', id);
    },
  },
};
</script>
<style scoped>
@media (min-width: 1920px) {
  .cardsGrid{
    width: 20%;
  }
}
</style>