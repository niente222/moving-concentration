<template>
  <div class="difficulty-selection">
    <h1>難易度選択</h1>
    <div class="difficulty-level">
      <router-link to="/game/easy">
        <button class="difficulty-button" id="easy1">EASY 1</button>
      </router-link>
      <router-link to="/game/easy2">
        <button class="difficulty-button" id="easy2">EASY 2</button>
      </router-link>
      <router-link to="/game/easy3">
        <button class="difficulty-button" id="easy3">EASY 3</button>
      </router-link>
    </div>
    <div class="difficulty-level">
      <router-link to="/game/normal1">
        <button class="difficulty-button" id="normal1">NORMAL 1</button>
      </router-link>
      <router-link to="/game/normal2">
        <button class="difficulty-button" id="normal2">NORMAL 2</button>
      </router-link>
      <router-link to="/game/normal3">
        <button class="difficulty-button" id="normal3">NORMAL 3</button>
      </router-link>
    </div>
    <div class="difficulty-level">
      <router-link to="/game/hard1">
        <button class="difficulty-button" id="hard1">HARD 1</button>
      </router-link>
      <router-link to="/game/hard2">
        <button class="difficulty-button" id="hard2">HARD 2</button>
      </router-link>
      <router-link to="/game/hard3">
        <button class="difficulty-button" id="hard3">HARD 3</button>
      </router-link>
    </div>
  </div>
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

<style scoped>
h1 {
  text-align: center;
}

.difficulty-selection {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}

.difficulty-level {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.difficulty-button {
  background-color: #ddbb99;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 200px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 20px 34px;
  transition: 0.3s;
  border-radius: 5px;
}

.difficulty-button:hover {
  background-color: #bbaa88;
}
</style>