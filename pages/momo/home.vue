<template>
  <div class="panel-group">
    <div class="panel panel-danger" style="border: none">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
</template>


<script>
import Header from "~/components/home/Header.vue";
import Body from "~/components/home/Body.vue";
import Footer from "~/components/home/Footer.vue";
export default {
  components: {
    Header,
    Body,
    Footer,
  }
};
</script>