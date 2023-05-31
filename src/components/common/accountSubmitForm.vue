<template>
    <div>
      <h1>{{ title }}</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="user-id">ユーザーID:</label>
          <input type="text" id="user-id" v-model="userId" required />
        </div>
        <div>
          <label for="password">パスワード:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div v-if="errorMessage.length > 0">
            <p v-for="(message, index) in errorMessage" :key="index">{{ message }}</p>
        </div>
        <button type="submit">{{ buttonText }}</button>
      </form>
    </div>
  </template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            buttonText: {
                type: String,
                required: true
            },
            errorMessage: {
                type: Array, 
                default: ""   
            }
        },
        data() {
            return {
                userId: '',
                password: '',
            };
        },
        methods: {
            submitForm() {
                this.$emit('submitForm', {
                    userId: this.userId,
                    password: this.password
                });
            }
        }
    };
</script>