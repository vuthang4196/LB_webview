<template>
  <div class="text-center modal-cach-choi">
    <v-dialog
      v-model="modalKyQuay"
      width="565"
      @click:outside="$emit('update:modalKyQuay', false)"
    >
      <v-card>
        <v-card-title class="lighten-2 dialog-custom header-modal-cach-choi">
          <v-col cols="2" />
          <v-col cols="8" class="dialog-custom-col text-center title-custom">
            CHỌN KỲ QUAY
          </v-col>
          <v-col cols="2 text-right" class="dialog-custom-col">
            <v-btn
              icon
              light
              @click="$emit('update:modalKyQuay', false)"
              class="btn-close-dialog"
            >
              ×
            </v-btn>
          </v-col>
        </v-card-title>

        <div class="modal-body modal-body-cach-choi">
          <table style="width: 100%">
            <tbody>
              <tr
                v-for="(item, index) in dataKyQuay"
                :key="index"
                class="spacer"
                @click="chooseKyQuay(item.drawCode)"
              >
                <td style="width: 50%">
                  <v-row class="cellLoaiHinh" style="margin: 0">
                    <v-col
                      cols="6"
                      style="padding: 0; padding-top: 1px"
                      class="text-left px-2"
                    >
                      <span>Kỳ #{{ item.drawCode }}</span>
                    </v-col>
                    <v-col cols="6" style="padding: 0" class="text-right px-2">
                      <span
                        :class="{
                          displayNoneKyQuay: !selected.includes(item.drawCode),
                        }"
                      >
                        <i
                          class="far fa-dot-circle"
                          style="font-size: 23px; color: #dd0e11"
                        ></i>
                      </span>
                      <span
                        :class="{
                          displayNoneKyQuay: selected.includes(item.drawCode),
                        }"
                      >
                        <i
                          class="far fa-circle"
                          style="font-size: 23px; color: #dd0e11"
                        ></i>
                      </span>
                    </v-col>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </table>
          <v-row
            style="margin: 0"
            class="text-center"
            @click="$emit('update:modalKyQuay', false)"
          >
            <span
              style="
                margin: auto;
                color: #1b63b3;
                font-size: 20px;
                font-weight: 600;
              "
              >ĐÓNG</span
            >
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    modalKyQuay: Boolean,
    dataKyQuay: Array,
    selectedKyQuay: Array,
  },
  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.selected = this.selectedKyQuay;
  },
  methods: {
    chooseKyQuay(code) {
      if (!this.selected.includes(code)) {
        this.selected.push(code);
      } else {
        this.selected.splice(this.selected.indexOf(code), 1);
      }
      this.$emit('update:selectedKyQuay', this.selected)
    },
  },
};
</script>