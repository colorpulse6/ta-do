<template>
  <div class="category-page">
    <div class="category">
      <p>Category</p>
      <img
        @click="setShowCategory"
        class="category-images"
        src="@/assets/down-arrow.png"
      />
    </div>
    <div v-if="showCategory">
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
</template>

<script lang="ts">
interface Data {
  showCategory: boolean;
  showInput: boolean;
  todoInput: string;
  todos: Array<Todo>;
  label: string;
}

interface Todo {
  title: string;
  category: string;
  complete: boolean;
}

const clickaway = require('vue-clickaway').mixin;

export default {
  mixins: [clickaway],
  // template: '<p v-on-clickaway="away">Click away</p>',
  data(): Data {
    return {
      showCategory: false,
      showInput: false,
      todoInput: '',
      todos: [],
      label: ''
    };
  },
  methods: {
    setShowCategory: function() {
      this.showCategory = !this.showCategory;
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
