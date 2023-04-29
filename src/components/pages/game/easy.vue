<template>
  <div id="game-board">
  <div id="turn">{{ displayedTurn }}</div>
    <div
      v-for="(card, index) in displayedCards"
      :key="index"
      class="card"
      :data-card-id="card.id"
      @click="onCardClick"
    ></div>
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
    console.log(sessionStorage.getItem(consts.RES_TOKEN));
    
    //カード配列生成
    shuffledCards = util.shuffle(shuffledCards);

    //採番カードリストを生成
    for (let i = 0; i < shuffledCards.length; i++) {
      this.displayedCards.push({ id: i , visible: true });
    }

    //初期表示
    //UIに情報をセットする
    //現在のターン数
    //採番カードリストの配置

    //ゲーム開始演出

  },
  methods: {
    async onCardClick(e) {
      const cardElement = e.target;

      if (this.firstCard === null) {
        this.firstCard = cardElement;
        cardElement.style.backgroundColor = "red";
      } else if (this.secondCard === null && cardElement !== this.firstCard) {
        this.secondCard = cardElement;
        cardElement.style.backgroundColor = "red";

        if (shuffledCards[this.firstCard.getAttribute('data-card-id')].number 
              === shuffledCards[this.secondCard.getAttribute('data-card-id')].number) {

          this.firstCard.style.display = 'none';
          this.secondCard.style.display = 'none';
          this.firstCard = null;
          this.secondCard = null;

          gettingCard = gettingCard + 2;

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
            this.firstCard.style.backgroundColor = "gray";
            this.secondCard.style.backgroundColor = "gray";
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
.card {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}
</style>