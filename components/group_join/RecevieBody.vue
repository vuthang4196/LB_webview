<template>
  <section>
    <div class="panel-body panel-body-receive" style="min-height: 445px">
      <div
        class="form-group form-horizontal"
        style="border: red dotted 2px; background-color: #f5e8e8"
      >
        <v-row style="margin: 0">
          <v-col cols="6" style="padding: 0" class="text-right">
            <label
              class="control-label"
              style="font-size: 12px"
              for="receiveTickerCountMonneyAll"
              >&nbsp;Tiền vé:
            </label>
          </v-col>
          <v-col cols="6" style="padding: 0" class="pl-3">
            <span id="receiveTickerCountMonneyAll" style="color: red">
              {{ $formatMoney({ amount: payment.price }) }}
            </span>
          </v-col>
        </v-row>
        <v-row style="margin: 0">
          <v-col cols="6" style="padding: 0" class="text-right">
            <label
              id="receiveTickerCountMonneyShipLabelText"
              class="control-label"
              style="font-size: 12px"
              for="receiveTickerCountMonneyShip"
              >&nbsp;Hình thức đặt vé:
            </label>
          </v-col>
          <v-col cols="6" style="padding: 0" class="pl-3">
            <span id="receiveTickerCountMonneyShip" style="color: red"
              >Đại lý giữ hộ vé</span
            >
          </v-col>
        </v-row>
        <v-row style="margin: 0">
          <v-col cols="6" style="padding: 0" class="text-right">
            <label
              class="control-label"
              style="font-size: 12px"
              for="receiveTickerCountMonneyBonus"
              >&nbsp;Phí giao dịch (<span id="TextMomoFee"
                >{{ percentFee }}%</span
              >):
            </label>
          </v-col>
          <v-col cols="6" style="padding: 0" class="pl-3">
            <span id="receiveTickerCountMonneyBonus" style="color: red">
              {{ $formatMoney({ amount: paymentFee }) }}đ
            </span>
          </v-col>
        </v-row>
        <v-row style="margin: 0">
          <v-col cols="6" style="padding: 0" class="text-right">
            <label
              class="control-label"
              style="font-size: 12px"
              for="receiveTickerCountTotalMonneyAll"
              >&nbsp;Tổng tiền:
            </label>
          </v-col>
          <v-col cols="6" style="padding: 0" class="pl-3">
            <span
              id="receiveTickerCountTotalMonneyAll"
              style="color: red; font-weight: bold"
            >
              {{ $formatMoney({ amount: totalPrice }) }}đ
            </span>
          </v-col>
        </v-row>

        <v-row class="text-center" style="display: none; margin: 0">
          <v-col cols="6" style="padding: 0">
            <label
              ><input
                value="2"
                type="radio"
                name="receiveTickerRadio"
                checked=""
              />
              Đại lý giữ hộ</label
            >
          </v-col>
          <v-col cols="6" style="padding: 0">
            <label
              ><input value="1" type="radio" name="receiveTickerRadio" /> Ship
              vé</label
            >
          </v-col>
        </v-row>
      </div>
      <div id="receiveTickerShowHide">
        <div class="form-group">
          <label for="receiveTickerUsername">Họ tên người nhận vé</label>
          <input
            v-model="userName"
            id="receiveTickerUsername"
            type="text"
            class="form-control"
            value=""
          />
        </div>
        <div class="form-group">
          <label for="receiveTickerUserPhone"
            >Số điện thoại
            <span style="color: red">(SĐT đăng ký MOMO)</span></label
          >
          <input
            v-model="userPhone"
            id="receiveTickerUserPhone"
            type="tel"
            class="form-control"
            value=""
          />
        </div>
        <div id="receiveTickerUserFormNotBulk" class="form-group" style="">
          <label for="receiveTickerUserCMND">Số CMND/CCCD </label>
          <input
            v-model="userCMND"
            id="receiveTickerUserCMND"
            type="tel"
            class="form-control"
            value=""
          />
        </div>
        <div id="receiveTickerUserFormBulk" style="display: none">
          <div class="form-group">
            <label for="receiveTickerUserSelectProvince"
              >Tỉnh/ thành phố
            </label>
            <select
              class="form-control"
              onchange="receiveTickerGetAllDistrictShipByPro(this.value);"
              id="receiveTickerUserSelectProvince"
            ></select>
          </div>
          <div class="form-group">
            <label for="receiveTickerUserSelectDistrict">Quận/ huyện </label>
            <select
              class="form-control"
              id="receiveTickerUserSelectDistrict"
            ></select>
          </div>
          <div class="form-group">
            <label for="receiveTickerUserAddress">Địa chỉ </label>
            <input
              id="receiveTickerUserAddress"
              type="text"
              class="form-control"
              placeholder="Số nhà, đường xã..."
            />
          </div>
        </div>
        <div class="form-group text-center">
          <button
            @click="showModalTerm"
            type="button"
            class="btn btn-link btn-primary"
          >
            (Quy định về trả thưởng và giao vé)
          </button>
        </div>
        <div class="form-group text-center">
          <p style="color: red; font-size: 12px">
            Quý khách kiểm tra kỹ và đảm bảo thông tin trên là chính xác.
            <span id="receiveAlarmTextShip">
              Thông tin này sẽ được ghi vào mặt sau của vé khi vé được in
              ra.</span
            >
          </p>
        </div>
      </div>
      <v-snackbar
        v-model="snackBar.show"
        :timeout="snackBar.timeout"
        top
        right
        class="custom-snack-bar"
      >
        <v-row style="margin: 0">
          <v-col cols="11" style="padding: 0; padding-top: 10px">
            <span><i class="fa fa-info-circle"></i> {{ snackBar.msg }}</span>
          </v-col>
          <v-col cols="1" class="text-left" style="padding: 0">
            <v-btn
              color="blue"
              class="btn-close-snackbar"
              text
              @click="snackBar.show = false"
            >
              ×
            </v-btn>
          </v-col>
        </v-row>
      </v-snackbar>
      <DialogTerm :dialog.sync="dialog" />
    </div>
    <div class="panel-footer text-center">
      <div class="form-group mt-2">
        <v-btn
          @click="receiveTickerSmsLogin()"
          type="button"
          class="btn btn-danger btn-block btn-lg custom-btn-receivei-accept"
          data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Đang xử lý..."
        >
          XÁC NHẬN
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import DialogTerm from "~/components/home/DialogTerm.vue";
import Cookies from "js-cookie";
export default {
  components: {
    DialogTerm,
  },

  data() {
    return {
      dialog: false,
      userName: "",
      userPhone: "",
      userCMND: "",
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
      payment: {},
      percentFee: 1,
      paymentFee: null,
      totalPrice: null,
    };
  },

  mounted() {
    this.getPayment();
  },

  methods: {
    getPayment() {
      let data = Cookies.get("payment");
      let wallet = Cookies.get("wallet");
      if (wallet == "momo") {
        this.percentFee = 3;
      }
      this.payment = JSON.parse(data);
      this.paymentFee = Math.floor(
        this.payment.price * (this.percentFee / 100)
      );
      this.totalPrice = this.paymentFee + this.payment.price;
    },
    showModalTerm() {
      this.dialog = true;
    },
    convertMsisdn(phonenumber, prefix) {
      var regex = "^(\\+?84|0)?([3,5,7,8,9]\\d{8}|1[2,6,8,9]\\d{8})$";

      if (phonenumber.match(regex)) {
        return this.formatMsisdn(phonenumber, prefix);
      } else {
        return "";
      }
    },
    formatMsisdn(_msisdn, _pre) {
      if (_msisdn == null || _msisdn == "") {
        return _msisdn;
      }

      if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (searchString, position) {
          return (
            this.substr(position || 0, searchString.length) === searchString
          );
        };
      }

      var msisdn = "";

      if (_msisdn.startsWith(_pre)) {
        return _msisdn;
      } else if (_msisdn.startsWith("84")) {
        msisdn = _pre + _msisdn.substring(2);
        return msisdn;
      } else if (_msisdn.startsWith("+84")) {
        msisdn = _pre + _msisdn.substring(3);
        return msisdn;
      } else if (_msisdn.startsWith("0")) {
        msisdn = _pre + _msisdn.substring(1);
        return msisdn;
      } else {
        return _pre + _msisdn;
      }
    },
    validationForm() {
      let data = {
        result: true,
        msg: "",
      };
      if (this.userName.trim() == "") {
        data.result = false;
        data.msg = "Bạn chưa nhập họ tên";
        return data;
      }
      if (this.userPhone.trim() == "") {
        data.result = false;
        data.msg = "Bạn chưa nhập số điện thoại";
        return data;
      }
      if (
        this.userPhone.trim() == "" ||
        isNaN(this.userPhone.trim()) ||
        this.convertMsisdn(this.userPhone, "") == ""
      ) {
        data.result = false;
        data.msg = "Số điện thoại không hợp lệ";
        return data;
      }

      if (this.userCMND.trim().length < 8 || this.userCMND.trim().length > 15) {
        data.result = false;
        data.msg = "CMND không hợp lệ";
        return data;
      }

      return data;
    },
    receiveTickerSmsLogin() {
      let resultValidation = this.validationForm();
      if (resultValidation.result == false) {
        this.snackBar = {
          show: true,
          timeout: 3000,
          msg: resultValidation.msg,
        };
      }
    },
  },
};
</script>