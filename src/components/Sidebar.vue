<template>
  <div class="sidebar">
    <p>date</p>
    <button @click="handleLogout">
      <img src="@/assets/logout-icon.png" class="logout-image" />
    </button>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['logOut']),
    handleLogout: function() {
      this.logOut().then(() => {
        this.$router.push('/');
      });
    }
  }
};
</script>

<style>
.sidebar {
  height: 100%;
  width: 20%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 40px;
  /* background-color: lightblue; */
  border-right: 1px solid #2c3e50;
}
.logout-image {
  width: 40px;
}
</style>
