<template>
  <div>
    <h1>TaDo!</h1>
    <v-dialog v-model="signupDialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Signup
        </v-btn>
      </template>

      <app-signup
        @closeSignup="signupDialog = $event"
        class="headline grey lighten-2"
      ></app-signup>
    </v-dialog>

    <v-dialog v-model="loginDialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Login
        </v-btn>
      </template>

      <app-login
        @closeLogin="loginDialog = $event"
        class="headline grey lighten-2"
      ></app-login>
    </v-dialog>
  </div>
</template>
<script>
import Vuetify from 'vuetify';
import Signup from '../views/Signup';
import Login from '../views/Login';
// import gql from 'graphql-tag';

export default {
  components: { 'app-signup': Signup, 'app-login': Login },
  vuetify: new Vuetify(),
  data: () => ({
    signupDialog: false,
    loginDialog: false
  })
  // apollo: {
  //   // Simple query that will update the 'hello' vue property
  //   hello: gql`
  //     gql`
  // query {
  //   me {
  //     id
  //     name
  //     email
  //   }
  // }
  // `
  // }
};
</script>
<style scoped></style>
