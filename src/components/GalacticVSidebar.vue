<template>
  <v-card class="mx-auto" height="400" width="256">
    <v-navigation-drawer class permanent>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <galactic-v-button block>Logout</galactic-v-button>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import GalacticVButton from "./GalacticVButton";
export default {
  name: "GalacticVSidebar",
  components: {
    GalacticVButton
  },
  props: {
    forceColor: {
      type: String,
      required: true,
      default: "deepskyblue"
    }
  },
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" }
      ]
    };
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
@import "../assets/styles/GalacticVCard.css";
</style>