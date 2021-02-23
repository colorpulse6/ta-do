<template>
  <div id="nav">
    <router-link to="/">Today</router-link> |
    <router-link to="/date">Date</router-link> |
    <router-link to="/timeline">Timeline</router-link> |
    <router-link to="/history"
      ><img
        v-if="checkIfHistory"
        class="nav-history-icon"
        src="@/assets/history-icon-active.png"
      />
      <img v-else class="nav-history-icon" src="@/assets/history-icon.png" />
    </router-link>
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #3a86ff;
}

.nav-history-icon {
  width: 25px;
  position: relative;
  top: 5px;
}
hr {
  width: 95%;
}
</style>
