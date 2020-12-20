<template>
      <v-container fill-height>
        <v-row class="fill-height" align="center" justify="center">
          <v-row>
            <v-col
              class="cardsGrid"
              align="center"
              v-for="(character, index) in this.characters"
              :key="index"
            >
              <flip-galactic-v-card>
                <template slot="front">
                  <galactic-v-card
                    :name="character.name"
                    :homeworld="character.homeworld.toUpperCase()"
                    :cardImageUrl="character.cardImageUrl"
                    :forceColor="character.forceColor"
                    :infoUrl="character.infoUrl"
                  ></galactic-v-card>
                </template>
                <template slot="back">
                  <galactic-v-card-back
                    :height="character.height"
                    :mass="character.mass"
                    :hairColor="character.hair_color"
                    :skinColor="character.skin_color"
                    :eyeColor="character.eye_color"
                    :homeworld="character.homeworld"
                    :birthYear="character.birth_year"
                    :gender="character.gender"
                    :starship="character.starship"
                    :species="character.species"
                    :forceColor="character.forceColor"
                    :backImageUrl="character.backImageUrl"
                  ></galactic-v-card-back>
                </template>
              </flip-galactic-v-card>
            </v-col>
          </v-row>
          <v-col>
            <v-pagination
              v-model="page"
              :length="8"
              @input="addPageCharacters()"
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
  name: 'Characters',
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
    characters: [],
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
  async mounted() {
    await this.addPageCharacters();
  },
  methods: {
    async addPageCharacters(){
      axios
      .get('https://swapi.dev/api/people/?page=' + this.page)
      .then(async (response) => {
        this.characters = [];
        const apiCharacters = response.data.results;
        apiCharacters.map(async (character) => {
          const id = this.getId(character);
          await this.addCharacterInfo(character, id);
          this.characters.push(character);
        });
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
    },

    async addCharacterInfo(character, id){
      character.forceColor = character.eye_color;
      character.infoUrl = 'https://starwars.fandom.com/wiki/' + character.name;
      character.cardImageUrl = await this.getImage('people', id);
      
      await this.addHomeworld(character)
      
      await this.addSpecie(character)

      await this.addStarship(character)
    },

    async getImage(type, id){
      const storage = await firebase.storage();
      const imgPath = type + '/' + id + '.jpg';
      const imgUrl = await storage.ref(imgPath).getDownloadURL();
      return imgUrl;
    },

    getId(character){
      const id = character.url.match((/\d+/))[0];
      return id;
    },

    async addSpecie(character){
      const species = character.species;
      delete character.species;
      if(species.length > 0){
        const specieUrl = species[0];
        const securedSpecieUrl = await specieUrl.replace('http://','https://');
        character.species = await this.getSpecie(securedSpecieUrl);
      }
    },

    async addHomeworld(character){
      if(character.homeworld){
        const homeworldRef = character.homeworld;
        const securedHomeworldUrl = await homeworldRef.replace('http://','https://');
        character.homeworld = await this.getHomeworld(securedHomeworldUrl);
      }
    },

    async addStarship(character){
      const starships = character.starships;
      delete character.starships;
      if(starships.length > 0){
        const starshipUrl = starships[0];
        const securedStarshipUrl = await starshipUrl.replace('http://','https://');
        character.starship = await this.getStarship(securedStarshipUrl);
      }
    },

    async getHomeworld(homeworldRef){
      return axios
        .get(homeworldRef)
        .then((response) => {
          if(response.data.name){
            const homeworld = response.data.name;
            return homeworld;
          }
          return 'UNKNOWN';
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },

    async getSpecie(specieRef){
      return axios
        .get(specieRef)
        .then((response) => {
          return response.data.name;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },

    async getStarship(starshipRef){
      return axios
        .get(starshipRef)
        .then((response) => {
          return response.data.name;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    }
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