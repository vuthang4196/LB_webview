<template>
  <div class="panel-heading">
    <div class="power655DivLogo" style="color: #ffffff">
      <div class="luckeybets" style="margin: 18px">
        <span
          id="power655Money"
          style="font-size: xx-large; font-weight: 500"
          v-if="infoTicket"
          >x100,000 lần</span
        >
      </div>
      <div class="power655 text-center">
        <img src="/logo_max3d_dam.png" width="auto" height="53px" /><br />
        <span id="power655TimeCountdown" class="style colorDefinition size_sm">
          {{ time }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import API from "~/components/common/example_data.js";
import moment from "moment";
export default {
  data() {
    return {
      infoTicket: null,
      date: null,
    };
  },
  computed: {
    time: function () {
      return this.date;
    },
  },
  mounted() {
    this.getDataTicket();
    if (this.infoTicket) {
      setInterval(() => {
        var endTime = this.infoTicket.openDate;
        var startTime = moment().format("DD/MM/YYYY HH:mm:ss");

        var diff = moment.duration(
          moment(endTime, "DD/MM/YYYY HH:mm:ss").diff(
            moment(startTime, "DD/MM/YYYY HH:mm:ss")
          )
        );
        let days = diff.days() < 10 ? "0" + diff.days() : diff.days();
        let hours = diff.hours() < 10 ? "0" + diff.hours() : diff.hours();
        let mins = diff.minutes() < 10 ? "0" + diff.minutes() : diff.minutes();
        let secs = diff.seconds() < 10 ? "0" + diff.seconds() : diff.seconds();
        let countTime = days + ":" + hours + ":" + mins + ":" + secs;
        this.date = countTime;
      }, 1000);
    }
  },

  methods: {
    getDataTicket() {
      let data = API.data.filter((value, index) => {
        return value.category == 5;
      });
      if (data.length) {
        this.infoTicket = data[0];
        this.infoTicket.openDate = moment(
          this.infoTicket.openDate,
          "DD/MM/YYYY HH:mm:ss"
        ).format("DD/MM/YYYY HH:mm:ss");
      }
    },
  },
};
</script>