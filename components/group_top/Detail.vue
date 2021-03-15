<template>
  <div class="panel-body text-center panel-body-group panel-body-group-detail">
    <!-- Top -->
    <v-row class="panel-group-detail-top">
      <v-col cols="4" style="padding: 0">
        <img
          v-if="dataDetail.category == 21"
          id="imageTheLoai"
          style="width: 70%"
          src="/mega645_logo.png"
        />
        <img
          v-else
          id="imageTheLoai"
          style="width: 70%"
          src="/power655_logo.png"
        />
      </v-col>

      <v-col cols="8" style="padding: 0">
        <div style="font-weight: 600" class="">
          Kết quả kỳ quay
          <span id="theLoaiText" v-if="dataDetail.category == 21"
            >Mega 6/45</span
          >
          <span id="theLoaiText" v-else>Power 6/55</span>
        </div>
        <span class="" id="infoKySpan">Ngày 17/02/2021 Kỳ: 00704</span>
      </v-col>
    </v-row>

    <div class="form-row" style="">
      <div class="" id="divOtronKetQua" style="width: 100%"></div>
    </div>

    <div class="form-row" style="">
      <div style="font-weight: 600; margin-left: 8px">Vé của nhóm:</div>
      &nbsp;
      <span id="bosoTitle">
        #{{ $route.params.id }} - Bao {{ dataDetail.groupLevel }}
      </span>
      <div class="" id="divOtron" style="width: 100%"></div>
    </div>

    <!-- Image -->
    <div
      class="form-row image-wrapper"
      id="imgDiv"
      style="height: 10%"
      v-if="dataDetail.ticket_image"
    >
      <img
        style="width: 100%; height: 100%; object-fit: cover; max-height: 100px"
        @click="showImage()"
        :src="dataDetail.ticket_image"
      />
    </div>

    <!-- Detail -->
    <div class="form-row panel-group-detail">
      <p style="width: 100%; text-align: left">
        <span class="commonText">Hạng giải: </span>&nbsp;
        <span class="commonText" style="color: #ec1b30" id="hanggiai">
          Bao {{ dataDetail.groupLevel }} trùng {{ dataDetail.numberCoincy }} số
        </span>
      </p>
      <p style="width: 100%; text-align: left">
        <span class="commonText">Tiền thưởng nhóm: </span>&nbsp;<span
          class="commonText"
          style="color: #ec1b30"
          id="tienthuongnhom"
        >
          {{ $formatMoney({ amount: dataDetail.prizeWinAfterTax }) }}đ
        </span>
      </p>
      <br />
      <p style="width: 100%; text-align: left">
        <span class="commonText">Thuế: </span>&nbsp;<span
          class="commonText"
          style="color: orange"
          id="thue"
        >
          {{ $formatMoney({ amount: dataDetail.incomeTax }) }}đ
        </span>
      </p>
      <p style="width: 100%; text-align: left">
        <span class="commonText">Tiền thưởng của bạn: </span>&nbsp;
        <span id="tienthuongcuaban" class="commonText" style="color: #4cc985">
          {{ $formatMoney({ amount: dataDetail.amountCashback }) }}đ
        </span>
        <br />
      </p>
    </div>

    <!--Danh sach thanh vien  -->
    <div class="form-row">
      <div style="margin-bottom: 10px">
        <span class="commonText" id="danhsachthanhvienSpan">
          Danh sách thành viên ({{ dataDetail.numberOfMembers }} người):
        </span>
      </div>
      <div style="width: 100%">
        <div id="listThanhvienDiv" class="form-group">
          <div
            class="homeDivTicker form-row homeDivTickerGroupTopDetail"
            v-for="(item, index) in dataDetail.listTicketInGroup"
            :key="index"
          >
            <v-row style="margin: 0">
              <v-col cols="8" style="padding: 0" class="text-left">
                <span class="commonText"
                  >Thành viên #{{ index + 1 }}:
                  {{ $formatUserId({ value: item.userId }) }}
                </span>
              </v-col>
              <v-col cols="4" style="padding: 0">
                <span style="float: left" class="commonText">
                  Đóng góp:
                  {{ $convertFloat({ value: item.percentageOfShares }) }}%
                </span>
              </v-col>
            </v-row>
            <v-row style="margin: 0">
              <v-col cols="8" style="padding: 0" class="text-left">
                <span class="commonText">Tiền thưởng: </span>
                <span style="font-size: 14px">
                  {{ $formatMoney({ amount: item.prizeWinAfterTax }) }}đ
                </span>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>

    <div style="height: calc(100vh - 130px)" id="divListGroup"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataDetail: {},
    };
  },

  mounted() {
    this.$store.dispatch("app/toggleOverlay", true);
    this.getDataDetail();
  },
  methods: {
    showImage() {
      alert("111");
    },
    getDataDetail() {
      
      // let url = "https://luckybest.vn/momo_v2/action/common/getDetailGroup";
      let res = {
        result: 0,
        data: {
          enableLeaveGroup: 0,
          numberOfMembers: 14,
          pushRefundStatus: 0,
          refundStatus: 0,
          levelWin: 5,
          timeClose: "17/02/2021 00:00:00",
          type: 1,
          percentageOfShares: 0,
          prize: 0,
          statusWin: 1,
          amountCashback: 45643,
          numberOfTickets: 27,
          minAmountContribute: 0,
          prizeWinAfterTax: 80650000,
          id: 16916,
          groupLevel: 11,
          numberFinish: [
            { num: 3, status: 1 },
            { num: 12, status: 0 },
            { num: 17, status: 0 },
            { num: 18, status: 1 },
            { num: 19, status: 0 },
            { num: 21, status: 1 },
            { num: 22, status: 1 },
            { num: 23, status: 0 },
            { num: 35, status: 0 },
            { num: 41, status: 0 },
            { num: 44, status: 1 },
          ],
          numberCoincy: 5,
          moneyOfShares: 4620000,
          drawInfo: {
            drawId: "00704",
            openDate: "17/02/2021 18:00:00",
            category: 0,
          },
          drawStatus: 0,
          ticket_image:
            "https://luckybets.vn:1236/momo_web/api/image/url/2021/202102/20210214/01B2C794-9C42D2C7-6F5C-BEAC-36D6-DF15613B0631-MT_21820322.jpg",
          currentNumberStatus: [
            {
              number: 41,
              totalMoney: 421540,
              index: 1,
              vote: 6,
              times_vote: 18,
            },
            {
              number: 22,
              totalMoney: 414680,
              index: 2,
              vote: 6,
              times_vote: 19,
            },
            {
              number: 12,
              totalMoney: 414260,
              index: 3,
              vote: 6,
              times_vote: 18,
            },
            {
              number: 19,
              totalMoney: 393540,
              index: 4,
              vote: 5,
              times_vote: 16,
            },
            {
              number: 44,
              totalMoney: 393540,
              index: 5,
              vote: 5,
              times_vote: 16,
            },
            {
              number: 23,
              totalMoney: 389760,
              index: 6,
              vote: 5,
              times_vote: 16,
            },
            {
              number: 21,
              totalMoney: 389340,
              index: 7,
              vote: 4,
              times_vote: 15,
            },
            {
              number: 18,
              totalMoney: 388920,
              index: 8,
              vote: 3,
              times_vote: 14,
            },
            {
              number: 17,
              totalMoney: 388920,
              index: 9,
              vote: 3,
              times_vote: 14,
            },
            {
              number: 3,
              totalMoney: 388500,
              index: 10,
              vote: 2,
              times_vote: 13,
            },
            {
              number: 35,
              totalMoney: 388500,
              index: 11,
              vote: 2,
              times_vote: 13,
            },
            {
              number: 16,
              totalMoney: 25760,
              index: 12,
              vote: 5,
              times_vote: 5,
            },
            {
              number: 40,
              totalMoney: 25340,
              index: 13,
              vote: 4,
              times_vote: 4,
            },
            {
              number: 39,
              totalMoney: 25340,
              index: 14,
              vote: 4,
              times_vote: 4,
            },
            {
              number: 24,
              totalMoney: 25340,
              index: 15,
              vote: 4,
              times_vote: 4,
            },
            {
              number: 26,
              totalMoney: 24990,
              index: 16,
              vote: 7,
              times_vote: 7,
            },
            {
              number: 43,
              totalMoney: 24920,
              index: 17,
              vote: 3,
              times_vote: 3,
            },
            { number: 2, totalMoney: 20370, index: 18, vote: 5, times_vote: 5 },
            {
              number: 25,
              totalMoney: 19320,
              index: 19,
              vote: 6,
              times_vote: 7,
            },
            { number: 30, totalMoney: 6720, index: 20, vote: 6, times_vote: 7 },
            { number: 33, totalMoney: 5880, index: 21, vote: 5, times_vote: 5 },
            { number: 34, totalMoney: 5880, index: 22, vote: 5, times_vote: 5 },
            { number: 28, totalMoney: 5460, index: 23, vote: 3, times_vote: 4 },
            { number: 20, totalMoney: 5040, index: 24, vote: 3, times_vote: 3 },
            { number: 42, totalMoney: 5040, index: 25, vote: 3, times_vote: 3 },
            { number: 38, totalMoney: 5040, index: 26, vote: 3, times_vote: 3 },
            { number: 45, totalMoney: 4620, index: 27, vote: 2, times_vote: 2 },
            { number: 8, totalMoney: 1680, index: 28, vote: 3, times_vote: 4 },
            { number: 37, totalMoney: 1260, index: 29, vote: 3, times_vote: 3 },
            { number: 6, totalMoney: 1260, index: 30, vote: 3, times_vote: 3 },
            { number: 11, totalMoney: 1260, index: 31, vote: 3, times_vote: 3 },
            { number: 10, totalMoney: 840, index: 32, vote: 2, times_vote: 2 },
            { number: 15, totalMoney: 840, index: 33, vote: 2, times_vote: 2 },
            { number: 32, totalMoney: 840, index: 34, vote: 2, times_vote: 2 },
            { number: 14, totalMoney: 840, index: 35, vote: 2, times_vote: 2 },
            { number: 29, totalMoney: 840, index: 36, vote: 2, times_vote: 2 },
            { number: 5, totalMoney: 840, index: 37, vote: 2, times_vote: 2 },
            { number: 36, totalMoney: 420, index: 38, vote: 1, times_vote: 1 },
            { number: 7, totalMoney: 420, index: 39, vote: 1, times_vote: 1 },
            { number: 13, totalMoney: 420, index: 40, vote: 1, times_vote: 1 },
            { number: 31, totalMoney: 420, index: 41, vote: 1, times_vote: 1 },
            { number: 9, totalMoney: 420, index: 42, vote: 1, times_vote: 1 },
            { number: 27, totalMoney: 420, index: 43, vote: 1, times_vote: 1 },
            { number: 4, totalMoney: 420, index: 44, vote: 1, times_vote: 1 },
          ],
          groupStatus: 2,
          cashBackInfo: {
            name: "Cashback Bao 11 Mega",
            description: "Chương Trình Cashback Vé Bao Chung",
            startTime: "03/01/2021 17:00:00",
            id: 82,
            endTime: "30/12/2021 17:00:00",
            cashBackDetailInfos: [
              {
                recvCashbackName: "Tài khoản LuckyBest",
                paymentVendor: 1,
                recvCashBack: 1,
                paymentVendorName: "Tài khoản LuckyBest",
                percent: 1,
              },
            ],
          },
          percentCashbacks: [1],
          createBy: "db",
          timeCutOff: "17/02/2021 00:00:00",
          prizeBonus: 0,
          procress: 100,
          createTime: "07/02/2021 17:21:28",
          incomeTax: 7850000,
          name: "Mega 6/45 - Bao 11 - 016916",
          category: 21,
          prizeWinAmount: 88500000,
          listTicketInGroup: [
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 188582,
              prizeWinAmount: 88500,
              userId: "84566426094",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 6, status: 1 },
                    { num: 12, status: 1 },
                    { num: 19, status: 1 },
                    { num: 22, status: 1 },
                    { num: 25, status: 1 },
                    { num: 26, status: 1 },
                    { num: 33, status: 1 },
                    { num: 37, status: 1 },
                    { num: 40, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 204015,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 46200,
              prizeBonus: 0,
              incomeTax: 78500,
              prizeWinAfterTax: 806500,
              id: 188710,
              prizeWinAmount: 885000,
              userId: "84926699215",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 46200,
                  numbers: [
                    { num: 12, status: 1 },
                    { num: 16, status: 1 },
                    { num: 22, status: 1 },
                    { num: 24, status: 1 },
                    { num: 39, status: 1 },
                    { num: 41, status: 1 },
                  ],
                  id: 204163,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 189392,
              prizeWinAmount: 88500,
              userId: "84964848141",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 10, status: 1 },
                    { num: 12, status: 1 },
                    { num: 15, status: 1 },
                    { num: 20, status: 1 },
                    { num: 23, status: 1 },
                    { num: 25, status: 1 },
                    { num: 26, status: 1 },
                    { num: 30, status: 1 },
                    { num: 36, status: 1 },
                    { num: 37, status: 1 },
                    { num: 42, status: 1 },
                  ],
                  id: 204906,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 23100,
              prizeBonus: 0,
              incomeTax: 39250,
              prizeWinAfterTax: 403250,
              id: 189439,
              prizeWinAmount: 442500,
              userId: "84909570609",
              percentageOfShares: 0.5,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 23100,
                  numbers: [
                    { num: 40, status: 1 },
                    { num: 41, status: 1 },
                    { num: 43, status: 1 },
                  ],
                  id: 204957,
                  percentageOfShares: 0.5,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 189421,
              prizeWinAmount: 88500,
              userId: "84916686546",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 2, status: 1 },
                    { num: 26, status: 1 },
                  ],
                  id: 204938,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 189586,
              prizeWinAmount: 88500,
              userId: "84965402934",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 6, status: 1 },
                    { num: 7, status: 1 },
                    { num: 13, status: 1 },
                    { num: 14, status: 1 },
                    { num: 16, status: 1 },
                    { num: 18, status: 1 },
                    { num: 24, status: 1 },
                    { num: 25, status: 1 },
                    { num: 26, status: 1 },
                    { num: 30, status: 1 },
                    { num: 32, status: 1 },
                  ],
                  id: 205122,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 190027,
              prizeWinAmount: 88500,
              userId: "84969838601",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 2, status: 1 },
                    { num: 6, status: 1 },
                    { num: 12, status: 1 },
                    { num: 31, status: 1 },
                    { num: 32, status: 1 },
                    { num: 34, status: 1 },
                    { num: 38, status: 1 },
                    { num: 39, status: 1 },
                    { num: 41, status: 1 },
                    { num: 43, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 205637,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 190147,
              prizeWinAmount: 88500,
              userId: "84963602057",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 8, status: 1 },
                    { num: 11, status: 1 },
                    { num: 15, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 23, status: 1 },
                    { num: 26, status: 1 },
                    { num: 33, status: 1 },
                    { num: 37, status: 1 },
                    { num: 41, status: 1 },
                    { num: 45, status: 1 },
                  ],
                  id: 205772,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 9240,
              prizeBonus: 0,
              incomeTax: 15700,
              prizeWinAfterTax: 161300,
              id: 190175,
              prizeWinAmount: 177000,
              userId: "84915356737",
              percentageOfShares: 0.2,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 8, status: 1 },
                    { num: 9, status: 1 },
                    { num: 16, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 25, status: 1 },
                    { num: 27, status: 1 },
                    { num: 28, status: 1 },
                    { num: 29, status: 1 },
                    { num: 30, status: 1 },
                  ],
                  id: 205803,
                  percentageOfShares: 0.1,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 5, status: 1 },
                    { num: 8, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 25, status: 1 },
                    { num: 28, status: 1 },
                    { num: 30, status: 1 },
                    { num: 33, status: 1 },
                    { num: 34, status: 1 },
                    { num: 38, status: 1 },
                    { num: 41, status: 1 },
                  ],
                  id: 206501,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 46200,
              prizeBonus: 0,
              incomeTax: 78500,
              prizeWinAfterTax: 806500,
              id: 190654,
              prizeWinAmount: 885000,
              userId: "84931777155",
              percentageOfShares: 1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 46200,
                  numbers: [
                    { num: 19, status: 1 },
                    { num: 20, status: 1 },
                    { num: 26, status: 1 },
                    { num: 28, status: 1 },
                    { num: 30, status: 1 },
                    { num: 33, status: 1 },
                    { num: 34, status: 1 },
                    { num: 38, status: 1 },
                    { num: 42, status: 1 },
                    { num: 44, status: 1 },
                    { num: 45, status: 1 },
                  ],
                  id: 206359,
                  percentageOfShares: 1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 190726,
              prizeWinAmount: 88500,
              userId: "84703203116",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 2, status: 1 },
                    { num: 11, status: 1 },
                    { num: 14, status: 1 },
                    { num: 20, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 25, status: 1 },
                    { num: 30, status: 1 },
                    { num: 33, status: 1 },
                    { num: 42, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206446,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4453680,
              prizeBonus: 0,
              incomeTax: 7567400,
              prizeWinAfterTax: 77746600,
              id: 190553,
              prizeWinAmount: 85314000,
              userId: "84913331139",
              percentageOfShares: 96.4,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 693000,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206473,
                  percentageOfShares: 15,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 231000,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206489,
                  percentageOfShares: 5,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 462000,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206490,
                  percentageOfShares: 10,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 23100,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206498,
                  percentageOfShares: 0.5,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206499,
                  percentageOfShares: 0.1,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 184800,
                  numbers: [
                    { num: 2, status: 1 },
                    { num: 12, status: 1 },
                    { num: 16, status: 1 },
                    { num: 22, status: 1 },
                    { num: 24, status: 1 },
                    { num: 25, status: 1 },
                    { num: 26, status: 1 },
                    { num: 39, status: 1 },
                    { num: 40, status: 1 },
                    { num: 41, status: 1 },
                    { num: 43, status: 1 },
                  ],
                  id: 206241,
                  percentageOfShares: 4,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 231000,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206248,
                  percentageOfShares: 5,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206496,
                  percentageOfShares: 0.1,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206502,
                  percentageOfShares: 0.1,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 69300,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206249,
                  percentageOfShares: 1.5,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 462000,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206392,
                  percentageOfShares: 10,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 2079000,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206494,
                  percentageOfShares: 45,
                  status: 4,
                },
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 3, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 18, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 35, status: 1 },
                    { num: 41, status: 1 },
                    { num: 44, status: 1 },
                  ],
                  id: 206500,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 190693,
              prizeWinAmount: 88500,
              userId: "84328545114",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 4, status: 1 },
                    { num: 5, status: 1 },
                    { num: 10, status: 1 },
                    { num: 11, status: 1 },
                    { num: 12, status: 1 },
                    { num: 17, status: 1 },
                    { num: 19, status: 1 },
                    { num: 21, status: 1 },
                    { num: 28, status: 1 },
                    { num: 34, status: 1 },
                    { num: 39, status: 1 },
                  ],
                  id: 206404,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
            {
              currentMember: 0,
              moneyOfShares: 4620,
              prizeBonus: 0,
              incomeTax: 7850,
              prizeWinAfterTax: 80650,
              id: 190664,
              prizeWinAmount: 88500,
              userId: "84936301405",
              percentageOfShares: 0.1,
              numberInfos: [
                {
                  priceUnit: 0,
                  moneyOfShares: 4620,
                  numbers: [
                    { num: 2, status: 1 },
                    { num: 8, status: 1 },
                    { num: 16, status: 1 },
                    { num: 22, status: 1 },
                    { num: 23, status: 1 },
                    { num: 24, status: 1 },
                    { num: 29, status: 1 },
                    { num: 30, status: 1 },
                    { num: 34, status: 1 },
                    { num: 35, status: 1 },
                    { num: 40, status: 1 },
                  ],
                  id: 206371,
                  percentageOfShares: 0.1,
                  status: 4,
                },
              ],
            },
          ],
        },
        requestId: 16162248,
        resultDesc: "SUCCESS",
      };

      this.dataDetail = res.data;
      this.$store.dispatch("app/toggleOverlay", false);
    },
  },
};
</script>