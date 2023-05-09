<template>
    <header class="site-header">
      <div class="site-header__wrapper">
        <a href="/game/select" class="title">動く神経衰弱</a>
        <div class="header-link-component">
          <div v-if="isLoginFlg">
            <a href='/game/select'  class="header-link" >プレイ</a>
            <a href='/ranking'  class="header-link" >ランキング</a>
            <a href='#' @click="logout" class="header-link" >ログアウト</a>
          </div>
          <div v-else>
            <a href="/login" class="header-link" >ログイン</a>
            <a href="/assigned" class="header-link" >新規登録</a>
          </div>
        </div>
      </div>
    </header>
</template>

<style scoped>
.site-header__wrapper{
  display: flex;
}
  .header-link-component{
    margin-left: auto;
  }

  .header-link{
    margin-right: 10px;
  }
</style>

<script>
  import {isLogin} from '@/assets/js/util.js';
  export default {
    computed: {
      isLoginFlg() {
        return this.$store.state.isLoginFlg;
      },
    },  
    mounted() {
      // ミューテーションを呼び出して、ストアのisLoginFlgを更新
      this.$store.commit("setIsLoginFlg", isLogin());
    },
    methods: {
      logout() {
        //ログイン時に保持したセッションストレージをクリア
        sessionStorage.clear()

        // ミューテーションを呼び出して、ストアのisLoginFlgを更新
        this.$store.commit("setIsLoginFlg", isLogin());
      },
    },
  };
</script>