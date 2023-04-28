<template>
  <h1>難易度選択</h1>
  <button id="unlockButton" @click="handleClick">数字を解除する</button>
</template>

<script>
import {isLogin} from '@/assets/js/util.js';

export default {
  name: 'select',
  mounted() {
    },

    created() {
    },

    //unlockButton クリック時処理
    methods: {
      handleClick() {
        console.log('isLoggedIn: ' + isLogin());
      },
    },
  }
</script>