<template>
  <section>
    <div class="container custom-panel-header">
      <table>
        <tbody>
          <tr>
            <td class="panel-header-group-text-left">
              <span @click="$emit('actionBack')"
                ><v-icon
                  style="
                    font-size: 20px;
                    line-height: 32px;
                    color: #fff !important;
                  "
                  >fa fa-arrow-left</v-icon
                ></span
              >
              <br />
            </td>
            <td class="panel-header-group-text-center">{{ title }}</td>
            <td style="width: 33.3%"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="height: 41px"></div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>