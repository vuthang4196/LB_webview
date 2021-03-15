<template>
  <div
    class="panel-body text-center panel-body-group"
    style="position: relative; height: 100%"
  >
    <div class="body-group-page">
      <!-- Mua chung ve bao -->
      <div class="form-group">
        <div class="homeDivTicker homeDivTickerGroup" @click="goGroupNotDone()">
          <p class="text-group-content">MUA CHUNG VÉ BAO</p>
          <div
            class="buttonRight buttonRightGroup"
            style="background-color: #033762"
          >
            <v-icon light size="12" class="ticket-icon-chevron">
              fa-chevron-right
            </v-icon>
          </div>
        </div>
      </div>

      <!-- Cach choi 2 -->
      <div class="form-group" style="opacity: 50%">
        <div class="homeDivTicker homeDivTickerGroup" onclick="">
          <p class="text-group-content">CÁCH CHƠI 2</p>
          <p style="font-size: 14px; margin-bottom: 0; color: #860d00">
            Coming soon
          </p>

          <div
            class="buttonRight buttonRightGroup"
            style="background-color: #033762"
          >
            <v-icon light size="12" class="ticket-icon-chevron">
              fa-chevron-right
            </v-icon>
          </div>
        </div>
      </div>

      <!-- Cach choi 3 -->
      <div class="form-group" style="opacity: 50%">
        <div class="homeDivTicker homeDivTickerGroup" onclick="">
          <p class="text-group-content">CÁCH CHƠI 3</p>
          <p style="font-size: 14px; margin-bottom: 0; color: #860d00">
            Coming soon
          </p>

          <div
            class="buttonRight buttonRightGroup"
            style="background-color: #033762"
          >
            <v-icon light size="12" class="ticket-icon-chevron">
              fa-chevron-right
            </v-icon>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Trung Thuong -->
    <button @click="goGroupTop" class="btn btnGroupTop">
      TOP TRÚNG THƯỞNG
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goGroupNotDone() {
      this.$redirect({ url: "/momo/group_not_done", samepage: true });
    },

    goGroupTop() {
      this.$redirect({ url: "/momo/group_top", samepage: true });
    },
  },
};
</script>
