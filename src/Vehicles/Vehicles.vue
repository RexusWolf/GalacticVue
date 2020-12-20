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
          <v-col>
            <v-pagination
              v-model="page"
              :length="2"
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
import firebase from 'firebase';

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
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
  async mounted() {
    await this.addPageVehicles();
  },
  methods: {
    async addPageVehicles(){
      axios
      .get('https://swapi.dev/api/vehicles/?page=' + this.page)
      .then(async (response) => {
        this.vehicles = [];
        const apiVehicles = response.data.results;
        apiVehicles.map(async (vehicle) => {
          const id = this.getId(vehicle);
          await this.addVehicleInfo(vehicle, id);
          this.vehicles.push(vehicle);
        });
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
    },

    async addVehicleInfo(vehicle, id){
      vehicle.infoUrl = 'https://starwars.fandom.com/wiki/' + vehicle.name;
      vehicle.cardImageUrl = await this.getImage('vehicles', id);
    },

    async getImage(type, id){
      const storage = await firebase.storage();
      const imgPath = type + '/' + id + '.jpg';
      const imgUrl = await storage.ref(imgPath).getDownloadURL();
      return imgUrl;
    },

    getId(vehicle){
      const id = vehicle.url.match((/\d+/))[0];
      return id;
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