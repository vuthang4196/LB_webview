<template>
  <div></div>
</template>
<script>

export default ({
  mounted() {
      this.$redirect({ url: "/momo/group_not_done", samepage: true });
  },
})
</script>
