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
  showCategory: boolean;
  showInput: boolean;
  todoInput: string;
  todos: Array<Todo>;
  label: string;
  activeCategory: Array<number>;
}

interface Todo {
  title: string;
  category: string;
  complete: boolean;
}

const clickaway = require('vue-clickaway').mixin;
import Todo from './Todo';
export default {
  props: ['categories'],
  mixins: [clickaway],
  components: { 'app-todo': Todo },
  data(): Data {
    return {
      showCategory: false,
      showInput: false,
      todoInput: '',
      todos: [],
      label: '',
      activeCategory: []
    };
  },
  methods: {
    setShowCategory: function(categoryId: number) {
      this.showCategory = !this.showCategory;
      if (this.activeCategory.includes(categoryId)) {
        this.activeCategory.splice(this.activeCategory.indexOf(categoryId), 1);
      } else {
        this.activeCategory.push(categoryId);
      }
      if (this.showCategory && this.showInput) {
        this.showInput = false;
      }
      console.log(this.activeCategory);
    },

    onSubmit() {
      console.log('Label value: ', this.label);
      if (this.label !== '') {
        this.todos.push({
          title: this.label,
          category: 'category',
          complete: false
        });
        this.label = '';
      }
    },
    clickAway() {
      console.log('clicked away');
      this.showInput = false;
      this.label = '';
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
  font-size: 24;
  margin: 0;
  font-weight: bold;
}
.down-arrow {
  width: 8px;
  margin-top: -5px;
  margin-left: 4px;
}
.category-color {
  width: 10px;
  height: 15px;
  margin-top: -1px;
  margin-right: 2px;
}
.category-images {
  align-self: center;
  padding-left: 5px;
  cursor: pointer;
}
.new-category {
  width: 15px;
}

.new-todo {
  width: 10px;
  margin-left: 50px;
}

.todo-label {
  position: absolute;
}

.todo {
  margin-left: 50px;
}

.noBackground {
  background: none;
  border: none;
  outline: none;
}

input {
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}
</style>
