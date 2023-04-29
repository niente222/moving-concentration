<template>
  <div id="screen">
    <div id="game-board">
      <div id="turn">{{ displayedTurn }}</div>
        <div
          v-for="(card, index) in displayedCards"
          :key="index"
          class="card"
          :class="{ 'is-flipped': card.isFlipped }"
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
import * as consts from '@/assets/js/const.js';
import * as util from '@/assets/js/util.js';
import axios from "axios";

let turn = 1;
let gettingCard = 0;

let shuffledCards = consts.EASY_CARDS_ARR;

export default {
  name: "easy",
  data() {
    return {
      displayedCards: [],
      firstCard: null,
      secondCard: null,
      displayedTurn: 1,
    };
  },
  async mounted() {
    //ゲーム開始
    
    //カード配列生成
    shuffledCards = util.shuffle(shuffledCards);

    //表示用カードリストを生成
    for (let i = 0; i < shuffledCards.length; i++) {
      this.displayedCards.push({ id: i , isFlipped: false });
    }

    //初期表示

    //ゲーム開始演出

  },
  methods: {
    async onCardClick(e) {
      const cardElement = e.target;

      if (this.firstCard === null) {
        this.firstCard = cardElement;
        this.firstCard.querySelector('.card__face--front').textContent = shuffledCards[this.firstCard.getAttribute('data-card-id')].number;
        this.firstCard.classList.add('is-flipped')
      } else if (this.secondCard === null && cardElement !== this.firstCard) {
        this.secondCard = cardElement;
        this.secondCard.querySelector('.card__face--front').textContent = shuffledCards[this.secondCard.getAttribute('data-card-id')].number;
        this.secondCard.classList.add('is-flipped')

        if (shuffledCards[this.firstCard.getAttribute('data-card-id')].number 
              === shuffledCards[this.secondCard.getAttribute('data-card-id')].number) {

              setTimeout(() => {
                this.firstCard.style.opacity  = 0;
                this.secondCard.style.opacity  = 0;
                this.firstCard = null;
                this.secondCard = null;

                gettingCard = gettingCard + 2;
              },
              1000);
          
          if(gettingCard === shuffledCards.length){
            console.log('game clear!');

            const userId = sessionStorage.getItem(consts.RES_USER_ID);
            const gameLevel = consts.GAME_LEVEL_EASY;
            const response = await axios.post("http://localhost:3000/game/clear", {
                    userId: userId,
                    gameLevel: gameLevel,
                    turn: turn
                  });
          }
        } else {
          setTimeout(() => {
            this.firstCard.querySelector('.card__face--front').textContent = "";
            this.secondCard.querySelector('.card__face--front').textContent = "";
            this.firstCard.classList.remove('is-flipped')
            this.secondCard.classList.remove('is-flipped')
            this.firstCard = null;
            this.secondCard = null;
          },
          1000);
        }
        
        this.displayedTurn = ++turn;
      }
    },
  },
};
</script>

<style>
#screen {
  height: 1000px;
  background-color: black;
}

#game-board {
  height: 80%;
  width: 80%;
  background-color: skyblue;
}

.card {
  width: 100px;
  height: 100px;
  perspective: 1000px;
  position: relative;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  animation: moveUpDown 2s infinite;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}

.card__face {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s;
  pointer-events: none;
}

.card__face--back {
  background-color: gray;
}

.card__face--front {
  background-color: red;
  text-align:center;
  line-height:100px;
  transform: rotateY(180deg);
}

.card.is-flipped .card__face--back {
  transform: rotateY(180deg);
}

.card.is-flipped .card__face--front {
  transform: rotateY(0);
}
</style>