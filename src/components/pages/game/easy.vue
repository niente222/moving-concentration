<template>
  <div id="screen">
    <div id="info-container">
      <div id="title-text">EASY 1</div>
      <div id="my-best-text">自己ベスト： {{ myBestTurn }}</div>
      <div id="best-text">一位： {{ bestTurn }}</div>
    </div>
    <div id="turn-text">TURN {{ displayedTurn }}</div>
    <div id="timer">{{ timerDisplay }}</div>
    <div id="game-board">
      <div id="overlay" v-show="isOverlayVisible" @click="startGame">
        <div id="start-message">画面をクリックしてスタート</div>
      </div>
      <div id="result" v-show="isResultVisible">
        <div id="result-content">
          <p>ターン数: {{ displayedTurn }}</p>
          <p>クリアタイム: {{ timerDisplay }}</p>
        </div>
      </div>
      <div id="move-box">
        <div
          v-for="(card, index) in displayedCards"
          :key="index"
          class="moving"
          :class="['moving' + (index+1)]"
        >
          <div
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
#game-board {
  height: 700px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #704214;
}

#move-box {
  height: 400px;
  width: 400px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
  margin: auto;
}

.moving1,
.moving2,
.moving3,
.moving4 {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.moving1 {
  top: 0px;
  animation-name: moveClockwise1;
}

.moving2 {
  right: 0px;
  animation-name: moveClockwise2;
}

.moving3 {
  bottom: 0px;
  animation-name: moveClockwise3;
}

.moving4 {
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