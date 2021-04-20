import Vue from "vue";
import Vuex from "vuex";
import survey from "@/store/survey";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    survey
  },
  state: {},
  actions: {},
  mutations: {},
  getters: {},

  strict: process.env.NODE_ENV !== "production"
});
