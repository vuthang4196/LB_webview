<template>
  <section>
    <div
      class="container custom-panel-header"
      :style="{ 'background-color': color + '!important' }"
    >
      <table>
        <tbody>
          <tr>
            <td class="panel-header-text-left" style="width: 10%">
              <span @click="returnHome()"
                ><v-icon
                  style="
                    font-size: 20px;
                    line-height: 32px;
                    color: #fff !important;
                  "
                  >fa fa-arrow-left</v-icon
                ></span
              >
              <br />
            </td>
            <td class="panel-header-text-center" @click="returnHome()" style="width: 80%; color: #fff">
              Chi tiết giỏ hàng
            </td>
            <td class="panel-header-text-right" @click="returnHome()" style="width: 10%">
              <span @click="returnHome()">
                <v-icon dark size="17">fa fa-home</v-icon>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="height: 37px"></div>
  </section>
</template>

<script>
import Cookies from "js-cookie";
export default {
  props: {
    color: String,
  },

  methods: {
    returnHome() {
      this.$redirect({ url: "/momo/home", samepage: false });
    },
  },
};
</script>