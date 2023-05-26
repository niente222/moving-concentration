<template>
  <div class="ranking-page">
    <h1>ランキング</h1>
    <div class="button-container">
      <div class="button-row">
        <button @click="changeDifficulty(GAME_LEVEL_EASY_1)" class="rank-select-button rank-select-easy-button">Easy 1</button>
        <button @click="changeDifficulty(GAME_LEVEL_EASY_2)" class="rank-select-button rank-select-easy-button">Easy 2</button>
        <button @click="changeDifficulty(GAME_LEVEL_EASY_3)" class="rank-select-button rank-select-easy-button">Easy 3</button>
      </div>
      <div class="button-row">
        <button @click="changeDifficulty(GAME_LEVEL_NORMAL_1)" class="rank-select-button rank-select-normal-button">Normal 1</button>
        <button @click="changeDifficulty(GAME_LEVEL_NORMAL_2)" class="rank-select-button rank-select-normal-button">Normal 2</button>
        <button @click="changeDifficulty(GAME_LEVEL_NORMAL_3)" class="rank-select-button rank-select-normal-button">Normal 3</button>
      </div>
      <div class="button-row">
        <button @click="changeDifficulty(GAME_LEVEL_HARD_1)" class="rank-select-button rank-select-hard-button">Hard 1</button>
        <button @click="changeDifficulty(GAME_LEVEL_HARD_2)" class="rank-select-button rank-select-hard-button">Hard 2</button>
        <button @click="changeDifficulty(GAME_LEVEL_HARD_3)" class="rank-select-button rank-select-hard-button">Hard 3</button>
      </div>
    </div>
    <p>{{ rankingTitle }}</p>
    <div class="ranking-container">
      <div
          v-for="(rank, index) in rankingData"
          :key="index"
          class="ranking-panel"
      >
        <div class="ranking-header">
            <p><span class="rank-text"></span> {{ index + 1 }}位  {{ rank.USER_ID }}</p>
        </div>
        <div class="ranking-body">
          <p class="turns-text">Turns: {{ rank.TURNS }}</p>
          <p class="clear-time-text">Time: {{ rank.CLEAR_TIME }}</p>
          <p class="datetime-text"> {{ formatDate(rank.INSDATE) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as util from '@/assets/js/util.js';
import * as consts from "@/assets/js/const.js";

let dataLake = null;

export default {
  name: 'ranking',
  data() {
    return {
      rankingData: [],
      rankingTitle: '',
      GAME_LEVEL_EASY_1: consts.GAME_LEVEL_EASY_1,
      GAME_LEVEL_EASY_2: consts.GAME_LEVEL_EASY_2,
      GAME_LEVEL_EASY_3: consts.GAME_LEVEL_EASY_3,
      GAME_LEVEL_NORMAL_1: consts.GAME_LEVEL_NORMAL_1,
      GAME_LEVEL_NORMAL_2: consts.GAME_LEVEL_NORMAL_2,
      GAME_LEVEL_NORMAL_3: consts.GAME_LEVEL_NORMAL_3,
      GAME_LEVEL_HARD_1: consts.GAME_LEVEL_HARD_1,
      GAME_LEVEL_HARD_2: consts.GAME_LEVEL_HARD_2,
      GAME_LEVEL_HARD_3: consts.GAME_LEVEL_HARD_3
    };
  },
  async mounted() {
    try {
        dataLake = await util.getDataLake();
        if (dataLake) {
          this.changeDifficulty(consts.GAME_LEVEL_EASY_1);
          } else {
            // エラーメッセージを表示するなど、登録失敗時の処理を実装
            console.error("データの取得に失敗しました。");
          }
      } catch (error) {
        console.error('submitForm error:', error);
      }
    },

  methods: {
    formatDate(date) {
      return util.formatDate(date);
    },
    changeDifficulty(difficulty) {
      this.rankingTitle = difficulty;
      this.rankingData = dataLake
        .filter(game => game.GAME_LEVEL === difficulty)
        .sort((a, b) => {
          if (a.TURNS === b.TURNS) {
            return util.timeStringToSeconds(a.CLEAR_TIME) - util.timeStringToSeconds(b.CLEAR_TIME)
          } else {
            return a.TURNS - b.TURNS
          }
        })
        .sort((a, b) => a.INSDATE - b.INSDATE)
        .slice(0, 100);
    },
  }
}
</script>