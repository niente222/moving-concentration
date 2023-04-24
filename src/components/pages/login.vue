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
    <button type="submit">ログイン</button>
  </form>
</template>

<script>
import axios from "axios";
  export default {
    name: 'login',
    data() {
      return {
        userId: "",
        password: "",
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post("http://localhost:3000/login", {
            userId: this.userId,
            password: this.password,
          });

          if (response.data.success) {
            // 登録成功時の処理を実装
            console.log("ユーザー登録に成功しました。");
          } else {
            // エラーメッセージを表示するなど、登録失敗時の処理を実装
            console.error("ユーザー登録に失敗しました。" + response.data);
          }
        } catch (error) {
          console.error("通信エラー:", error);
        }
      },
    },
  };
</script>