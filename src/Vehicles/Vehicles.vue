<template>
      <v-container fill-height>
        <v-row class="fill-height" align="center" justify="center">
          <v-row>
            <v-col
              class="cardsGrid"
              align="center"
              v-for="(vehicle, index) in this.vehicles"
              :key="index"
            >
              <flip-galactic-v-card>
                <template slot="front">
                  <galactic-v-card
                    :name="vehicle.name"
                    :cardImageUrl="vehicle.cardImageUrl"
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
              @input="addPageVehicles()"
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
  name: 'Vehicles',
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
    vehicles: [],
    numberOfPages: 0,
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
  async mounted() {
    this.numberOfPages = await this.addPageVehicles();
  },
  methods: {
    async addPageVehicles(){
      return axios
        .get('https://swapi.dev/api/vehicles/?page=' + this.page)
        .then(async (response) => {
          this.vehicles = [];
          const apiVehicles = response.data.results;
          apiVehicles.map(async (vehicle) => {
            const id = getId(vehicle);
            await this.addVehicleInfo(vehicle, id);
            this.vehicles.push(vehicle);
          });
          return getNumberOfPages(response.data.count);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },

    async addVehicleInfo(vehicle, id){
      vehicle.infoUrl = 'https://starwars.fandom.com/wiki/' + vehicle.name;
      vehicle.cardImageUrl = await getImage('vehicles', id);
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