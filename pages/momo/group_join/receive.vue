<template>
  <div class="panel-group">
    <div class="panel panel-danger">
      <Header :title="title" @actionBack="actionBack" />
      <Body />
    </div>
  </div>
</template>


<script>
import Header from "~/components/group_done/Header.vue";
import Body from "~/components/group_join/RecevieBody.vue";
import Cookies from "js-cookie";
export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      title: "Hình thức nhận vé",
    };
  },
  mounted() {},
  methods: {
    actionBack() {
      let payment = Cookies.get("payment");
      payment = JSON.parse(payment);
      if (payment.type == "group") {
        this.$router.push({
          path: "/momo/group_join/" + payment.idGroup,
          query: {},
        });
      } else {
        alert('111');
      }
    },
  },
};
</script>