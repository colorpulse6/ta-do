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
          @click="setShowCategory(category.id)"
          class="down-arrow"
          src="@/assets/down-arrow.png"
        />
      </div>

      <div v-if="activeCategory.includes(category.id)">
        <app-todo></app-todo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Data {
  activeCategory: Array<number>;
}

import Todo from './Todo.vue';
export default {
  props: ['categories'],
  components: { 'app-todo': Todo },

  data(): Data {
    return {
      activeCategory: []
    };
  },
  methods: {
    setShowCategory: function(categoryId: number) {
      if (this.activeCategory.includes(categoryId)) {
        this.activeCategory.splice(this.activeCategory.indexOf(categoryId), 1);
      } else {
        this.activeCategory.push(categoryId);
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
