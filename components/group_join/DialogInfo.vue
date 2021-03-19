<template>
  <div class="text-center">
    <v-dialog
      v-model="modalInfo"
      width="565"
      @click:outside="$emit('update:modalInfo', false)"
    >
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-dialog-info-group-done"
        >
          <v-col cols="2" />
          <v-col cols="8" class="dialog-custom-col text-center title-custom">
            Cổ phần đóng góp
          </v-col>
          <v-col cols="2 text-right" class="dialog-custom-col">
            <v-btn icon light @click="$emit('update:modalInfo', false)">
              <v-btn
                icon
                light
                @click="$emit('update:modalInfo', false)"
                class="btn-close-dialog"
              >
                ×
              </v-btn>
            </v-btn>
          </v-col>
        </v-card-title>

        <!-- far fa-dot-circle -->
        <!-- far fa-circle -->
        <div class="modal-body modal-group-join">
          <div style="max-height: 350px; overflow: auto; margin-bottom: 10px">
            <table style="width: 100%" id="cophanTable">
              <tr v-for="(item, index) in dataPercent" :key="index">
                <td>
                  <v-row
                    style="margin: 0"
                    class="cellLoaiHinh ky"
                    @click="chonCophanChange(item)"
                  >
                    <v-col
                      cols="6"
                      style="padding: 0; padding-top: 12px"
                      class="text-left"
                    >
                      {{ item.percent }}% -
                      {{ $formatMoney({ amount: item.amount }) }}đ
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <span
                        :class="{displayNoneSelectedPercent: selected.percent !=  item.percent }"
                      >
                        <i
                          class="far fa-dot-circle"
                          style="font-size: 23px; color: #dd0e11"
                        ></i>
                      </span>
                      <span
                        :class="{displayNoneSelectedPercent: selected.percent ==  item.percent }"
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
            </table>
          </div>
          <div class="text-center" style="">
            <v-btn
              class="btn"
              style="
                background-color: #033762;
                border-radius: 5px;
                border-color: #033762;
                color: #fff;
              "
              @click="$emit('update:modalInfo', false)"
            >
              XÁC NHẬN
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    modalInfo: Boolean,
    dataPercent: Array,
    percentSelected: Object,
  },

  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.selected = this.percentSelected;
  },
  methods: {
    chonCophanChange(item) {
      this.selected = item;
      this.$emit("update:percentSelected", item);
    },
  },
};
</script>
