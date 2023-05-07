<template>
  <div class="ranking-page">
    <h1>ランキング</h1>
    <div class="button-container">
      <button @click="changeDifficulty(GAME_LEVEL_EASY)">Easy</button>
      <button @click="changeDifficulty(GAME_LEVEL_NOMAL)">Medium</button>
      <button @click="changeDifficulty(GAME_LEVEL_HARD)">Hard</button>
    </div>
    <div class="ranking-container">
      <div
          v-for="(rank, index) in rankingData"
          :key="index"
          class="ranking-panel"
      >
        <p><span class="label"></span> {{ index + 1 }}位</p>
        <p><span class="label">Name:</span> {{ rank.USER_ID }}</p>
        <p><span class="label">Turns:</span> {{ rank.TURNS }}</p>
        <p><span class="label">Date:</span> {{ formatDate(rank.INSDATE) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as util from '@/assets/js/util.js';
import * as consts from "@/assets/js/const.js";

let dataLake = null;

export default {
  name: 'ranking',
  data() {
    return {
      rankingData: [],
      GAME_LEVEL_EASY: consts.GAME_LEVEL_EASY,
      GAME_LEVEL_NOMAL: consts.GAME_LEVEL_NOMAL,
      GAME_LEVEL_HARD: consts.GAME_LEVEL_HARD
    };
  },
  async mounted() {
    try {
        const response = await axios.post("http://localhost:3000/ranking");
        
        if (response.data.success) {
          dataLake = response.data.ranking_data;
          this.changeDifficulty(consts.GAME_LEVEL_EASY);
          } else {
            // エラーメッセージを表示するなど、登録失敗時の処理を実装
            console.error("ユーザー登録に失敗しました。");
          }
      } catch (error) {
        console.error('submitForm error:', error);
      }
    },

    created() {
    },

  methods: {
    formatDate(date) {
      return util.formatDate(date);
    },
    changeDifficulty(difficulty) {
      this.rankingData = dataLake
        .filter(game => game.GAME_LEVEL === difficulty)
        .sort((a, b) => a.TURNS - b.TURNS)
        .sort((a, b) => a.INSDATE - b.INSDATE)
        .slice(0, 100);
    },
  }
}
</script>