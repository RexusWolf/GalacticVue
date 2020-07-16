<template>
  <v-text-field
    light
    class="pt-5 blue"
    v-bind:class="theme"
    v-bind="$attrs"
    @submit.prevent="submitSearch"
    placeholder="Search..."
    append-icon="mdi-magnify"
    v-on:keyup.enter="submitSearch"
  ></v-text-field>
</template>

<script>
export default {
  name: "GalacticVSearchBar",
  props: {
    theme: {
      type: String
    }
  }
};
</script>