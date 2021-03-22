<template>
  <div class="panel-body panel-body-common" style="position: relative">
    <div class="form-group">
      <v-row style="margin: 0">
        <v-col cols="6" style="padding: 6px" @click="showModalCachChoi()">
          <label for="power655Kymua" class="custom-label">Cách chơi</label>
          <div
            class="SumoSelect"
            tabindex="0"
            role="button"
            aria-expanded="false"
          >
            <select
              id="power655Muabao"
              style="pointer-events: none; line-height: 30px"
              class="form-control input-sm SelectClass"
            >
              <option value="6">Vé thường</option>
            </select>
            <p
              class="CaptionCont SelectBox pl-2"
              style="pointer-events: none; line-height: 32px; font-weight: 400"
              title="Vé thường"
            >
              <span v-if="selectedLevel == 6"> Vé thường</span>
              <span v-else>Bao {{ selectedLevel }}</span>
              <label><i></i></label>
            </p>
          </div>
        </v-col>
        <v-col cols="6" style="padding: 6px" @click="showModalKyQuay()">
          <label for="power655Kymua" class="custom-label">Kỳ quay</label>
          <div
            class="SumoSelect"
            tabindex="0"
            role="button"
            aria-expanded="false"
          >
            <select
              id="power655Kymua"
              style="pointer-events: none; line-height: 30px"
              multiple="multiple"
              placeholder="Chọn kỳ"
              class="form-control input-sm SelectClass"
            >
              <option value="00556">Kỳ #00556 - T3 23/03/2021</option>
            </select>
            <p
              class="CaptionCont SelectBox pl-2"
              style="pointer-events: none; line-height: 32px; font-weight: 400"
              title=" 1 lựa chọn"
            >
              <span> 1 lựa chọn</span><label><i></i></label>
            </p>
          </div>
        </v-col>
      </v-row>
    </div>

    <div id="power655BodyAllBao">
      <div class="power655CircleOrderBao">
        <div class="form-group">
          <div class="power655Circle">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td style="width: 10%; text-align: center">
                    <span class="key step">A</span>
                  </td>
                  <td
                    style="width: 75%; text-align: center"
                    @click="power655OpenModalNumber()"
                  >
                    <span class="step">&nbsp;</span>
                    <span class="step">&nbsp;</span>
                    <span class="step">&nbsp;</span>
                    <span class="step">&nbsp;</span>
                    <span class="step">&nbsp;</span>
                    <span class="step">&nbsp;</span>
                  </td>
                  <td style="text-align: right">
                    <span
                      class="step_btn"
                      id="idSelectedSpanBong__Key_Btn_6_A"
                      @click="power655BtnOnclickRandomDel()"
                    >
                      <i class="fa fa-refresh"></i>
                    </span>
                    <input type="hidden" value="0" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <ModalCachChoi
      v-if="modalCachChoi"
      :modalCachChoi.sync="modalCachChoi"
      :selectedLevel.sync="selectedLevel"
      :typeLevel="typeLevel"
    />
  </div>
</template>

<script>
import ModalCachChoi from "~/components/common/ModalCachChoi.vue";
export default {
  components: {
    ModalCachChoi,
  },
  data() {
    return {
      modalCachChoi: false,
      typeLevel: [],
      selectedLevel: 6,
    };
  },
  mounted() {
    this.typeLevel = this.$store.state.app.power655typeLevel;
  },
  methods: {
    showModalCachChoi() {
      this.modalCachChoi = true;
    },
    showModalKyQuay() {
      alert("222");
    },
    power655BtnOnclickRandomDel() {
      alert("1111");
    },
    power655OpenModalNumber() {
      alert("333");
    },
  },
};
</script>