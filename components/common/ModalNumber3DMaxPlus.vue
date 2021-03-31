<template>
  <div class="text-center custom-dialog-number">
    <v-dialog v-model="modalNumber" width="600" persistent>
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-modal-cach-choi"
          :class="{
            'header-dialog-not-done-number': checkedFromTo == false,
            'header-dialog-done-number': checkedFromTo == true,
          }"
        >
          <v-col cols="1" style="padding: 0">
            <span
              class="pl-1 pb-1 selected-row-number"
              style="
                padding-right: 10px;
                color: #ffe003 !important;
                font-weight: bold;
              "
            >
              {{ $commonBuildABCAll(selectedKey + 1) }}
            </span>
          </v-col>
          <v-col cols="5" class="dialog-custom-col text-left title-custom">
            <span style="padding-left: 10px"
              >3D+
              {{ selectedBao.value == 1 ? "Cơ bản" : selectedBao.text }}</span
            >
          </v-col>
          <v-col cols="5" class="dialog-custom-col text-center title-custom">
            <span style="padding-left: 30px">Số kết thúc</span>
          </v-col>
          <v-col cols="1 text-right" class="dialog-custom-col">
            <v-btn
              icon
              light
              @click="$emit('update:modalNumber', false)"
              class="btn-close-dialog"
            >
              ×
            </v-btn>
          </v-col>
        </v-card-title>
        <div class="modal-body custom-dialog-number-body">
          <div id="max3dPlusModelMainBuildNumber" class="max3dPlusCircleModal">
            <v-row style="margin: 0">
              <v-col cols="9" style="padding: 0">
                <v-row style="margin: 0">
                  <v-col
                    cols="6"
                    style="padding: 0"
                    class="ommax3dPlusDivBorderModal"
                  >
                    <v-row style="margin: 0" v-for="(n, i) in 10" :key="i">
                      <v-col
                        cols="4"
                        style="padding: 0"
                        v-for="(num, index) in 3"
                        :key="index"
                      >
                        <span
                          @click="max3dPlusChooseFrom(index, i)"
                          class="step_sel"
                          :class="{
                            otron_checked: selectedNumFrom[index] == i,
                          }"
                          style="background-color: white; color: black"
                        >
                          {{ i }}
                        </span>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6" style="padding: 0" class="text-right pl-1">
                    <v-row style="margin: 0" v-for="(n, i) in 10" :key="i">
                      <v-col
                        cols="4"
                        style="padding: 0"
                        v-for="(num, index) in 3"
                        :key="index"
                      >
                        <span
                          @click="max3dPlusChooseTo(index, i)"
                          class="step_sel"
                          :class="{ otron_checked: selectedNumTo[index] == i }"
                          style="background-color: white; color: black"
                        >
                          {{ i }}
                        </span>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="3" style="padding: 0">
                <div
                  class="form-group text-right"
                  style="margin-bottom: 10px"
                  v-for="(price, indexPrice) in $store.state.app
                    .defaultPrice_Max3DPlus"
                  :key="indexPrice"
                >
                  <button
                    @click="max3dPlusChoosePrice(price.value)"
                    style="width: 85%; border-radius: 17px"
                    type="button"
                    class="btn btn-default btn-sm"
                    :class="{ select_price: price.value == selected.price }"
                  >
                    {{ price.text }}
                  </button>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <img
          id="vCircle"
          class="imgCircle"
          @click="submitSelectedNum()"
          src="/v-circle.png"
          style="display: block"
          v-if="checkedFromTo"
        />
        <img
          id="xCircle"
          class="imgCircle"
          @click="submitSelectedNum()"
          src="/x-circle.png"
          style="display: block"
          v-else
        />
      </v-card>
    </v-dialog>

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
  </div>
</template>
<script>
export default {
  props: {
    modalNumber: Boolean,
    color: String,
    selectedKey: Number,
    max3dPlusSelectBao: Array,
    selectedData: Array,
    typeBao: Number,
  },
  data() {
    return {
      checkedFromTo: false,
      selectedBao: {},
      selected: {},
      selectedNumFrom: {
        0: null,
        1: null,
        2: null,
      },
      selectedNumTo: {
        0: null,
        1: null,
        2: null,
      },
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
    };
  },
  watch: {
    selectedNumFrom: {
      handler(val) {
        this.setCheckedFromTo();
      },
      deep: true,
    },
    selectedNumTo: {
      handler(val) {
        this.setCheckedFromTo();
      },
      deep: true,
    },
  },
  created() {
    this.setSelectedBao();
    this.setSelectedData();
  },
  methods: {
    setSelectedBao() {
      let arrSelectedBao = JSON.parse(JSON.stringify(this.max3dPlusSelectBao));
      let selectedTypeBao = this.typeBao;
      let selected = arrSelectedBao.filter(function (item, index) {
        return item.value == selectedTypeBao;
      });
      this.selectedBao = selected[0];
    },
    setSelectedData() {
      let constSelectedData = JSON.parse(JSON.stringify(this.selectedData));
      this.selected = constSelectedData[this.selectedKey];
      if (this.selected.from != "") {
        for (var i = 0; i < 3; i++) {
          this.selectedNumFrom[i] = this.selected.from.charAt(i);
        }
      }
      if (this.selected.to != "") {
        for (var i = 0; i < 3; i++) {
          this.selectedNumTo[i] = this.selected.to.charAt(i);
        }
      }
    },
    max3dPlusChooseFrom(index, num) {
      this.selectedNumFrom[index] = num;
    },
    max3dPlusChooseTo(index, num) {
      this.selectedNumTo[index] = num;
    },
    max3dPlusChoosePrice(price) {
      this.selected.price = price;
    },

    setCheckedFromTo() {
      for (var i = 0; i < 3; i++) {
        if (this.selectedNumFrom[i] == null || this.selectedNumTo[i] == null) {
          this.checkedFromTo = false;
          return;
        }
      }

      this.checkedFromTo = true;
    },

    submitSelectedNum() {
      let totalNum = 0;
      for (var i = 0; i < 3; i++) {
        if (this.selectedNumFrom[i] != null) {
          totalNum++;
        }
        if (this.selectedNumTo[i] != null) {
          totalNum++;
        }
      }
      let msg = "";
      if (totalNum < 6) {
        msg = "Bạn phải chọn đúng 6 số (Bạn đang chọn " + totalNum + " số)";
        this.setContentSnackBar(msg);
      } else {
        let numFrom = "";
        let numTo = "";
        for (var i = 0; i < 3; i++) {
          numFrom += this.selectedNumFrom[i];
          numTo += this.selectedNumTo[i];
        }
        this.selected.from = numFrom
        this.selected.to = numTo
        this.$emit("updateSelectedData",this.selected, this.selectedKey)
        this.$emit("update:modalNumber", false)
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