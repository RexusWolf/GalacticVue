<template>
      <v-container fill-height>
        <v-row class="fill-height" align="center" justify="center">
            <v-col
              class="cardsGrid"
              align="center"
              v-for="(card, index) in this.cards"
              :key="index"
            >
              <galactic-v-card
                :name="card.name"
                :cardImageUrl="card.cardImageUrl"
              ></galactic-v-card>
            </v-col>
        </v-row>
      </v-container>
</template>

<script>
import GalacticVCard from '../shared/GalacticVCard';

export default {
  name: 'Home',
  props: {
    selectedTheme: {
      type: String,
      default: 'originalTheme',
    },
  },
  components: {
    GalacticVCard,
  },
  data: () => ({
    themes: ['originalTheme', 'cloneTheme', 'sithTheme', 'empireTheme'],
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
    cards: [
      {name: 'Characters', cardImageUrl: 'https://firebasestorage.googleapis.com/v0/b/galacticvue.appspot.com/o/people%2F5.jpg?alt=media&token=aca02001-e7f5-4c5c-a12a-c24b9957c664'},
      {name: 'Planets', cardImageUrl: 'https://firebasestorage.googleapis.com/v0/b/galacticvue.appspot.com/o/planets%2F13.jpg?alt=media&token=eadb5fea-b734-4d37-a61a-8c39f2b2914a'},
      {name: 'Vehicles', cardImageUrl: 'https://firebasestorage.googleapis.com/v0/b/galacticvue.appspot.com/o/vehicles%2F19.jpg?alt=media&token=add4ad30-3277-4fdc-aa13-709bf912532d'}
    ]
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