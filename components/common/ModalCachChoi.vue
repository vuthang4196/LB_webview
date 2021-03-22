<template>
  <div class="text-center modal-cach-choi">
    <v-dialog
      v-model="modalCachChoi"
      width="565"
      @click:outside="$emit('update:modalCachChoi', false)"
    >
      <v-card>
        <v-card-title class="lighten-2 dialog-custom header-modal-cach-choi">
          <v-col cols="2" />
          <v-col cols="8" class="dialog-custom-col text-center title-custom">
            CÁCH CHƠI
          </v-col>
          <v-col cols="2 text-right" class="dialog-custom-col">
            <v-btn icon light @click="$emit('update:modalCachChoi', false)">
              <v-btn
                icon
                light
                @click="$emit('update:modalCachChoi', false)"
                class="btn-close-dialog"
              >
                ×
              </v-btn>
            </v-btn>
          </v-col>
        </v-card-title>

        <!-- far fa-dot-circle -->
        <!-- far fa-circle -->
        <div class="modal-body modal-body-cach-choi">
          <table style="width: 100%">
            <tbody>
              <tr v-for="(type, index) in typeLevel" :key="index" class="spacer">
                <td style="width: 50%">
                  <v-row
                    class="cellLoaiHinh"
                    style="margin: 0"
                    @click="power655SelectBao1(5)"
                  >
                    <v-col
                      cols="6"
                      style="padding: 0; padding-top: 1px"
                      class="text-left px-2"
                    >
                      <span v-if="type == 6">Vé thường</span>
                      <span v-else>Bao {{ type }}</span>
                    </v-col>
                    <v-col cols="6" style="padding: 0" class="text-right px-2">
                      <span @click="power655SelectBao1(type)">
                        <v-icon style="font-size: 23px; color: #dd0e11">
                          {{
                            selectedLevel == type
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
    selectedLevel: Number,
    typeLevel: Array,
  },
  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.selected = this.selectedLevel;
  },
  methods: {
    power655SelectBao1(type) {
      this.$emit("update:selectedLevel", type);
      this.$emit("update:modalCachChoi", false);
    },
  },
};
</script>
