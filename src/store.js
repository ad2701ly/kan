import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: false,
    loading: true,
    host: '192.168.1.100'
  },

  mutations: {
    LOADING_SYNC (state, payload) {
      state.loading = payload
    }
  }
})
