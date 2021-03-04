<template>
  <v-app>
    <div id="app">
      <div v-if="isLoggedIn">
        <app-navbar></app-navbar>

        <app-sidebar></app-sidebar>
      </div>
      <div v-else>
        <app-landing></app-landing>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
interface Data {
  isLoggedIn: boolean;
}
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.state.isLoggedIn;
    }
  }
};
</script>
<style>
body {
  background-color: #ffefc2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  font-size: 36px;
}
</style>
