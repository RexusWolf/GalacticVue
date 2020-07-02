<template>
  <v-navigation-drawer
    v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
    v-bind="$attrs"
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
  >
    <v-list>
      <v-list-item>
        <v-btn right fixed icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
            class="starJediFont"
          >{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "GalacticVSidebar",
  components: {},
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
    sithTheme: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: true,
      mini: false,
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
@import "../assets/styles/GalacticV.css";
</style>