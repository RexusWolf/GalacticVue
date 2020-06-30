<template>
  <div v-bind:class="flipped ? 'flip-container flipped': 'flip-container'">
    <div class="flipper">
      <div class="front" v-on:click="flipped=true">
        <slot name="front"></slot>
        <galactic-v-card
          cardTitle="Luke Skywalker"
          cardSubtitle="JEDI MASTER"
          cardImageUrl="https://dreager1.files.wordpress.com/2010/11/lukeskywalkerwallpaper-777357.jpg"
          cardText="Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire.Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. "
          forceColor="lawngreen"
          infoUrl="https://starwars.fandom.com/wiki/Luke_Skywalker"
        ></galactic-v-card>
      </div>
      <div class="back" v-on:click="flipped=false">
        <slot name="back"></slot>
        <galactic-v-card-back forceColor="lawngreen"></galactic-v-card-back>
      </div>
    </div>
  </div>
</template>

<script>
import GalacticVCard from "./GalacticVCard";
import GalacticVCardBack from "./GalacticVCardBack";

export default {
  name: "FlipGalacticVCard",
  components: {
    GalacticVCard,
    GalacticVCardBack
  },
  data: function() {
    return {
      flipped: false
    };
  },
  props: []
};
</script>
<style type='text/css' scoped>
i.frontFlipBtn,
i.backFlipBtn {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ffffff;
}
i.backFlipBtn {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.flip-container {
  min-height: 120px;
}
.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
</style>