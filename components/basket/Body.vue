<template>
  <section>
    <div class="panel-body panel-body-receive" style="min-height: 445px">
      <div id="basketBodyDataAllBao">
        <div class="form-group">
          <div class="basket-group-baobao">
            <img src="/power655_logo.png" width="80px" height="auto" />
            <!-- Level -->
            <div class="form-group text-center">
              <p style="padding-top: 7px"></p>
              <p class="basket-group-level">Vé thường</p>
              <p></p>
            </div>
            <!-- Numbers -->
            <div class="basketCircle">
              <table style="width: 100%">
                <tbody>
                  <tr>
                    <td style="width: 10%">
                      <span class="key">A</span>
                    </td>
                    <td style="width: 70%">
                      <span class="step">01</span> <span class="step">04</span>
                      <span class="step">23</span> <span class="step">24</span>
                      <span class="step">37</span> <span class="step">55</span>
                    </td>
                    <td style="text-align: right; padding-right: 10px">
                      <span class="step_btn" @click="cancelNumberRow()">
                        <i class="fa fa-trash-o"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 10%"><span class="key">B</span></td>
                    <td style="width: 70%">
                      <span class="step">01</span> <span class="step">12</span>
                      <span class="step">21</span> <span class="step">28</span>
                      <span class="step">43</span> <span class="step">49</span>
                    </td>
                    <td style="text-align: right; padding-right: 10px">
                      <span
                        class="step_btn"
                        onclick="basketPower655CancelDaysoByDonhangOne('B 01 12 21 28 43 49 ','6_B','2');"
                      >
                        <i class="fa fa-trash-o"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 10%"><span class="key">C</span></td>
                    <td style="width: 70%">
                      <span class="step">19</span> <span class="step">22</span>
                      <span class="step">24</span> <span class="step">36</span>
                      <span class="step">37</span> <span class="step">42</span>
                    </td>
                    <td style="text-align: right; padding-right: 10px">
                      <span
                        class="step_btn"
                        onclick="basketPower655CancelDaysoByDonhangOne('C 19 22 24 36 37 42 ','6_C','2');"
                      >
                        <i class="fa fa-trash-o"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <!-- Ky Quay -->
            <v-row style="margin: 0" class="basket-font-size-ky">
              <v-col cols="3" style="padding: 0" class="pl-1">
                <p><strong>Kỳ :</strong> #00558</p>
              </v-col>
              <v-col cols="9" style="padding: 0">
                <p><strong>Ngày :</strong> T7 27/03/2021</p>
              </v-col>
            </v-row>
            <v-row style="margin: 0" class="basket-font-size-ky">
              <v-col cols="3" style="padding: 0" class="pl-1">
                <p><strong>Kỳ :</strong> #00559</p>
              </v-col>
              <v-col cols="9" style="padding: 0">
                <p><strong>Ngày :</strong> T3 30/03/2021</p>
              </v-col>
            </v-row>
            <v-row style="margin: 0" class="basket-font-size-ky">
              <v-col cols="3" style="padding: 0" class="pl-1">
                <p><strong>Kỳ :</strong> #00560</p>
              </v-col>
              <v-col cols="9" style="padding: 0">
                <p><strong>Ngày :</strong> T5 01/04/2021</p>
              </v-col>
            </v-row>

            <!-- Price -->
            <div class="form-group basket-border-top mb-3">
              <v-row class="basket-font-size-money" style="margin:0">
                <v-col cols="8" class="text-left pl-1" style="padding:0">
                  <strong>
                    VÉ 1 : <span style="color: red">90.000đ</span>
                  </strong>
                </v-col>
                <v-col cols="4" class="text-right" style="padding:0">
                  <a
                    onclick="basketPower655CancelDonhangOne(2,1);"
                    href="javascript:void(0)"
                  >
                    <i
                      class="fa fa-trash-o"
                      style="color: red; font-size: 14px"
                    ></i>
                    <strong>HỦY VÉ</strong>
                  </a>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    cancelNumberRow() {
      alert("111");
    },
  },
};
</script>