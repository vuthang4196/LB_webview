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
              <option value="6">Cơ bản</option>
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
            id="max3dPlusCircleOrderBao6A"
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
                  <td style="width: 50%" @click="max3dPlusOpenModalNumber()">
                    <span class="step">&nbsp;</span>
                    <span class="step">&nbsp;</span>
                  </td>
                  <td style="width: 15%">
                    <span
                      class="step_btn"
                      @click="max3dPlusBtnOnclickRandomDel()"
                    >
                      <i
                        style="font-size: 20px; font-weight: 700"
                        class="fa fa-refresh"
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
          <span id="max3dPlusCountAllMoney" class="pr-2"> 0đ </span>
        </strong>
      </div>
    </div>

    <div class="form-group mb-3">
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
  </div>
</template>
<script>
import ModalCachChoi from "~/components/common/ModalMax3DPlusCachChoi.vue";
import ModalKyQuay from "~/components/common/ModalKyQuay.vue";

import API from "~/components/common/example_data.js";
export default {
  components: {
    ModalCachChoi,
    ModalKyQuay,
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
      level: 4,
      selectedData: [],
      dataSelectedPrice: [],
      showBtnCart: false,
    };
  },
  watch: {
    selectedData: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  mounted() {
    this.getDefaultMax3dPlusSelectBao();
    this.getDataKyQuay();
    this.setDefaultSelectedData();
    this.setDefaultSelectedPrice();
  },
  methods: {
    showModalCachChoi() {
      this.modalCachChoi = true;
    },

    showModalKyQuay() {
      this.modalKyQuay = true;
    },

    max3dPlusOpenModalNumber() {},

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
      console.log(this.selectedData);
    },
    setDefaultSelectedPrice() {
      this.dataSelectedPrice = this.$store.state.app.defaultPrice_Max3DPlus;
    },
    max3dPlusBtnOnclickRandomDel() {
      alert("111");
    },
    max3dPlusAddBasket() {
      alert("2222");
    },
    max3dPlusBtnBuyNow() {
      alert("333");
    },
    max3dPlusBtnToChonnhanh() {
      alert('444')
    }
  },
};
</script>