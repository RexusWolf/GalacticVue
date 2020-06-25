<template>
  <v-card class="mx-auto galacticOutline" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="starJediFont mb-1 gvyellow--text">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "GalactivVCard",

  data: () => ({})
};
</script>
<style scoped>
@import "../assets/fonts/fonts.css";
.starJediFont {
  font-family: Starjedi !important;
}

.galacticOutline {
  border-color: yellow !important;
}
</style>
