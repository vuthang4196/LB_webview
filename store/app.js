const state = function () {
  return {
    loadingOverlay: false,
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
