<template>
    <header class="site-header">
      <div class="site-header__wrapper">
        <a href="/game/select" class="title">動く神経衰弱</a>
        <div class="header-link-component">
          <div v-if="isLoginFlg">
            <div class="login-user-text" >ログイン： {{ loginUserName }}</div>
            <a href='/game/select'  class="header-link" >プレイ</a>
            <a href='/ranking'  class="header-link" >ランキング</a>
            <a href='#' @click="logout" class="header-link" >ログアウト</a>
          </div>
          <div v-else>
            <a href='/game/select'  class="header-link" >プレイ</a>
            <a href='/ranking'  class="header-link" >ランキング</a>
            <a href="/login" class="header-link" >ログイン</a>
            <a href="/assigned" class="header-link" >新規登録</a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
  import * as consts from "@/assets/js/const.js";
  import {isLogin} from '@/assets/js/util.js';
  export default {
    data() {
      return {
        loginUserName: '',
      };
    },
    computed: {
      isLoginFlg() {
        return this.$store.state.isLoginFlg;
      },
    },  
    watch: {
      isLoginFlg() {
        if(this.isLoginFlg) {
          this.loginUserName = sessionStorage.getItem(consts.RES_USER_ID);
        } else {
          this.loginUserName = '';
        }
      }
    },
    mounted() {
      // ミューテーションを呼び出して、ストアのisLoginFlgを更新
      this.$store.commit("setIsLoginFlg", isLogin());
    },
    methods: {
      logout() {
        //ログイン時に保持したセッションストレージをクリア
        sessionStorage.clear()

        // ログアウト時にログインユーザー名を空にする
        this.loginUserName = ''; 
        
        // ミューテーションを呼び出して、ストアのisLoginFlgを更新
        this.$store.commit("setIsLoginFlg", isLogin());
      },
    },
  };
</script>