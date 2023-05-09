<template>
  <myHeader />
  <div id="app">
    <div class="container">
      <div class="left-sidebar">
        <!-- 左側の広告やメニューをここに入れる -->
      </div>
      <router-view />
      <div class="right-sidebar">
        <!-- 右側の広告やメニューをここに入れる -->
      </div>
    </div>
  </div>
  <myFooter />
</template>

<script>
  import myHeader from './components/layout/header.vue'
  import myFooter from './components/layout/footer.vue'

  export default {
  components: { 
    myHeader,
    myFooter
    }
  };
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.left-sidebar,
.right-sidebar {
  width: 20%;
  background-color: var(--side-color); 
}

/* 余白の調整 */
router-view {
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
}
</style>