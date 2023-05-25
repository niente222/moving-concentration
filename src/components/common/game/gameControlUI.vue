<template>
  <div>
      <div id="overlay" v-show="isOverlayVisible" @click="startGame">
          <div id="start-message">画面をクリックしてスタート</div>
      </div>
      <div id="result" v-show="isResultVisible">
          <div id="result-content">
              <p>ターン数: {{ displayedTurn }}</p>
              <p>クリアタイム: {{ timerDisplay }}</p>
              <p>{{ rankinMessage }}</p>
              <button class="difficulty-button" id="easy3" @click="reload">もう一度</button>
              <router-link to="/game/select">
                <button class="difficulty-button">難易度を変える</button>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: ['isOverlayVisible', 'startGame', 'isResultVisible', 'displayedTurn', 'timerDisplay', 'rankinMessage' , 'difference'],
  methods: {
    reload(){
      location.reload();
    }
  }
  }
</script>