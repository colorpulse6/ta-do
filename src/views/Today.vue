<template>
  <div class="today">
    <header class="header">
      {{ dateToday() }}
    </header>

    <div>
      <app-category :categories="categories"> </app-category>
    </div>
    <form @submit.prevent="addCategory">
      <button class="noBackground" type="submit">
        <img
          class="category-images"
          src="@/assets/plus-sign-green.png"
          alt=""
        />
      </button>
      <input
        type="text"
        id="new-todo-input"
        name="new-todo"
        autocomplete="off"
        v-model="label"
      />

      <label>Add Category</label>
    </form>
  </div>
</template>

<script lang="ts">
import Category from '../components/Category.vue';
import moment from 'moment';

interface Data {
  label: string;
  categories: Array<Category>;
}

interface Category {
  name: string;
  id: number;
}
let categoryId = 1;
export default {
  data(): Data {
    return { label: '', categories: [{ name: '', id: categoryId }] };
  },
  methods: {
    dateToday: function() {
      return moment().format('dddd, ll');
    },
    addCategory() {
      console.log(this.label);
      categoryId++;
      if (this.label != '') {
        this.categories.push({ name: this.label, id: categoryId });
      }
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
