<template>
  <div>
    <div class="sidebar">
      <p>date</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {}
</script>

<style>
.sidebar {
  height: 100%;
  width: 20%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 40px;
  background-color: lightblue;
}
</style>
