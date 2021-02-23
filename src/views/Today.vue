<template>
  <div class="today">
    <div>
      <app-job-category :key="index" v-for="(category, index) in 5">
      </app-job-category>
    </div>
  </div>
</template>

<script lang="ts">
import JobCategory from '../components/JobCategory.vue';
export default {
  components: { 'app-job-category': JobCategory }
};
</script>
