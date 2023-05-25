<template>
  <div id="screen">
    <GameInfo 
      :title="title"
      :myBestTurn="myBestTurn"
      :bestTurn="bestTurn"
      :displayedTurn="displayedTurn"
      :timerDisplay="timerDisplay"
    />
    <div id="game-board">
      <GameControlUI 
      :isOverlayVisible="isOverlayVisible"
      :startGame="startGame"
      :isResultVisible="isResultVisible"
      :displayedTurn="displayedTurn"
      :timerDisplay="timerDisplay"
      :rankinMessage="rankinMessage"
      :difference="difference"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GameInfo from '@/components/common/game/gameInfoUI.vue'
import GameControlUI from '@/components/common/game/gameControlUI.vue'

export default {
  components: {GameInfo, GameControlUI},
  props: [
    'title', 
    'myBestTurn', 
    'bestTurn', 
    'displayedTurn', 
    'timerDisplay', 
    'isOverlayVisible', 
    'startGame', 
    'isResultVisible', 
    'rankinMessage', 
    'difference'
  ]
};
</script>
