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
    power655typeLevel: [6, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18],
    mega645typeLevel: [6, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18],
    numberRowLevel: {
      6: 6,
      5: 6,
      7: 3,
      8: 3,
      9: 3,
      10: 3,
      11: 3,
      12: 3,
      13: 2,
      14: 2,
      15: 2,
      18: 2,
    },
    cookieCartChange: false,
    momoFee: 3,
    defaultPrice_omMax3DPlus: [10000, 20000, 50000, 100000, 200000],
    defaultPrice_Max3DPlus: [
      {
        value: 10000,
        text: "10K",
      },
      {
        value: 20000,
        text: "20K",
      },
      {
        value: 50000,
        text: "50K",
      },
      {
        value: 100000,
        text: "100K",
      },
      {
        value: 200000,
        text: "200K",
      },
    ],
    max3dPlusSelectBao: [
      {
        value: 1,
        text: "3D+ Cơ bản",
      },
      {
        value: 2,
        text: "3D+ Tổ hợp",
      },
      {
        value: 3,
        text: "3D+ Bao",
      },
      {
        value: 4,
        text: "3D+ Cuộn 1",
      },
      {
        value: 5,
        text: "3D+ Cuộn 3",
      },
    ],
    levelMax3dPlus: 4,
    max4DSelectBao: [
      {
        value: 1,
        text: "Thường",
      },
      {
        value: 2,
        text: "Tổ hợp",
      },
      {
        value: 3,
        text: "Bao",
      },
      {
        value: 4,
        text: "Cuộn 1",
      },
      {
        value: 5,
        text: "Cuộn 4",
      },
    ],
    defaultPrice_Max4D: [
      {
        value: 1,
        text: "10K",
      },
      {
        value: 2,
        text: "20K",
      },
      {
        value: 5,
        text: "50K",
      },
      {
        value: 10,
        text: "100K",
      },
      {
        value: 20,
        text: "200K",
      },
      {
        value: 50,
        text: "500K",
      },
      {
        value: 100,
        text: "1000K",
      }
    ],
    levelMax4D: 6,
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
  },
  setCookieCartChange(state, payload) {
    state.cookieCartChange = payload
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
  },
  setCookieCartChange(vueContext, payload) {
    vueContext.commit('setCookieCartChange', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
