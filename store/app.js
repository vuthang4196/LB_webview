const state = function () {
  return {
    loadingOverlay: false,
    sortGroupNotDone: [
      {
        value: 1,
        text: 'Sắp xếp'
      },
      {
        value: 2,
        text: 'Thời gian đóng'
      },
      {
        value: 3,
        text: 'Tỷ lệ hoàn thành'
      },
      {
        value: 4,
        text: 'Tỷ lệ đã góp'
      },
      {
        value: 5,
        text: 'Loại bao'
      }
    ],
    snackBar: {
      show: false,
      msg: '',
      timeout: "2000"
    },
    wallet: '',
    power655typeLevel:  [6, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18],
  }
}

const mutations = {
  TOGGLE_OVERLAY(state, val) {
    state.loadingOverlay = val
  },
  setSnackBar(state, payload) {
    state.snackBar.show = payload.show
    state.snackBar.msg = payload.msg
    state.snackBar.timeout = payload.timeout
  },
  setWallet(state, payload) {
    state.wallet = payload
  }

}

const actions = {
  toggleOverlay(vueContext, val) {
    vueContext.commit('TOGGLE_OVERLAY', val)
  },
  setSnackBar(vueContext, payload) {
    vueContext.commit('setSnackBar', payload)
  },
  setWallet(vueContext, payload) {
    vueContext.commit('setWallet', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
