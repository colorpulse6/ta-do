<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="d-flex align-center flex-column mb-6">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="5"
            label="Password"
            required
          ></v-text-field>
        </v-col>
        <v-btn class="ma-2" outlined color="indigo" @click="handleLogin">
          Login
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Vuetify from 'vuetify';

export default {
  vuetify: new Vuetify(),
  data: () => ({
    closeDialog: false,
    valid: false,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 5 || 'Password must be less than 5 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    handleLogin() {
      this.$emit('closeLogin', this.closeDialog);
      this.$store.state.isLoggedIn = true;
      console.log(this.$store);
    }
  }
};
</script>

<style scoped></style>
