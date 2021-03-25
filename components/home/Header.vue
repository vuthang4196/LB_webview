<template>
  <section>
    <div class="container custom-panel-header panel-home">
      <table>
        <tbody>
          <tr>
            <td class="panel-header-text-left">
              <br />
            </td>
            <td class="panel-header-text-center" @click="returnHome()">
              TRANG CHỦ
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
    <div style="height: 41px"></div>
    <div id="homeBannerSlides">
      <v-carousel
        cycle
        height="153"
        hide-delimiters
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in banner"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      banner: [
        {
          src: "/banner.jpg",
        },
      ],
      thisTotalCart: 0,
    };
  },
  mounted() {
    this.getTotalCart();
  },
  methods: {
    returnHome() {
      this.$redirect({ url: "/momo/home", samepage: false });
    },
    goToCartPage() {
      this.$redirect({ url: "/momo/basket", samepage: true });
    },
    getTotalCart() {
      let cartPower655 =
        Cookies.get("LUCKYBEST_Power655") !== undefined
          ? JSON.parse(Cookies.get("LUCKYBEST_Power655"))
          : [];
      this.thisTotalCart = this.thisTotalCart + cartPower655.length;
    },
  },
};
</script>