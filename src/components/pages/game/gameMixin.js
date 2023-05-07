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
    //カードクリック時処理
    async onCardClick(e) {
      const cardElement = e.target;
      console.log(gettingCard);

      if (this.firstCard === null) {
        //一枚目のカード選択時
        this.firstCard = cardElement;
        this.firstCard.querySelector('.card__face--front').textContent = shuffledCards[this.firstCard.getAttribute('data-card-id')].number;
        this.firstCard.classList.add('is-flipped')
      } else if (this.secondCard === null && cardElement !== this.firstCard) {
        //二枚目のカード選択時
        this.secondCard = cardElement;
        this.secondCard.querySelector('.card__face--front').textContent = shuffledCards[this.secondCard.getAttribute('data-card-id')].number;
        this.secondCard.classList.add('is-flipped')

        //一枚目と二枚目のカードの数字が一致した場合
        if (shuffledCards[this.firstCard.getAttribute('data-card-id')].number 
              === shuffledCards[this.secondCard.getAttribute('data-card-id')].number) {

              setTimeout(() => {
                this.playMatchedCardAnimation(this.firstCard);
                this.playMatchedCardAnimation(this.secondCard);
                this.firstCard = null;
                this.secondCard = null;

                gettingCard = gettingCard + 2;


                //ゲームクリア
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
    //カードがそろった時のアニメーションを付与する関数
    playMatchedCardAnimation(cardElement) {
      cardElement.classList.add("matched-card");
    
      // アニメーションが終了したらクラスを削除
      cardElement.addEventListener("animationend", () => {
        cardElement.classList.remove("matched-card");
        cardElement.style.opacity  = 0;
        cardElement.parentNode.remove();
      });
    }
  },
};