<template>
  <div
    class="panel-body text-center panel-body-group group-detail"
    style="position: relative"
  >
    <v-row
      style="margin: 0; font-size: 20px; font-weight: 800; padding-bottom: 10px"
    >
      <p id="idBaoSpan" style="margin: auto">
        Nhóm: #{{ groupData.id }} - Bao: {{ groupData.groupLevel }}
      </p>
    </v-row>

    <v-row
      style="
        margin: 0;
        font-weight: bold;
        font-size: larger;
        padding-bottom: 10px;
      "
    >
      <v-col cols="4" style="padding: 0">
        <div class="commonText">Bạn đã góp:</div>
        <span class="textRed" id="bandagopSpan">
          {{ groupData.percentageOfShares }}%
        </span>
      </v-col>
      <v-col cols="4" style="padding: 0">
        <img
          v-if="groupData.category == 21"
          id="imageTheLoai"
          style="width: 80%"
          src="/mega645_logo.png"
        />
        <img
          v-else
          id="imageTheLoai"
          style="width: 80%"
          src="/power655_logo.png"
        />
      </v-col>
      <v-col cols="4" style="padding: 0">
        <div class="commonText">Nhóm hoàn thành:</div>
        <span class="textRed" id="nhomhoanthanhSpan">
          {{ groupData.procress }}%
        </span>
      </v-col>
    </v-row>

    <v-row style="margin: 0" class="mb-3">
      <div>
        <span class="commonText">Kỳ quay: </span>
        <span id="kyquaySpan">
          #{{ drawInfo.drawId }} -
          {{ drawInfo.openDate }}
        </span>
      </div>
      <div>
        <span class="commonText">Thời gian đóng: </span>
        <span id="thoigiandongSpan">{{ groupData.timeClose }}</span>
      </div>
    </v-row>

    <v-row style="margin: 0" class="mb-3">
      <div class="commonText">Bộ số đề cử:</div>
      <div class="" id="divOtron" style="width: 90%" v-if="numberStatus">
        <span
          class="step_to"
          v-for="i in parseInt(groupData.groupLevel)"
          :key="i"
          >{{ groupData.currentNumberStatus[i - 1].number }}</span
        >
      </div>
      <p v-else style="display: table; margin: 10px auto; color: #febf10">
        Chưa có bộ số đề cử
      </p>
      <v-row class="pl-2" @click="showModalInfo()">
        <i
          class="fa fa-info-circle"
          style="font-size: xx-large; margin-top: 50%"
        ></i>
      </v-row>
    </v-row>

    <v-row style="margin-bottom: 10px; margin: 0">
      <div style="width: 100%" class="text-left mb-3">
        <span class="commonText" id="giatrive"></span>
      </div>
      <div class="mb-2">
        <span class="commonText" id="danhsachthanhvienSpan"
          >Danh sách thành viên ({{ groupData.numberOfMembers }} người):</span
        >
      </div>
      <div style="width: 100%">
        <div id="listThanhvienDiv" class="form-group">
          <div
            class="homeDivTickerGroupNotDoneDetail form-row mb-2"
            v-for="(item, index) in groupData.listTicketInGroup"
            :key="index"
          >
            <div class="text-custom" style="margin-bottom: 5px">
              <p class="commonText">
                Thành viên #{{ index + 1 }}:
                {{ $formatUserId({ value: item.userId }) }}
              </p>
            </div>
            <div id="numberTicket" class="detailCircle">
              <table style="width: 100%">
                <tbody>
                  <tr v-for="(info, i) in item.numberInfos" :key="i">
                    <td width="10%" style="width: 10%; text-align: left">
                      <span class="commonText">#{{ i + 1 }}</span>
                    </td>
                    <td
                      width="50%"
                      style="
                        max-width: 50% !important;
                        text-align: left;
                        width: 50%;
                      "
                      class="commonText"
                    >
                      <span
                        class="step"
                        v-for="(number, j) in info.numbers"
                        :key="j"
                      >
                        {{ number.num < 10 ? "0" + number.num : number.num }}
                      </span>
                    </td>
                    <td width="20%" style="width: 20%">
                      <span class="commonTextThin"
                        >{{ info.percentageOfShares }}%</span
                      >
                    </td>
                    <td
                      width="20%"
                      style="width: 20%; text-align: right; color: red"
                    >
                      <span class="commonTextThin">
                        {{ $formatMoney({ amount: info.moneyOfShares }) }}đ
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </v-row>
    <div style="height: calc(100vh - 130px)" id="divListGroup"></div>
    <div id="thamgiaBtn" class="text-center">
      <button
        class="btn btn-danger"
        @click="thamgia()"
        style="width: 100%; border-radius: 5px"
      >
        THAM GIA
      </button>
    </div>
    <DialogInfo
      v-if="modalInfo"
      :modalInfo.sync="modalInfo"
      :infoData="infoData"
      :level="groupData.groupLevel"
    />
  </div>
</template>

<script>
import DialogInfo from "~/components/group_done/DialogInfo.vue";
import API from "~/components/group_not_done/example_data.js";
export default {
  components: {
    DialogInfo,
  },
  data() {
    return {
      modalInfo: false,
      groupData: {},
      drawInfo: {},
      numberStatus: false,
      infoData: [],
      currentNumberStatus: [],
    };
  },
  mounted() {
    this.$store.dispatch("app/toggleOverlay", true);
    this.getDetailGroup();
  },
  watch: {
    modalInfo: function (value) {
      if (value == false) {
        this.groupData.currentNumberStatus.sort(
          this.$dynamicsort({ property: "number", order: "asc" })
        );
      }
    },
  },
  methods: {
    thamgia() {
      this.$router.push({
        path: '/momo/group_join/' + this.$route.params.id,
        query: {}
      })
    },
    showModalInfo() {
      this.modalInfo = true;
    },
    getCloseTime(value) {
      return value.split(" ")[1].substring(0, 5) + " " + value.split(" ")[0];
    },
    getDetailGroup() {
      // let data = { id: this.$route.params.id };
      // let url = "https://luckybest.vn/momo_v2/action/common/getDetailGroup";

      let res = API.group_not_done;
      res = JSON.parse(res);

      this.groupData = res.data;
      this.drawInfo = res.data.drawInfo;
      this.drawInfo.openDate = this.$getOpenDate({
        value: this.drawInfo.openDate,
      });
      this.groupData.percentageOfShares = this.$convertSTP({
        value: this.groupData.percentageOfShares,
      });
      this.groupData.procress = this.$convertSTP({
        value: this.groupData.procress,
      });
      this.groupData.timeClose = this.getCloseTime(this.groupData.timeClose);

      if (this.groupData.currentNumberStatus.length > 0) {
        this.infoData = this.groupData.currentNumberStatus;
        this.numberStatus = true;
        this.groupData.currentNumberStatus.sort(
          this.$dynamicsort({ property: "number", order: "asc" })
        );
      } else {
        this.numberStatus = false;
      }
      this.$store.dispatch("app/toggleOverlay", false);
    },
  },
};
</script>