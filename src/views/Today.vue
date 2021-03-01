<template>
  <div class="today">
    <header class="header">
      {{ dateToday() }}
    </header>

    <div>
      <app-category :categories="categories"> </app-category>
    </div>

    <form @submit.prevent="addCategory" v-on-clickaway="clickAway">
      <div class="add-category">
        <button class="noBackground" type="submit">
          <img
            class="category-images new-category"
            src="@/assets/plus-sign-green.png"
            alt=""
            @click="setShowInput"
          />
        </button>
        <transition name="grow">
          <div v-if="showInput" class="input-div">
            <input
              type="text"
              id="new-category-input"
              name="new-category"
              autocomplete="off"
              v-model="label"
              class="category-input"
            />
            <verte
              picker="wheel"
              value="#7817fc"
              v-model="categoryColor"
              :style="{ width: '15px', cursor: 'pointer' }"
            ></verte>
          </div>
        </transition>
        <transition name="fade">
          <label class="category-label" v-show="!showInput">New Category</label>
        </transition>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Category from '../components/Category.vue';
import moment from 'moment';
const clickaway = require('vue-clickaway').mixin;
import verte from 'verte';
import 'verte/dist/verte.css';

interface Data {
  label: string;
  categories: Array<Category>;
  showInput: boolean;
  showChooseColor: boolean;
  categoryColor: string;
}

interface Category {
  name: string;
  id: number;
  color: string;
}
let categoryId = 1;
export default {
  mixins: [clickaway],

  data(): Data {
    return {
      label: '',
      categories: [],
      showInput: false,
      showChooseColor: false,
      categoryColor: ''
    };
  },
  methods: {
    dateToday() {
      return moment().format('dddd, ll');
    },
    setShowInput() {
      this.showInput = !this.showInput;
    },
    addCategory() {
      console.log(this.label);
      categoryId++;
      if (this.label != '') {
        this.categories.push({
          name: this.label,
          id: categoryId,
          color: this.categoryColor
        });
        this.label = '';
        this.showInput = false;
      }
    },
    clickAway() {
      console.log('clicked away');
      this.showInput = false;

      this.addCategory();
    }
  },
  components: { 'app-category': Category, verte }
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
