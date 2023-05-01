<template>
  <h1>難易度選択</h1>
    <a href="/ranking" class="header-link" >ランキング</a>
    <br>
    <a href="/game/easy" class="header-link" >EASY</a>
    <br>
    <a href="/game/hard" class="header-link" >HARD</a>
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
        
      },
    },
  }
</script>