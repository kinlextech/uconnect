<template>
  <v-app>
    <v-row justify="center" align="center">
      <v-card style="min-width: 420px" color="#320761">
        <h3 class="text-center mt-5 mb-3">Sign In</h3>
        <v-card-text>
          <v-row>
            <v-col>
              <v-img :src="bgimage"/>
            </v-col>
            <v-col>
              <form>
                <v-text-field
                  v-model="frmlog.username"
                  outlined
                  dense
                  prepend-inner-icon="md-user"
                  :error-messages="nameErrors"
                  :counter="10"
                  label="USERNAME"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="frmlog.password"
                  outlined
                  dense
                  label="PASSWORD"
                  :error-messages="pwdErrors"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-btn class="mr-4 primary" style="width:100%;"> Sign In </v-btn>
              </form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
import bgimage from '@/assets/3844647.svg'
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
};
</script>
