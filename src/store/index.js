import Vue from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoginFlg: false,
  },
  mutations: {
    setIsLoginFlg(state, value) {
      state.isLoginFlg = value;
    },
  },
});

export default store;