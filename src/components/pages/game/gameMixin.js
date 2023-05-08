import * as consts from '@/assets/js/const.js';
import * as util from '@/assets/js/util.js';
import axios from "axios";

let turn = 1;
let gettingCard = 0;

let shuffledCards = consts.EASY_CARDS_ARR;

let dataLake = null;

export default {
  props: {
    cardsArray: Array,
    animationDelays: Array,
  },
  data() {
    return {
      //ゲーム部分実装に使用
      displayedCards: [],
      firstCard: null,
      secondCard: null,

      //info-UI用
      displayedTurn: 1,
      myBestTurn: 3,
      myBestTime: 3,
      bestTurn: 3,
      bestTime: 3,

      //タイマー処理に使用
      startTime: null,
      elapsedTime: 0,
      timerDisplay: '00:00:00.000',
      timerInterval: null,
    };
  },
  async mounted() {

    //info-UI設定
    this.setUIs(consts.GAME_LEVEL_EASY);

    // ゲーム開始
    // カード配列生成
    let shuffledCards = util.shuffle(this.cardsArray);

    // 表示用カードリストを生成
    for (let i = 0; i < shuffledCards.length; i++) {
      this.displayedCards.push({ id: i , isFlipped: false });
    }

    // 初期表示
    // ゲーム開始演出
    // ゲームが始まったときにタイマーを開始する
    this.startTimer();
  },
  methods: {
    //カードクリック時処理
    async onCardClick(e) {
      const cardElement = e.target;

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
                    this.stopTimer()
        
                    const userId = sessionStorage.getItem(consts.RES_USER_ID);
                    const gameLevel = consts.GAME_LEVEL_EASY;
                    const response = axios.post("http://localhost:3000/game/clear", {
                            userId: userId,
                            gameLevel: gameLevel,
                            turn: turn,
                            clearTime: this.timerDisplay
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
    },
    //info-UI
    async setUIs(difficulty) {
      dataLake = await util.getDataLake();

      //自己ベスト取得
      if (dataLake) {
        this.myBestTurn = await this.getBestData(
          dataLake,
          sessionStorage.getItem(consts.RES_USER_ID),
          difficulty
        );
  
      //一位の記録取得
      this.bestTurn = await this.getBestData(dataLake, null, difficulty);
      } else {
        // エラーメッセージを表示するなど、登録失敗時の処理を実装
        console.error("データの取得に失敗しました。");
      }
    },
    async getBestData(data, userId, difficulty) {
      const filteredData = data
        .filter(game => (userId ? game.USER_ID === userId : true))
        .filter(game => game.GAME_LEVEL === difficulty)
        .sort((a, b) => a.TURNS - b.TURNS)
        .sort((a, b) => a.CLEAR_TIME - b.CLEAR_TIME)
        .sort((a, b) => a.INSDATE - b.INSDATE)
        .slice(0, 1);
  
      return filteredData.length === 0
        ? "記録なし"
        : filteredData[0].TURNS + "ターン  タイム" + filteredData[0].CLEAR_TIME;
    },
    //タイマー
    startTimer() {
      this.startTime = Date.now();
      this.timerInterval = setInterval(this.updateTimer, 10);
    },
    updateTimer() {
      this.elapsedTime = Date.now() - this.startTime;
      this.timerDisplay = this.formatTime(this.elapsedTime);
    },
    formatTime(ms) {
      const hours = Math.floor(ms / 3600000);
      const minutes = Math.floor((ms % 3600000) / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      const milliseconds = ms % 1000;

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    },
    stopTimer() {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    },
    resetTimer() {
      this.stopTimer();
      this.elapsedTime = 0;
      this.timerDisplay = '00:00:00.000';
    },
  },
};