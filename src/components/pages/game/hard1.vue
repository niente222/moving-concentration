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
      difference: consts.GAME_LEVEL_HARD_1,
    };
  },
  methods: {
    getDifference() {
      return consts.GAME_LEVEL_HARD_1;
    },
    getShuffleCards() {
      return consts.HARD_1_CARDS_ARR;
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
.moving4,
.moving9,
.moving12 {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.moving2,
.moving6,
.moving7,
.moving11 {
  animation-timing-function: linear;
  animation-duration: 1.4s, 8s; /* firstMoveの持続時間とmoveClockwiseの持続時間 */
  animation-delay: 0s, 1.4s; /* firstMoveがすぐに始まり、moveClockwiseが1秒後に始まる */
  animation-iteration-count: 1, infinite; /* firstMoveは1回だけ、moveClockwiseは無限に繰り返す */
}

.moving3,
.moving5,
.moving8,
.moving10 {
  animation-timing-function: linear;
  animation-duration: 0.75s, 8s; /* firstMoveの持続時間とmoveClockwiseの持続時間 */
  animation-delay: 0s, 0.75s; /* firstMoveがすぐに始まり、moveClockwiseが1秒後に始まる */
  animation-iteration-count: 1, infinite; /* firstMoveは1回だけ、moveClockwiseは無限に繰り返す */
}

.moving13,
.moving15,
.moving18,
.moving20 {
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.moving1 {
  top: 0px;
  animation-name: moveClockwise1;
}

.moving2 {
  left: 175px;
  animation-name: firstMove2, moveClockwise2;
  
}

.moving3 {
  left: 350px;
  animation-name: firstMove3, moveClockwise3;
}

.moving4 {
  left: 525px;
  animation-name: firstMove4, moveClockwise4;
}

.moving5 {
  top: 175px;
  left: 0px;
  animation-name: firstMove5, moveClockwise5;
}

.moving6 {
  top: 175px;
  left: 525px;
  animation-name: firstMove6, moveClockwise6;
}

.moving7 {
  top: 350px;
  left: 0px;
  animation-name: firstMove7, moveClockwise7;
}

.moving8 {
  top: 350px;
  left: 525px;
  animation-name: firstMove8, moveClockwise8;
}

.moving9 {
  top: 525px;
  left: 0px;
  animation-name: moveClockwise9;
}

.moving10 {
  top: 525px;
  left: 175px;
  animation-name: firstMove10, moveClockwise10;
}

.moving11 {
  top: 525px;
  left: 350px;
  animation-name: firstMove11, moveClockwise11;
}

.moving12 {
  top: 525px;
  left: 525px;
  animation-name: moveClockwise12;
}

.moving13 {
  top: 130px;
  left: 130px;
  animation-name: moveClockwise13;
}

.moving14 {
  top: 130px;
  left: 260px;
  animation-name: moveClockwise14;
}

.moving15 {
  top: 130px;
  left: 390px;
  animation-name: moveClockwise15;
}

.moving16 {
  top: 260px;
  left: 130px;
  animation-name: moveClockwise16;
}

.moving17 {
  top: 260px;
  left: 390px;
  animation-name: moveClockwise17;
}

.moving18 {
  top: 390px;
  left: 130px;
  animation-name: moveClockwise18;
}

.moving19 {
  top: 390px;
  left: 260px;
  animation-name: moveClockwise19;
}

.moving20 {
  top: 390px;
  left: 390px;
  animation-name: moveClockwise20;
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
    transform: translateY(0) translateX(350px);
  }
}

@keyframes moveClockwise2 {
  0%, 100% {
    transform: translateY(0) translateX(350px);
  }
  25% {
    transform: translateY(525px) translateX(350px);
  }
  50% {
    transform: translateY(525px) translateX(-175px);
  }
  75% {
    transform: translateY(0) translateX(-175px);
  }
}

@keyframes firstMove3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(175px);
  }
}

@keyframes moveClockwise3 {
  0%, 100% {
    transform: translateY(0) translateX(175px);
  }
  25% {
    transform: translateY(525px) translateX(175px);
  }
  50% {
    transform: translateY(525px) translateX(-350px);
  }
  75% {
    transform: translateY(0) translateX(-350px);
  }
}

@keyframes moveClockwise4 {
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

@keyframes firstMove5 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-175px) translateX(0);
  }
}

@keyframes moveClockwise5 {
  0%, 100% {
    transform: translateY(-175px) translateX(0);
  }
  25% {
    transform: translateY(-175px) translateX(525px);
  }
  50% {
    transform: translateY(350px) translateX(525px);
  }
  75% {
    transform: translateY(350px) translateX(0);
  }
}

@keyframes firstMove6 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(350px) translateX(0);
  }
}

@keyframes moveClockwise6 {
  0%, 100% {
    transform: translateY(350px) translateX(0);
  }
  25% {
    transform: translateY(350px) translateX(-525px);
  }
  50% {
    transform: translateY(-175px) translateX(-525px);
  }
  75% {
    transform: translateY(-175px) translateX(0);
  }
}

@keyframes firstMove7 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-350px) translateX(0);
  }
}

@keyframes moveClockwise7 {
  0%, 100% {
    transform: translateY(-350px) translateX(0);
  }
  25% {
    transform: translateY(-350px) translateX(525px);
  }
  50% {
    transform: translateY(175px) translateX(525px);
  }
  75% {
    transform: translateY(175px) translateX(0);
  }
}

@keyframes firstMove8 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(175px) translateX(0);
  }
}

@keyframes moveClockwise8 {
  0%, 100% {
    transform: translateY(175px) translateX(0);
  }
  25% {
    transform: translateY(175px) translateX(-525px);
  }
  50% {
    transform: translateY(-350px) translateX(-525px);
  }
  75% {
    transform: translateY(-350px) translateX(0);
  }
}

@keyframes moveClockwise9 {
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

@keyframes firstMove10 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(-175px);
  }
}

@keyframes moveClockwise10 {
  0%, 100% {
    transform: translateY(0) translateX(-175px);
  }
  25% {
    transform: translateY(-525px) translateX(-175px);
  }
  50% {
    transform: translateY(-525px) translateX(350px);
  }
  75% {
    transform: translateY(0) translateX(350px);
  }
}

@keyframes firstMove11 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(-350px);
  }
}

@keyframes moveClockwise11 {
  0%, 100% {
    transform: translateY(0) translateX(-350px);
  }
  25% {
    transform: translateY(-525px) translateX(-350px);
  }
  50% {
    transform: translateY(-525px) translateX(175px);
  }
  75% {
    transform: translateY(0) translateX(175px);
  }
}

@keyframes moveClockwise12 {
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

@keyframes moveClockwise13 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(260px) translateX(0);
  }
  50% {
    transform: translateY(260px) translateX(260px);
  }
  75% {
    transform: translateY(0) translateX(260px);
  }
}

@keyframes moveClockwise15 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(-260px);
  }
  50% {
    transform: translateY(260px) translateX(-260px);
  }
  75% {
    transform: translateY(260px) translateX(0);
  }
}

@keyframes moveClockwise18 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(260px);
  }
  50% {
    transform: translateY(-260px) translateX(260px);
  }
  75% {
    transform: translateY(-260px) translateX(0);
  }
}

@keyframes moveClockwise20 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-260px) translateX(0);
  }
  50% {
    transform: translateY(-260px) translateX(-260px);
  }
  75% {
    transform: translateY(0) translateX(-260px);
  }
}
</style>