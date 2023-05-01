<template>
  <div id="screen">
    <div id="title-text">EASY 1</div>
    <div id="turn-text">TURN {{ displayedTurn }}</div>
    <div id="game-board">
      <div
        v-for="(card, index) in displayedCards"
        :key="index"
        class="card"
        :class="['card' + (index+1), { 'is-flipped': card.isFlipped }]"
        :data-card-id="card.id"
        @click="onCardClick"
      >
        <div class="card__face card__face--back"></div>
        <div class="card__face card__face--front"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CardGameMixin from "@/components/pages/game/gameMixin.js";
import * as consts from "@/assets/js/const.js";

export default {
  mixins: [CardGameMixin],
  data() {
    return {
      cardsArray: consts.EASY_CARDS_ARR,
      animationDelays: consts.EASY_ANIM_DILAYS,
    };
  },
};
</script>

<style>

.card1,
.card2,
.card3,
.card4 {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.card1 {
  top: 0px;
  animation-name: moveClockwise1;
}

.card2 {
  right: 0px;
  animation-name: moveClockwise2;
}

.card3 {
  bottom: 0px;
  animation-name: moveClockwise3;
}

.card4 {
  right: 0px;
  bottom: 0px;
  animation-name: moveClockwise4;
}

@keyframes moveClockwise1 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(280px);
  }
  50% {
    transform: translateY(280px) translateX(280px);
  }
  75% {
    transform: translateY(280px) translateX(0);
  }
}

@keyframes moveClockwise2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(280px) translateX(0);
  }
  50% {
    transform: translateY(280px) translateX(-280px);
  }
  75% {
    transform: translateY(0) translateX(-280px);
  }
}

@keyframes moveClockwise3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-280px) translateX(0);
  }
  50% {
    transform: translateY(-280px) translateX(280px);
  }
  75% {
    transform: translateY(0) translateX(280px);
  }
}

@keyframes moveClockwise4 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(-280px);
  }
  50% {
    transform: translateY(-280px) translateX(-280px);
  }
  75% {
    transform: translateY(-280px) translateX(0);
  }
}
</style>