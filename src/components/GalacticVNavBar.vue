<template>
  <div>
    <galactic-v-sidebar
      v-if="sidebar"
      v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
      v-bind:sidebarItems="sidebarItems"
      v-model="sidebarOpen"
      disable-resize-watcher
    ></galactic-v-sidebar>

    <v-app-bar dense>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebarOpen = !sidebarOpen"></v-app-bar-nav-icon>
      </span>
      <a
        href="https://github.com/RexusWolf/GalacticVue"
        target="_blank"
        class="hidden-md-and-down pa-4"
      >
        <v-img width="60px" src="https://cdn.iconscout.com/icon/free/png-512/starwars-6-569425.png"></v-img>
      </a>
      <galactic-v-button
        tile
        depressed
        height="100%"
        class="hidden-sm-and-down ml-0 mr-0"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span class="hidden-md-and-down">{{ item.title}}</span>
      </galactic-v-button>
      <v-spacer />
      <galactic-v-search-bar></galactic-v-search-bar>
      <galactic-v-button
        color="white"
        tile
        depressed
        height="100%"
        class="black--text ml-0 mr-0"
        to="/signIn"
      >SIGN IN</galactic-v-button>
      <galactic-v-button
        color="purple"
        depressed
        tile
        height="100%"
        class="ml-0 mr-0"
        to="/signUp"
      >SIGN UP</galactic-v-button>

      <v-card v-if="userId" flat class="transparent d-md-flex align-center hidden-md-and-down">
        <v-list-item class="decoration-none white--text">
          <router-link to="/profile">
            <v-avatar size="50" class="nav-bar-avatar"></v-avatar>
          </router-link>
          <router-link to="/profile">
            <v-list-item-title class="headline n2wwhite--text">rexuswolf</v-list-item-title>
          </router-link>
          <v-menu class="secondary" bottom left offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list class="secondary d-flex flex-column">
              <v-list-item>
                <router-link to="/editProfile">
                  <v-btn class="secondary" text width="100%">Edit Profile</v-btn>
                </router-link>
              </v-list-item>
              <v-list-item>
                <v-btn class="secondary" text width="100%" @click="logOut">Logout</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-card>
    </v-app-bar>
  </div>
</template>

<script>
import GalacticVSidebar from "./GalacticVSidebar";
import GalacticVSearchBar from "./GalacticVSearchBar";
import GalacticVButton from "./GalacticVButton";
export default {
  name: "GalacticVNavBar",
  components: { GalacticVSearchBar, GalacticVButton, GalacticVSidebar },
  props: {
    sidebar: {
      type: Boolean,
      default: false
    },
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
    },
    username: {
      type: String,
      default: "rexuswolf"
    }
  },
  data() {
    return {
      sidebarOpen: false,
      menuItems: [
        { title: "Movies", path: "/", icon: "mdi-movie" },
        {
          title: "TV Series",
          path: "/tvSeries",
          icon: "mdi-television-classic"
        },
        { title: "Collection", path: "/collection", icon: "mdi-database" }
      ],
      sidebarItems: [
        {
          title: "Calendar",
          path: "/calendar",
          icon: "mdi-calendar"
        },
        { title: "Movies", path: "/", icon: "mdi-movie" },
        {
          title: "TV Series",
          path: "/tvSeries",
          icon: "mdi-television-classic"
        },
        { title: "Collection", path: "/collection", icon: "mdi-database" }
      ],
      items: [{ title: "Edit Profile", path: "/editProfile" }]
    };
  },
  methods: {}
};
</script>
<style scoped>
@import "../assets/fonts/fonts.css";
@import "../assets/styles/GalacticV.css";
</style>