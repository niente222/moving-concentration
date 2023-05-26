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
          v-for="(chunk, i) in chunkedCards" 
          :key="i"
          :class="['box' + (i+1)]"
          >
            <div
              v-for="(card, index) in chunk"
              :key="index"
              class="moving"
              :class="['moving' + (index+1 + i*4)]"
            >
              <div
                class="card"
                :class="['card' + (index+1 + i*4), { 'is-flipped': card.isFlipped }]"
                :data-card-id="card.id"
                @click="onCardClick"
              >
                <div class="card__face card__face_hard card__face--back"></div>
                <div class="card__face card__face_hard card__face--front"></div>
              </div>
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
      difference: consts.GAME_LEVEL_HARD_3,
    };
  },
  computed: {
    chunkedCards() {
      return this.chunkArray([...this.displayedCards], 4);
    }
  },
  methods: {
    getDifference() {
      return consts.GAME_LEVEL_HARD_3;
    },
    getShuffleCards() {
      return consts.HARD_3_CARDS_ARR;
    },
    chunkArray(array, size) {
      let results = [];
      while (array.length) {
        results.push(array.splice(0, size));
      }
      return results;
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
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 300px);
  grid-gap: 10px;
  margin: auto;
}

.box1,
.box2,
.box3,
.box4 {
  width: 300px;
  height: 300px;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.box1 {
  animation-name: moveBox1;
}

.box2 {
  animation-name: moveBox2;
}

.box3 {
  animation-name: moveBox3;
}

.box4 {
  animation-name: moveBox4;
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
.moving12,
.moving13,
.moving14,
.moving15,
.moving16 {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.moving1,
.moving5,
.moving9,
.moving13 {
  top: 0px;
  animation-name: moveClockwise1;
}

.moving2,
.moving6,
.moving10,
.moving14 {
  left: 180px;
  animation-name: moveClockwise2;
}

.moving3,
.moving7,
.moving11,
.moving15 {
  top: 180px;
  left: 0px;
  animation-name: moveClockwise3;
}

.moving4,
.moving8,
.moving12,
.moving16 {
  top: 180px;
  left: 180px;
  animation-name: moveClockwise4;
}

@keyframes moveBox1 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(320px);
  }
  50% {
    transform: translateY(320px) translateX(320px);
  }
  75% {
    transform: translateY(320px) translateX(0);
  }
}

@keyframes moveBox2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(320px) translateX(0);
  }
  50% {
    transform: translateY(320px) translateX(-320px);
  }
  75% {
    transform: translateY(0) translateX(-320px);
  }
}

@keyframes moveBox3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-320px) translateX(0);
  }
  50% {
    transform: translateY(-320px) translateX(320px);
  }
  75% {
    transform: translateY(0) translateX(320px);
  }
}

@keyframes moveBox4 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(-320px);
  }
  50% {
    transform: translateY(-320px) translateX(-320px);
  }
  75% {
    transform: translateY(-320px) translateX(0);
  }
}

@keyframes moveClockwise1 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(180px);
  }
  50% {
    transform: translateY(180px) translateX(180px);
  }
  75% {
    transform: translateY(180px) translateX(0);
  }
}

@keyframes moveClockwise2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(180px) translateX(0);
  }
  50% {
    transform: translateY(180px) translateX(-180px);
  }
  75% {
    transform: translateY(0) translateX(-180px);
  }
}

@keyframes moveClockwise3 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-180px) translateX(0);
  }
  50% {
    transform: translateY(-180px) translateX(180px);
  }
  75% {
    transform: translateY(0) translateX(180px);
  }
}

@keyframes moveClockwise4 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(0) translateX(-180px);
  }
  50% {
    transform: translateY(-180px) translateX(-180px);
  }
  75% {
    transform: translateY(-180px) translateX(0);
  }
}
</style>