<template>
  <section>
    <div class="panel-body panel-body-basket" style="min-height: 445px">
      <div id="basketBodyDataAllBao">
        <section
          class="baske-item"
          v-for="(item, index) in dataCart"
          :key="index"
        >
          <!-- Power655 -->
          <div class="form-group mb-3" v-if="item.category == 3">
            <div class="basket-group-baobao">
              <img src="/power655_logo.png" width="80px" height="auto" />
              <!-- Level -->
              <div class="form-group text-center">
                <p style="padding-top: 7px"></p>
                <p class="basket-group-level">
                  {{ item.level == 6 ? " Vé thường" : "Bao " + item.level }}
                </p>
                <p></p>
              </div>
              <!-- Numbers -->
              <div class="basketCircle">
                <table style="width: 100%">
                  <tbody>
                    <tr v-for="(nums, key) in item.numbers" :key="key">
                      <td style="width: 10%">
                        <span class="key">{{
                          $commonBuildABCAll(key + 1)
                        }}</span>
                      </td>
                      <td style="width: 70%">
                        <span class="step" v-for="(num, i) in nums" :key="i">
                          {{ num < 10 ? "0" + num : num }}
                        </span>
                      </td>
                      <td style="text-align: right; padding-right: 10px">
                        <span
                          class="step_btn"
                          @click="
                            cancelNumberRow(index, key, item.category)
                          "
                        >
                          <i class="fa fa-trash-o"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <!-- Ky Quay -->
              <v-row
                style="margin: 0"
                class="basket-font-size-ky"
                v-for="(ticket, t) in item.tickets"
                :key="t"
              >
                <v-col cols="3" style="padding: 0" class="pl-1">
                  <p><strong>Kỳ :</strong> #{{ ticket.drawCode }}</p>
                </v-col>
                <v-col cols="9" style="padding: 0">
                  <p>
                    <strong>Ngày :</strong>
                    {{ ticket.openDate | day }} {{ ticket.openDate | time }}
                  </p>
                </v-col>
              </v-row>

              <!-- Price -->
              <div class="form-group basket-border-top mb-3">
                <v-row class="basket-font-size-money" style="margin: 0">
                  <v-col cols="8" class="text-left pl-1" style="padding: 0">
                    <strong>
                      VÉ {{ index + 1 }} :
                      <span style="color: red">
                        {{ $formatMoney({ amount: item.totalPrice }) }}đ
                      </span>
                    </strong>
                  </v-col>
                  <v-col cols="4" class="text-right" style="padding: 0">
                    <a
                      @click="basketCancelDonhang(index, item.category)"
                      href="javascript:void(0)"
                    >
                      <i
                        class="fa fa-trash-o"
                        style="color: red; font-size: 14px"
                      ></i>
                      <strong>HỦY VÉ</strong>
                    </a>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>

          <!-- Mega645 -->
          <div class="form-group mb-3" v-if="item.category == 1">
            <div class="basket-group-baobao">
              <img src="/mega645_logo.png" width="80px" height="auto" />
              <!-- Level -->
              <div class="form-group text-center">
                <p style="padding-top: 7px"></p>
                <p class="basket-group-level">
                  {{ item.level == 6 ? " Vé thường" : "Bao " + item.level }}
                </p>
                <p></p>
              </div>
              <!-- Numbers -->
              <div class="basketCircle">
                <table style="width: 100%">
                  <tbody>
                    <tr v-for="(nums, key) in item.numbers" :key="key">
                      <td style="width: 10%">
                        <span class="key">{{
                          $commonBuildABCAll(key + 1)
                        }}</span>
                      </td>
                      <td style="width: 70%">
                        <span class="step" v-for="(num, i) in nums" :key="i">
                          {{ num < 10 ? "0" + num : num }}
                        </span>
                      </td>
                      <td style="text-align: right; padding-right: 10px">
                        <span
                          class="step_btn"
                          @click="
                            cancelNumberRow(index, key, item.category)
                          "
                        >
                          <i class="fa fa-trash-o"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <!-- Ky Quay -->
              <v-row
                style="margin: 0"
                class="basket-font-size-ky"
                v-for="(ticket, t) in item.tickets"
                :key="t"
              >
                <v-col cols="3" style="padding: 0" class="pl-1">
                  <p><strong>Kỳ :</strong> #{{ ticket.drawCode }}</p>
                </v-col>
                <v-col cols="9" style="padding: 0">
                  <p>
                    <strong>Ngày :</strong>
                    {{ ticket.openDate | day }} {{ ticket.openDate | time }}
                  </p>
                </v-col>
              </v-row>

              <!-- Price -->
              <div class="form-group basket-border-top mb-3">
                <v-row class="basket-font-size-money" style="margin: 0">
                  <v-col cols="8" class="text-left pl-1" style="padding: 0">
                    <strong>
                      VÉ {{ index + 1 }} :
                      <span style="color: red">
                        {{ $formatMoney({ amount: item.totalPrice }) }}đ
                      </span>
                    </strong>
                  </v-col>
                  <v-col cols="4" class="text-right" style="padding: 0">
                    <a
                      @click="basketCancelDonhang(index, item.category)"
                      href="javascript:void(0)"
                    >
                      <i
                        class="fa fa-trash-o"
                        style="color: red; font-size: 14px"
                      ></i>
                      <strong>HỦY VÉ</strong>
                    </a>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <div class="panel-footer text-center">
      <div class="form-group px-2">
        <v-row style="margin: 0" class="basket-font-size-money">
          <v-col cols="4" class="text-left pb-1">
            <strong>Tổng</strong>
          </v-col>
          <v-col cols="8" class="text-right pb-1">
            <strong>
              <span id="basketBodyDataTotalMoney" style="color: red">
                {{ $formatMoney({ amount: totalPrice }) }}đ
              </span>
            </strong>
          </v-col>
        </v-row>
      </div>
      <div class="form-group px-2">
        <v-row style="margin: 0">
          <v-col cols="6" style="padding: 0" class="px-2">
            <v-btn
              type="button"
              @click="basketBack()"
              class="btn btn-primary btn-block btn-md btn-basket-footer"
            >
              MUA THÊM
            </v-btn>
          </v-col>
          <v-col cols="6" style="padding: 0" class="px-2">
            <v-btn
              id="basketBtnContinueOK"
              type="button"
              @click="basketBtnClickOrderContinue()"
              class="btn btn-danger btn-block btn-md btn-md btn-basket-footer"
            >
              THANH TOÁN
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Modal Confirm -->
    <v-dialog
      style="margin: 10px !important"
      v-model="modalDelRow"
      width="500"
      persistent
    >
      <v-card
        style="
          background-color: #c32d3c;
          color: white !important;
          border-radius: 0;
        "
      >
        <div class="modal-body">
          <div class="bootbox-body">{{ msgConfirm }}</div>
        </div>
        <div class="modal-footer modal-footer-basktet-del">
          <v-btn
            small
            type="button"
            class="baset-btn-del basket-btn-del-cancel"
            @click="closeConfirmDel()"
          >
            Đóng
          </v-btn>
          <v-btn
            small
            type="button"
            class="baset-btn-del basket-btn-del-confirm"
            v-if="delOne == true"
            @click="delRowTicket()"
          >
            Đồng ý
          </v-btn>
          <v-btn
            small
            type="button"
            class="baset-btn-del basket-btn-del-confirm"
            v-else
            @click="delTicket()"
          >
            Đồng ý
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import Cookies from "js-cookie";
import moment from "moment";
export default {
  data() {
    return {
      dataCart: [],
      totalPrice: 0,
      modalDelRow: false,
      msgConfirm: "",
      indexDelOne: null,
      numRowDelOne: null,
      delCategory: null,
      delOne: false,
    };
  },
  filters: {
    time: function (date) {
      return moment(date, "DD-MM-YYYY HH:mm:ss").format("DD/MM/YYYY");
    },
    day: function (date) {
      let day = parseInt(moment(date, "DD-MM-YYYY HH:mm:ss").format("d")) + 1;
      let str = "";
      if (day > 1) {
        str = "T" + day;
      } else {
        str = "CN"
      }
      return str;
    },
  },
  mounted() {
    this.getDataCart();
  },
  methods: {
    cancelNumberRow(itemCart, rowNum, catRow) {
      let strRow = this.$commonBuildABCAll(rowNum + 1);
      let strNums = this.dataCart[itemCart].numbers[rowNum].toString();
      strNums = strNums.replaceAll(",", " ");
      this.msgConfirm = "Xóa : " + strRow + " " + strNums + " ?";
      this.indexDelOne = itemCart;
      this.numRowDelOne = rowNum;
      this.delCategory = catRow;
      this.delOne = true;
      this.modalDelRow = true;
    },
    basketCancelDonhang(itemCart, catRow) {
      this.msgConfirm = "Bạn muốn xóa vé " + (itemCart + 1) + " ?";
      this.indexDelOne = itemCart;
      this.delCategory = catRow;
      this.modalDelRow = true;
    },
    delTicket() {
      // Power655
      if (this.delCategory == 3) {
        this.totalPrice =
          this.totalPrice - this.dataCart[this.indexDelOne].totalPrice;
        this.dataCart.splice(this.indexDelOne, 1);
        this.renewCookieCart();
        this.closeConfirmDel();
      }
      //Mega645
      if (this.delCategory == 1) {
        this.totalPrice =
          this.totalPrice - this.dataCart[this.indexDelOne].totalPrice;
        this.dataCart.splice(this.indexDelOne, 1);
        this.renewCookieCart();
        this.closeConfirmDel();
      }
    },
    delRowTicket() {
      // Power655
      if (this.delCategory == 3) {
        let defaultPrice = this.$commonPower655DefaultMoneyBao(
          this.dataCart[this.indexDelOne].level
        );

        let priceRow =
          defaultPrice * this.dataCart[this.indexDelOne].tickets.length;

        this.dataCart[this.indexDelOne].totalPrice =
          this.dataCart[this.indexDelOne].totalPrice - priceRow;
        this.totalPrice = this.totalPrice - priceRow;

        this.dataCart[this.indexDelOne].numbers.splice(this.numRowDelOne, 1);
        if (this.dataCart[this.indexDelOne].numbers.length == 0) {
          this.dataCart.splice(this.indexDelOne, 1);
        }
        this.renewCookieCart();
        this.closeConfirmDel();
      }

      // Mega645
      if (this.delCategory == 1) {
        let defaultPrice = this.$commonMega645DefaultMoneyBao(
          this.dataCart[this.indexDelOne].level
        );

        let priceRow =
          defaultPrice * this.dataCart[this.indexDelOne].tickets.length;

        this.dataCart[this.indexDelOne].totalPrice =
          this.dataCart[this.indexDelOne].totalPrice - priceRow;
        this.totalPrice = this.totalPrice - priceRow;

        this.dataCart[this.indexDelOne].numbers.splice(this.numRowDelOne, 1);
        if (this.dataCart[this.indexDelOne].numbers.length == 0) {
          this.dataCart.splice(this.indexDelOne, 1);
        }
        this.renewCookieCart();
        this.closeConfirmDel();
      }
    },

    closeConfirmDel() {
      this.indexDelOne = null;
      this.numRowDelOne = null;
      this.delCategory = null;
      this.msgConfirm = "";
      this.delOne = false;
      this.modalDelRow = false;
    },
    basketBtnClickOrderContinue() {
      this.$redirect({ url: "/momo/receive", samepage: true });
    },
    basketBack() {
      this.$redirect({ url: "/momo/home", samepage: true });
    },
    getDataCart() {
      let price = this.totalPrice;

      let dataCart = this.$getCartData();

      dataCart.map(function (item, index) {
        if (item.category == 3) {
          price = price + item.totalPrice;
        }
        if (item.category == 1) {
          price = price + item.totalPrice;
        }
      });
      this.dataCart = dataCart;
      this.totalPrice = price;
    },

    renewCookieCart() {
      this.$renewCookieCart({dataCart: this.dataCart})
    },
  },
};
</script>