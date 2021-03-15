<template>
  <v-app dark style="background-color: #f0f0f0 !important">
    <v-overlay :absolute="overlay" :value="$store.state.app.loadingOverlay">
      <v-progress-circular
        indeterminate
        class="circular-purple"
      ></v-progress-circular>
    </v-overlay>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      overlay: true,
    };
  },
};
</script>
