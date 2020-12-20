<template>
  <div>
    <galactic-v-sidebar
      v-if="sidebar"
      v-bind:class="theme"
      v-bind:theme="theme"
      v-bind:sidebarItems="sidebarItems"
      v-model="sidebarOpen"
      disable-resize-watcher
      app
    ></galactic-v-sidebar>

    <v-app-bar dense v-bind:class="theme">
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon :light="isDarkTheme" @click.stop="sidebarOpen = !sidebarOpen"></v-app-bar-nav-icon>
      </span>
      <a
        to="/"
        class="hidden-md-and-down pa-4"
      >
        <v-img width="60px" src="https://cdn.iconscout.com/icon/free/png-512/starwars-6-569425.png"></v-img>
      </a>
      <galactic-v-button
        tile
        depressed
        color="transparent"
        v-bind:class="theme"
        height="100%"
        class="hidden-sm-and-down ml-0 mr-0"
        v-for="item in navBarItems"
        :key="item.title"
        :to="item.path"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span class="hidden-md-and-down">{{ item.title}}</span>
      </galactic-v-button>
      <v-spacer />
      <galactic-v-search-bar :light="isDarkTheme"></galactic-v-search-bar>
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
          <v-btn
            color="transparent"
            tile
            depressed
            v-bind:class="theme"
            height="100%"
            v-on="on"
            v-if="loggedUser.username"
            class="hidden-md-and-down"
          >
            <v-avatar size="40" class="mr-3">
              <v-img :src="loggedUser.profilePicture.value"></v-img>
            </v-avatar>
            <v-list-item-title>{{loggedUser.username.value}}</v-list-item-title>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="d-flex flex-column pa-0 mt-1">
          <galactic-v-button
            v-bind:class="theme"
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
            class="mx-0 my-0"
            tile
          >{{item.title}}</galactic-v-button>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import GalacticVSidebar from "./GalacticVSidebar";
import GalacticVButton from "./GalacticVButton";
import GalacticVSearchBar from "./GalacticVSearchBar";
export default {
  name: "GalacticVNavBar",
  components: { GalacticVButton, GalacticVSidebar, GalacticVSearchBar },
  props: {
    sidebar: {
      type: Boolean,
      default: false
    },
    forceColor: {
      type: String,
      required: false,
      default: "deepskyblue"
    },
    username: {
      type: String,
      default: "rexuswolf"
    },
    theme: {
      type: String
    }
  },
  computed: {
    isDarkTheme: function() {
      if (this.theme == "empireTheme") {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      sidebarOpen: false,
      navBarItems: [
        { title: "Characters", path: "/", icon: "mdi-account" },
        {
          title: "Planets",
          path: "/planets",
          icon: "mdi-earth"
        },
        { title: "Vehicles", path: "/vehicles", icon: "mdi-rocket" }
      ],
      menuItems: [
        { title: "View Profile", path: "/viewProfile" },
        { title: "Edit Profile", path: "/editProfile" },
        { title: "Settings", path: "/settings" },
        { title: "Log Out", path: "/logOut" }
      ],
      sidebarItems: [
        { title: "My Profile", path: "/myProfile", icon: "mdi-account" },
        { title: "Calendar", path: "/calendar", icon: "mdi-calendar" },
        { title: "Characters", path: "/", icon: "mdi-account" },
        {
          title: "Planets",
          path: "/planets",
          icon: "mdi-earth"
        },
        { title: "Vehicles", path: "/vehicles", icon: "mdi-rocket" }
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