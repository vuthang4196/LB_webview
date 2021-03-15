<template>
  <div
    class="panel-body text-center panel-body-group"
    style="position: relative; height: 100%"
  >
    <div class="body-group-top-page">
      <v-row style="margin: 0">
        <v-col
          cols="6"
          class="form-group"
          style="padding: 0"
          v-for="(item, index) in listTops"
          :key="index"
        >
          <div
            class="homeDivTicker homeDivTickerGroupTop"
            @click="clickDetail(item.id)"
          >
            <div class="headerBox" style="">
              <table width="100%" style="font-size: small">
                <tbody>
                  <tr>
                    <td
                      style="color: white; text-align: left; padding-left: 5px"
                    >
                      <span style="font-size: 11px">NHÓM</span>
                      <br />
                      <span style="font-size: 13px; font-weight: 600">
                        {{ item.id }}
                      </span>
                    </td>
                    <td class="group-top-prize-win-amount">
                      {{
                        $commonFormatNumDuyCD({
                          amount: item.prizeWinAmount,
                        })
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/power655_logo.png"
              class="group-top-img"
              v-if="item.category == 23"
            />
            <img src="/mega645_logo.png" class="group-top-img" v-else />
            <div class="bodyBox" style="text-align: left; font-size: 12px">
              <span style="font-weight: 600"> Loại vé: </span>
              <span> Bao {{ item.groupLevel }} </span>
              <br />
              <span style="font-weight: 600">Kỳ quay: </span>
              <span
                >{{ item.drawInfo.drawId }} -
                {{ getOpenDate(item.drawInfo.openDate) }}</span
              ><br />
              <span style="font-weight: 600">Số thành viên: </span>
              <span>{{ item.numberOfMembers }}</span>
              <br />
              <span style="font-weight: 600">Hạng giải: </span>
              <span style="color: #b03032; font-weight: 600"
                >Bao {{ item.groupLevel }} trùng {{ item.numberCoincy }} số
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      listTops: [],
    };
  },
  mounted() {
    this.getListTop();
  },
  methods: {
    getOpenDate(value) {
      return value.split(" ")[0];
    },
    getListTop() {
      //   let url = "https://luckybest.vn/momo_v2/action/common/getListTop";
      //   this.$axios
      //     .post(url, {
      //       category: "",
      //     })
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      let res = {
        result: 0,
        data: [
          {
            enableLeaveGroup: 0,
            numberOfMembers: 196,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 5,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 229,
            minAmountContribute: 0,
            prizeWinAfterTax: 153280000,
            id: 6742,
            groupLevel: 14,
            numberCoincy: 5,
            moneyOfShares: 30030000,
            drawInfo: {
              drawId: "00641",
              openDate: "20/09/2020 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "20/09/2020 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "01/07/2020 17:04:10",
            incomeTax: 15920000,
            name: "Mega 6/45 - Bao 14 - 006742",
            category: 21,
            prizeWinAmount: 169200000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 14,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 5,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 27,
            minAmountContribute: 0,
            prizeWinAfterTax: 80650000,
            id: 16916,
            groupLevel: 11,
            numberCoincy: 5,
            moneyOfShares: 4620000,
            drawInfo: {
              drawId: "00704",
              openDate: "17/02/2021 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "17/02/2021 00:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "07/02/2021 17:21:28",
            incomeTax: 7850000,
            name: "Mega 6/45 - Bao 11 - 016916",
            category: 21,
            prizeWinAmount: 88500000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 9,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 5,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 9,
            minAmountContribute: 0,
            prizeWinAfterTax: 75250000,
            id: 18167,
            groupLevel: 7,
            numberCoincy: 5,
            moneyOfShares: 70000,
            drawInfo: {
              drawId: "00548",
              openDate: "04/03/2021 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "04/03/2021 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "03/03/2021 17:29:33",
            incomeTax: 7250000,
            name: "Power 6/55 - Bao 7 - 018167",
            category: 23,
            prizeWinAmount: 82500000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 172,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 2,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 200,
            minAmountContribute: 0,
            prizeWinAfterTax: 55450000,
            id: 2104,
            groupLevel: 15,
            numberCoincy: 4,
            moneyOfShares: 50050000,
            drawInfo: {
              drawId: "00422",
              openDate: "09/05/2020 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "09/05/2020 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "06/05/2020 11:07:38",
            incomeTax: 5050000,
            name: "Power 6/55 - Bao 15 - 002104",
            category: 23,
            prizeWinAmount: 60500000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 184,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 2,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 223,
            minAmountContribute: 0,
            prizeWinAfterTax: 26110000,
            id: 1047,
            groupLevel: 14,
            numberCoincy: 4,
            moneyOfShares: 30030000,
            drawInfo: {
              drawId: "00582",
              openDate: "06/05/2020 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "06/05/2020 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "24/04/2020 17:00:56",
            incomeTax: 1790000,
            name: "Mega 6/45 - Bao 14 - 001047",
            category: 21,
            prizeWinAmount: 27900000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 4,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 1,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 4,
            minAmountContribute: 0,
            prizeWinAfterTax: 20350000,
            id: 2572,
            groupLevel: 7,
            numberCoincy: 5,
            moneyOfShares: 70000,
            drawInfo: {
              drawId: "00584",
              openDate: "10/05/2020 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "10/05/2020 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "09/05/2020 18:51:13",
            incomeTax: 1150000,
            name: "Mega 6/45 - Bao 7 - 002572",
            category: 21,
            prizeWinAmount: 21500000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 208,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 4,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 260,
            minAmountContribute: 0,
            prizeWinAfterTax: 14608000,
            id: 15227,
            groupLevel: 12,
            numberCoincy: 4,
            moneyOfShares: 9240000,
            drawInfo: {
              drawId: "00700",
              openDate: "05/02/2021 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "05/02/2021 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "02/01/2021 19:30:44",
            incomeTax: 512000,
            name: "Mega 6/45 - Bao 12 - 015227",
            category: 21,
            prizeWinAmount: 15120000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 42,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 4,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 52,
            minAmountContribute: 0,
            prizeWinAfterTax: 11350000,
            id: 16966,
            groupLevel: 10,
            numberCoincy: 4,
            moneyOfShares: 2100000,
            drawInfo: {
              drawId: "00541",
              openDate: "16/02/2021 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "16/02/2021 00:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "09/02/2021 12:11:44",
            incomeTax: 150000,
            name: "Power 6/55 - Bao 10 - 016966",
            category: 23,
            prizeWinAmount: 11500000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 55,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 4,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 55,
            minAmountContribute: 0,
            prizeWinAfterTax: 11350000,
            id: 12050,
            groupLevel: 10,
            numberCoincy: 4,
            moneyOfShares: 2100000,
            drawInfo: {
              drawId: "00502",
              openDate: "14/11/2020 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "14/11/2020 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "12/11/2020 15:39:26",
            incomeTax: 150000,
            name: "Power 6/55 - Bao 10 - 012050",
            category: 23,
            prizeWinAmount: 11500000,
          },
          {
            enableLeaveGroup: 0,
            numberOfMembers: 55,
            pushRefundStatus: 0,
            refundStatus: 0,
            levelWin: 4,
            type: 1,
            percentageOfShares: 0,
            prize: 0,
            statusWin: 1,
            numberOfTickets: 72,
            minAmountContribute: 0,
            prizeWinAfterTax: 11350000,
            id: 17619,
            groupLevel: 10,
            numberCoincy: 4,
            moneyOfShares: 2100000,
            drawInfo: {
              drawId: "00545",
              openDate: "25/02/2021 18:00:00",
              category: 0,
            },
            groupStatus: 2,
            createBy: "db",
            timeCutOff: "25/02/2021 17:00:00",
            prizeBonus: 0,
            procress: 100,
            createTime: "23/02/2021 13:24:04",
            incomeTax: 150000,
            name: "Power 6/55 - Bao 10 - 017619",
            category: 23,
            prizeWinAmount: 11500000,
          },
        ],
        requestId: 472909808,
      };

      this.listTops = res.data;
    },

    clickDetail(id) {
      this.$router.push({
        path: '/momo/group_top/' + id,
        query: {}
      })
    },
  },
};
</script>
