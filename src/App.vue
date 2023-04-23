<template>
  <myHeader />
    <div id="app">
      <router-view />
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