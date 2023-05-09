<template>
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
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button type="submit">{{ buttonText }}</button>
    </form>
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
            }
        },
        data() {
            return {
                userId: '',
                password: '',
                errorMessage: ''
            };
        },
        methods: {
            submitForm() {
                this.$emit('submit', {
                    userId: this.userId,
                    password: this.password
                });
            }
        }
    };
</script>