<template>
  <div class="container panel-footer">
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="color: #fe2200">
            <i
              class="fa fa-ticket"
              style="font-size: 25px; line-height: 32px"
            ></i>
            <br />
            ĐẶT VÉ
          </td>
          <td style="color: #aaaaaa" @click="thongkeVip()">
            <img
              class="logoTicher"
              src="/keno_mo.png"
              width="60px"
              height="auto"
            /><br />
            THỐNG KÊ VIP
          </td>
          <td style="color: #aaaaaa" @click="sapramat()">
            <i
              class="fa fa-star"
              style="font-size: 25px; line-height: 32px"
            ></i>
            <br />
            KẾT QUẢ
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Dialog -->
    <DialogSapRaMat :dialog.sync="dialog" />
  </div>
</template>
<script>
import DialogSapRaMat from "~/components/home/DialogSapRaMat.vue";
export default {
  components: {
    DialogSapRaMat,
  },
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    thongkeVip() {},
    sapramat() {
      this.dialog = true;
    },
  },
};
</script>
