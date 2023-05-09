<template>
    <div id="info-container">
        <div id="title-text">{{ title }}</div>
        <div id="my-best-text">自己ベスト： {{ myBestTurn }}</div>
        <div id="best-text">一位： {{ bestTurn }}</div>
    </div>
    <div id="turn-text">TURN {{ displayedTurn }}</div>
    <div id="timer">{{ timerDisplay }}</div>
</template>

<script>
    export default {
    props: ['title', 'myBestTurn', 'bestTurn', 'displayedTurn', 'timerDisplay']
    }
</script>