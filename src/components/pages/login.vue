<template>
  <h1>ログイン</h1>
    <form @submit.prevent="submitForm">
    <div>
      <label for="user-id">ユーザーID:</label>
      <input type="text" id="user-id" v-model="userId" required />
    </div>
    <div>
      <label for="password">パスワード:</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <button type="submit">ログイン</button>
  </form>
</template>

<script>
  import axios from "axios";
  import {RES_USER_ID,RES_TOKEN} from '@/assets/js/const.js';
  export default {
    name: 'login',
    data() {
      return {
        userId: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
    async submitForm() {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          userId: this.userId,
          password: this.password,
        })

        //入力チェックエラーがある場合、エラーメッセージを設定し処理を終了
        if(response.data.validMessage){
            //★エラーメッセージが複数ある場合は全部出す？
            this.errorMessage = response.data.validMessage[0];
            return;
          }

        if (response.data.success) {
            // 登録成功時の処理を実装
            console.log("ログインに成功しました。");
            sessionStorage.setItem(RES_USER_ID, response.data.user_id);
            sessionStorage.setItem(RES_TOKEN, response.data.token);

            // ミューテーションを呼び出して、ストアのisLoginFlgを更新
            this.$store.commit("setIsLoginFlg", true);
            
            //セレクト画面にリダイレクト
            this.$router.push("/select");
          } else {
            // エラーメッセージを表示するなど、登録失敗時の処理を実装
            console.error("ユーザー登録に失敗しました。");
          }
      } catch (error) {
        console.error('submitForm error:', error);
      }
    }
  }
}
</script>