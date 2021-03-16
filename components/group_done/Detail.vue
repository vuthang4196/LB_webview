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
        <span class="textGreen" id="bandagopSpan">
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
        <span class="textRed" id="bandagopSpan">{{ groupData.procress }}%</span>
      </v-col>
    </v-row>
    <v-row style="margin: 0" class="mb-3">
      <v-col cols="12" style="padding: 0; text-align: left">
        <span class="commonText">Kỳ quay: </span>
        <span id="kyquaySpan">
          #{{ drawInfo.drawId }} -
          {{ drawInfo.openDate }}
        </span>
      </v-col>
      <v-col cols="12" style="padding: 0; text-align: left">
        <span class="commonText">Thời gian đóng: </span>
        <span id="thoigiandongSpan">{{ groupData.timeClose }}</span>
      </v-col>
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
        <!-- <span class="step_to">2</span>
        <span class="step_to">5</span>
        <span class="step_to">7</span>
        <span class="step_to">8</span> -->
      </div>
      <p v-else style="display: table; margin: 10px auto; color: #febf10">
        Chưa có bộ số đề cử
      </p>
      <div v-if="numberStatus" @click="showModalInfo()">
        <i
          class="fa fa-info-circle"
          style="font-size: xx-large; margin-top: 50%"
        ></i>
      </div>
    </v-row>
    <v-row
      class="image-wrapper mb-3"
      id="imgDiv"
      style="height: 15%; margin: 0"
    >
      <img
        style="width: 100%; height: 100%; object-fit: cover; max-height: 100px"
        @click="showDialogImage()"
        :src="groupData.ticket_image"
      />
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
            class="homeDivTickerGroupDoneDetail form-row mb-2"
            v-for="(item, index) in groupData.listTicketInGroup"
            :key="index"
          >
            <div class="text-custom" style="margin-bottom: 5px">
              <table style="width: 100%">
                <tbody>
                  <tr>
                    <td width="68%">
                      <span class="commonText">
                        Thành viên #{{ index + 1 }}:
                        {{ $formatUserId({ value: item.userId }) }}
                      </span>
                    </td>
                    <td>
                      <span style="float: left" class="commonText">
                        Đóng góp:
                        {{ $convertFloat({ value: item.percentageOfShares }) }}%
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

    <DialogImage :showImage.sync="showImage" :data="groupData.ticket_image" />
    <DialogInfo
      v-if="modalInfo"
      :modalInfo.sync="modalInfo"
      :infoData="infoData"
      :level="groupData.groupLevel"
    />
  </div>
</template>
<script>
import DialogImage from "~/components/DialogImage.vue";
import DialogInfo from "~/components/group_done/DialogInfo.vue";
export default {
  components: {
    DialogImage,
    DialogInfo,
  },
  data() {
    return {
      modalInfo: false,
      groupData: {},
      drawInfo: {},
      numberStatus: false,
      showImage: false,
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
    getOpenDate(value) {
      return value.split(" ")[0];
    },
    getCloseTime(value) {
      return value.split(" ")[1].substring(0, 5) + " " + value.split(" ")[0];
    },
    showModalInfo() {
      this.modalInfo = true;
    },

    showDialogImage() {
      this.showImage = true;
    },

    getDetailGroup() {
      // let data = { id: this.$route.params.id };
      // let url = "https://luckybest.vn/momo_v2/action/common/getDetailGroup";
      let res = {
        result: 0,
        data: {
          enableLeaveGroup: 0,
          numberOfMembers: 19,
          pushRefundStatus: 0,
          refundStatus: 0,
          levelWin: 0,
          timeClose: "18/03/2021 17:00:00",
          type: 1,
          percentageOfShares: 0,
          prize: 0,
          statusWin: -1,
          amountCashback: 0,
          numberOfTickets: 21,
          minAmountContribute: 0,
          prizeWinAfterTax: 0,
          id: 20543,
          groupLevel: 5,
          numberFinish: [
            { num: 1, status: 0 },
            { num: 15, status: 0 },
            { num: 21, status: 0 },
            { num: 37, status: 0 },
            { num: 43, status: 0 },
          ],
          numberCoincy: 0,
          moneyOfShares: 500000,
          drawInfo: {
            drawId: "00554",
            openDate: "18/03/2021 18:00:00",
            category: 0,
          },
          drawStatus: 0,
          ticket_image:
            "https://luckybets.vn:1236/momo_web/api/image/url/2021/202103/20210316/01DB4272-A3AFF093-F9F5-A6A7-31B7-72201D18CEEA-MT_23810370.jpg",
          currentNumberStatus: [
            {
              number: 21,
              totalMoney: 83500,
              index: 1,
              vote: 9,
              times_vote: 10,
            },
            { number: 1, totalMoney: 63000, index: 2, vote: 1, times_vote: 2 },
            { number: 43, totalMoney: 61000, index: 3, vote: 2, times_vote: 2 },
            { number: 15, totalMoney: 60000, index: 4, vote: 1, times_vote: 1 },
            { number: 37, totalMoney: 60000, index: 5, vote: 1, times_vote: 1 },
            { number: 5, totalMoney: 18000, index: 6, vote: 5, times_vote: 5 },
            { number: 44, totalMoney: 15500, index: 7, vote: 7, times_vote: 7 },
            { number: 52, totalMoney: 12000, index: 8, vote: 3, times_vote: 3 },
            { number: 50, totalMoney: 12000, index: 9, vote: 3, times_vote: 3 },
            {
              number: 13,
              totalMoney: 10000,
              index: 10,
              vote: 1,
              times_vote: 1,
            },
            { number: 35, totalMoney: 9000, index: 11, vote: 5, times_vote: 5 },
            { number: 28, totalMoney: 9000, index: 12, vote: 4, times_vote: 4 },
            { number: 17, totalMoney: 9000, index: 13, vote: 4, times_vote: 4 },
            { number: 24, totalMoney: 8000, index: 14, vote: 2, times_vote: 2 },
            { number: 42, totalMoney: 7000, index: 15, vote: 3, times_vote: 3 },
            { number: 9, totalMoney: 6000, index: 16, vote: 3, times_vote: 3 },
            { number: 2, totalMoney: 5000, index: 17, vote: 3, times_vote: 3 },
            { number: 10, totalMoney: 5000, index: 18, vote: 2, times_vote: 2 },
            { number: 41, totalMoney: 5000, index: 19, vote: 1, times_vote: 1 },
            { number: 53, totalMoney: 5000, index: 20, vote: 1, times_vote: 1 },
            { number: 51, totalMoney: 4000, index: 21, vote: 4, times_vote: 4 },
            { number: 55, totalMoney: 4000, index: 22, vote: 3, times_vote: 3 },
            { number: 11, totalMoney: 3000, index: 23, vote: 3, times_vote: 3 },
            { number: 19, totalMoney: 3000, index: 24, vote: 2, times_vote: 2 },
            { number: 46, totalMoney: 3000, index: 25, vote: 2, times_vote: 2 },
            { number: 47, totalMoney: 3000, index: 26, vote: 1, times_vote: 1 },
            { number: 40, totalMoney: 2000, index: 27, vote: 2, times_vote: 2 },
            { number: 39, totalMoney: 2000, index: 28, vote: 2, times_vote: 2 },
            { number: 25, totalMoney: 2000, index: 29, vote: 2, times_vote: 2 },
            { number: 18, totalMoney: 2000, index: 30, vote: 1, times_vote: 1 },
            { number: 54, totalMoney: 1000, index: 31, vote: 1, times_vote: 1 },
            { number: 16, totalMoney: 1000, index: 32, vote: 1, times_vote: 1 },
            { number: 7, totalMoney: 1000, index: 33, vote: 1, times_vote: 1 },
            { number: 34, totalMoney: 1000, index: 34, vote: 1, times_vote: 1 },
            { number: 22, totalMoney: 1000, index: 35, vote: 1, times_vote: 1 },
            { number: 20, totalMoney: 1000, index: 36, vote: 1, times_vote: 1 },
            { number: 12, totalMoney: 1000, index: 37, vote: 1, times_vote: 1 },
            { number: 8, totalMoney: 1000, index: 38, vote: 1, times_vote: 1 },
            { number: 26, totalMoney: 1000, index: 39, vote: 1, times_vote: 1 },
          ],
          groupStatus: 2,
          createBy: "db",
          timeCutOff: "18/03/2021 17:00:00",
          prizeBonus: 0,
          procress: 100,
          createTime: "16/03/2021 13:26:20",
          incomeTax: 0,
          name: "Power 6/55 - Bao 5 - 020543",
          category: 23,
          prizeWinAmount: 0,
          listTicketInGroup: [
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 218689,
              prizeWinAmount: 0,
              userId: "84963602057",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 21, status: 1 },
                    { num: 35, status: 1 },
                    { num: 40, status: 1 },
                    { num: 51, status: 1 },
                    { num: 54, status: 1 },
                  ],
                  id: 237703,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 10000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219061,
              prizeWinAmount: 0,
              userId: "84912967895",
              percentageOfShares: 2,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 10000,
                  numbers: [
                    { num: 21, status: 1 },
                    { num: 28, status: 1 },
                    { num: 35, status: 1 },
                    { num: 42, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 238111,
                  percentageOfShares: 2,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219113,
              prizeWinAmount: 0,
              userId: "84963709591",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 8, status: 1 },
                    { num: 17, status: 1 },
                    { num: 25, status: 1 },
                    { num: 28, status: 1 },
                    { num: 50, status: 1 },
                  ],
                  id: 238169,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 365000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219155,
              prizeWinAmount: 0,
              userId: "84931956886",
              percentageOfShares: 73,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 50000,
                  numbers: [
                    { num: 5, status: 1 },
                    { num: 13, status: 1 },
                    { num: 21, status: 1 },
                    { num: 50, status: 1 },
                    { num: 52, status: 1 },
                  ],
                  id: 238227,
                  percentageOfShares: 10,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 300000,
                  numbers: [
                    { num: 1, status: 1 },
                    { num: 15, status: 1 },
                    { num: 21, status: 1 },
                    { num: 37, status: 1 },
                    { num: 43, status: 1 },
                  ],
                  id: 238225,
                  percentageOfShares: 60,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 15000,
                  numbers: [
                    { num: 1, status: 1 },
                    { num: 2, status: 1 },
                    { num: 24, status: 1 },
                    { num: 44, status: 1 },
                    { num: 47, status: 1 },
                  ],
                  id: 238228,
                  percentageOfShares: 3,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219005,
              prizeWinAmount: 0,
              userId: "84979280791",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 7, status: 1 },
                    { num: 21, status: 1 },
                    { num: 34, status: 1 },
                    { num: 51, status: 1 },
                    { num: 55, status: 1 },
                  ],
                  id: 238055,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219045,
              prizeWinAmount: 0,
              userId: "84969365213",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 2, status: 1 },
                    { num: 11, status: 1 },
                    { num: 22, status: 1 },
                    { num: 39, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 238095,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219092,
              prizeWinAmount: 0,
              userId: "84379392819",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 5, status: 1 },
                    { num: 9, status: 1 },
                    { num: 12, status: 1 },
                    { num: 21, status: 1 },
                    { num: 43, status: 1 },
                  ],
                  id: 238145,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 10000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219119,
              prizeWinAmount: 0,
              userId: "84904039373",
              percentageOfShares: 2,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 10000,
                  numbers: [
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 46, status: 1 },
                    { num: 55, status: 1 },
                  ],
                  id: 238175,
                  percentageOfShares: 2,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219156,
              prizeWinAmount: 0,
              userId: "84359726084",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 21, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 238226,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219070,
              prizeWinAmount: 0,
              userId: "84985222639",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [{ num: 5, status: 1 }],
                  id: 238121,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219084,
              prizeWinAmount: 0,
              userId: "84392233760",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 10, status: 1 },
                    { num: 11, status: 1 },
                    { num: 19, status: 1 },
                    { num: 20, status: 1 },
                    { num: 21, status: 1 },
                  ],
                  id: 238137,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219126,
              prizeWinAmount: 0,
              userId: "84906273690",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 2, status: 1 },
                    { num: 5, status: 1 },
                    { num: 17, status: 1 },
                    { num: 25, status: 1 },
                    { num: 46, status: 1 },
                  ],
                  id: 238183,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219138,
              prizeWinAmount: 0,
              userId: "84906407614",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 9, status: 1 },
                    { num: 26, status: 1 },
                    { num: 51, status: 1 },
                    { num: 52, status: 1 },
                    { num: 55, status: 1 },
                  ],
                  id: 238196,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219140,
              prizeWinAmount: 0,
              userId: "84965327891",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 5, status: 1 },
                    { num: 21, status: 1 },
                    { num: 35, status: 1 },
                    { num: 44, status: 1 },
                    { num: 51, status: 1 },
                  ],
                  id: 238198,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 219147,
              prizeWinAmount: 0,
              userId: "84904499533",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [{ num: 53, status: 1 }],
                  id: 238217,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 20000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 218724,
              prizeWinAmount: 0,
              userId: "84933445433",
              percentageOfShares: 4,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 20000,
                  numbers: [
                    { num: 9, status: 1 },
                    { num: 10, status: 1 },
                    { num: 21, status: 1 },
                    { num: 35, status: 1 },
                    { num: 42, status: 1 },
                  ],
                  id: 237743,
                  percentageOfShares: 4,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 218807,
              prizeWinAmount: 0,
              userId: "84926699215",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 11, status: 1 },
                    { num: 16, status: 1 },
                    { num: 28, status: 1 },
                    { num: 35, status: 1 },
                    { num: 39, status: 1 },
                  ],
                  id: 237834,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 5000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 218919,
              prizeWinAmount: 0,
              userId: "84964563569",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 5000,
                  numbers: [
                    { num: 40, status: 1 },
                    { num: 42, status: 1 },
                    { num: 44, status: 1 },
                    { num: 50, status: 1 },
                    { num: 52, status: 1 },
                  ],
                  id: 237954,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 25000,
              prizeBonus: 0,
              incomeTax: 0,
              prizeWinAfterTax: 0,
              id: 218982,
              prizeWinAmount: 0,
              userId: "84901878777",
              percentageOfShares: 5,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 25000,
                  numbers: [
                    { num: 17, status: 1 },
                    { num: 24, status: 1 },
                    { num: 28, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 238030,
                  percentageOfShares: 5,
                  status: 4,
                },
              ],
            },
          ],
        },
        requestId: 571481465,
        resultDesc: "SUCCESS",
      };
      this.groupData = res.data;
      this.drawInfo = res.data.drawInfo;
      this.drawInfo.openDate = this.getOpenDate(this.drawInfo.openDate);
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

    convertSTP(value) {
      if (value.indexOf(".") !== -1) {
        return value;
      } else {
        return value + ".0";
      }
    },
  },
};
</script>