<template>
  <section>
    <v-card>
      <h3 class="ml-5 pt-3">
        Water Bill payment
        <v-btn
          class="primary mt-0 mr-3"
          style="float: right"
          @click="initDataBillreset"
          v-if="billerDetail['data']"
        >
          RESET</v-btn
        >
      </h3>
      <v-card-text>
        <v-row v-if="!billerDetail['data']">
          <v-text-field
            solo
            dense
            v-model="clid"
            placeholder="Water Bill Payment"
            @change="initDataBill"
          ></v-text-field>
          <v-btn class="primary mt-0" @click="initDataBill"> Search</v-btn>
        </v-row>

        <section v-if="billerDetail['data']">
          <!-- {{ billerDetail }} -->
          <v-row>
            <v-col>
              <v-tabs>
                <v-tab disabled
                  >Water Client ID - {{ billerDetail["data"].CLIENT_ID }}</v-tab
                >
                <v-tab>Detail</v-tab>
                <v-tab>History 10 ROW</v-tab>
                <v-tab-item> </v-tab-item>
                <v-tab-item>
                  <table>
                    <tr>
                      <td>ເລກບັນຊີຜູ້ໃຊ້ນ້ຳ</td>
                      <td>: {{ billerDetail["data"].CLIENT_ID }}</td>
                    </tr>
                    <tr>
                      <td>ຊື່ ແລະ ນາມສະກຸນ</td>
                      <td>: {{ billerDetail["data"].CLIENT_NAME }}</td>
                    </tr>
                    <tr>
                      <td>ບ້ານ</td>
                      <td>: {{ billerDetail["data"].VILLAGE_NAME }}</td>
                    </tr>
                    <tr>
                      <td>ເມືອງ</td>
                      <td>: {{ billerDetail["data"].DISTRICT_NAME }}</td>
                    </tr>
                  </table>
                </v-tab-item>
                <v-tab-item></v-tab-item>
              </v-tabs>
            </v-col>
            <v-col>
              <v-card elevation="0">
                <v-card-title
                  >ລາຍລະອຽດການຈ່າຍ <v-spacer></v-spacer>
                  {{ billerDetail["data"].CLIENT_ID }}</v-card-title
                >
                <v-card-text>
                  <h3 class="mb-2 mt-4">
                    ເລກທີໃບບິນ
                    <strong style="float: right">
                      <v-chip class="ml-1" :input-value="active" filter v-for="(itm,index) in billerDetail['detail']['data']" :key="index">
                        {{ billerDetail["detail"]["data"][index]["BILL_NO"] }}
                      </v-chip></strong>
                  </h3>
                  <v-divider></v-divider>
                  <h3 class="mb-2 mt-4">
                    ປະຈຳເດືອນ
                    <strong style="float: right">
                      <v-chip class="ml-1" :input-value="active" filter v-for="(itm,index) in billerDetail['detail']['data']" :key="index">
                        {{ billerDetail["detail"]["data"][index]["BILL_MONTH"] }}
                      </v-chip></strong>
                  </h3>
                  <v-divider></v-divider>
                  <h3 class="mb-2 mt-4">
                    ລວມຈຳນວນເງິນ
                    <strong style="float: right">
                      {{
                        billerDetail["data"].TOTAL_DEBT | formatPrice
                      }} ກີບ</strong
                    >
                  </h3>
                  <v-divider></v-divider>
                  <h3 class="mb-2 mt-4">
                    ໜີ້ຄ້າງຈ່າຍ <strong style="float: right">0 ກີບ</strong>
                  </h3>
                  <v-divider></v-divider>
                  <v-text-field
                    placeholder="ປ້ອນຈຳນວນເງິນ"
                    v-model="valoth"
                    value="0"
                    v-if="btnoth == 1"
                  ></v-text-field>
                  <v-card-actions>
                    <v-btn class="warning mr-3" style="width: 50%" elevation="0"
                    @click="btnoth == 1"
                      >ເລືອກຊຳລະຈຳນວນອື່ນ</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn class="primary" style="width: 50%" elevation="0"
                      >ຊຳລະດຽວນີ້
                      {{ (billerDetail["data"].TOTAL_DEBT + 0) | formatPrice }}
                      ກີບ</v-btn
                    >
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  // middleware: "auth",
  data() {
    return {
      clid: "",
      valoth: 0,
      btnoth:0,
      active:'',
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  filters: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    billerDetail() {
      let dt = {
        data: {
          CLIENT_ID: "",
          CLIENT_NAME: "",
          TOTAL_DEBT: 0,
          VILLAGE_NAME: "",
          DISTRICT_NAME: "",
        },
        detail: {
          data: [
            {
              BILL_NO: "",
              BILL_DATE: "",
              BILL_MONTH: "",
              PREV_READ: 0,
              PRES_READ: 0,
              CONSUMP: 0,
              BILL_AMOUNT: 0,
              PAID_AMOUNT: 0,
              DEBT_AMOUNT: 0,
            },
          ],
        },
      };
      return JSON.parse(JSON.stringify(this.$store.state.INQ.billerdail));
    },
  },
  methods: {
    async initDataBill() {
      this.$store.dispatch("INQ/GETWALTERHISTORY", {
        clid: this.clid,
      });
    },
    async initDataBillreset() {
      this.$store.commit("INQ/GET_BILL", "");
    },
  },
};
</script>
