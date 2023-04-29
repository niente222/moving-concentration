<template>
  <div id="game-board">
    <div
      v-for="(card, index) in shuffledCards"
      :key="index"
      class="card"
      :data-id="card.id"
      @click="onCardClick"
    ></div>
  </div>
</template>

<script>
import { isLogin } from "@/assets/js/util.js";

const cards = [
  { id: 1, color: "red" },
  { id: 2, color: "red" },
  { id: 3, color: "blue" },
  { id: 4, color: "blue" },
  // 他のカードを追加してゲームを拡張できます
];

export default {
  name: "low",
  data() {
    return {
      shuffledCards: [],
      firstCard: null,
      secondCard: null,
    };
  },
  mounted() {
    this.shuffledCards = this.shuffle(cards);
  },
  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    onCardClick(e) {
      const cardElement = e.target;

      if (this.firstCard === null) {
        this.firstCard = cardElement;
        cardElement.style.backgroundColor = cards.find(
          (card) => card.id == cardElement.dataset.id
        ).color;
      } else if (this.secondCard === null && cardElement !== this.firstCard) {
        this.secondCard = cardElement;
        cardElement.style.backgroundColor = cards.find(
          (card) => card.id == cardElement.dataset.id
        ).color;

        if (this.firstCard.dataset.id === this.secondCard.dataset.id) {
          this.firstCard = null;
          this.secondCard = null;
        } else {
          setTimeout(() => {
            this.firstCard.style.backgroundColor = "gray";
            this.secondCard.style.backgroundColor = "gray";
            this.firstCard = null;
            this.secondCard = null;
          },
          1000);
        }
      }
    },
  },
};
</script>

<style>
.card {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}
</style>