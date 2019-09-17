import Vue from "vue";
import Vuex from "vuex";

// Make vue aware of Vuex
Vue.use(Vuex);

const state = {
  message: "DE KUB",
  count: 0
};
const mutations = {
  setNewMessage: (state, data) => {
    state.message = "DE JA";
  },
  increment(state, payload) {
    state.count += payload.amount;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
