<template>
  <AccountSubmitForm 
    title="新規登録" 
    buttonText="登録" 
    @submit="submitForm" 
  />
</template>

<script>
  import AccountSubmitForm from '@/components/common/accountSubmitForm.vue';
  import axios from "axios";
  import {RES_USER_ID,RES_TOKEN} from '@/assets/js/const.js';
  export default {
    name: 'assigned',
    components: {
      AccountSubmitForm
    },
    data() {
      return {
        errorMessage: "",
      };
    },
    methods: {
      async submitForm(payload) {
        try {
          const response = await axios.post("http://localhost:3000/auth/assigned", {
            userId: payload.userId,
            password: payload.password,
          });

          //入力チェックエラーがある場合、エラーメッセージを設定し処理を終了
          if(response.data.validMessage){
            //★エラーメッセージが複数ある場合は全部出す？
            this.errorMessage = response.data.validMessage[0];
            return;
          }

          if (response.data.success) {
            // 登録成功時の処理を実装
            console.log("ユーザー登録に成功しました。");

            //ローカルストレージにトークンを保存
            sessionStorage.setItem(RES_USER_ID, response.data.user_id);
            sessionStorage.setItem(RES_TOKEN, response.data.token);
            
            // ミューテーションを呼び出して、ストアのisLoginFlgを更新
            this.$store.commit("setIsLoginFlg", true);

            //セレクト画面にリダイレクト
            this.$router.push("/game/select");

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