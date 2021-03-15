<template>
  <section>
    <div class="container custom-panel-header">
      <table>
        <tbody>
          <tr>
            <td class="panel-header-group-text-left">
              <span @click="$emit('actionBack')">
                <v-icon
                  style="
                    font-size: 20px;
                    line-height: 32px;
                    color: #fff !important;
                  "
                >
                  fa fa-arrow-left
                </v-icon>
              </span>
              <br />
            </td>
            <td class="panel-header-group-text-center">Mua chung vé bao</td>
            <td class="panel-header-group-text-right">
              <div
                @click="setShowSearch()"
                :style="{ display: showSearch == true ? 'none' : '' }"
              >
                <v-icon
                  style="color: #ffffff; font-size: 20px; margin-right: 17px"
                >
                  fa fa-search
                </v-icon>
              </div>
              <div
                @click="setShowSearch()"
                :style="{ display: showSearch == false ? 'none' : '' }"
              >
                <v-icon
                  style="color: #ffffff; font-size: 20px; margin-right: 17px"
                >
                  fas fa-times
                </v-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="height: 38px"></div>
  </section>
</template>

<script>
export default {
  props: {
    isSearch: Boolean,
  },
  data() {
    return {
      showSearch: false,
    };
  },

  methods: {
    setShowSearch() {
      this.$emit("update:isSearch", !this.showSearch);
      this.showSearch = !this.showSearch;
    },
  },
};
</script>