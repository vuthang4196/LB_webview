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
  }
}

const mutations = {
  TOGGLE_OVERLAY(state, val) {
    state.loadingOverlay = val
  },
}

const actions = {
  toggleOverlay(vueContext, val) {
    vueContext.commit('TOGGLE_OVERLAY', val)
  },
}

export default {
  state,
  mutations,
  actions
}
