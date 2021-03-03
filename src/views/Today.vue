<template>
  <div class="today">
    <header class="header">
      {{ dateToday() }}
    </header>
    <app-category> </app-category>
    <app-add-category></app-add-category>
  </div>
</template>

<script lang="ts">
import AddCategory from '../components/AddCategory';
import Category from '../components/Category';

import moment from 'moment';

export default {
  components: { 'app-add-category': AddCategory, 'app-category': Category },
  methods: {
    dateToday() {
      return moment().format('dddd, ll');
    }
  }
};
</script>

<style>
.today {
  margin: 20px;
}
.add-category {
  display: flex;
  margin: 10px 20px;
}

.input-div {
  display: flex;
}

.category-label {
  position: absolute;
  margin-left: 30px;
  font-size: 24px;
}

.category-input {
  width: 100%;
  font-size: 24px;
}

/* Animations */
.grow-enter-active {
  animation: 0.5s in-out forwards;
}

.grow-leave-active {
  animation: 0.5s out-in forwards;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

@keyframes in-out {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  45% {
    transform: scaleX(1);
    transform-origin: left;
  }
}

@keyframes out-in {
  100% {
    transform: scaleX(0);
    transform-origin: left;
  }
  0% {
    transform: scaleX(1);
    transform-origin: left;
  }
}

@keyframes in-down {
  0% {
    transform: scaleY(0);
    transform-origin: left;
  }
  100% {
    transform: scaleY(1);
    transform-origin: left;
  }
}

input {
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin-top: -1px;
  margin-bottom: -1px;
}
</style>
