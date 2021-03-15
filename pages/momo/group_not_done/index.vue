<template>
  <div class="panel-group">
    <div class="panel" style="border: none">
      <Header @actionBack="actionBack" :isSearch.sync="isSearch" />
      <Body :isSearch.sync="isSearch"/>
    </div>
  </div>
</template>
<script>
import Header from "~/components/group_not_done/Header.vue";
import Body from "~/components/group_not_done/Body.vue";
export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      isSearch: false,
    };
  },
  methods: {
    actionBack() {
      this.$redirect({ url: "/momo/group", samepage: true });
    },
  },
};
</script>
