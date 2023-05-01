<template>
  <h1>ランキング</h1>
  <div
    v-for="(rank, index) in rankingData"
    :key="index"
    class="rankingPanel"
  >
    <p>Name: {{ rank.USER_ID }}</p>
    <p>Turns: {{ rank.TURNS }}</p>
    <p>Date: {{ rank.INSDATE }}</p>
  </div>
</template>

<script>
import axios from "axios";
import {isLogin} from '@/assets/js/util.js';
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
  }
}
</script>