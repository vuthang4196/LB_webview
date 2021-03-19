<template>
  <div class="panel-group">
    <div class="panel" style="border: none">
      <Header :title="title" @actionBack="actionBack" />
      <Body />
    </div>
  </div>
</template>


<script>
import Header from "~/components/group_done/Header.vue";
import Body from "~/components/group_join/Body.vue";
export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      title: "Góp cổ phần",
    };
  },
  methods: {
    actionBack() {
      this.$router.push({
        path: "/momo/group_not_done/" + this.$route.params.id,
        query: {},
      });
    },
  },
};
</script>