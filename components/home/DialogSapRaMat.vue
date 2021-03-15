<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="565">
      <v-card>
        <v-card-title class="grey lighten-2 dialog-custom">
          <v-col cols="6" class="dialog-custom-col"> Thông báo </v-col>
          <v-col cols="6 text-right" class="dialog-custom-col">
            <v-btn icon light @click="$emit('update:dialog', false)">
              <v-btn
                icon
                light
                @click="$emit('update:dialog', false)"
                class="btn-close-dialog"
              >
                ×
              </v-btn>
            </v-btn>
          </v-col>
        </v-card-title>

        <v-card-text>
          <div class="dialog-custom-content">
            <div class="form-group">
              <div class="text-center">
                <div class="text-danger dialog-custom-text-danger">
                  SẮP RA MẮT
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
  },
};
</script>
