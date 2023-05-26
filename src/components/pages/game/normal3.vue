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
      difference: consts.GAME_LEVEL_NORMAL_3,
    };
  },
  methods: {
    getDifference() {
      return consts.GAME_LEVEL_NORMAL_3;
    },
    getShuffleCards() {
      return consts.NORMAL_3_CARDS_ARR;
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
.moving6,
.moving7,
.moving9,
.moving12 {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


.moving2,
.moving3,
.moving5,
.moving8,
.moving10,
.moving11 {
  animation-timing-function: linear;
  animation-duration: 1.2s, 8s; /* firstMoveの持続時間とmoveClockwiseの持続時間 */
  animation-delay: 0s, 1.2s; /* firstMoveがすぐに始まり、moveClockwiseが1秒後に始まる */
  animation-iteration-count: 1, infinite; /* firstMoveは1回だけ、moveClockwiseは無限に繰り返す */
}

.moving1 {
  top: 10px;
  left: 265px;
  animation-name: moveClockwise1;
}

.moving2 {
  top: 210px;
  left: 130px;
  animation-name: firstMove2, moveClockwise2;
}

.moving3 {
  top: 210px;
  right: 130px;
  animation-name: firstMove3, moveClockwise3;
}

.moving4 {
  top: 420px;
  left: 0px;
  animation-name: moveClockwise4;
}

.moving5 {
  top: 420px;
  left: 265px;
  animation-name: firstMove5, moveClockwise5;
}

.moving6 {
  top: 420px;
  right: 0px;
  animation-name: moveClockwise6;
}

.moving7 {
  top: 120px;
  left: 0px;
  animation-name: moveClockwise7;
}

.moving8 {
  top: 120px;
  left: 265px;
  animation-name: firstMove8, moveClockwise8;
}

.moving9 {
  top: 120px;
  right: 0px;
  animation-name: moveClockwise9;
}

.moving10 {
  top: 330px;
  left: 130px;
  animation-name: firstMove10, moveClockwise10;
}

.moving11 {
  top: 330px;
  right: 130px;
  animation-name: firstMove11, moveClockwise11;
}

.moving12 {
  top: 530px;
  right: 265px;
  animation-name: moveClockwise12;
}

@keyframes moveClockwise1 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(410px) translateX(265px);
  }
  66% {
    transform: translateY(410px) translateX(-265px);
  }
}

@keyframes firstMove2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-200px) translateX(120px);
  }
}

@keyframes moveClockwise2 {
  0%, 100% {
    transform: translateY(-200px) translateX(120px);
  }
  33% {
    transform: translateY(210px) translateX(425px);
  }
  66% {
    transform: translateY(210px) translateX(-105px);
  }
}

@keyframes firstMove3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(210px) translateX(120px);
  }
}

@keyframes moveClockwise3 {
  0%, 100% {
    transform: translateY(210px) translateX(120px);
  }
  33% {
    transform: translateY(210px) translateX(-385px);
  }
  66% {
    transform: translateY(-210px) translateX(-140px);
  }
}

@keyframes moveClockwise4 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-410px) translateX(265px);
  }
  66% {
    transform: translateY(0) translateX(530px);
  }
}

@keyframes firstMove5 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(-260px);
  }
}

@keyframes moveClockwise5 {
  0%, 100% {
    transform: translateY(0) translateX(-260px);
  }
  33% {
    transform: translateY(-410px) translateX(0);
  }
  66% {
    transform: translateY(0) translateX(260px);
  }
}

@keyframes moveClockwise6 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(0) translateX(-530px);
  }
  66% {
    transform: translateY(-410px) translateX(-265px);
  }
}

@keyframes moveClockwise7 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(410px) translateX(265px);
  }
  66% {
    transform: translateY(0) translateX(530px);
  }
}

@keyframes firstMove8 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(-260px);
  }
}

@keyframes moveClockwise8 {
  0%, 100% {
    transform: translateY(0) translateX(-260px);
  }
  33% {
    transform: translateY(410px) translateX(0);
  }
  66% {
    transform: translateY(0) translateX(270px);
  }
}

@keyframes moveClockwise9 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(0) translateX(-530px);
  }
  66% {
    transform: translateY(410px) translateX(-265px);
  }
}

@keyframes firstMove10 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(200px) translateX(120px);
  }
}

@keyframes moveClockwise10 {
  0%, 100% {
    transform: translateY(200px) translateX(120px);
  }
  33% {
    transform: translateY(-210px) translateX(385px);
  }
  66% {
    transform: translateY(-210px) translateX(-145px);
  }
}

@keyframes firstMove11 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-200px) translateX(120px);
  }
}

@keyframes moveClockwise11 {
  0%, 100% {
    transform: translateY(-200px) translateX(120px);
  }
  33% {
    transform: translateY(-200px) translateX(-385px);
  }
  66% {
    transform: translateY(210px) translateX(-145px);
  }
}

@keyframes moveClockwise12 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-410px) translateX(265px);
  }
  66% {
    transform: translateY(-410px) translateX(-265px);
  }
}
</style>