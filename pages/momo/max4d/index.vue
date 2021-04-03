<template>
  <div class="panel-common">
    <div
      class="panel cpanel-danger"
      style="border: none; border-color: #b21b8f !important"
    >
      <Header :color="color" />
      <Top />
      <Body />
    </div>
  </div>
</template>


<script>
import Header from "~/components/common/Header.vue";
import Top from "~/components/max4d/Top.vue";
import Body from "~/components/max4d/Body.vue";

export default {
  components: {
    Header,
    Top,
    Body,
  },
  head: {
    titleTemplate: 'Max 4D',
  },
  data() {
    return {
      color: "#910068",
    };
  },
};
</script>