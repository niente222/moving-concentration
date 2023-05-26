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
            <div class="card__face card__face_normal card__face--back "></div>
            <div class="card__face card__face_normal card__face--front"></div>
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
      difference: consts.GAME_LEVEL_NORMAL_1,
    };
  },
  methods: {
    getDifference() {
      return consts.GAME_LEVEL_NORMAL_1;
    },
    getShuffleCards() {
      return consts.NORMAL_1_CARDS_ARR;
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
.moving3,
.moving6,
.moving8,
.moving9,
.moving10,
.moving11,
.moving12 {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.moving2,
.moving4,
.moving5,
.moving7 {
  animation-timing-function: linear;
  animation-duration: 1s, 8s; /* firstMoveの持続時間とmoveClockwiseの持続時間 */
  animation-delay: 0s, 1s; /* firstMoveがすぐに始まり、moveClockwiseが1秒後に始まる */
  animation-iteration-count: 1, infinite; /* firstMoveは1回だけ、moveClockwiseは無限に繰り返す */
}

.moving1 {
  top: 0px;
  animation-name: moveClockwise1;
}

.moving2 {
  right: 265px;
  animation-name: firstMove2, moveClockwise2;
  
}

.moving3 {
  right: 0px;
  animation-name: moveClockwise3;
}

.moving4 {
  top: 265px;
  animation-name: firstMove4, moveClockwise4;
}

.moving5 {
  top: 265px;
  right: 0px;
  animation-name: firstMove5, moveClockwise5;
}

.moving6 {
  left: 0px;
  bottom: 0px;
  animation-name: moveClockwise6;
}

.moving7 {
  left: 265px;
  bottom: 0px;
  animation-name: firstMove7, moveClockwise7;
}

.moving8 {
  right: 0px;
  bottom: 0px;
  animation-name: moveClockwise8;
}

.moving9 {
  left: 175px;
  top: 175px;
  animation-name: moveClockwise9;
}

.moving10 {
  right: 175px;
  top: 175px;
  animation-name: moveClockwise10;
}

.moving11 {
  left: 175px;
  bottom: 175px;
  animation-name: moveClockwise11;
}

.moving12 {
  right: 175px;
  bottom: 175px;
  animation-name: moveClockwise12;
}

@keyframes moveClockwise1 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(525px);
  }
  50% {
    transform: translateY(525px) translateX(525px);
  }
  75% {
    transform: translateY(525px) translateX(0);
  }
}

@keyframes firstMove2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(265px);
  }
}

@keyframes moveClockwise2 {
  0%, 100% {
    transform: translateY(0) translateX(265px);
  }
  25% {
    transform: translateY(525px) translateX(265px);
  }
  50% {
    transform: translateY(525px) translateX(-260px);
  }
  75% {
    transform: translateY(0) translateX(-260px);
  }
}

@keyframes moveClockwise3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(525px) translateX(0);
  }
  50% {
    transform: translateY(525px) translateX(-525px);
  }
  75% {
    transform: translateY(0) translateX(-525px);
  }
}

@keyframes firstMove4 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-265px) translateX(0);
  }
}

@keyframes moveClockwise4 {
  0%, 100% {
    transform: translateY(-260px) translateX(0);
  }
  25% {
    transform: translateY(-260px) translateX(525px);
  }
  50% {
    transform: translateY(265px) translateX(525px);
  }
  75% {
    transform: translateY(265px) translateX(0);
  }
}

@keyframes firstMove5 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(265px) translateX(0);
  }
}

@keyframes moveClockwise5 {
  0%, 100% {
    transform: translateY(265px) translateX(0);
  }
  25% {
    transform: translateY(265px) translateX(-525px);
  }
  50% {
    transform: translateY(-260px) translateX(-525px);
  }
  75% {
    transform: translateY(-260px) translateX(0);
  }
}

@keyframes moveClockwise6 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-525px) translateX(0);
  }
  50% {
    transform: translateY(-525px) translateX(525px);
  }
  75% {
    transform: translateY(0) translateX(525px);
  }
}

@keyframes firstMove7 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(-265px);
  }
}

@keyframes moveClockwise7 {
  0%, 100% {
    transform: translateY(0) translateX(-260px);
  }
  25% {
    transform: translateY(-525px) translateX(-260px);
  }
  50% {
    transform: translateY(-525px) translateX(265px);
  }
  75% {
    transform: translateY(0) translateX(265px);
  }
}

@keyframes moveClockwise8 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(-525px);
  }
  50% {
    transform: translateY(-525px) translateX(-525px);
  }
  75% {
    transform: translateY(-525px) translateX(0);
  }
}

@keyframes moveClockwise9 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(180px) translateX(0);
  }
  50% {
    transform: translateY(180px) translateX(180px);
  }
  75% {
    transform: translateY(0) translateX(180px);
  }
}

@keyframes moveClockwise10 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(-180px);
  }
  50% {
    transform: translateY(180px) translateX(-180px);
  }
  75% {
    transform: translateY(180px) translateX(0);
  }
}

@keyframes moveClockwise11 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(180px);
  }
  50% {
    transform: translateY(-180px) translateX(180px);
  }
  75% {
    transform: translateY(-180px) translateX(0);
  }
}

@keyframes moveClockwise12 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-180px) translateX(0);
  }
  50% {
    transform: translateY(-180px) translateX(-180px);
  }
  75% {
    transform: translateY(0) translateX(-180px);
  }
}
</style>