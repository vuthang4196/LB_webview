<template>
  <div class="text-center modal-cach-choi">
    <v-dialog v-model="modalDonGia" width="565" persistent>
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-modal-cach-choi"
          :style="{ background: color }"
        >
          <v-col cols="2" />
          <v-col cols="8" class="dialog-custom-col text-center title-custom">
            ĐƠN GIÁ
          </v-col>
          <v-col cols="2 text-right" class="dialog-custom-col">
            <v-btn
              icon
              light
              @click="$emit('update:modalDonGia', false)"
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
                v-for="(item, index) in dataDonGia"
                :key="index"
                class="spacer"
                @click="chooseDonGia(index)"
              >
                <td style="width: 50%">
                  <v-row class="cellLoaiHinh" style="margin: 0">
                    <v-col
                      cols="10"
                      style="padding: 0; padding-top: 1px"
                      class="text-left px-2"
                    >
                      {{ item }}
                    </v-col>
                    <v-col cols="2" style="padding: 0" class="text-right px-2">
                      <span
                        :class="{
                          displayNoneKyQuay: selected != item,
                        }"
                      >
                        <i
                          class="far fa-dot-circle"
                          style="font-size: 23px; color: #dd0e11"
                        ></i>
                      </span>
                      <span
                        :class="{
                          displayNoneKyQuay: selected == item,
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
            @click="$emit('update:modalDonGia', false)"
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
    modalDonGia: Boolean,
    dataDonGia: Array,
    color: String,
    selectedDonGia: Number,
  },

  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.selected = this.selectedDonGia;
  },
  methods: {
    chooseDonGia(index) {
      this.$emit("update:selectedDonGia", this.dataDonGia[index]);
      this.$emit("update:modalDonGia", false);
    },
  },
};
</script>