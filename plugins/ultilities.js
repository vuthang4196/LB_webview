import {
  CHANNEL,
  SALE_CHANNEL_CODE,
  PRODUCT_TYPE,
  RETURN_URL,
  COOKIE_CLIENT_TRANSID_NAME
} from '~/store/constants'

// import * as Cookies from 'js-cookie'
import uniqid from 'uniqid'

export default function (context, inject) {
  inject('parseDate', () => { })
  inject('redirect', payload => {
    // console.log("URL: " + payload.url);

    if (payload.samepage) {
      context.app.router.replace({ path: payload.url })
    } else {
      window.location.href = payload.url
    }
  }),
    inject('genTransId', () => {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      )
    })
  inject('formatMoney', payload => {
    try {
      var decimalCount = 0
      var thousands = '.'
      var decimal = ','

      const negativeSign = payload.amount < 0 ? '-' : ''

      let i = parseInt(
        (payload.amount = Math.abs(Number(payload.amount) || 0).toFixed(
          decimalCount
        ))
      ).toString()
      let j = i.length > 3 ? i.length % 3 : 0

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
          ? decimal +
          Math.abs(payload.amount - i)
            .toFixed(decimalCount)
            .slice(2)
          : '')
      )
    } catch (e) {
      console.log(e)
    }
  })
  inject('createOrderObject', () => {
    var orderObj = new Object()

    return orderObj
  })
  inject('createCheckOrderObject', trans_id => {
    var checkOrderObj = new Object()
    return checkOrderObj
  })
  inject('setCookie', (cname, cvalue, exdays) => {
    var d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    var expires = 'expires=' + d.toUTCString()

    // console.log(context.res);
    //document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  })
  inject('getCookie', cname => {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  })
  inject('isEmail', str => {
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.test(str)
  })

  inject('isNullOrEmpty', str => {
    return str === null || str === undefined || str === '' || str.length === 0
  })

  inject('isMobilePhone', str => {
    let phoneNot84 = /[0]{1}[35789]{1}[0-9]{8}$/
    let phone84 = /^[84]{2}[35789]{1}[0-9]{8}$/
    return phoneNot84.test(str) || phone84.test(str)
  })

  inject('isHasSpecial', str => {
    let sp = "~;+@#$%^&*(){} |=-'"
    let strLower = str.toLowerCase()
    let isOK = false
    for (let i = 0; i < strLower.length; i++) {
      if (sp.indexOf(strLower[i]) >= 0) {
        isOK = true
        break
      }
    }
    return isOK
  })

  inject('isHasVietnamese', str => {
    let vn =
      'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ'
    let strLower = str.toLowerCase()

    let isOK = false
    for (let i = 0; i < strLower.length; i++) {
      if (vn.indexOf(strLower[i]) >= 0) {
        isOK = true
        break
      }
    }
    //console.log(isOK)
    return isOK
  })
  inject('commonFormatNumDuyCD', payload => {
    try {
      return Math.abs(Number(payload.amount)) >= 1.0e+9
        ? Math.round(Math.abs(Number(payload.amount)) / 1.0e+9) + " Tỷ"
        // Six Zeroes for Millions
        : Math.abs(Number(payload.amount)) >= 1.0e+6
          ? Math.round(Math.abs(Number(payload.amount)) / 1.0e+6) + " Triệu"
          // Three Zeroes for Thousands
          : Math.abs(Number(payload.amount)) >= 1.0e+3

            ? Math.round(Math.abs(Number(payload.amount)) / 1.0e+3) + " Nghìn"

            : Math.round(Math.abs(Number(payload.amount)));
    } catch (e) {
      console.log(e)
    }
  })
  inject('convertFloat', payload => {
    try {
      return parseFloat(payload.value).toFixed(1);
    } catch (e) {
      console.log(e)
    }
  })
  inject('formatUserId', payload => {
    try {
      return "******" + payload.value.substring(7);
    } catch (e) {
      console.log(e)
    }
  })
  inject('dynamicsort', payload => {
    try {
      var sort_order = 1;
      if (payload.order === "desc") {
        sort_order = -1;
      }
      return function (a, b) {
        // a should come before b in the sorted order
        if (a[payload.property] < b[payload.property]) {
          return -1 * sort_order;
          // a should come after b in the sorted order
        } else if (a[payload.property] > b[payload.property]) {
          return 1 * sort_order;
          // a and b are the same
        } else {
          return 0 * sort_order;
        }
      }
    } catch (e) {
      console.log(e)
    }
  })
}
