<template>
  <section>
    <div
      class="container custom-panel-header panel-home"
      :style="{ 'background-color': color + '!important' }"
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
            <td class="panel-header-text-right" @click="goToCartPage()">
              <v-icon dark size="17">fa fa-shopping-cart</v-icon>
              &nbsp;
              <span id="homeMuabaoBasketNumberTotal" class="step-basket">
                {{ thisTotalCart }}
              </span>
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
  data() {
    return {
      thisTotalCart: 0,
    };
  },
  mounted() {
    this.getTotalCart();
  },
  watch:{
    '$store.state.app.cookieCartChange': function (val) {
      if (val == true) {
        this.getTotalCart()
      }
    }
  },
  methods: {
    returnHome() {
      this.$redirect({ url: "/momo/home", samepage: false });
    },
    goToCartPage() {
      this.$redirect({ url: "/momo/basket", samepage: true });
    },
    getTotalCart() {
      this.thisTotalCart = 0;
      let cartPower655 =
        Cookies.get("LUCKYBEST_Power655") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_Power655"))
          : [];
      this.thisTotalCart = this.thisTotalCart + cartPower655.length;
      console.log(cartPower655)
      this.$store.dispatch('app/setCookieCartChange', false);

    },
  },
};
</script>