import * as consts from '@/assets/js/const.js';
import * as util from '@/assets/js/util.js';
import axios from "axios";

let turn = 1;
let gettingCard = 0;

let shuffledCards = consts.EASY_CARDS_ARR;

export default {
  props: {
    cardsArray: Array,
    animationDelays: Array,
  },
  data() {
    return {
      displayedCards: [],
      firstCard: null,
      secondCard: null,
      displayedTurn: 1,
    };
  },
  async mounted() {
    // ゲーム開始
    // カード配列生成
    let shuffledCards = util.shuffle(this.cardsArray);

    // 表示用カードリストを生成
    for (let i = 0; i < shuffledCards.length; i++) {
      this.displayedCards.push({ id: i , isFlipped: false });
    }

    // 初期表示
    // ゲーム開始演出
  },
  methods: {
    async onCardClick(e) {
      const cardElement = e.target;
      console.log(gettingCard);

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

                if(gettingCard === shuffledCards.length){
                    console.log('game clear!');
        
                    const userId = sessionStorage.getItem(consts.RES_USER_ID);
                    const gameLevel = consts.GAME_LEVEL_EASY;
                    const response = axios.post("http://localhost:3000/game/clear", {
                            userId: userId,
                            gameLevel: gameLevel,
                            turn: turn
                          });
                  }else{
                    this.displayedTurn = ++turn;
                  }
              },
              1000);
        } else {
          setTimeout(() => {
            this.firstCard.querySelector('.card__face--front').textContent = "";
            this.secondCard.querySelector('.card__face--front').textContent = "";
            this.firstCard.classList.remove('is-flipped')
            this.secondCard.classList.remove('is-flipped')
            this.firstCard = null;
            this.secondCard = null;
            this.displayedTurn = ++turn;
          },
          1000);
        }
        
      }
    },
  },
};