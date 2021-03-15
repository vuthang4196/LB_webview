<template>
  <v-row justify="center" align="center"> </v-row>
</template>

<script>
export default {
  mounted() {
    this.$redirect({ url: "/momo/home", samepage: true });
  },
};
</script>
