<template>
  <div v-bind:class="flipped ? 'flip-container flipped': 'flip-container'">
    <div class="flipper">
      <div class="front" v-on:click="flipped=true">
        <slot name="front"></slot>
      </div>
      <div class="back" v-on:click="flipped=false">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipGalacticVCard",
  components: {},
  data: function () {
    return {
      flipped: false,
    };
  },
  props: [],
};
</script>
<style type='text/css' scoped>
@import "../assets/styles/FlipGalacticVCard.css";
</style>