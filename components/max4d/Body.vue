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
              <span>{{ typeBao.text }}</span>
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
    <div id="max4dBodyAllBao">
      <div id="max4dCircleOrderBao4" class="max4dCircleOrderBao">
        <div class="form-group">
          <div
            class="max4dCircle"
            v-for="(item, index) in selectedData"
            :key="index"
          >
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td style="width: 10%">
                    <span
                      class="key step"
                      style="line-height: 27px; color: #910068"
                    >
                      {{ $commonBuildABCAll(index + 1) }}
                    </span>
                  </td>
                  <td style="width: 50%" @click="max4DOpenModalNumber(index)">
                    <span
                      class="step"
                      v-for="key in defaultNumberInRow"
                      :key="key"
                    >
                      {{ item.numbers[key - 1] ? item.numbers[key - 1] : "&nbsp;" }}
                    </span>
                  </td>
                  <td style="width: 15%">
                    <span
                      class="step_btn"
                      @click="max4DBtnOnclickRandom(index)"
                      :class="{
                        displayNoneKyQuay:
                          item.numbers && item.numbers.length > 0,
                      }"
                    >
                      <i
                        style="font-size: 20px; font-weight: 700"
                        class="fa fa-refresh"
                      ></i>
                    </span>
                    <span
                      class="step_btn"
                      @click="max4DBtnOnclickDel(index)"
                      :class="{
                        displayNoneKyQuay:
                          item.numbers && item.numbers.length == 0,
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
                        v-for="(price, indexPrice) in $store.state.app
                          .defaultPrice_Max4D"
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
      <div class="max4dCircle text-right">
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
        @click="max4DBtnToChonnhanh()"
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
            @click="max4DAddBasket()"
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
            @click="max4DBtnBuyNow()"
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

    <ModalKyQuay
      v-if="modalKyQuay"
      :modalKyQuay.sync="modalKyQuay"
      :dataKyQuay="dataKyQuay"
      :selectedKyQuay.sync="selectedKyQuay"
      :color="color"
    />
    <ModalCachChoi
      v-if="modalCachChoi"
      :modalCachChoi.sync="modalCachChoi"
      :typeBao.sync="typeBao"
      :dataType="max4dSelectBao"
      :color="color"
    />
  </div>
</template>
<script>
import ModalCachChoi from "~/components/common/ModalMax4DCachChoi.vue";
import ModalKyQuay from "~/components/common/ModalKyQuay.vue";

import API from "~/components/common/example_data.js";
import Cookies from "js-cookie";
export default {
  components: {
    ModalCachChoi,
    ModalKyQuay,
  },
  data() {
    return {
      color: "#da7545",
      max4dSelectBao: [],
      typeBao: {},
      modalCachChoi: false,
      selectedKyQuay: [],
      modalCachChoi: false,
      modalKyQuay: false,
      defaultCategory: 2,
      selectedData: [],
      defaultNumberInRow: 4,
      selectedKey: 0,
      modalNumber: false,
      colorModalNumber: "#555",
      totalPrice: 0,
      resultAddBasket: false,
      showBtnCart: false,
      totalNumber: 9,

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
    typeBao: function (val) {
      this.setDefaultSelectedData();
    },
  },
  mounted() {
    this.getDefaultMax4DSelectBao();
    this.getDataKyQuay();
    this.setDefaultSelectedData();
  },
  methods: {
    getDefaultMax4DSelectBao() {
      this.max4dSelectBao = this.$store.state.app.max4DSelectBao;
      this.typeBao = this.max4dSelectBao[0];
    },
    showModalCachChoi() {
      this.modalCachChoi = true;
    },
    getDataKyQuay() {
      let data = API.data.filter((value, index) => {
        return value.category == this.defaultCategory;
      });
      this.dataKyQuay = data;
      this.selectedKyQuay.push(this.dataKyQuay[0].drawCode);
    },
    showModalKyQuay() {
      this.modalKyQuay = true;
    },
    setDefaultSelectedData() {
      let arr = [];
      for (var i = 0; i < this.$store.state.app.levelMax4D; i++) {
        arr[i] = {
          numbers: [],
          price: 10000,
        };
        // for (var k = 0; k < this.defaultNumberInRow; k++) {
        //   arr[i].numbers[k] = "";
        // }
      }
      this.selectedData = arr;
    },
    goToCartPage() {
      this.$redirect({ url: "/momo/basket", samepage: true });
    },
    max4DBtnToChonnhanh() {
      for (var i = 0; i < this.$store.state.app.levelMax4D; i++) {
        if (this.selectedData[i].numbers.length == 0) {
          for (var k = 0; k < this.defaultNumberInRow; k++) {
            let random = Math.floor(
              Math.random() * (this.totalNumber - 1 + 1) + 1
            );

            this.selectedData[i].numbers.push(random);
          }
          if (this.typeBao.value == 4) {
            this.selectedData[i].numbers[0] = "*";
          }
          if (this.typeBao.value == 5) {
            this.selectedData[i].numbers[this.defaultNumberInRow - 1] = "*";
          }

          // let totalNumberInRow = this.defaultNumberInRow
          // if (this.typeBao.value == 4) {
          //     this.selectedData[i].numbers[0] = "*";
          //     totalNumberInRow= totalNumberInRow  - 1
          // }
          // if(this.typeBao.value == 5) {
          //   this.selectedData[i].numbers[this.defaultNumberInRow - 1] = "*";
          // }
          // do {

          //     let random = Math.floor(
          //       Math.random() * (this.totalNumber - 1 + 1) + 1
          //     );
          //     if (!this.selectedData[i].numbers.includes(random)) {
          //       this.selectedData[i].numbers.push(random);
          //       this.selectedData[i].numbers.sort(this.$sortNumber());
          //     }

          // } while (this.selectedData[i].numbers.length <= this.defaultNumberInRow);
          return;
        }
      }
    },
    max4DOpenModalNumber(index) {},
    max4DBtnOnclickRandom(key) {
      for (var k = 0; k < this.defaultNumberInRow; k++) {
        let random = Math.floor(Math.random() * (this.totalNumber - 1 + 1) + 1);

        this.selectedData[key].numbers.push(random);
      }
      if (this.typeBao.value == 4) {
        this.selectedData[key].numbers[0] = "*";
      }
      if (this.typeBao.value == 5) {
        this.selectedData[key].numbers[this.defaultNumberInRow - 1] = "*";
      }
    },
    max4DBtnOnclickDel(key) {
      this.selectedData[key].numbers = [];
    },
    getTotalPrice() {},

    max4DBtnBuyNow() {},

    max4DAddBasket() {},
  },
};
</script>