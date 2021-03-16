<template>
  <div class="text-center">
    <v-dialog v-model="showImage">
      <v-card style="padding: 15px">
        <div id="modalImageBody" style="">
          <img
            style="width: 100%; height: 100%; object-fit: cover"
            :src="data"
          />
        </div>
        <div class="text-center" style="">
          <v-btn
            class="btn"
            style="
              background-color: #033762;
              border-radius: 5px;
              border-color: #033762;
              color: #fff ;
            "
             @click="$emit('update:showImage', false)"
          >
            ĐÓNG
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showImage: Boolean,
    data: String
  },
};
</script>
