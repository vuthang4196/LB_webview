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

    <div id="power655BodyAllBao">
      <div class="power655CircleOrderBao">
        <div
          class="form-group"
          v-for="key in $store.state.app.numberRowLevel[selectedLevel]"
          :key="key"
        >
          <div class="power655Circle">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td style="width: 10%; text-align: center">
                    <span class="key step">{{ $commonBuildABCAll(key) }}</span>
                  </td>
                  <td
                    style="width: 75%; text-align: left; padding-left: 15px"
                    @click="power655OpenModalNumber()"
                  >
                    <span
                      class="step"
                      v-for="index in selectedLevel"
                      :key="index"
                      >&nbsp;&nbsp;</span
                    >
                  </td>
                  <td style="text-align: right">
                    <span
                      class="step_btn"
                      id="idSelectedSpanBong__Key_Btn_6_A"
                      @click="power655BtnOnclickRandomDel()"
                    >
                      <i
                        style="font-size: 20px; font-weight: 700"
                        class="fa fa-refresh"
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
        <strong style="color: red"
          ><span id="power655CountAllMoney">10.000</span>đ</strong
        >
      </div>
    </div>

    <div class="form-group mb-3">
      <v-btn
        @click="power655BtnToChonnhanh()"
        class="btn btn-danger btn-block btn-md btn-quick-select"
      >
        CHỌN NHANH
      </v-btn>
    </div>

    <div>
      <v-row style="margin: 0">
        <v-col cols="6" style="padding: 0" class="text-center">
          <v-btn
            type="button"
            onclick="power655BtnAddBasket();"
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
            onclick="power655BtnBuyNow();"
            class="btn btn-danger btn-block btn-md btn-buy-now"
          >
            MUA NGAY
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <ModalCachChoi
      v-if="modalCachChoi"
      :modalCachChoi.sync="modalCachChoi"
      :selectedLevel.sync="selectedLevel"
      :typeLevel="typeLevel"
    />
    <ModalKyQuay
      v-if="modalKyQuay"
      :modalKyQuay.sync="modalKyQuay"
      :dataKyQuay="dataKyQuay"
      :selectedKyQuay.sync="selectedKyQuay"
    />
  </div>
</template>

<script>
import ModalCachChoi from "~/components/common/ModalCachChoi.vue";
import ModalKyQuay from "~/components/common/ModalKyQuay.vue";
import API from "~/components/common/example_data.js";
export default {
  components: {
    ModalCachChoi,
    ModalKyQuay,
  },
  data() {
    return {
      modalCachChoi: false,
      modalKyQuay: false,
      typeLevel: [],
      selectedLevel: 6,
      dataKyQuay: [],
      selectedKyQuay: [],
    };
  },
  mounted() {
    this.typeLevel = this.$store.state.app.power655typeLevel;
    this.getDataKyQuay();
  },
  methods: {
    showModalCachChoi() {
      this.modalCachChoi = true;
    },
    showModalKyQuay() {
      this.modalKyQuay = true;
    },
    power655BtnOnclickRandomDel() {
      alert("1111");
    },
    power655OpenModalNumber() {
      alert("333");
    },
    power655BtnToChonnhanh() {
      alert("444");
    },
    getDataKyQuay() {
      let data = API.data.filter((value, index) => {
        return value.category == 3;
      });
      this.dataKyQuay = data;
      this.selectedKyQuay.push(this.dataKyQuay[0].drawCode);
    },
  },
};
</script>