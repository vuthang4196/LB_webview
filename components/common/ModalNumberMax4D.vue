<template>
  <div class="text-center custom-dialog-number">
    <v-dialog v-model="modalNumber" width="600" persistent>
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-modal-cach-choi"
          :style="{ background: color }"
          :class="{
            'header-dialog-done-number': checkDone == true,
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
            <span style="padding-left: 10px"> 4D {{ typeBao.text }} </span>
          </v-col>
          <v-col cols="5" class="dialog-custom-col text-center title-custom">
            <span style="padding-left: 30px">
              {{
                checkDone ? "Hợp lệ" : "Chưa chọn"
              }}
            </span>
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
          <div id="max4dModelMainBuildNumber" class="max4dCircleModal">
            <v-row style="margin: 0">
              <v-col cols="8" style="padding: 0">
                <v-row style="margin: 0" v-for="(n, i) in 10" :key="i">
                  <v-col
                    cols="3"
                    style="padding: 0"
                    v-for="(num, index) in defaultNumberInRow"
                    :key="index"
                  >
                    <span
                      @click="max4DChooseNum(index, i)"
                      class="step_sel"
                      :class="{ otron_checked: selected[index] == i && selected[index] != '*' }"
                      style="background-color: white; color: black"
                    >
                      {{
                        typeBao.value == 4 && index == 0
                          ? "*"
                          : typeBao.value == 5 &&
                            index == defaultNumberInRow - 1
                          ? "*"
                          : i
                      }}
                    </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1"></v-col>
              <v-col cols="3" style="padding: 0">
                <div
                  class="form-group text-right"
                  style="margin-bottom: 10px"
                  v-for="(price, indexPrice) in $store.state.app
                    .defaultPrice_Max4D"
                  :key="indexPrice"
                >
                  <button
                    @click="max4DChoosePrice(price.value)"
                    style="width: 85%; border-radius: 17px"
                    type="button"
                    class="btn btn-default btn-sm"
                    :class="{ select_price: price.value == selectedPrice }"
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
          v-if="checkDone"
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
    typeBao: Object,
    selectedData: Array,
  },
  data() {
    return {
      selected: {
        0: null,
        1: null,
        2: null,
        3: null,
      },
      defaultNumberInRow: 4,
      selectedPrice: 0,
      checkDone: false,
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
    };
  },
  watch: {
    selected: {
      handler(val) {
        this.setCheckNumDone();
      },
      deep: true,
    },
  },
  created() {
    this.setDefaultSelectedData();
  },
  methods: {
    setDefaultSelectedData() {
      let data = JSON.parse(JSON.stringify(this.selectedData));
      let defaultSelectedData = data[this.selectedKey];
      this.selectedPrice = defaultSelectedData.price;

      let arr = {};
      if (defaultSelectedData.numbers.length > 0) {
        for (let i = 0; i < this.defaultNumberInRow; i++) {
          arr[i] = defaultSelectedData.numbers[i];
        }
        this.selected = arr;
      }
      if (this.typeBao.value == 4) {
        this.selected[0] = '*'
      }
      if (this.typeBao.value == 5) {
        this.selected[this.defaultNumberInRow - 1] = '*'
      }
    },
    max4DChooseNum(index, num) {
      if (this.typeBao.value == 4 && index == 0) {
        num = '*'
      }
      if (this.typeBao.value == 5 && index == this.defaultNumberInRow - 1) {
        num = '*'
      }
      if (this.typeBao.value == 3 || this.typeBao.value == 2) {
        let arrNum = [];
        for (let indexselected in this.selected) {
          arrNum[indexselected] = this.selected[indexselected]
        }
        arrNum[index] = num
        if (arrNum.every( (val, i, arr) => val === arr[0] && val != null )) {
          return
        }
      }
      this.selected[index] = num;
    },
    max4DChoosePrice(price) {
      this.selectedPrice = price;
    },

    setCheckNumDone() {
      for (var i = 0; i < this.defaultNumberInRow; i++) {
        if (this.selected[i] == null) {
          this.checkDone = false;
          return;
        }
      }

      this.checkDone = true;
    },
    submitSelectedNum() {
      let totalNum = 0;
      let constNum = this.defaultNumberInRow;
      for (var i = 0; i < this.defaultNumberInRow; i++) {
        if (this.selected[i] != null) {
          totalNum++;
        }
      }

      if (this.typeBao.value == 4 || this.typeBao.value == 5) {
        constNum = constNum -1;
        totalNum = totalNum -1;
      }
      let msg = "";
      if (totalNum < constNum) {
        msg = "Bạn phải chọn đúng " + constNum +" số (Bạn đang chọn " + totalNum + " số)";
        this.setContentSnackBar(msg);
      } else {
        let dataSelected = {
          numbers: this.selected,
          price: this.selectedPrice,
        };
        this.$emit("updateSelectedData", dataSelected, this.selectedKey);
        this.$emit("update:modalNumber", false);
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