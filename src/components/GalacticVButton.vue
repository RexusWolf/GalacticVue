<template>
  <v-btn
    v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, empireTheme: empireTheme, sithTheme: sithTheme}"
    v-bind="$attrs"
    class="starJediFont ma-1"
    :style="cssProps"
  >
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
      default: "deepskyblue"
    },
    originalTheme: {
      type: Boolean,
      default: false
    },
    cloneTheme: {
      type: Boolean,
      default: false
    },
    empireTheme: {
      type: Boolean,
      default: false
    },
    sithTheme: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        "--forceColor": this.forceColor
      };
    }
  }
};
</script>
<style scoped>
@import "../assets/fonts/fonts.css";
@import "../assets/styles/GalacticVButton.css";
</style>