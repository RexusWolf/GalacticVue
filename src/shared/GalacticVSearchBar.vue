<template>
  <v-text-field
    class="mt-5 mr-4"
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