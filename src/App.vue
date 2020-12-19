<template>
  <v-app>
    <galactic-v-nav-bar
      sidebar
      v-bind:theme="selectedTheme"
    ></galactic-v-nav-bar>
    <v-main>
      <v-container fill-height>
        <v-row class="fill-height" align="center" justify="center">
          <v-col align="center" cols="6">
            <p class="text-h4">Actual theme is: {{ this.selectedTheme }}</p>
            <v-select
              placeholder="Select theme..."
              v-model="selectedTheme"
              :items="themes"
            ></v-select>
          </v-col>
          <v-row>
            <v-col
              align="center"
              cols="12"
              md="12"
              lg="6"
              xl="3"
              v-for="(card, index) in this.cards"
              :key="index"
            >
              <flip-galactic-v-card>
                <template slot="front">
                  <galactic-v-card
                    :cardTitle="card.cardTitle"
                    :cardSubtitle="card.cardSubtitle"
                    :cardImageUrl="card.cardImageUrl"
                    :cardText="card.cardText"
                    :forceColor="card.forceColor"
                    :infoUrl="card.infoUrl"
                  ></galactic-v-card>
                </template>
                <template slot="back">
                  <galactic-v-card-back
                    :forceColor="card.forceColor"
                    :backImageUrl="card.backImageUrl"
                  ></galactic-v-card-back>
                </template>
              </flip-galactic-v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              align="center"
              cols="12"
              sm="6"
              md="3"
              v-for="(button, index) in buttons"
              :key="index"
            >
              <galactic-v-button
                :outlined="button.outlined"
                :theme="button.theme"
                v-text="button.text"
              ></galactic-v-button>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FlipGalacticVCard from './components/FlipGalacticVCard';
import GalacticVCard from './components/GalacticVCard';
import GalacticVCardBack from './components/GalacticVCardBack';
import GalacticVButton from './components/GalacticVButton';
import GalacticVNavBar from './components/GalacticVNavBar';

export default {
  name: 'App',
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
    GalacticVButton,
    GalacticVNavBar,
  },
  data: () => ({
    themes: ['originalTheme', 'cloneTheme', 'sithTheme', 'empireTheme'],
    cards: [
      {
        cardTitle: 'Darth Maul',
        cardSubtitle: 'SITH',
        cardImageUrl:
          'https://sm.ign.com/t/ign_latam/screenshot/default/darthmaul-1_a2ev.1280.jpg',
        cardText:
          'Maul was a Force-sensitive Dathomirian Zabrak male and dark side warrior who served as the apprentice Dark Lord of the Sith Darth Maul during the final years of the Galactic Republic and reigned as a crime lord during the rule of the Galactic Empire. ',
        forceColor: 'red',
        infoUrl: 'https://starwars.fandom.com/wiki/Maul',
        backImageUrl:
          'https://i.pinimg.com/originals/e7/a0/55/e7a0550a21ffc8933f26526a57254265.jpg',
      },
      {
        forceColor: 'deepskyblue',
        backImageUrl:
          'https://i.pinimg.com/originals/37/85/73/37857333246ddda79c349dd0aa500a01.jpg',
      },
      {
        cardTitle: 'Luke Skywalker',
        cardSubtitle: 'JEDI MASTER',
        cardImageUrl:
          'https://dreager1.files.wordpress.com/2010/11/lukeskywalkerwallpaper-777357.jpg',
        cardText:
          'Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire.',
        forceColor: 'lawngreen',
        infoUrl: 'https://starwars.fandom.com/wiki/Luke_Skywalker',
        backImageUrl:
          'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/curiosidades.batanga.com/files/Segun-la-ciencia-la-princesa-Leia-es-mayor-que-Luke-Skywalker-a-pesar-de-ser-su-hermana-melliza-0.jpeg',
      },
      {
        cardTitle: 'Leia Skywalker',
        cardSubtitle: 'JEDI MASTER',
        cardImageUrl: 'https://pbs.twimg.com/media/ESh6iqRXQAA2ADi.jpg',
        cardText:
          'Leia Skywalker, a Force-sensitive human female, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire.',
        forceColor: 'royalblue',
        infoUrl: 'https://starwars.fandom.com/wiki/Luke_Skywalker',
        backImageUrl:
          'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/curiosidades.batanga.com/files/Segun-la-ciencia-la-princesa-Leia-es-mayor-que-Luke-Skywalker-a-pesar-de-ser-su-hermana-melliza-0.jpeg',
      },
    ],
    buttons: [
      { outlined: true, theme: 'originalTheme', text: 'ORIGINAL OUTLINED' },
      { outlined: false, theme: 'cloneTheme', text: 'CLONES' },
      { outlined: true, theme: 'sithTheme', text: 'SITH OUTLINED' },
      { outlined: false, theme: 'empireTheme', text: 'EMPIRE' },
    ],
  }),
};
</script>
