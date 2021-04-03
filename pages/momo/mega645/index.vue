<template>
  <div class="panel-common">
    <div
      class="panel cpanel-danger"
      style="border: none; border-color: #1B63B3 !important"
    >
      <Header :color="color"/>
      <Top />
      <Body />
    </div>
  </div>
</template>


<script>
import Header from "~/components/common/Header.vue";
import Top from "~/components/mega645/Top.vue";
import Body from "~/components/mega645/Body.vue";

export default {
  components: {
    Header,
    Top,
    Body,
  },
  head: {
    titleTemplate: 'Mega 6/45',
  },
  data() {
    return {
      color: "#1B63B3",
    }
  },
};
</script>