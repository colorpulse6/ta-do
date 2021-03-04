<template>
  <div>
    <div v-for="(category, index) in categories" :key="index">
      <div class="category">
        <div
          class="category-color"
          :style="{ 'background-color': category.color }"
        ></div>
        <p class="category-name">{{ category.name }}</p>
        <img
          @click="setShowCategory(index)"
          class="down-arrow"
          src="@/assets/down-arrow.png"
        />
      </div>

      <div v-if="activeCategory.includes(index)">
        <app-todo :categoryName="category.name"></app-todo>
      </div>
    </div>
    <app-add-category :categories="categories"></app-add-category>
  </div>
</template>

<script lang="ts">
interface Data {
  activeCategory: Array<number>;
  categories: Array<Category>;
}
interface Category {
  name: string;
  id: number;
  color: string;
  date: string;
}

import Todo from './Todo.vue';
import AddCategory from './AddCategory';
import { getCategories } from '../../graphql/functions';

export default {
  components: { 'app-todo': Todo, 'app-add-category': AddCategory },

  data(): Data {
    return {
      activeCategory: [],
      categories: []
    };
  },
  apollo: {
    categories: {
      query: getCategories
    }
  },
  methods: {
    setShowCategory: function(index: number) {
      if (this.activeCategory.includes(index)) {
        this.activeCategory.splice(this.activeCategory.indexOf(index), 1);
      } else {
        this.activeCategory.push(index);
      }
    }
  }
};
</script>

<style>
.category {
  display: flex;
  align-items: center;
  margin: 20px 20px;
}

.category-name {
  font-size: 24px;
  margin: 0;
  font-weight: bold;
}
.down-arrow {
  width: 8px;
  margin-top: -5px;
  margin-left: 4px;
  cursor: pointer;
}
.category-color {
  width: 8px;
  height: 18px;
  margin-top: -1px;
  margin-right: 5px;
}
.category-images {
  align-self: center;
  padding-left: 5px;
  cursor: pointer;
}
.new-category {
  width: 15px;
}

.noBackground {
  background: none;
  border: none;
  outline: none;
}
</style>
