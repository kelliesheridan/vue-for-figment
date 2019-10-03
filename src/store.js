import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count: 10
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    decrement (state) {
      state.count--;
    },
    reset (state) {
      state.count = 0;
    }
  },
  actions: {
      incrementAction (context) {
        context.commit('increment');
      },
      decrementAction (context) {
        context.commit('decrement');
      },
      resetAction (context) {
        context.commit('reset');
      }
  },

  getters: {
    current: state => state.count
    }
})
