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
import Body from "~/components/receive/Body.vue";
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
     this.$redirect({ url: "/momo/basket", samepage: true });
    },
  },
};
</script>