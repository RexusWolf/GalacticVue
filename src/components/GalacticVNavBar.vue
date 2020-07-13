<template>
  <div>
    <galactic-v-sidebar
      v-bind:class="{originalTheme: originalTheme, cloneTheme: cloneTheme, sithTheme: sithTheme}"
      v-model="sidebar"
      disable-resize-watcher
    ></galactic-v-sidebar>
    <v-app-bar app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <router-link to="/" class="hidden-md-and-down d-md-flex align-center n2w-logo">
        <v-img
          aria-label="Need2WatchLogo"
          to="https://stackoverflow.com/questions/55779555/vuetify-create-image-that-links-to-another-page"
        ></v-img>
      </router-link>
      <galactic-v-button
        height="100%"
        text
        class="hidden-sm-and-down"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span class="hidden-md-and-down">{{ item.title}}</span>
      </galactic-v-button>
      <v-spacer />
      <galactic-v-search-bar></galactic-v-search-bar>
      <v-btn to="/calendar" icon class="hidden-md-and-down primary">
        <v-icon color="secondary" size="40">mdi-calendar</v-icon>
      </v-btn>
      <v-btn depressed to="/signIn" class="ml-3 secondary">SIGN IN</v-btn>
      <v-btn depressed to="/signUp" class="secondary">SIGN UP</v-btn>
      <v-card flat class="transparent d-md-flex align-center hidden-md-and-down">
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
      sidebar: false,
      menuItems: [
        { title: "Movies", path: "/", icon: "mdi-movie" },
        {
          title: "TV Series",
          path: "/tvSeries",
          icon: "mdi-television-classic"
        },
        { title: "Contact Us", path: "/contactUs", icon: "mdi-email-outline" }
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
        { title: "Contact Us", path: "/contactUs", icon: "mdi-email-outline" }
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