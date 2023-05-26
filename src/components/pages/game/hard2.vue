<template>
  <div id="screen">
    <GameTemplate
    :title="difference"
    :myBestTurn="myBestTurn"
    :bestTurn="bestTurn"
    :displayedTurn="displayedTurn"
    :timerDisplay="timerDisplay"
    :isOverlayVisible="isOverlayVisible"
    :startGame="startGame"
    :isResultVisible="isResultVisible"
    :rankinMessage="rankinMessage"
    :difference="difference"
  >
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
            <div class="card__face card__face_hard card__face--back "></div>
            <div class="card__face card__face_hard card__face--front"></div>
          </div>
        </div>
      </div>
    </GameTemplate>
  </div>
</template>

<script>
import GameTemplate from "@/components/common/game/gameTemplate.vue";
import CardGameMixin from "@/components/pages/game/gameMixin.js";
import * as consts from '@/assets/js/const.js';

export default {
  mixins: [CardGameMixin],
  components: { GameTemplate },
  data() {
    return {
      difference: consts.GAME_LEVEL_HARD_2,
    };
  },
  methods: {
    getDifference() {
      return consts.GAME_LEVEL_HARD_2;
    },
    getShuffleCards() {
      return consts.HARD_2_CARDS_ARR;
    },
  },
};
</script>

<style scoped>
/* この難易度固有のスタイルを記載 */
#move-box {
  height: 90%;
  width: 90%;
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
.moving4,
.moving5,
.moving6,
.moving7,
.moving8,
.moving9,
.moving10,
.moving11,
.moving12 {
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.moving13,
.moving14,
.moving15,
.moving16 {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.moving1 {
  top: 0px;
  animation-name: moveClockwise1;
}

.moving2 {
  left: 180px;
  animation-name: moveClockwise2;
  
}

.moving3 {
  right: 180px;
  animation-name: moveClockwise3;
}

.moving4 {
  right: 0px;
  animation-name: moveClockwise4;
}

.moving5 {
  top: 180px;
  left: 0px;
  animation-name: moveClockwise5;
}

.moving6 {
  top: 180px;
  right: 0px;
  animation-name: moveClockwise6;
}

.moving7 {
  bottom: 180px;
  left: 0px;
  animation-name: moveClockwise7;
}

.moving8 {
  bottom: 180px;
  right: 0px;
  animation-name: moveClockwise8;
}

.moving9 {
  bottom: 0px;
  left: 0px;
  animation-name: moveClockwise9;
}

.moving10 {
  bottom: 0px;
  left: 180px;
  animation-name: moveClockwise10;
}

.moving11 {
  bottom: 0px;
  right: 180px;
  animation-name: moveClockwise11;
}

.moving12 {
  bottom: 0px;
  right: 0px;
  animation-name: moveClockwise12;
}

.moving13 {
  top: 120px;
  left: 265px;
  animation-name: moveClockwise13;
}

.moving14 {
  top: 240px;
  left: 150px;
  animation-name: moveClockwise14;
}

.moving15 {
  top: 240px;
  left: 380px;
  animation-name: moveClockwise15;
}

.moving16 {
  top: 360px;
  left: 265px;
  animation-name: moveClockwise16;
}

@keyframes moveClockwise1 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(0) translateX(180px);
  }
  66% {
    transform: translateY(180px) translateX(0);
  }
}

@keyframes moveClockwise2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(180px) translateX(-180px);
  }
  66% {
    transform: translateY(0) translateX(-180px);
  }
}

@keyframes moveClockwise3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(180px) translateX(180px);
  }
  66% {
    transform: translateY(0) translateX(180px);
  }
}

@keyframes moveClockwise4 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(0) translateX(-180px);
  }
  66% {
    transform: translateY(180px) translateX(0);
  }
}

@keyframes moveClockwise5 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-180px) translateX(0);
  }
  66% {
    transform: translateY(-180px) translateX(180px);
  }
}

@keyframes moveClockwise6 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-180px) translateX(0);
  }
  66% {
    transform: translateY(-180px) translateX(-180px);
  }
}

@keyframes moveClockwise7 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(180px) translateX(0);
  }
  66% {
    transform: translateY(180px) translateX(180px);
  }
}

@keyframes moveClockwise8 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(180px) translateX(0);
  }
  66% {
    transform: translateY(180px) translateX(-180px);
  }
}

@keyframes moveClockwise9 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(0) translateX(180px);
  }
  66% {
    transform: translateY(-180px) translateX(0);
  }
}

@keyframes moveClockwise10 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-180px) translateX(-180px);
  }
  66% {
    transform: translateY(0) translateX(-180px);
  }
}

@keyframes moveClockwise11 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-180px) translateX(180px);
  }
  66% {
    transform: translateY(0) translateX(180px);
  }
}

@keyframes moveClockwise12 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(0) translateX(-180px);
  }
  66% {
    transform: translateY(-180px) translateX(0);
  }
}

@keyframes moveClockwise13 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(120px) translateX(-115px);
  }
  50% {
    transform: translateY(240px) translateX(0);
  }
  75% {
    transform: translateY(120px) translateX(115px);
  }
}

@keyframes moveClockwise14 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(120px) translateX(115px);
  }
  50% {
    transform: translateY(0) translateX(230px);
  }
  75% {
    transform: translateY(-120px) translateX(115px);
  }
}

@keyframes moveClockwise15 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-120px) translateX(-115px);
  }
  50% {
    transform: translateY(0) translateX(-230px);
  }
  75% {
    transform: translateY(120px) translateX(-115px);
  }
}

@keyframes moveClockwise16 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-120px) translateX(115px);
  }
  50% {
    transform: translateY(-240px) translateX(0);
  }
  75% {
    transform: translateY(-120px) translateX(-115px);
  }
}
</style>