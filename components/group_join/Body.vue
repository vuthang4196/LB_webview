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
      <div style="width: 100%" class="text-left">
        <span class="commonText">Số thành viên: </span>
        <span id="sothanhvienSpan">
          {{ groupData.numberOfMembers }}
        </span>
      </div>
      <div>
        <span class="commonText">Thời gian đóng: </span>
        <span id="thoigiandongSpan" style="color: #ec1b30">
          {{ groupData.timeClose }}
        </span>
      </div>
    </v-row>
    <!--  -->
    <v-row style="margin: 0; line-height: 30px" @click="showModalCoPhan()">
      <div class="SumoSelect" tabindex="0" role="button" aria-expanded="false">
        <select
          style="font-size: 12.5px; pointer-events: none"
          id="cophan"
          placeholder="Chọn cổ phần góp"
          class="form-control input-sm SumoUnder"
          tabindex="-1"
        >
          <option value="Chọn cổ phần góp">Chọn cổ phần góp</option>

          <option value="0.1">
            Chọn cổ phần góp: {{ percentSelected.percent }}% -
            {{ $formatMoney({ amount: percentSelected.amount }) }}đ
          </option>
        </select>
        <p
          class="CaptionCont SelectBox"
          style="font-size: 12.5px; pointer-events: none"
          title=" Chọn cổ phần góp: 0.1% - 4.620đ"
        >
          <span>
            Chọn cổ phần góp: {{ percentSelected.percent }}% -
            {{ $formatMoney({ amount: percentSelected.amount }) }}đ
          </span>
          <label><i></i></label>
        </p>
      </div>
    </v-row>
    <!--  -->
    <v-row style="margin: 0" class="mb-3 mt-2">
      <v-col cols="6" class="commonText text-left" style="padding: 0"
        >Bộ số đề cử:</v-col
      >
      <v-col
        cols="6"
        class="text-right"
        style="padding: 0"
        v-if="selectedNum.length < groupData.groupLevel"
        >CHƯA CHỌN</v-col
      >
      <v-col cols="6" class="text-right" style="padding: 0" v-else
        >Hợp lệ</v-col
      >
    </v-row>
    <!--  -->
    <div class="mb-3" id="divOtron" style="width: 100%; text-align: left">
      <span
        @click="clickOtron(i)"
        class="step_to"
        :class="{ otron_checked_num: selectedNum.includes(i) }"
        v-for="i in parseInt(totalNumber)"
        :key="i"
      >
        {{ i < 0 ? "0" + i : i }}
      </span>
    </div>

    <!--  -->
    <v-row style="margin: 0">
      <v-col cols="6" style="padding: 0">
        <button
          class="btn btn-warning custom-btn"
          @click="randomNumber()"
          style="width: 90%"
        >
          Chọn ngẫu nhiên
        </button>
      </v-col>
      <v-col cols="6" style="padding: 0">
        <button
          class="btn btn-warning custom-btn"
          @click="clearAllNumber()"
          style="width: 90%"
        >
          Hủy bộ số
        </button>
      </v-col>
    </v-row>

    <!--  -->
    <div style="height: calc(100vh - 130px)" id="divListGroup"></div>
    <div id="thamgiaBtn" class="text-center">
      <button
        class="btn btn-danger"
        @click="thamgia()"
        style="width: 100%; border-radius: 5px"
      >
        Tiếp tục
      </button>
    </div>
    <!--  -->
    <DialogInfo
      v-if="modalInfo"
      :modalInfo.sync="modalInfo"
      :percentSelected.sync="percentSelected"
      :dataPercent="dataPercent"
    />
  </div>
</template>

<script>
import DialogInfo from "~/components/group_join/DialogInfo.vue";
import API from "~/components/group_join/example_data.js";
export default {
  components: {
    DialogInfo,
  },
  data() {
    return {
      modalInfo: false,
      groupData: {},
      drawInfo: {},
      totalNumber: 45,
      selectedNum: [],
      dataPercent: [],
      percentSelected: {},
    };
  },
  mounted() {
    this.$store.dispatch("app/toggleOverlay", true);
    this.getDetailGroup();
  },
   computed: {
    snackBar () {
      console.log(this.$store.state.snackBar)
      // console.log(this)
      return {...this.$store.state.snackBar}
    }
  },
  
  methods: {
    showModalCoPhan() {
      this.modalInfo = true;
    },

    randomNumber() {
      this.selectedNum = [];
      do {
        console.log(1);
        let random = Math.floor(Math.random() * (this.totalNumber - 1 + 1) + 1);
        if (!this.selectedNum.includes(random)) {
          this.selectedNum.push(random);
        }
      } while (this.selectedNum.length < this.groupData.groupLevel);
    },

    clearAllNumber() {
      this.selectedNum = [];
    },

    thamgia() {
      this.$store.commit("app/setSnackBar", {
        show: true,
        timeout: 2000,
        msg: "1111",
      });
    },
    getCloseTime(value) {
      return value.split(" ")[1].substring(0, 5) + " " + value.split(" ")[0];
    },

    clickOtron(num) {
      if (this.selectedNum.length == this.groupData.groupLevel) {
        return;
      } else {
        if (this.selectedNum.includes(num)) {
          const index = this.selectedNum.indexOf(num);
          if (index > -1) {
            this.selectedNum.splice(index, 1);
          }
        } else {
          this.selectedNum.push(num);
        }
      }
    },

    getDetailGroup() {
      let res = API.group_join_detail;
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
      if (this.groupData.category == 23) {
        this.totalNumber = 55;
      }

      let resPercent = API.group_join_percent;
      resPercent = JSON.parse(resPercent);
      this.dataPercent = resPercent.data;
      this.percentSelected = this.dataPercent[0];
      this.$store.dispatch("app/toggleOverlay", false);
    },
  },
};
</script>