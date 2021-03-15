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
export default {
  data() {
    return {
      banner: [
        {
          src: "/banner.jpg",
        },
      ],
    };
  },
  methods: {
    returnHome() {
      this.$redirect({ url: "/momo/home", samepage: false });
    },
  },
};
</script>