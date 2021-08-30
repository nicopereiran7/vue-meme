import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    memes: [],
  },
  mutations: {
    setMemes(state, payload) {
      state.memes = payload;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();

        commit("setMemes", result.data.memes);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
