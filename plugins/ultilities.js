import {
  CHANNEL,
  SALE_CHANNEL_CODE,
  PRODUCT_TYPE,
  RETURN_URL,
  COOKIE_CLIENT_TRANSID_NAME
} from '~/store/constants'
import Cookies from "js-cookie";

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
  inject('convertSTP', payload => {
    try {
      payload.value = payload.value + ""
      if (payload.value.indexOf("\.") !== -1) {
        return payload.value;
      } else {
        return payload.value + ".0";
      }
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
  inject('getOpenDate', payload => {
    try {
      return payload.value.split(" ")[0];
    } catch (e) {
      console.log(e)
    }
  })
  inject('getCloseTime', payload => {
    try {
      return payload.value.split(" ")[1].substring(0, 5) + " " + value.split(" ")[0];
    } catch (e) {
      console.log(e)
    }
  })
  inject('commonBuildABCAll', key => {
    try {
      var html = '';
      if (key == 1) {
        html = 'A';
      } else if (key == 2) {
        html = 'B';
      } else if (key == 3) {
        html = 'C';
      } else if (key == 4) {
        html = 'D';
      } else if (key == 5) {
        html = 'E';
      } else if (key == 6) {
        html = 'F';
      }

      return html;
    } catch (e) {
      console.log(e)
    }
  })
  inject('commonPower655DefaultMoneyBao', typeBao => {
    try {
      var giaveVND = 10000;

      if (typeBao == 5) {
        giaveVND = 500000;
      } else if (typeBao == 7) {
        giaveVND = 70000;
      } else if (typeBao == 8) {
        giaveVND = 280000;
      } else if (typeBao == 9) {
        giaveVND = 840000;
      } else if (typeBao == 10) {
        giaveVND = 2100000;
      } else if (typeBao == 11) {
        giaveVND = 4620000;
      } else if (typeBao == 12) {
        giaveVND = 9240000;
      } else if (typeBao == 13) {
        giaveVND = 17160000;
      } else if (typeBao == 14) {
        giaveVND = 30030000;
      } else if (typeBao == 15) {
        giaveVND = 50050000;
      } else if (typeBao == 18) {
        giaveVND = 185640000;
      }

      return giaveVND;
    } catch (e) {
      console.log(e)
    }
  })
  inject('commonMega645DefaultMoneyBao', typeBao => {
    try {
      var giaveVND = 10000;

      if (typeBao == 5) {
        giaveVND = 400000;
      } else if (typeBao == 7) {
        giaveVND = 70000;
      } else if (typeBao == 8) {
        giaveVND = 280000;
      } else if (typeBao == 9) {
        giaveVND = 840000;
      } else if (typeBao == 10) {
        giaveVND = 2100000;
      } else if (typeBao == 11) {
        giaveVND = 4620000;
      } else if (typeBao == 12) {
        giaveVND = 9240000;
      } else if (typeBao == 13) {
        giaveVND = 17160000;
      } else if (typeBao == 14) {
        giaveVND = 30030000;
      } else if (typeBao == 15) {
        giaveVND = 50050000;
      } else if (typeBao == 18) {
        giaveVND = 185640000;
      }

      return giaveVND;

      return giaveVND;
    } catch (e) {
      console.log(e)
    }
  })
  inject('sortNumber', payload => {
    try {
      return function (a, b) {
        return a - b
      }
    } catch (e) {
      console.log(e)
    }
  })
  inject('getCartData', payload => {
    try {
      let cartData = [];
      let cartPower655 =
        Cookies.get("LUCKYBEST_Power655") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_Power655"))
          : [];
      cartPower655.map(function (item, index) {
        cartData.push(item);
      });

      let cartMega645 =
        Cookies.get("LUCKYBEST_Mega645") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_Mega645"))
          : [];
      cartMega645.map(function (item, index) {
        cartData.push(item);
      });

      let cartMax4D =
        Cookies.get("LUCKYBEST_max4D") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_max4D"))
          : [];
      cartMax4D.map(function (item, index) {
        cartData.push(item);
      });

      let cartMax3DPlus =
        Cookies.get("LUCKYBEST_Max3DPlus") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_Max3DPlus"))
          : [];
      cartMax3DPlus.map(function (item, index) {
        cartData.push(item);
      });

      let cartOmMax3DPlus =
        Cookies.get("LUCKYBEST_omMax3DPlus") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_omMax3DPlus"))
          : [];
      cartOmMax3DPlus.map(function (item, index) {
        cartData.push(item);
      });

      return cartData;
    } catch (e) {
      console.log(e)
    }
  })
  inject('renewCookieCart', payload => {
    try {
      let dataCart = payload.dataCart;
      let newCartPower655 = [];
      let newCartMega645 = [];
      let newCartOmMax3DPlus = [];
      let newCartMax3DPlus = [];
      let newCartMax4D = [];
      dataCart.map(function (item, index) {
        //Power655
        if (item.category == 3) {
          newCartPower655.push(item);
        }
        //Mega645
        if (item.category == 1) {
          newCartMega645.push(item);
        }
        //Max4D
        if (item.category == 2) {
          newCartMax4D.push(item);
        }
        //Max3DPlus
        if (item.category == 5 && item.om == false) {
          newCartMax3DPlus.push(item);
        }
        //OmMax3DPlus
        if (item.category == 5 && item.om == true) {
          newCartOmMax3DPlus.push(item);
        }
      });
      Cookies.remove("LUCKYBEST_Power655");
      Cookies.remove("LUCKYBEST_Mega645");
      Cookies.remove("LUCKYBEST_Max3DPlus");
      Cookies.remove("LUCKYBEST_omMax3DPlus");
      Cookies.remove("LUCKYBEST_max4D");
      if (newCartPower655.length) {
        Cookies.set("LUCKYBEST_Power655", JSON.stringify(newCartPower655), {});
      }
      if (newCartMega645.length) {
        Cookies.set("LUCKYBEST_Mega645", JSON.stringify(newCartMega645), {});
      }
      if (newCartMax4D.length) {
        Cookies.set("LUCKYBEST_max4D", JSON.stringify(newCartMax4D), {});
      }
      if (newCartMax3DPlus.length) {
        Cookies.set("LUCKYBEST_Max3DPlus", JSON.stringify(newCartMax3DPlus), {});
      }
      if (newCartOmMax3DPlus.length) {
        Cookies.set("LUCKYBEST_omMax3DPlus", JSON.stringify(newCartOmMax3DPlus), {});
      }

      return;
    } catch (e) {
      console.log(e)
    }
  })
  inject('commonMax4dDefaultMoneyBao', payload => {
    try {
      let typeBao = payload.typeBao
      let array_elements = payload.numbers
      var giaveVND = 10000;

      if (typeBao == 3) {
        array_elements.sort();

        var current = null;
        var cnt = 0;
        var arrCount = new Array();
        for (var i = 0; i < array_elements.length; i++) {
          if (array_elements[i] != current) {
            if (cnt > 0) {
              arrCount.push(current);
            }
            current = array_elements[i];
            cnt = 1;
          } else {
            cnt++;
          }
        }
        if (cnt > 0) {
          arrCount.push(current);
        }

        var countsObj = {};
        var flagV2 = false;
        for (var ci = 0; ci < array_elements.length; ci++) {
          var num = array_elements[ci];
          countsObj[num] = countsObj[num] ? countsObj[num] + 1 : 1;
        }

        if (arrCount.length == 2) {
          var numberOne1 = countsObj[arrCount[0]];
          var numberOne2 = countsObj[arrCount[1]];
          if (numberOne1 == 3 || numberOne2 == 3) {
            flagV2 = true;
          }
        }

        var numberTextView = 1;
        if (arrCount.length == 2 && flagV2) {
          numberTextView = 4;
        } else if (arrCount.length == 2) {
          numberTextView = 6;
        } else if (arrCount.length == 3) {
          numberTextView = 12;
        } else if (arrCount.length == 4) {
          numberTextView = 24;
        }

        giaveVND = giaveVND * numberTextView;
      } else if (typeBao == 4 || typeBao == 5) {
        giaveVND = 100000;
      }

      return giaveVND;
    } catch (e) {
      console.log(e)
    }
  })
  inject('commonMax4DBuildToHopByGroup', payload => {
    try {
      var html = '';
      let group = payload.typeBao;
      if (group == 2 || group == 3) {

        let array_elements = payload.numbers
        array_elements.sort();

        var current = null;
        var cnt = 0;
        var arrCount = new Array();
        for (var i = 0; i < array_elements.length; i++) {
          if (array_elements[i] != current) {
            if (cnt > 0) {
              arrCount.push(current);
            }
            current = array_elements[i];
            cnt = 1;
          } else {
            cnt++;
          }
        }
        if (cnt > 0) {
          arrCount.push(current);
        }

        var countsObj = {};
        var flagV2 = false;
        for (var ci = 0; ci < array_elements.length; ci++) {
          var num = array_elements[ci];
          countsObj[num] = countsObj[num] ? countsObj[num] + 1 : 1;
        }

        if (arrCount.length == 2) {
          var numberOne1 = countsObj[arrCount[0]];
          var numberOne2 = countsObj[arrCount[1]];
          if (numberOne1 == 3 || numberOne2 == 3) {
            flagV2 = true;
          }
        }

        var numberTextView = 0;
        if (arrCount.length == 2 && flagV2) {
          numberTextView = 4;
        } else if (arrCount.length == 2) {
          numberTextView = 6;
        } else if (arrCount.length == 3) {
          numberTextView = 12;
        } else if (arrCount.length == 4) {
          numberTextView = 24;
        }

        if (group == 3) {
          numberTextView = "x" + numberTextView;
        }

        html += numberTextView;
      } else if (group == 4 || group == 5) {
        html = "x10";
      }
      //    console.log("boi so : ");
      //    console.log(html);
      return html;
    } catch (e) {
      console.log(e)
    }
  })

}
