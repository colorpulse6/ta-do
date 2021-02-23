<template>
  <div id="nav">
    <div class="nav-container">
      <router-link to="/">Today </router-link>
      <router-link to="/date">Date</router-link>
      <router-link to="/timeline">Timeline</router-link>
      <router-link class="butts" to="/history"
        ><img
          v-if="checkIfHistory"
          class="nav-history-icon"
          src="@/assets/history-icon-active.png"
        />
        <img v-else class="nav-history-icon" src="@/assets/history-icon.png" />
      </router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    checkIfHistory() {
      return this.$route.path === '/history' ? true : false;
    }
  }
};
</script>

<style>
#nav {
  width: 80%;
  margin-left: 20%;
}
.nav-container {
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin: 0 45px 0 45px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 36px;
  text-decoration: none;
  padding: 30px 30px 0 30px;
}

#nav a.router-link-exact-active:not(.butts) {
  color: #3a86ff;
  border-bottom: 3px solid #3a86ff;
  margin-top: 3px;
}

.nav-history-icon {
  width: 45px;
}

hr {
  width: 95%;
  margin-top: -1px;
  background-color: #2c3e50;
  height: 1px;
  border: 0;
}
</style>
