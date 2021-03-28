<template>
  <div class="panel-body text-center" style="position: relative; height: 100%">
    <!-- Lich su mua ve -->
    <div class="form-group" style="margin-bottom: 2px">
      <div
        class="homeHisDivTicker"
        @click="homeOpenHistory()"
        style="background-color: #f0f8ff"
      >
        <img
          class="logoTicherHis"
          src="/history_logo.png"
          width="36px"
          height="auto"
          style="top: 23px"
        />
        <span class="textHis">
          LỊCH SỬ MUA VÉ
          <br />TRUYỀN THỐNG
        </span>
        <div class="buttonRight" style="background-color: #febf10">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>

      <div
        class="homeHisDivTicker"
        @click="homeOpenHistoryKeno()"
        style="background-color: #f0f8ff"
      >
        <img
          class="logoTicherHis"
          src="/history_keno_logo.png"
          width="36px"
          height="auto"
          style="top: 23px"
        />
        <span class="textHis">
          LỊCH SỬ MUA VÉ
          <br />KENO
        </span>
        <div class="buttonRight" style="background-color: #cf5f3a">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Lich su choi nhom -->
    <div class="form-group">
      <div
        class="homeDivTicker"
        @click="homeOpenHistoryChoiNhom()"
        style="background-color: #f0f8ff"
      >
        <img
          class="logoTicherHis"
          src="/lichsuchoinhom.jpg"
          width="46px"
          height="auto"
          style="top: 23px"
        />
        <span class="textHis"> LỊCH SỬ CHƠI NHÓM </span>
        <div class="buttonRight" style="background-color: #005b52">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Nhom mua chung -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenGroup()">
        <img
          class="logoTicher"
          style="top: 13px"
          src="/group.png"
          width="90px"
          height="auto"
        />
        <span class="text">
          <p style="font-size: 13px; margin-bottom: 0">Áp dụng nhiều loại vé</p>
          <p class="ticket-big" style="color: #033762">Nhóm mua chung</p>

          <p style="font-size: 14px; margin-bottom: 0">
            Gia tăng cơ hội trúng thưởng!
          </p>
        </span>
        <div class="buttonRight" style="background-color: #033762">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Choi Bao Keno -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenKenoBao()">
        <img
          class="logoTicher"
          style="top: 20px"
          src="/logo_keno_group.png"
          width="90px"
          height="auto"
        />
        <span class="text">
          <!--  <p style="font-size: 10px; margin-bottom: 0;">Ngày quay: <span id="homeTextKenoDateQuay"></span></p> -->
          <p style="font-size: 13px; margin-bottom: 0">
            Cả tuần, 10 phút / 1 kỳ quay
          </p>
          <p class="ticket-big" style="color: #d25e33">Chơi Bao Keno</p>
          <p style="font-size: 14px; margin-bottom: 0">Chơi nhanh, trúng dễ!</p>
          <!-- <p style="font-size: 10px; margin-bottom: 0;">Tần suất 10 phút/1 kỳ, từ 08:00 - 21:00</p> -->
        </span>
        <div class="buttonRight" style="background-color: #ffaf4b">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Keno -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenKeno()">
        <img
          class="logoTicher"
          style="top: 20px"
          src="/keno_logo.png"
          width="90px"
          height="auto"
        />
        <span class="text">
          <!--  <p style="font-size: 10px; margin-bottom: 0;">Ngày quay: <span id="homeTextKenoDateQuay"></span></p> -->
          <p style="font-size: 13px; margin-bottom: 0">
            Cả tuần, 10 phút / 1 kỳ quay
          </p>
          <p class="ticket-big" style="color: #d25e33">2.000.000.000đ</p>
          <p style="font-size: 14px; margin-bottom: 0">
            Đánh nhanh, trúng lớn !
          </p>
          <!-- <p style="font-size: 10px; margin-bottom: 0;">Tần suất 10 phút/1 kỳ, từ 08:00 - 21:00</p> -->
        </span>
        <div class="buttonRight" style="background-color: #cf5f3a">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Power 655-->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenPower655()">
        <img
          class="logoTicher"
          src="/power655_logo.png"
          width="90px"
          style="top: 11px"
          height="auto"
        />
        <span class="text">
          <p style="font-size: 13px; margin-bottom: 0">
            Ngày quay: <span id="homeTextPower655DateQuay">T5 11/03/2021</span>
          </p>
          <p
            class="ticket-big"
            style="color: #de0e21"
            id="homeTextPower655Money"
          >
            92.543.076.300đ
          </p>
          <p style="font-size: 14px; margin-bottom: 0">
            Thời gian còn lại:
            <span
              id="homeTextPower655CountDown"
              class="style colorDefinition size_sm"
              >00:18:36:37</span
            >
          </p>
        </span>
        <div class="buttonRight" style="background-color: #de0e21">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Mega 645 -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenMega645()">
        <img
          class="logoTicher"
          src="/mega645_logo.png"
          width="85px"
          style="top: 20px"
          height="auto"
        />
        <span class="text">
          <p style="font-size: 13px; margin-bottom: 0">
            Ngày quay: <span id="homeTextMega645DateQuay">T6 12/03/2021</span>
          </p>
          <p
            id="homeTextMega645Money"
            class="ticket-big"
            style="color: #1b63b3"
          >
            37.799.084.500đ
          </p>
          <p style="font-size: 14px; margin-bottom: 0">
            Thời gian còn lại:
            <span
              id="homeTextMega645CountDown"
              class="style colorDefinition size_sm"
              >01:18:34:54</span
            >
          </p>
        </span>
        <div
          class="buttonRight"
          style="background-color: #2164b2; -webkit-text-stroke: 2px #1b63b3"
        >
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Om Max3D -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenOmMax3DPlus()">
        <img
          class="logoTicher"
          src="/om.png"
          width="85px"
          style="top: 20px"
          height="auto"
        />
        <span class="text">
          <p style="font-size: 13px; margin-bottom: 0">
            Ngày quay:
            <span id="homeTextOmMax3dPlusDateQuay">T6 12/03/2021</span>
          </p>
          <p class="ticket-big" style="color: #ec6915">ÔM Max3D+</p>
          <p style="font-size: 14px; margin-bottom: 0">
            Thời gian còn lại:
            <span
              id="homeTextOmMax3dPlusCountDown"
              class="style colorDefinition size_sm"
              >01:18:32:50</span
            >
          </p>
        </span>
        <div class="buttonRight" style="background-color: #ec6915">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Om Max3D Plus -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenMax3DPlus()">
        <img
          class="logoTicher"
          src="/max3dPlus_logo.png"
          width="85px"
          style="top: 20px"
          height="auto"
        />
        <span class="text">
          <p style="font-size: 13px; margin-bottom: 0">
            Ngày quay: <span id="homeTextMax3dPlusDateQuay">T6 12/03/2021</span>
          </p>
          <p class="ticket-big" style="color: #39ae41">x100.000 lần!</p>
          <p style="font-size: 14px; margin-bottom: 0">
            Thời gian còn lại:
            <span
              id="homeTextMax3dPlusCountDown"
              class="style colorDefinition size_sm"
              >01:18:30:52</span
            >
          </p>
        </span>
        <div class="buttonRight" style="background-color: #39ae41">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Max 4D -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenMax4D()">
        <img
          class="logoTicher"
          src="/max4d_logo.png"
          width="85px"
          style="top: 20px"
          height="auto"
        />
        <span class="text">
          <p style="font-size: 13px; margin-bottom: 0">
            Ngày quay: <span id="homeTextMax4dDateQuay">T5 11/03/2021</span>
          </p>
          <p class="ticket-big" style="color: #81005d">x1.500 lần!</p>
          <p style="font-size: 14px; margin-bottom: 0">
            Thời gian còn lại:
            <span
              id="homeTextMax4dCountDown"
              class="style colorDefinition size_sm"
              >00:18:29:32</span
            >
          </p>
        </span>
        <div class="buttonRight" style="background-color: #81005d">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Max 3D -->
    <div class="form-group">
      <div class="homeDivTicker" @click="homeOpenMax3D()">
        <img
          class="logoTicher"
          src="/max3d_logo.png"
          width="85px"
          style="top: 20px"
          height="auto"
        />
        <span class="text">
          <p style="font-size: 13px; margin-bottom: 0">
            Ngày quay: <span id="homeTextMax3dDateQuay">T6 12/03/2021</span>
          </p>
          <p class="ticket-big" style="color: #b21a8f">x100 lần!</p>
          <p style="font-size: 14px; margin-bottom: 0">
            Thời gian còn lại:
            <span
              id="homeTextMax3dCountDown"
              class="style colorDefinition size_sm"
              >01:18:27:42</span
            >
          </p>
        </span>
        <div class="buttonRight" style="background-color: #b21a8f">
          <v-icon light size="12" class="ticket-icon-chevron">
            fa-chevron-right
          </v-icon>
        </div>
      </div>
    </div>

    <!-- Dieu khoan su dung -->
    <button @click="showModalTerm" class="btn btn-show-modal-term">
      ĐIỀU KHOẢN SỬ DỤNG
    </button>

    <DialogTerm :dialog.sync="dialog" />
  </div>
</template>

<script>
import DialogTerm from "~/components/home/DialogTerm.vue";
export default {
  components: {
    DialogTerm,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    homeOpenHistoryKeno() {},

    homeOpenHistory() {},

    homeOpenHistoryChoiNhom() {},

    homeOpenGroup() {
      this.$redirect({ url: "/momo/group", samepage: true });
    },

    homeOpenKenoBao() {},

    homeOpenKeno() {},

    homeOpenPower655() {
      this.$redirect({ url: "/momo/power655", samepage: true });
    },

    homeOpenMega645() {
      this.$redirect({ url: "/momo/mega645", samepage: true });
    },

    homeOpenOmMax3DPlus() {},

    homeOpenMax3DPlus() {},

    homeOpenMax4D() {},

    homeOpenMax3D() {},

    showModalTerm() {
      this.dialog = true;
    },
  },
};
</script>
