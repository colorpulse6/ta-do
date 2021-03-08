<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="d-flex align-center flex-column mb-6">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="authDetails.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="authDetails.password"
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
import { LOGIN_USER } from '../../graphql/functions';
import { mapActions } from 'vuex';

export default {
  vuetify: new Vuetify(),
  data: () => ({
    closeDialog: false,
    valid: false,
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 5 || 'Password must be less than 5 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    authDetails: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(['login']),
    handleLogin: function() {
      this.login(this.authDetails).then(() => {
        this.$router.push('/today');
        this.$emit('closeSignup', this.closeDialog);
      });
    }
  }
};
</script>

<style scoped></style>
