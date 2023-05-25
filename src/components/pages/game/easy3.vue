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
            <div class="card__face card__face--back"></div>
            <div class="card__face card__face--front"></div>
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
      difference: consts.GAME_LEVEL_EASY_3,
    };
  },
  methods: {
    getDifference() {
      return consts.GAME_LEVEL_EASY_3;
    },
    getShuffleCards() {
      return consts.EASY_3_CARDS_ARR;
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
.moving8 {
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

.moving5 {
  left: 150px;
  top: 150px;
  animation-name: moveClockwise5;
}

.moving6 {
  right: 150px;
  top: 150px;
  animation-name: moveClockwise6;
}

.moving7 {
  left: 150px;
  bottom: 150px;
  animation-name: moveClockwise7;
}

.moving8 {
  right: 150px;
  bottom: 150px;
  animation-name: moveClockwise8;
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

@keyframes moveClockwise2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(-525px);
  }
  50% {
    transform: translateY(525px) translateX(-525px);
  }
  75% {
    transform: translateY(525px) translateX(0);
  }
}

@keyframes moveClockwise3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(525px);
  }
  50% {
    transform: translateY(-525px) translateX(525px);
  }
  75% {
    transform: translateY(-525px) translateX(0);
  }
}

@keyframes moveClockwise4 {
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

@keyframes moveClockwise5 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(230px) translateX(0);
  }
  50% {
    transform: translateY(230px) translateX(230px);
  }
  75% {
    transform: translateY(0) translateX(230px);
  }
}

@keyframes moveClockwise6 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(230px) translateX(0);
  }
  50% {
    transform: translateY(230px) translateX(-230px);
  }
  75% {
    transform: translateY(0) translateX(-230px);
  }
}

@keyframes moveClockwise7 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-230px) translateX(0);
  }
  50% {
    transform: translateY(-230px) translateX(230px);
  }
  75% {
    transform: translateY(0) translateX(230px);
  }
}

@keyframes moveClockwise8 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-230px) translateX(0);
  }
  50% {
    transform: translateY(-230px) translateX(-230px);
  }
  75% {
    transform: translateY(0) translateX(-230px);
  }
}
</style>

<style>
  #title-text {
    color: #527558;
  }

  .card__face {
    border: solid 5px #94CE90 ;
  }
</style>