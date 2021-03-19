<template>
  <v-app dark style="background-color: #f0f0f0 !important">
    <v-overlay :absolute="overlay" :value="$store.state.app.loadingOverlay">
      <v-progress-circular
        indeterminate
        class="circular-purple"
      ></v-progress-circular>
    </v-overlay>

    <v-snackbar
      v-model="$store.state.app.snackBar.show"
      :timeout="$store.state.app.snackBar.timeout"
      top
      right
      color="blue-grey"
    >
      <i class="fa fa-info-circle"></i> {{ $store.state.app.snackBar.msg }}
      <template>
        <v-btn
          color="blue"
          text
          @click="$store.dispatch('app/setSnackBar', { show: false, msg: '' })"
        >
          x
        </v-btn>
      </template>
    </v-snackbar>
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
