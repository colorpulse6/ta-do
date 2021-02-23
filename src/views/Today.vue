<template>
  <div class="today">
    <header class="header">
      {{ dateToday() }}
    </header>
    <div>
      <app-job-category :key="index" v-for="(category, index) in 5">
      </app-job-category>
    </div>
  </div>
</template>

<script lang="ts">
import JobCategory from '../components/JobCategory.vue';
import moment from 'moment';

export default {
  methods: {
    dateToday: function() {
      return moment().format('dddd, ll');
    }
  },
  components: { 'app-job-category': JobCategory }
};
</script>
