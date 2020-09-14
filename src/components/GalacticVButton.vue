<template>
  <v-btn v-bind:class="theme" v-bind="$attrs" class="starJediFont" :style="cssProps">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "GalacticVButton",
  props: {
    forceColor: {
      type: String,
      required: true,
      default: "deepskyblue",
    },
    theme: {
      type: String,
    },
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        "--forceColor": this.forceColor,
      };
    },
  },
};
</script>
<style scoped>
@import "../assets/fonts/fonts.css";
@import "../assets/styles/GalacticVButton.css";
@import "../assets/styles/GalacticV.css";
</style>