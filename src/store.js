import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: false,
    loading: true,
    host: '192.168.1.100',
    login: 0,
    persetujuan: false,
    pendaftaran: false

  },

  mutations: {
    LOADING_SYNC (state, payload) {
      state.loading = payload
    },
    PERSETUJUAN_DIALOG (state, payload) {
      state.persetujuan = payload
    },
    PENDAFTARAN_DIALOG (state, payload) {
      state.pendaftaran = payload
    }
  }
})
