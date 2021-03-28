import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dictionary: window.database,
    randomIndex: null,
  },

  mutations: {
    randItem(state){
      state.randomIndex = Math.floor(Math.random() * state.dictionary.length);
    }
  },

  getters: {
    getDictionaryAll(state){
      return state.dictionary;
    },

    getRandomItem(state){
      if (state.dictionary[state.randomIndex])
        return state.dictionary[state.randomIndex];
      return null;
    }
  }
});
