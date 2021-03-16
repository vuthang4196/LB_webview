<template>
  <div class="panel-group">
    <div class="panel" style="border: none">
      <Header :title="title" @actionBack="actionBack" />
      <Body />
    </div>
  </div>
</template>


<script>
import Header from "~/components/group/Header.vue";
import Body from "~/components/group_done/Body.vue";
export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      title: "Nhóm đã hoàn thành",
    };
  },
  methods: {
    actionBack() {
      this.$redirect({ url: "/momo/group", samepage: true });
    },
  },
};
</script>