<template>
  <div class="panel-common">
    <div
      style="border: 1px solid; border-color: #ed1e30 !important"
    >
      <Header :color="color" />
      <Body />
    </div>
  </div>
</template>

<script>
import Header from "~/components/basket/Header.vue";
import Body from "~/components/basket/Body.vue";

export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      color: "#ed1e30",
    };
  },
};
</script>