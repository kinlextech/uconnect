<template>
  <v-app>
    <v-row justify="center" align="center">
      <v-card style="min-width: 420px">
        <h3 class="text-center mt-5 mb-3">Sign In</h3>
        <v-card-text>
          <v-row>
            <v-col>
              <v-img :src="bgimage" />
            </v-col>
            <v-col>
              <form>
                <v-text-field
                  v-model="frmlog.username"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account-clock-outline"
                  :error-messages="nameErrors"
                  label="USERNAME"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="frmlog.password"
                  outlined
                  dense
                  label="PASSWORD"
                  prepend-inner-icon="mdi-key-variant"
                  :error-messages="pwdErrors"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-btn
                  class="mr-4 primary"
                  style="width: 100%"
                  @click="submitForm"
                >
                  Sign In
                </v-btn>
              </form>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <h6 class="text-center mb-3">version 0.1.0</h6>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
import bgimage from "@/assets/3844647.svg";
export default {
  layout: "none",
  data() {
    return {
      showPassword: false,
      nameErrors: "",
      pwdErrors: "",
      bgimage,
      frmlog: {
        username: "",
        password: "",
      },
    };
  },
  components: {},
  methods: {
    async submitForm(evt) {
      evt.preventDefault();
      try {
        const rest = await this.$auth.loginWith("local", {
          data: this.frmlog,
        });
        this.$router.push("/");
      } catch (e) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
