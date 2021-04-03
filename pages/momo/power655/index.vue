<template>
  <div class="panel-common">
    <div
      class="panel cpanel-danger"
      style="border: none; border-color: #ed1e30 !important"
    >
      <Header :color="color"/>
      <Top />
      <Body />
    </div>
  </div>
</template>


<script>
import Header from "~/components/common/Header.vue";
import Top from "~/components/power655/Top.vue";
import Body from "~/components/power655/Body.vue";

export default {
  components: {
    Header,
    Top,
    Body,
  },
  head: {
    titleTemplate: 'Power 6/55',
  },
  data() {
    return {
      color: "#ed1e30",
    }
  },
};
</script>