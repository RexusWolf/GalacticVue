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
        v-if="!this.loggedUser.user_id"
        color="white"
        tile
        depressed
        height="100%"
        class="black--text ml-0 mr-0"
        to="/signIn"
      >SIGN IN</galactic-v-button>
      <galactic-v-button
        v-if="!this.loggedUser.user_id"
        color="purple"
        depressed
        tile
        height="100%"
        class="ml-0 mr-0"
        to="/signUp"
      >SIGN UP</galactic-v-button>

      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs}">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-avatar size="40">
              <v-img :src="this.loggedUser.profilePicture.value"></v-img>
            </v-avatar>
            <v-list-item-title>SDDSs</v-list-item-title>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn tile height="100%" v-if="this.loggedUser.username" class="hidden-md-and-down">
        <v-avatar size="40" class="ma-3">
          <v-img :src="this.loggedUser.profilePicture.value"></v-img>
        </v-avatar>
        <v-list-item-title class="headline n2wwhite--text">{{this.loggedUser.username.value}}</v-list-item-title>
        <v-menu bottom left offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="d-flex flex-column pa-0 mt-1">
            <router-link to="/editProfile">
              <v-btn tile>Edit Profile</v-btn>
            </router-link>
            <v-btn tile @click="logOut">Logout</v-btn>
          </v-list>
        </v-menu>
      </v-btn>
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
      loggedUser: {
        firstName: { type: String, value: "Francis" },
        lastName: { type: String, value: "Molina" },
        username: { type: String, value: "rexuswolf" },
        email: { type: String, value: "myemail@gmail.com" },
        password: { type: String, value: "12345678" },
        user_id: { type: String, value: "12345" },
        country: { type: String, value: "Spain" },
        city: { type: String, value: "Cordoba" },
        profilePicture: {
          type: String,
          value: "https://randomuser.me/api/portraits/men/85.jpg"
        }
      }
    };
  }
};
</script>
<style scoped>
@import "../assets/fonts/fonts.css";
@import "../assets/styles/GalacticV.css";
</style>