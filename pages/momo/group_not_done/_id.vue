<template>
  <div class="panel-group">
    <div class="panel" style="border: none">
      <Header :title="title" @actionBack="actionBack" />
      <Detail />
    </div>
  </div>
</template>


<script>
import Header from "~/components/group_done/Header.vue";
import Detail from "~/components/group_not_done/Detail.vue";
export default {
  components: {
    Header,
    Detail,
  },
  data() {
    return {
      title: "",
    };
  },
  mounted() {
      this.title = "Thông tin nhóm #" + this.$route.params.id
  },
  methods: {
    actionBack() {
      this.$redirect({ url: "/momo/group_not_done", samepage: true });
    },
  },
};
</script>