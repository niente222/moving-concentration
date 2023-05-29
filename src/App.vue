<template>
  <myHeader />
  <div id="app">
    <div class="container">
      <div class="left-sidebar">
      </div>
      <router-view />
      <div class="right-sidebar">
        <!-- 右側の広告やメニューをここに入れる -->
        <div id="twitter-timeline"></div>
      </div>
    </div>
  </div>
  <div id="twitter-timeline"></div>
  <myFooter />
</template>

<script>
  import myHeader from './components/layout/header.vue'
  import myFooter from './components/layout/footer.vue'

  export default {
  components: { 
    myHeader,
    myFooter
    },
  mounted() {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('charset', 'utf-8');
    document.getElementById('twitter-timeline').appendChild(script);

    let anchor = document.createElement('a');
    anchor.setAttribute('class', 'twitter-timeline');
    anchor.setAttribute('data-theme', 'light');
    anchor.setAttribute('href', 'https://twitter.com/niente47420491');
    anchor.innerText = 'Tweets by your_username';
    document.getElementById('twitter-timeline').appendChild(anchor);
  }
  };
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.left-sidebar {
  width: 10%;
  background-color: var(--side-color); 
}

.right-sidebar {
  width: 30%;
  background-color: var(--side-color); 
}

#twitter-timeline {
  height: 400px;
  margin-top: 10px;
  overflow-y: auto; 
}

.twitter-timeline{
  height: 500px;
}

/* 余白の調整 */
router-view {
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
}
</style>