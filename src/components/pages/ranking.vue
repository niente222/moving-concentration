<template>
  <h1>ランキング</h1>
  <div
      v-for="(rank, index) in rankingData"
      :key="index"
      class="ranking-panel"
    >
      <p><span class="label">Name:</span> {{ rank.USER_ID }}</p>
      <p><span class="label">Turns:</span> {{ rank.TURNS }}</p>
      <p><span class="label">Date:</span> {{ formatDate(rank.INSDATE) }}</p>
  </div>
</template>

<script>
import axios from "axios";
import * as util from '@/assets/js/util.js';
import * as consts from "@/assets/js/const.js";

export default {
  name: 'ranking',
  data() {
    return {
      rankingData: []
    };
  },
  async mounted() {
    try {
        const response = await axios.post("http://localhost:3000/ranking");
        
        if (response.data.success) {
          this.rankingData = response.data.ranking_data.filter(game => game.GAME_LEVEL === consts.GAME_LEVEL_EASY);
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
  }
}
</script>