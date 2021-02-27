<template>
  <div id="nav">
    <div class="nav-container">
      <router-link to="/">Today </router-link>
      <router-link to="/date">Date</router-link>
      <router-link to="/timeline">Timeline</router-link>
      <router-link class="nav-history-icon" to="/history"
        ><img v-if="checkIfHistory" src="@/assets/history-icon-active.png" />
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

.nav-container a {
  /* font-weight: bold; */
  color: #2c3e50;
  font-size: 36px;
  padding: 0px 30px 0 30px;
  display: inline-block;
  text-decoration: none;
}

.nav-container a::after {
  content: '';
  display: block;
  width: 0;
  height: 3px;
  background: #3a86ff;
  transition: width 0.3s;
}

.nav-container a.router-link-exact-active:not(.nav-history-icon)::after {
  color: #3a86ff;
  width: 100%;
}

.nav-container a.router-link-exact-active {
  color: #3a86ff;
}

.nav-history-icon * {
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
