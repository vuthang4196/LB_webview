<template>
  <div class="text-center modal-cach-choi">
    <v-dialog
      v-model="modalCachChoi"
      width="565"
      @click:outside="$emit('update:modalCachChoi', false)"
    >
      <v-card>
        <v-card-title
          class="lighten-2 dialog-custom header-modal-cach-choi"
          :style="{ background: color }"
        >
          <v-col cols="2" />
          <v-col cols="8" class="dialog-custom-col text-center title-custom">
            CÁCH CHƠI
          </v-col>
          <v-col cols="2 text-right" class="dialog-custom-col">
            <v-btn
              icon
              light
              @click="$emit('update:modalCachChoi', false)"
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
                v-for="(type, index) in dataType"
                :key="index"
                class="spacer"
              >
                <td style="width: 50%">
                  <v-row
                    class="cellLoaiHinh"
                    style="margin: 0"
                    @click="selectedBao(type.value)"
                  >
                    <v-col
                      cols="6"
                      style="padding: 0; padding-top: 1px"
                      class="text-left px-2"
                    >
                      <span v-if="type.value == 1">Cơ bản</span>
                      <span v-else>{{ type.text }}</span>
                    </v-col>
                    <v-col cols="6" style="padding: 0" class="text-right px-2">
                      <span @click="selectedBao(type.value)">
                        <v-icon style="font-size: 23px; color: #dd0e11">
                          {{
                            typeBao == type.value
                              ? "far fa-dot-circle"
                              : "far fa-circle"
                          }}
                        </v-icon>
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
            @click="$emit('update:modalCachChoi', false)"
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
    modalCachChoi: Boolean,
    color: String,
    typeBao: Number,
    dataType: Array,
  },
  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.selected = this.typeBao;
  },
  methods: {
    selectedBao(val) {
      this.$emit("update:typeBao", val)
      this.$emit("update:modalCachChoi", false)
    }
  },
};
</script>