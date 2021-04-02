<template>
  <div class="panel-body panel-body-common" style="position: relative">
    <div class="form-group">
      <v-row style="margin: 0">
        <v-col cols="6" style="padding: 6px" @click="showModalCachChoi()">
          <label for="power655Kymua" class="custom-label">Cách chơi</label>
          <div
            class="SumoSelect"
            tabindex="0"
            role="button"
            aria-expanded="false"
          >
            <select
              id="power655Muabao"
              style="pointer-events: none; line-height: 30px"
              class="form-control input-sm SelectClass"
            >
              <option value="1">Cơ bản</option>
            </select>
            <p
              class="CaptionCont SelectBox pl-2"
              style="pointer-events: none; line-height: 32px; font-weight: 400"
              title="Cơ bản"
            >
              <span v-if="typeBao == 1"> Cơ bản</span>
              <span v-else>Bao {{ typeBao }}</span>
              <label><i></i></label>
            </p>
          </div>
        </v-col>
        <v-col cols="6" style="padding: 6px" @click="showModalKyQuay()">
          <label for="power655Kymua" class="custom-label">Kỳ quay</label>
          <div
            class="SumoSelect"
            tabindex="0"
            role="button"
            aria-expanded="false"
          >
            <select
              id="power655Kymua"
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
      </v-row>
    </div>
    <div id="max3dPlusBodyAllBao">
      <div id="max3dPlusCircleOrderBao6" class="max3dPlusCircleOrderBao">
        <div class="form-group">
          <div
            class="max3dPlusCircle"
            v-for="(item, index) in selectedData"
            :key="index"
          >
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td style="width: 10%">
                    <span
                      class="key step"
                      style="line-height: 27px; color: #b21b8f"
                    >
                      {{ $commonBuildABCAll(index + 1) }}
                    </span>
                  </td>
                  <td
                    style="width: 50%"
                    @click="max3dPlusOpenModalNumber(index)"
                  >
                    <span class="step">
                      {{ item.from != "" ? item.from : "&nbsp;" }}
                    </span>
                    <span class="step">
                      {{ item.to != "" ? item.to : "&nbsp;" }}
                    </span>
                  </td>
                  <td style="width: 15%">
                    <span
                      class="step_btn"
                      @click="max3dPlusBtnOnclickRandomDel(index)"
                      :class="{
                        displayNoneKyQuay: item.from != '' && item.to != '',
                      }"
                    >
                      <i
                        style="font-size: 20px; font-weight: 700"
                        class="fa fa-refresh"
                      ></i>
                    </span>
                    <span
                      class="step_btn"
                      @click="max3dPlusBtnOnclickDel(index)"
                      :class="{
                        displayNoneKyQuay: item.from == '' && item.to == '',
                      }"
                    >
                      <i
                        style="font-size: 20px; font-weight: 700"
                        class="fa fa-trash-o"
                      ></i>
                    </span>
                  </td>
                  <td
                    style="text-align: right; vertical-align: top"
                    width="25%"
                  >
                    <select
                      v-model="item.price"
                      class="max3dPlusMuabaoSelMoney_Bg form-control input-sm minimal"
                    >
                      <option
                        v-for="(price, indexPrice) in dataSelectedPrice"
                        :key="indexPrice"
                        :value="price.value"
                      >
                        {{ price.text }}
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="max3dPlusCircle text-right">
        <strong>Tạm tính:</strong>
        <strong style="color: red">
          <span id="max3dPlusCountAllMoney" class="pr-2">
            {{ $formatMoney({ amount: totalPrice }) }}đ
          </span>
        </strong>
      </div>
    </div>

    <div class="form-group mb-3 px-1">
      <v-btn
        @click="max3dPlusBtnToChonnhanh()"
        class="btn btn-danger btn-block btn-md btn-quick-select btn-quick-select-max3dplus"
      >
        CHỌN NHANH
      </v-btn>
    </div>

    <div>
      <v-row style="margin: 0">
        <v-col cols="6" style="padding: 0" class="text-center">
          <v-btn
            type="button"
            @click="max3dPlusAddBasket()"
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
            @click="max3dPlusBtnBuyNow()"
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

    <ModalCachChoi
      v-if="modalCachChoi"
      :modalCachChoi.sync="modalCachChoi"
      :typeBao.sync="typeBao"
      :dataType="max3dPlusSelectBao"
      :color="color"
    />

    <ModalKyQuay
      v-if="modalKyQuay"
      :modalKyQuay.sync="modalKyQuay"
      :dataKyQuay="dataKyQuay"
      :selectedKyQuay.sync="selectedKyQuay"
      :color="color"
    />

    <ModalNumber
      v-if="modalNumber"
      :modalNumber.sync="modalNumber"
      :color="colorModalNumber"
      :selectedKey="selectedKey"
      :max3dPlusSelectBao="max3dPlusSelectBao"
      :typeBao="typeBao"
      :selectedData="selectedData"
      @updateSelectedData="updateSelectedData"
    />
  </div>
</template>
<script>
import ModalCachChoi from "~/components/common/ModalMax3DPlusCachChoi.vue";
import ModalKyQuay from "~/components/common/ModalKyQuay.vue";
import ModalNumber from "~/components/common/ModalNumber3DMaxPlus.vue";

import API from "~/components/common/example_data.js";
import Cookies from "js-cookie";
export default {
  components: {
    ModalCachChoi,
    ModalKyQuay,
    ModalNumber,
  },
  data() {
    return {
      color: "#DD0E11",
      typeBao: 1,
      max3dPlusSelectBao: [],
      selectedKyQuay: [],
      dataKyQuay: [],
      selectedKyQuay: [],
      modalCachChoi: false,
      modalKyQuay: false,
      defaultCategory: 5,
      selectedData: [],
      dataSelectedPrice: [],
      showBtnCart: false,
      totalNumber: 999,
      selectedKey: 0,
      modalNumber: false,
      colorModalNumber: "#555",
      totalPrice: 0,
      resultAddBasket: false,
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
    };
  },
  watch: {
    selectedData: {
      handler(val) {
        this.getTotalPrice();
      },
      deep: true,
    },
    selectedKyQuay: function (val) {
      this.getTotalPrice();
    },
  },
  mounted() {
    this.setShowBtnCart();
    this.getDefaultMax3dPlusSelectBao();
    this.getDataKyQuay();
    this.setDefaultSelectedData();
    this.setDefaultSelectedPrice();
  },
  methods: {
    setShowBtnCart() {
      let dataCart = this.$getCartData();
      if (dataCart.length) {
        this.showBtnCart = true;
      }
    },
    showModalCachChoi() {
      this.modalCachChoi = true;
    },

    showModalKyQuay() {
      this.modalKyQuay = true;
    },

    max3dPlusOpenModalNumber(index) {
      this.selectedKey = index;
      this.modalNumber = true;
    },

    getDefaultMax3dPlusSelectBao() {
      let constData = this.$store.state.app.max3dPlusSelectBao;
      let defaultTypeBao = this.typeBao;
      let dataSelectedBao = constData.filter(function (item, index) {
        return item.value == defaultTypeBao;
      });
      this.max3dPlusSelectBao = dataSelectedBao;
    },

    getDataKyQuay() {
      let data = API.data.filter((value, index) => {
        return value.category == this.defaultCategory;
      });
      this.dataKyQuay = data;
      this.selectedKyQuay.push(this.dataKyQuay[0].drawCode);
    },

    setDefaultSelectedData() {
      let arr = [];
      for (var i = 0; i < this.$store.state.app.levelMax3dPlus; i++) {
        arr[i] = {
          from: "",
          to: "",
          price: 10000,
        };
      }
      this.selectedData = arr;
    },
    setDefaultSelectedPrice() {
      this.dataSelectedPrice = this.$store.state.app.defaultPrice_Max3DPlus;
    },
    max3dPlusBtnOnclickRandomDel(index) {
      let randomFrom = Math.floor(
        Math.random() * (this.totalNumber - 1 + 1) + 1
      );
      this.selectedData[index].from = this.convertNumberSelected(randomFrom);

      let randomTo = Math.floor(Math.random() * (this.totalNumber - 1 + 1) + 1);
      this.selectedData[index].to = this.convertNumberSelected(randomTo);
    },
    max3dPlusBtnToChonnhanh() {
      for (var i = 0; i < this.$store.state.app.levelMax3dPlus; i++) {
        if (this.selectedData[i].from == "" && this.selectedData[i].to == "") {
          let randomFrom = Math.floor(
            Math.random() * (this.totalNumber - 1 + 1) + 1
          );
          this.selectedData[i].from = this.convertNumberSelected(randomFrom);

          let randomTo = Math.floor(
            Math.random() * (this.totalNumber - 1 + 1) + 1
          );
          this.selectedData[i].to = this.convertNumberSelected(randomTo);

          return;
        }
      }
    },
    max3dPlusBtnOnclickDel(index) {
      this.selectedData[index].from = "";
      this.selectedData[index].to = "";
    },
    convertNumberSelected(number) {
      if (number < 10) {
        number = "00" + number;
      }
      if (number > 10 && number < 100) {
        number = "0" + number;
      }

      return number.toString();
    },

    updateSelectedData(data, index) {
      this.selectedData[index] = data;
      this.selectedKey = 0;
    },
    getTotalPrice() {
      let total = 0;
      let kyQuay = this.selectedKyQuay;
      this.selectedData.map(function (item, index) {
        if (item.from != "" && item.to != "" && item.price != 0) {
          total = total + parseInt(item.price) * kyQuay.length;
        }
      });
      this.totalPrice = total;
    },
    max3dPlusBtnBuyNow() {
      this.max3dPlusAddBasket();
      if (this.resultAddBasket == true) {
        this.$redirect({ url: "/momo/receive", samepage: true });
      }
    },
    goToCartPage() {
      this.$redirect({ url: "/momo/basket", samepage: true });
    },
    max3dPlusAddBasket() {
      let dataMax3DPlus = this.selectedData.filter(function (item, index) {
        return item.from != "" && item.to != "" && item.price != 0;
      });
      if (dataMax3DPlus.length == 0) {
        let msg = "Bạn chưa chọn bộ số nào";
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

      let cartMax3DPlus =
        Cookies.get("LUCKYBEST_Max3DPlus") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_Max3DPlus"))
          : [];
      let dataSelectedKyQuay = this.selectedKyQuay;
      let kyQuay = this.dataKyQuay.filter(function (item, key) {
        return dataSelectedKyQuay.includes(item.drawCode);
      });
      let selectedTypeBao = this.typeBao;
      let dataTypeBao = this.max3dPlusSelectBao.filter(function (item, key) {
        return item.value == selectedTypeBao;
      })
      let dataCart = {
        numbers: dataMax3DPlus,
        tickets: kyQuay,
        totalPrice: this.totalPrice,
        category: this.defaultCategory,
        om: false,
        selectedTypeBao: dataTypeBao[0]
      };
      cartMax3DPlus.push(dataCart);
      Cookies.set("LUCKYBEST_Max3DPlus", JSON.stringify(cartMax3DPlus), {});
      this.setDefaultSelectedData();
      let msg = "Thêm vào giỏ hàng thành công";
      this.setContentSnackBar(msg);
      this.resultAddBasket = true;
      this.setShowBtnCart();
      this.$store.dispatch("app/setCookieCartChange", true);
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