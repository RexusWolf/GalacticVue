<template>
      <v-container fill-height>
        <v-row class="fill-height" align="center" justify="center">
          <v-row>
            <v-col
              class="cardsGrid"
              align="center"
              v-for="(starship, index) in this.starships"
              :key="index"
            >
              <flip-galactic-v-card>
                <template slot="front">
                  <galactic-v-card
                    :name="starship.name"
                    :cardImageUrl="starship.cardImageUrl"
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
              @input="addPageStarships()"
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
  name: 'Starships',
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
    starships: [],
    numberOfPages: 0,
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
  async mounted() {
    this.numberOfPages = await this.addPageStarships();
  },
  methods: {
    async addPageStarships(){
      return axios
        .get('https://swapi.dev/api/starships/?page=' + this.page)
        .then(async (response) => {
          this.starships = [];
          const apiStarships = response.data.results;
          apiStarships.map(async (starship) => {
            const id = getId(starship);
            await this.addStarshipInfo(starship, id);
            this.starships.push(starship);
          });
          return getNumberOfPages(response.data.count);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },

    async addStarshipInfo(starship, id){
      starship.infoUrl = 'https://starwars.fandom.com/wiki/' + starship.name;
      starship.cardImageUrl = await getImage('starships', id);
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