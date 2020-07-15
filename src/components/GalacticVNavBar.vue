<template>
  <div>
    <galactic-v-sidebar
      v-if="sidebar"
      v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
      v-bind:sidebarItems="sidebarItems"
      v-model="sidebarOpen"
      disable-resize-watcher
      app
    ></galactic-v-sidebar>

    <v-app-bar dense>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click.stop="sidebarOpen = !sidebarOpen"></v-app-bar-nav-icon>
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

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn tile height="100%" v-on="on" v-if="loggedUser.username" class="hidden-md-and-down">
            <v-avatar size="40" class="mr-3">
              <v-img :src="loggedUser.profilePicture.value"></v-img>
            </v-avatar>
            <v-list-item-title>{{loggedUser.username.value}}</v-list-item-title>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="d-flex flex-column pa-0 mt-1">
          <galactic-v-button
            v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
            class="mx-0 my-0"
            to="/myProfile"
            tile
          >View Profile</galactic-v-button>
          <galactic-v-button
            v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
            class="mx-0 my-0"
            to="/editProfile"
            tile
          >Edit Profile</galactic-v-button>
          <galactic-v-button
            v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
            class="mx-0 my-0"
            to="/settings"
            tile
          >Settings</galactic-v-button>
          <galactic-v-button
            v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
            class="mx-0 my-0"
            tile
            @click="logOut"
          >Logout</galactic-v-button>
        </v-list>
      </v-menu>
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