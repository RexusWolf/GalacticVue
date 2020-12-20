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
          <v-col>
            <v-pagination
              v-model="page"
              :length="3"
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
import firebase from 'firebase';

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
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
  async mounted() {
    await this.addPagePlanets();
  },
  methods: {
    async addPagePlanets(){
      axios
      .get('https://swapi.dev/api/planets/?page=' + this.page)
      .then(async (response) => {
        this.planets = [];
        const apiPlanets = response.data.results;
        apiPlanets.map(async (planet) => {
          const id = this.getId(planet);
          await this.addPlanetInfo(planet, id);
          this.planets.push(planet);
        });
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
    },

    async addPlanetInfo(planet, id){
      planet.infoUrl = 'https://starwars.fandom.com/wiki/' + planet.name;
      planet.cardImageUrl = await this.getImage('planets', id);
    },

    getId(planet){
      const id = planet.url.match((/\d+/))[0];
      return id;
    },

    async getImage(type, id){
      const storage = await firebase.storage();
      const imgPath = type + '/' + id + '.jpg';
      const imgUrl = await storage.ref(imgPath).getDownloadURL();
      return imgUrl;
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