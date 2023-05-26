<template>
  <div class="difficulty-selection">
    <h1>難易度選択</h1>
    <div class="difficulty-level">
      <router-link to="/game/EASY1">
        <button class="difficulty-button difficulty-easy-button" id="easy1">EASY 1</button>
      </router-link>
      <router-link to="/game/EASY2">
        <button class="difficulty-button difficulty-easy-button" id="easy2">EASY 2</button>
      </router-link>
      <router-link to="/game/EASY3">
        <button class="difficulty-button difficulty-easy-button" id="easy3">EASY 3</button>
      </router-link>
    </div>
    <div class="difficulty-level">
      <router-link to="/game/NORMAL1">
        <button class="difficulty-button difficulty-normal-button" id="normal1">NORMAL 1</button>
      </router-link>
      <router-link to="/game/NORMAL2">
        <button class="difficulty-button difficulty-normal-button" id="normal2">NORMAL 2</button>
      </router-link>
      <router-link to="/game/NORMAL3">
        <button class="difficulty-button difficulty-normal-button" id="normal3">NORMAL 3</button>
      </router-link>
    </div>
    <div class="difficulty-level">
      <router-link to="/game/HARD1">
        <button class="difficulty-button difficulty-hard-button" id="hard1">HARD 1</button>
      </router-link>
      <router-link to="/game/HARD2">
        <button class="difficulty-button difficulty-hard-button" id="hard2">HARD 2</button>
      </router-link>
      <router-link to="/game/HARD3">
        <button class="difficulty-button difficulty-hard-button" id="hard3">HARD 3</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select',
  }
</script>