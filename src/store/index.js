import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import starWars from "@/store/modules/star-wars/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { starWars },
  plugins: [createPersistedState()],
});
