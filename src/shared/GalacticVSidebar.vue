<template>
  <v-navigation-drawer
    v-bind:class="theme"
    v-bind="$attrs"
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
  >
    <v-list-item class="pa-0">
      <v-list-item-content class="pa-0">
        <galactic-v-button
          class="ml-0 my-0"
          v-for="item in this.sidebarItems"
          :key="item.title"
          tile
          color="transparent"
          depressed
          v-bind:class="theme"
          height="50px"
          :to="item.path"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <span>{{ item.title}}</span>
        </galactic-v-button>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import GalacticVButton from "./GalacticVButton";
export default {
  name: "GalacticVSidebar",
  components: { GalacticVButton },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    forceColor: {
      type: String,
      required: false,
      default: "deepskyblue"
    },
    theme: {
      type: String
    },
    username: {
      type: String,
      default: "rexuswolf"
    },
    sidebarItems: {
      type: Array
    }
  },
  data() {
    return {};
  },
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
@import "../assets/styles/GalacticV.css";
@import "../assets/styles/GalacticVSidebar.css";
@import "../assets/styles/GalacticVButton.css";
</style>