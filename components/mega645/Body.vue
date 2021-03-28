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
              <option value="6">Vé thường</option>
            </select>
            <p
              class="CaptionCont SelectBox pl-2"
              style="pointer-events: none; line-height: 32px; font-weight: 400"
              title="Vé thường"
            >
              <span v-if="selectedLevel == 6"> Vé thường</span>
              <span v-else>Bao {{ selectedLevel }}</span>
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

    <div id="mega645BodyAllBao">
      <div class="mega645CircleOrderBao">
        <div
          class="form-group"
          v-for="key in $store.state.app.numberRowLevel[selectedLevel]"
          :key="key"
        >
          <div class="mega645Circle">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td style="width: 10%; text-align: center">
                    <span class="key step">{{ $commonBuildABCAll(key) }}</span>
                  </td>
                  <td
                    style="width: 75%; text-align: left; padding-left: 15px"
                    @click="mega645OpenModalNumber(key)"
                  >
                    <span
                      class="step"
                      v-for="index in selectedLevel"
                      :key="index"
                    >
                      {{
                        selectedData[key - 1]
                          ? selectedData[key - 1][index - 1] < 10
                            ? "0" + selectedData[key - 1][index - 1]
                            : selectedData[key - 1][index - 1]
                          : ""
                      }}
                    </span>
                  </td>
                  <td style="text-align: right">
                    <span
                      class="step_btn"
                      @click="meag645BtnOnclickRandom(key)"
                      :class="{
                        displayNoneKyQuay:
                          selectedData[key - 1] &&
                          selectedData[key - 1].length > 0,
                      }"
                    >
                      <i
                        style="font-size: 20px; font-weight: 700"
                        class="fa fa-refresh"
                      ></i>
                    </span>
                    <span
                      class="step_btn"
                      @click="mega645BtnOnclickDel(key)"
                      :class="{
                        displayNoneKyQuay:
                          selectedData[key - 1] &&
                          selectedData[key - 1].length == 0,
                      }"
                    >
                      <i
                        style="font-size: 20px; font-weight: 700"
                        class="fa fa-trash-o"
                      ></i>
                    </span>

                    <input type="hidden" value="0" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group mb-3">
      <div class="power655Circle text-right">
        <strong>Tạm tính:</strong>
        <strong style="color: red">
          <span id="power655CountAllMoney">
            {{ $formatMoney({ amount: totalPrice }) }}đ
          </span>
        </strong>
      </div>
    </div>

    <div class="form-group mb-3">
      <v-btn
        @click="mega645BtnToChonnhanh()"
        class="btn btn-danger btn-block btn-md btn-quick-select btn-quick-select-mega645"
      >
        CHỌN NHANH
      </v-btn>
    </div>

    <div>
      <v-row style="margin: 0">
        <v-col cols="6" style="padding: 0" class="text-center">
          <v-btn
            type="button"
            @click="mega645BtnAddBasket()"
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
            @click="mega645BtnBuyNow()"
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
      :selectedLevel.sync="selectedLevel"
      :typeLevel="typeLevel"
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
      :selectedLevel="selectedLevel"
      :selectedKey="selectedKey"
      :totalNumber="totalNumber"
      :selectedDataRow.sync="selectedDataRow"
      @setNewSelectedRow="setNewSelectedRow"
    />
  </div>
</template>

<script>
import ModalCachChoi from "~/components/common/ModalCachChoi.vue";
import ModalKyQuay from "~/components/common/ModalKyQuay.vue";
import ModalNumber from "~/components/common/ModalNumber.vue";
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
      modalCachChoi: false,
      modalKyQuay: false,
      modalNumber: false,
      typeLevel: [],
      selectedLevel: 6,
      dataKyQuay: [],
      selectedKyQuay: [],
      selectedData: [],
      totalNumber: 45,
      defaultPrice: 0,
      selectedKey: 0,
      selectedDataRow: [],
      totalPrice: 0,
      defaultCategory: 1,
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
      showBtnCart: false,
      resultAddBasket: false,
      color: "#da7545",
    };
  },
  watch: {
    selectedLevel: function (val) {
      this.getDefaultPrice();
      this.setDefaultSelectedData();
    },
    selectedData: function (val) {
      let selected = val.filter(function (item, key) {
        return item.length > 0;
      });
      this.totalPrice =
        this.defaultPrice * selected.length * this.selectedKyQuay.length;
    },
    selectedKyQuay: function (val) {
      let selected = this.selectedData.filter(function (item, key) {
        return item.length > 0;
      });
      this.totalPrice = this.defaultPrice * selected.length * val.length;
    },
  },
  mounted() {
    this.typeLevel = this.$store.state.app.mega645typeLevel;
    this.setShowBtnCart();
    this.getDataKyQuay();
    this.setDefaultSelectedData();
    this.getDefaultPrice();
  },
  methods: {
    goToCartPage() {
      this.$redirect({ url: "/momo/basket", samepage: true });
    },
    showModalCachChoi() {
      this.modalCachChoi = true;
    },
    showModalKyQuay() {
      this.modalKyQuay = true;
    },
    mega645OpenModalNumber(key) {
      this.selectedKey = key;
      this.selectedDataRow = this.selectedData[key - 1];
      this.modalNumber = true;
    },
    meag645BtnOnclickRandom(key) {
      do {
        let random = Math.floor(Math.random() * (this.totalNumber - 1 + 1) + 1);
        if (!this.selectedData[key - 1].includes(random)) {
          this.selectedData[key - 1].push(random);
          this.selectedData[key - 1].sort(this.$sortNumber());
        }
      } while (this.selectedData[key - 1].length < this.selectedLevel);
      return;
    },
    mega645BtnOnclickDel(key) {
      this.selectedData[key - 1].splice(0, this.selectedLevel);
      return;
    },
    mega645BtnToChonnhanh() {
      for (
        var i = 0;
        i < this.$store.state.app.numberRowLevel[this.selectedLevel];
        i++
      ) {
        if (this.selectedData[i].length == 0) {
          do {
            let random = Math.floor(
              Math.random() * (this.totalNumber - 1 + 1) + 1
            );
            if (!this.selectedData[i].includes(random)) {
              this.selectedData[i].push(random);
              this.selectedData[i].sort(this.$sortNumber());
            }
          } while (this.selectedData[i].length < this.selectedLevel);
          return;
        }
      }
    },

    setShowBtnCart() {
      let dataCart = this.$getCartData();
      if (dataCart.length) {
        this.showBtnCart = true;
      }
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
      for (
        var i = 0;
        i < this.$store.state.app.numberRowLevel[this.selectedLevel];
        i++
      ) {
        arr[i] = [];
      }
      this.selectedData = arr;
    },

    getDefaultPrice() {
      this.defaultPrice = this.$commonMega645DefaultMoneyBao(
        this.selectedLevel
      );
    },
    setNewSelectedRow(key, selected) {
      this.selectedData[key - 1] = selected;
      this.modalNumber = false;
    },

    mega645BtnBuyNow() {
      this.mega645BtnAddBasket();
      if (this.resultAddBasket == true) {
        this.$redirect({ url: "/momo/receive", samepage: true });
      }
    },

    mega645BtnAddBasket() {
      let data = this.selectedData.filter(function (item, key) {
        return item.length > 0;
      });
      if (data.length == 0) {
        let msg = "Bạn chưa chọn bộ số nào";
        this.setContentSnackBar(msg);
      } else {
        let cart = this.$getCartData();
        let dataSelectedKyQuay = this.selectedKyQuay;
        let kyQuay = this.dataKyQuay.filter(function (item, key) {
          return dataSelectedKyQuay.includes(item.drawCode);
        });

        let cartPrice = 0;
        cartPrice = cartPrice + this.totalPrice;
        cart.map(function (item, index) {
          cartPrice = cartPrice + item.totalPrice;
        });
        if (cartPrice > 50000000) {
          let msg =
            "Giá tri giỏ hàng (sau khi cộng thêm phí) không được lớn hơn 50 triệu";
          this.setContentSnackBar(msg);
        } else {
          let cartMega645 =
            Cookies.get("LUCKYBEST_Mega645") !== undefined
              ? JSON.parse(Cookies.get("LUCKYBEST_Mega645"))
              : [];
          let dataCart = {
            numbers: data,
            level: this.selectedLevel,
            tickets: kyQuay,
            category: this.defaultCategory,
            totalPrice: this.totalPrice,
          };
          cartMega645.push(dataCart);
          Cookies.set("LUCKYBEST_Mega645", JSON.stringify(cartMega645), {});
          this.setDefaultSelectedData();
          let msg = "Thêm vào giỏ hàng thành công";
          this.setContentSnackBar(msg);
          this.resultAddBasket = true;
          this.setShowBtnCart();
          this.$store.dispatch("app/setCookieCartChange", true);
        }
      }
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