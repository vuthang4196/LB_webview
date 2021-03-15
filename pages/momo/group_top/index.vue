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
import Body from "~/components/group_top/Body.vue";
export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      title: "Top trúng thưởng",
    };
  },
  methods: {
    actionBack() {
      this.$redirect({ url: "/momo/group", samepage: true });
    },
  },
};
</script>