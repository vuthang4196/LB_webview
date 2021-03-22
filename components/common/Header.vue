<template>
  <section>
    <div
      class="container custom-panel-header panel-home"
      :style="{'background-color': color + '!important'}"
    >
      <table>
        <tbody>
          <tr>
            <td class="panel-header-text-left">
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
            <td class="panel-header-text-center" @click="returnHome()">
              LuckyBest
            </td>
            <td class="panel-header-text-right">
              <v-icon dark size="17">fa fa-shopping-cart</v-icon>
              &nbsp;
              <span id="homeMuabaoBasketNumberTotal" class="step-basket"
                >0</span
              >
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
export default {
  props: {
    color: String
  },
  methods: {
    returnHome() {
      this.$redirect({ url: "/momo/home", samepage: false });
    },
  },
};
</script>