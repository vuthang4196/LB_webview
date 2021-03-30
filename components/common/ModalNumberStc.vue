<template>
  <div class="text-center custom-dialog-number">
    <v-dialog v-model="modalNumberStc" width="600" persistent>
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-modal-cach-choi"
          :style="{ background: color }"
        >
          <v-col cols="2" />
          <v-col cols="8" class="dialog-custom-col text-center title-custom">
            Số tự chọn
          </v-col>
          <v-col cols="2 text-right" class="dialog-custom-col">
            <v-btn
              icon
              light
              @click="$emit('update:modalNumberStc', false)"
              class="btn-close-dialog"
            >
              ×
            </v-btn>
          </v-col>
        </v-card-title>
        <div class="modal-body custom-dialog-number-body">
          <div
            id="ommax3dPlusModelMainBuildNumberStc"
            class="ommax3dPlusCircleModal"
          >
            <v-row style="margin: 0" class="text-center">
              <v-col cols="6" style="margin: auto; padding: 0">
                <div id="ommax3dPlusModelMainBuildNumberOtronStc">
                  <v-row style="margin: 0" v-for="(n, i) in 10" :key="i">
                    <v-col
                      cols="4"
                      style="padding: 0"
                      v-for="(num, index) in 3"
                      :key="index"
                    >
                      <span
                        @click="ommax3dPlusChooseNumStc(index, i)"
                        class="step_sel"
                        :class="{ otron_checked: selectedNum[index] == i }"
                        style="background-color: white; color: black"
                      >
                        {{ i }}
                      </span>
                    </v-col>
                  </v-row>
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
          v-if="checkNum"
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
    modalNumberStc: Boolean,
    color: String,
    selectedNumStc: String,
  },
  data() {
    return {
      checkNum: false,
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
      selectedNum: {
        0: null,
        1: null,
        2: null,
      },
    };
  },
  watch: {
    selectedNum: {
      handler(val) {
        this.setCheckedNum();
      },
      deep: true,
    },
  },
  created() {
    if (this.selectedNumStc != "") {
      this.setDefaultSelectedNum();
    }
  },
  methods: {
    setDefaultSelectedNum() {
      for (var i = 0; i < 3; i++) {
        this.selectedNum[i] = this.selectedNumStc.charAt(i);
      }
    },
    ommax3dPlusChooseNumStc(index, num) {
      this.selectedNum[index] = num;
    },
    setCheckedNum() {
      for (var i = 0; i < 3; i++) {
        if (this.selectedNum[i] == null) {
          this.checkNum = false;
          return;
        }
      }
      this.checkNum = true;
    },
    submitSelectedNum() {
      let totalNum = 0;
      for (var i = 0; i < 3; i++) {
        if (this.selectedNum[i] != null) {
          totalNum++;
        }
      }
      let msg = "";
      if (totalNum < 3) {
        msg = "Bạn phải chọn đúng 3 số (Bạn đang chọn " + totalNum + " số)";
        this.setContentSnackBar(msg);
      } else {
        let number = "";
        for (var i = 0; i < 3; i++) {
          number += this.selectedNum[i];
          this.$emit("update:selectedNumStc", number);
          this.$emit("update:modalNumberStc", false);
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