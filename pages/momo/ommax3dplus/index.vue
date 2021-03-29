<template>
  <div class="panel-common">
    <div
      class="panel cpanel-danger"
      style="border: none; border-color: #82005d !important"
    >
      <Header :color="color"/>
      <Top />
      <Body />
    </div>
  </div>
</template>


<script>
import Header from "~/components/common/Header.vue";
import Top from "~/components/ommax3dplus/Top.vue";
import Body from "~/components/ommax3dplus/Body.vue";


export default {
  components: {
    Header,
    Top,
    Body
  },
  data() {
    return {
      color: "#F27F24",
    }
  },
};
</script>