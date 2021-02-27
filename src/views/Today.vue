<template>
  <div class="today">
    <header class="header">
      {{ dateToday() }}
    </header>
    <div>
      <app-category :key="index" v-for="(category, index) in 5"> </app-category>
    </div>
  </div>
</template>

<script lang="ts">
import Category from '../components/Category.vue';
import moment from 'moment';

export default {
  methods: {
    dateToday: function() {
      return moment().format('dddd, ll');
    }
  },
  components: { 'app-category': Category }
};
</script>

<style>
.today {
  margin: 20px;
}
</style>
