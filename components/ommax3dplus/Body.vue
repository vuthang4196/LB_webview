<template>
  <div class="panel-body panel-body-common" style="position: relative">
    <div class="form-group">
      <v-row style="margin: 0">
        <v-col cols="6" style="padding: 6px" @click="showModalKyQuay()">
          <label for="omMax3dPlusKyMua" class="custom-label">Kỳ mua</label>
          <div
            class="SumoSelect"
            tabindex="0"
            role="button"
            aria-expanded="false"
          >
            <select
              style="pointer-events: none; line-height: 30px"
              multiple="multiple"
              placeholder="Chọn kỳ"
              class="form-control input-sm SelectClass"
            >
              <option value="00556">Kỳ #00556 - T3 23/03/2021</option>
            </select>
            <p
              class="CaptionCont SelectBox pl-2"
              style="pointer-events: none; line-height: 32px; font-weight: 400"
              title=" 1 lựa chọn"
            >
              <span v-if="selectedKyQuay.length > 0">
                {{ selectedKyQuay.length }} lựa chọn
              </span>
              <span v-else> Chọn kỳ </span>
              <label><i></i></label>
            </p>
          </div>
        </v-col>
        <v-col cols="6" style="padding: 6px" @click="showModalDonGia()">
          <label for="omMax3dPlusDonGia" class="custom-label">Đơn giá</label>
          <input
            style="pointer-events: none"
            class="form-control input-sm"
            v-model="strSelectedDonGia"
            truevalue="10"
          />
        </v-col>
      </v-row>
      <v-row style="margin: 0" class="mt-3 row-choose-number">
        <v-col cols="6" class="text-center" style="padding: 0">
          <label class="custom-label"> Số tự chọn</label>
          <table style="width: 100%">
            <tbody>
              <tr>
                <td>
                  <span
                    class="step stepStc"
                    style="width: 2.2em; height: 2.2em; margin-left: 0"
                  >
                    A
                  </span>
                </td>
                <td
                  style="width: auto; text-align: center"
                  @click="ommax3dPlusOpenModalNumberStc()"
                >
                  <span
                    class="step stepStc"
                    style="margin-right: 0"
                    id="ommax3dPlusStc"
                    >&nbsp;{{ selectedNumStc }}</span
                  >
                  <input type="hidden" id="ommax3dPlusStcHid" />
                </td>
                <td style="text-align: right; vertical-align: top">
                  <span
                    class="stepStc_btn"
                    id=""
                    @click="ommax3dPlusBtnOnclickRandomDel()"
                  >
                    <i
                      style="font-size: 20px; font-weight: 700"
                      class="fa fa-refresh"
                    ></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
        <v-col cols="6" style="padding: 0">
          <label for="ommax3dPlusDongia" class="custom-label">Ôm giải số</label>
          <table style="width: 100%">
            <tbody>
              <tr style="text-align: center">
                <td style="width: auto" @click="ommax3dPlusOpenModalNumber()">
                  <span class="step stepOgs" id="ommax3dPlusOgsFrom" style=""
                    >&nbsp;{{ selectedFrom }}</span
                  >
                  →
                  <span
                    class="step stepOgs"
                    id="ommax3dPlusOgsTo"
                    style="margin-right: 0"
                    >&nbsp;{{ selectedTo }}</span
                  >
                  <input type="hidden" id="ommax3dPlusOgsFromHid" />
                  <input type="hidden" id="ommax3dPlusOgsToHid" />
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </div>

    <div class="form-group">
      <div class="text-right mr-2">
        <strong>Tạm tính:</strong>
        <strong style="color: #dd0e11">
          <span id="ommax3dPlusCountAllMoney">
            {{ $formatMoney({ amount: totalPrice }) }}đ
          </span>
        </strong>
        <input type="hidden" id="ommax3dPlusCountAllMoneyHid" value="0" /><br />
        <div class="ommax3dPlusCircle text-left px-1">
          <strong>Các bộ số tạo ra </strong>
        </div>
        <div id="ommax3dPlusBodyAllBao" class="mt-3">
          <div
            id="ommax3dPlusCircleOrderBao6"
            class="ommax3dPlusCircleOrderBao"
          >
            <v-row
              style="margin: 0"
              v-if="
                selectedNumStc != '' && selectedFrom != '' && selectedFrom != ''
              "
            >
              <v-col
                cols="3"
                style="padding: 0"
                class="text-center"
                v-for="(i, index) in totalNumbers"
                :key="i"
              >
                <span> {{ selectedNumStc }}&nbsp;&nbsp; </span>
                <span v-if="index + parseInt(selectedFrom) < 10">
                  00{{ index + parseInt(selectedFrom) }}
                </span>
                <span
                  v-else-if="
                    index + parseInt(selectedFrom) > 10 &&
                    index + parseInt(selectedFrom) < 100
                  "
                >
                  0{{ index + parseInt(selectedFrom) }}
                </span>
                <span v-else>
                  {{ index + parseInt(selectedFrom) }}
                </span>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
    <div>
      <v-row style="margin: 0">
        <v-col cols="6" style="padding: 0" class="text-center">
          <v-btn
            type="button"
            @click="omMax3dPlusAddBasket()"
            class="btn btn-primary btn-block btn-md btn-add-to-cart"
          >
            <i class="fa fa-plus" style="font-size: xx-small; margin: 0"></i>
            <i
              class="fa fa-shopping-cart"
              style="font-size: large; margin: 0"
            ></i>
          </v-btn>
        </v-col>
        <v-col cols="6" style="padding: 0" class="text-center">
          <v-btn
            type="button"
            @click="omMax3dPlusBtnBuyNow()"
            class="btn btn-danger btn-block btn-md btn-buy-now"
            v-if="showBtnCart == false"
          >
            MUA NGAY
          </v-btn>
          <v-btn
            type="button"
            @click="goToCartPage()"
            class="btn btn-danger btn-block btn-md btn-buy-now"
            v-else
          >
            XEM GIỎ HÀNG
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <v-snackbar
      v-model="snackBar.show"
      :timeout="snackBar.timeout"
      top
      right
      class="custom-snack-bar custom-snack-bar-number"
    >
      <v-row style="margin: 0">
        <v-col cols="11" style="padding: 0; padding-top: 10px">
          <span><i class="fa fa-info-circle"></i> {{ snackBar.msg }}</span>
        </v-col>
        <v-col cols="1" class="text-right" style="padding: 0">
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

    <ModalKyQuay
      v-if="modalKyQuay"
      :modalKyQuay.sync="modalKyQuay"
      :dataKyQuay="dataKyQuay"
      :selectedKyQuay.sync="selectedKyQuay"
      :color="color"
    />

    <ModalDonGia
      v-if="modalDonGia"
      :modalDonGia.sync="modalDonGia"
      :dataDonGia="dataDonGia"
      :selectedDonGia.sync="selectedDonGia"
      :color="color"
    />

    <ModalNumberOm3DMaxPlus
      v-if="modalNumber"
      :modalNumber.sync="modalNumber"
      :selectedFrom.sync="selectedFrom"
      :selectedTo.sync="selectedTo"
      :color="colorModalNumber"
    />

    <ModalNumberStc
      v-if="modalNumberStc"
      :modalNumberStc.sync="modalNumberStc"
      :selectedNumStc.sync="selectedNumStc"
      :color="colorModalNumber"
    />
  </div>
</template>

<script>
import ModalKyQuay from "~/components/common/ModalKyQuay.vue";
import ModalDonGia from "~/components/common/ModalDonGia.vue";
import ModalNumberOm3DMaxPlus from "~/components/common/ModalNumberOm3DMaxPlus.vue";
import ModalNumberStc from "~/components/common/ModalNumberStc.vue";

import API from "~/components/common/example_data.js";
import Cookies from "js-cookie";
export default {
  components: {
    ModalKyQuay,
    ModalDonGia,
    ModalNumberOm3DMaxPlus,
    ModalNumberStc,
  },
  data() {
    return {
      color: "#F27F24",
      modalKyQuay: false,
      dataKyQuay: [],
      selectedKyQuay: [],
      modalDonGia: false,
      dataDonGia: null,
      selectedDonGia: null,
      strSelectedDonGia: "",
      defaultCategory: 5,
      showBtnCart: false,
      selectedNumStc: "",
      totalNumber: 999,
      modalNumber: false,
      colorModalNumber: "#555",
      selectedFrom: "",
      selectedTo: "",
      totalPrice: 0,
      totalNumbers: 0,
      numFrom: 0,
      numTo: 0,
      modalNumberStc: false,
      resultAddBasket: false,
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
    };
  },
  watch: {
    selectedDonGia: function (val) {
      this.strSelectedDonGia = this.$formatMoney({ amount: val }) + "đ";
      this.getTotalPriceTicket();
    },
    selectedKyQuay: function (val) {
      this.getTotalPriceTicket();
    },
    selectedFrom: function (val) {
      this.getTotalPriceTicket();
    },
    selectedTo: function (val) {
      this.getTotalPriceTicket();
    },
  },
  mounted() {
    this.setShowBtnCart();
    this.getDataKyQuay();
    this.getDataDonGia();
  },
  methods: {
    getTotalPriceTicket() {
      let numFrom = parseInt(this.selectedFrom);
      let numTo = parseInt(this.selectedTo);
      this.totalNumbers = numTo - numFrom + 1;
      this.totalPrice =
        this.totalNumbers * this.selectedDonGia * this.selectedKyQuay.length;
    },
    setShowBtnCart() {
      let dataCart = this.$getCartData();
      if (dataCart.length) {
        this.showBtnCart = true;
      }
    },
    ommax3dPlusOpenModalNumberStc() {
      this.modalNumberStc = true;
    },
    showModalKyQuay() {
      this.modalKyQuay = true;
    },
    showModalDonGia() {
      this.modalDonGia = true;
    },
    getDataKyQuay() {
      let data = API.data.filter((value, index) => {
        return value.category == this.defaultCategory;
      });
      this.dataKyQuay = data;
      this.selectedKyQuay.push(this.dataKyQuay[0].drawCode);
    },

    getDataDonGia() {
      this.dataDonGia = this.$store.state.app.defaultPrice_omMax3DPlus;
      this.selectedDonGia = this.dataDonGia[0];
    },
    goToCartPage() {
      this.$redirect({ url: "/momo/basket", samepage: true });
    },
    omMax3dPlusBtnBuyNow() {
      this.omMax3dPlusAddBasket();
      if (this.resultAddBasket == true) {
        this.$redirect({ url: "/momo/receive", samepage: true });
      }
    },
    omMax3dPlusAddBasket() {
      if (
        this.selectedFrom == "" ||
        this.selectedTo == "" ||
        this.selectedNumStc == ""
      ) {
        let msg = "Bạn chưa chọn đủ bộ số";
        this.setContentSnackBar(msg);
        return;
      }
      if (this.selectedKyQuay.length == 0) {
        let msg = "Bạn chưa chọn kỳ quay";
        this.setContentSnackBar(msg);
        return;
      }

      let cart = this.$getCartData();

      let cartPrice = 0;
      cartPrice = cartPrice + this.totalPrice;
      cart.map(function (item, index) {
        cartPrice = cartPrice + item.totalPrice;
      });

      if (cartPrice > 50000000) {
        let msg =
          "Giá tri giỏ hàng (sau khi cộng thêm phí) không được lớn hơn 50 triệu";
        this.setContentSnackBar(msg);
        return;
      }

      let cartOmMax3DPlus =
        Cookies.get("LUCKYBEST_omMax3DPlus") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_omMax3DPlus"))
          : [];
      let dataSelectedKyQuay = this.selectedKyQuay;
      let kyQuay = this.dataKyQuay.filter(function (item, key) {
        return dataSelectedKyQuay.includes(item.drawCode);
      });
      let dataCart = {
        numberStc: this.selectedNumStc,
        numberFrom: this.selectedFrom,
        numberTo: this.selectedTo,
        tickets: kyQuay,
        totalPrice: this.totalPrice,
        unitPrice: this.selectedDonGia,
        category: this.defaultCategory,
        om: true,
      };
      cartOmMax3DPlus.push(dataCart);
      Cookies.set("LUCKYBEST_omMax3DPlus", JSON.stringify(cartOmMax3DPlus), {});
      this.setDefaultSelectedData();
      let msg = "Thêm vào giỏ hàng thành công";
      this.setContentSnackBar(msg);
      this.resultAddBasket = true;
      this.setShowBtnCart();
      this.$store.dispatch("app/setCookieCartChange", true);
    },

    ommax3dPlusBtnOnclickRandomDel() {
      let random = Math.floor(Math.random() * (this.totalNumber - 1 + 1) + 1);
      if (random < 10) {
        random = "00" + random;
      }
      if (random > 10 && random < 100) {
        random = "0" + random;
      }
      this.selectedNumStc = random.toString();
    },
    ommax3dPlusOpenModalNumber() {
      this.modalNumber = true;
    },
    setDefaultSelectedData() {
      this.selectedNumStc = "";
      this.selectedFrom = "";
      this.selectedTo = "";
    },
    setContentSnackBar(msg) {
      this.snackBar = {
        show: true,
        timeout: 3000,
        msg: msg,
      };
    },
  },
};
</script>