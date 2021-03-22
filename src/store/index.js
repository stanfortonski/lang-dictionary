import Vuex from 'vuex';
import Vue from 'vue';
import databaseJson from '../../database.json';

const dictionary = [];
for (const item of databaseJson){
  const format = [];
  for (const prop in item){
    format.push(item[prop]);
  }
  dictionary.push(format);
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dictionary,
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
