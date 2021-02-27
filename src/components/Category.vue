<template>
  <div>
    <div
      class="category-page"
      v-for="(category, index) in categories"
      :key="index"
    >
      <div class="category">
        <p class="category-name">{{ category.name }}</p>
        <img
          @click="setShowCategory(category.id)"
          class="category-images"
          src="@/assets/down-arrow.png"
        />
      </div>
      <div v-if="showCategory && category.id === activeCategory">
        <li v-for="todo in todos" :key="todo">{{ todo.title }}</li>

        <form v-on-clickaway="clickAway" @submit.prevent="onSubmit">
          <button class="noBackground" type="submit">
            <img
              class="category-images"
              src="@/assets/plus-sign-green.png"
              alt=""
              @click="!showInput ? (showInput = true) : null"
            />
          </button>
          <input
            v-if="showInput"
            type="text"
            id="new-todo-input"
            name="new-todo"
            autocomplete="off"
            v-model="label"
          />
          <label v-else>New Todo</label>
        </form>
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
  activeCategory: number | null;
}

interface Todo {
  title: string;
  category: string;
  complete: boolean;
}

const clickaway = require('vue-clickaway').mixin;

export default {
  props: ['categories'],
  mixins: [clickaway],
  // template: '<p v-on-clickaway="away">Click away</p>',
  data(): Data {
    return {
      showCategory: false,
      showInput: false,
      todoInput: '',
      todos: [],
      label: '',
      activeCategory: null
    };
  },
  methods: {
    setShowCategory: function(categoryId: number) {
      this.showCategory = !this.showCategory;
      this.activeCategory = categoryId;
      if (this.showCategory && this.showInput) {
        this.showInput = false;
      }
      console.log(this.showCategory, this.showInput);
    },

    onSubmit() {
      console.log('Label value: ', this.label);
      if (this.label !== '')
        this.todos.push({
          title: this.label,
          category: 'category',
          complete: false
        });
    },
    clickAway() {
      console.log('clicked away');
      this.showInput = false;
    }
  }
};
</script>

<style>
.category {
  display: flex;
}
.category-name {
  font-size: 24;
}
.category-images {
  width: 10px;
  align-self: center;
  padding-left: 5px;
  cursor: pointer;
}
.flex {
  display: flex;
}

.noBackground {
  background: none;
  border: none;
  outline: none;
}
</style>
