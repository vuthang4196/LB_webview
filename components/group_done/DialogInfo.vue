<template>
  <div class="text-center">
    <v-dialog v-model="modalInfo" width="565" @click:outside="$emit('update:modalInfo', false)">
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-dialog-info-group-done"
        >
          <v-col cols="2" />
          <v-col cols="8" class="dialog-custom-col text-center title-custom">
            ĐỀ CỬ HIỆN TẠI
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

        <div class="modal-body">
          <div style="max-height: 350px; overflow: auto; margin-bottom: 10px">
            <table style="width: 100%" class="text-center" id="modalDecuTable">
              <tbody>
                <tr>
                  <th class="commonText">STT</th>
                  <th class="commonText">Số đề cử</th>
                  <th class="commonText">Số người đề cử</th>
                  <th class="commonText">Tổng tiền</th>
                </tr>
                <tr v-for="(item, index) in infoData" :key="index">
                  <td style="color: red" v-if="item.index <= parseInt(level)">
                    {{ item.index }}*
                  </td>
                  <td v-else>{{ item.index }}</td>
                  <td v-if="parseInt(item.number) < 10">
                    {{ "0" + item.number }}
                  </td>
                  <td v-else>{{ item.number }}</td>
                  <td>{{ item.vote }}</td>
                  <td style="color: #ec1b30">{{ $formatMoney({ amount: item.totalMoney }) }}đ</td>
                </tr>
              </tbody>
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
              ĐÓNG
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
    infoData: Array,
    level: Number,
  },
  created() {
    this.infoData.sort(
      this.$dynamicsort({ property: "index", order: "asc" })
    );
  },
};
</script>
