<template>
      <v-container fill-height>
        <v-row class="fill-height" align="center" justify="center">
            <v-col class="fill-height white pa-0" cols="6">
                <v-img id="cardImg" :src="planet.image"/>
            </v-col>
            <v-col class="fill-height white pa-12" cols="6">
                <p class="text-h3 black--text">{{planet.name}}</p>
                <p class="text-subtitle-2 grey--text" v-for="(value, propertyName) in planet.data" :key="propertyName">
                    {{ propertyName }}: {{ value }}
                </p>
            </v-col>
          
        </v-row>
      </v-container>
</template>

<script>
import axios from 'axios';
import { getId, getImage, getNumberOfPages } from '../shared/methods';

export default {
  name: 'Planet',
  props: {
    selectedTheme: {
      type: String,
      default: 'originalTheme',
    },
  },
  data: () => ({
    page: 1,
    themes: ['originalTheme', 'cloneTheme', 'sithTheme', 'empireTheme'],
    planet: {
        name: "Alderaan",
        image: "https://firebasestorage.googleapis.com/v0/b/galacticvue.appspot.com/o/planets%2F2.jpg?alt=media&token=7ebdb85f-3d87-4e55-834e-bbe19dc34f0c",
        data: {
            "Population": "2,000,000,000",
            "Rotation Period": "24 days",
            "Orbital Period": "364 days",
            "Diameter": "12,500km",
            "Gravity": "1 Standard",
            "Terrain": "Grasslands, Mountains",
            "Surface Water": "40%",
            "Climate": "Temperate",
        }
    },
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