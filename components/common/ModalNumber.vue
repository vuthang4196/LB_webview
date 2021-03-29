<template>
  <div class="text-center custom-dialog-number">
    <v-dialog
      style="margin: 10px !important"
      v-model="modalNumber"
      width="600"
      persistent
    >
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-number-dialog"
          :class="{
            'header-dialog-not-done-number': selected.length != selectedLevel,
            'header-dialog-done-number': selected.length == selectedLevel,
          }"
        >
          <v-col cols="2" style="padding: 0">
            <span class="pl-1 pb-1 selected-row-number">
              {{ $commonBuildABCAll(selectedKey) }}
            </span>
          </v-col>
          <v-col cols="8" class="dialog-custom-col text-right">
            <span class="pr-4" style="font-size: 15px">
              {{ selected.length == selectedLevel ? "Hợp lệ" : "Chưa chọn" }}
            </span>
          </v-col>
          <v-col cols="2 text-right" class="dialog-custom-col">
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

        <div class="modal-body">
          <div class="form-group">
            <div id="power655ModelMainBuildNumber" class="power655CircleModal">
              <span
                class="step_to"
                v-for="num in totalNumber"
                :key="num"
                :class="{ step_selected: selected.includes(num) }"
                @click="selectedNumber(num)"
              >
                {{ num < 10 ? "0" + num : num }}
              </span>
            </div>
          </div>
        </div>
        <img
          id="vCircle"
          class="imgCircle"
          @click="submitSelectedNum()"
          src="/v-circle.png"
          style="display: block"
          v-if="selected.length == selectedLevel"
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
    selectedLevel: Number,
    selectedKey: Number,
    totalNumber: Number,
    selectedDataRow: Array,
  },
  data() {
    return {
      selected: [],
      key: 1,
      snackBar: {
        show: false,
        msg: "",
        timeout: "3000",
      },
    };
  },
  created() {
    this.key = this.selectedKey;
    this.selected = JSON.parse(JSON.stringify(this.selectedDataRow));
  },
  methods: {
    selectedNumber(num) {
      if (
        this.selected.length == this.selectedLevel &&
        !this.selected.includes(num)
      ) {
        return;
      } else {
        if (this.selected.includes(num)) {
          const index = this.selected.indexOf(num);
          if (index > -1) {
            this.selected.splice(index, 1);
          }
        } else {
          this.selected.push(num);
        }
      }
    },
    submitSelectedNum() {
      if (this.selected.length != this.selectedLevel) {
        let msg =
          "Bạn phải chọn đúng " +
          this.selectedLevel +
          " số (Bạn đang chọn " +
          this.selected.length +
          " số)";
        this.snackBar = {
          show: true,
          timeout: 3000,
          msg: msg,
        };
      } else {
        this.selected.sort(this.$sortNumber());
        this.$emit("setNewSelectedRow", this.selectedKey, this.selected);
      }
    },
  },
};
</script>