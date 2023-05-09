<template>
  <div>
      <div id="overlay" v-show="isOverlayVisible" @click="startGame">
          <div id="start-message">画面をクリックしてスタート</div>
      </div>
      <div id="result" v-show="isResultVisible">
          <div id="result-content">
              <p>ターン数: {{ displayedTurn }}</p>
              <p>クリアタイム: {{ timerDisplay }}</p>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: ['isOverlayVisible', 'startGame', 'isResultVisible', 'displayedTurn', 'timerDisplay'],
  }
</script>