<template>
  <AccountSubmitForm 
    title="ログイン" 
    buttonText="ログイン" 
    @submitForm="submitForm"
    :error-message="errorMessage"
  />
</template>

<script>
  import AccountSubmitForm from '@/components/common/accountSubmitForm.vue';
  import axios from "axios";
  import * as consts from "@/assets/js/const.js";

  export default {
    name: 'login',
    components: {
      AccountSubmitForm
    },
    data() {
      return {
        errorMessage: [],
      };
    },
    methods: {
    async submitForm(payload) {
      try {
        const response = await axios.post("https://" + consts.IP_ADDRESS + "/auth/login", {
          userId: payload.userId,
          password: payload.password,
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
            sessionStorage.setItem(consts.RES_USER_ID, response.data.user_id);
            sessionStorage.setItem(consts.RES_TOKEN, response.data.token);
            
            // ミューテーションを呼び出して、ストアのisLoginFlgを更新
            this.$store.commit("setIsLoginFlg", true);
            
            //セレクト画面にリダイレクト
            this.$router.push("/game/select");
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