// Axios interceptor. Auto log out when token is expired or invalid
import { RESPONSE_CODES } from '~/store/constants'
export default function(context) {
  context.$axios.onResponse(response => {
    const code = response.data.error.code
    if (code === 0 || code === 9999) {
      return {
        error: false,
        data: response.data
      }
    } else if (code === 1 || code === 2) {
      context.store.dispatch('dangNhap/logOut')
    } else {
      context.store.dispatch('app/setAlertContent', {
        code,
        msg:
          RESPONSE_CODES[code] !== undefined
            ? RESPONSE_CODES[code].msg
            : otherError
      })
      return {
        error: true,
        data: response.data
      }
    }
  })

  context.$axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    // context.store.dispatch('app/setAlertContent', code)
    context.error({ statusCode: code })
    return {
      error: true,
      code: 999,
      exception: error,
      status: code
    }
  })

  context.$axios.onRequest(config => {
    // config.withCredentials = true
    // console.log(config)
    // context.$axios.default.withCredentials = true
  })
}
