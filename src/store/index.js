import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    randomGradientStore({ emit }, value) {
      console.log("value > ", value);
      console.log("emit > ", emit);
    },
  },
  modules: {},
});
