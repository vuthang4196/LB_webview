<template>
  <div class="text-center custom-dialog-number">
    <v-dialog v-model="modalNumber" width="600" persistent>
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-modal-cach-choi"
          :style="{ background: color }"
        >
          <v-col cols="5" class="dialog-custom-col text-center title-custom">
            Số bắt đầu
          </v-col>
          <v-col cols="1" />
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
          <div
            id="ommax3dPlusModelMainBuildNumber"
            class="ommax3dPlusCircleModal"
          >
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
                      @click="ommax3dPlusChooseFrom(index, i)"
                      class="step_sel"
                      :class="{ otron_checked: selectedNumFrom[index] == i }"
                      style="background-color: white; color: black"
                    >
                      {{ i }}
                    </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6" style="padding: 0" class="text-right">
                <v-row style="margin: 0" v-for="(n, i) in 10" :key="i">
                  <v-col
                    cols="4"
                    style="padding: 0"
                    v-for="(num, index) in 3"
                    :key="index"
                  >
                    <span
                      @click="ommax3dPlusChooseTo(index, i)"
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
    selectedFrom: String,
    selectedTo: String,
  },
  data() {
    return {
      checkedFromTo: false,
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
      intFrom: 0,
      intTo: 0,
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
    if (this.selectedFrom != "" && this.selectedTo != "") {
      this.setDefaultSelectedNum();
    }
  },
  methods: {
    setDefaultSelectedNum() {
      for (var i = 0; i < 3; i++) {
        this.selectedNumFrom[i] = this.selectedFrom.charAt(i);
        this.selectedNumTo[i] = this.selectedTo.charAt(i);
      }
    },
    ommax3dPlusChooseFrom(index, num) {
      this.selectedNumFrom[index] = num;
    },
    ommax3dPlusChooseTo(index, num) {
      this.selectedNumTo[index] = num;
    },
    setCheckedFromTo() {
      for (var i = 0; i < 3; i++) {
        if (this.selectedNumFrom[i] == null || this.selectedNumTo[i] == null) {
          this.checkedFromTo = false;
          return;
        }
      }
      let numFrom = "";
      let numTo = "";
      for (var i = 0; i < 3; i++) {
        numFrom += this.selectedNumFrom[i];
        numTo += this.selectedNumTo[i];
      }
      numFrom = parseInt(numFrom);
      numTo = parseInt(numTo);
      if (numTo - numFrom + 1 < 10) {
        this.checkedFromTo = false;
        return;
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
        let numFromCheck = parseInt(numFrom);
        let numToCheck = parseInt(numTo);
        if (numToCheck - numFromCheck + 1 < 10) {
          msg = "Bạn phải đặt tối thiểu 10 vé";
          this.setContentSnackBar(msg);
        } else {
          this.$emit("update:selectedFrom", numFrom);
          this.$emit("update:selectedTo", numTo);
          this.$emit("update:modalNumber", false);
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