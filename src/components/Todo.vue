<template>
  <div>
    <p
      class="todo"
      v-for="(todo, index) in todos"
      :key="index"
      @click="completeTodo(index)"
      :class="{ 'strike-through': todo.complete === true }"
    >
      {{ todo.title }}
    </p>

    <form v-on-clickaway="clickAway" @submit.prevent="addTodo" ref="todoInput">
      <button class="noBackground" type="submit">
        <div @click="!showInput ? (showInput = true) : (showInput = false)">
          <img
            class="category-images new-todo"
            src="@/assets/plus-sign-green.png"
            alt=""
          />

          <transition name="fade">
            <label class="todo-label" v-show="!showInput">New Todo</label>
          </transition>
        </div>
      </button>

      <transition name="grow">
        <input
          v-show="showInput"
          type="text"
          id="new-todo-input"
          name="new-todo"
          autocomplete="off"
          v-model="label"
          class="todo-input"
        />
      </transition>
    </form>
  </div>
</template>

<script lang="ts">
interface Data {
  showInput: boolean;
  todoInput: string;
  todos: Array<Todo>;
  label: string;
  strikeThrough: string;
}

interface Todo {
  title: string;
  category: string;
  complete: boolean;
}
const clickaway = require('vue-clickaway').mixin;

export default {
  mixins: [clickaway],

  data(): Data {
    return {
      showInput: false,
      todoInput: '',
      todos: [],
      label: '',
      strikeThrough: ''
    };
  },
  methods: {
    addTodo() {
      console.log('Label value: ', this.label);
      if (this.label !== '') {
        this.todos.push({
          title: this.label,
          category: 'category',
          complete: false
        });
        this.label = '';
        this.showInput = false;
      }
    },
    completeTodo(index: number) {
      this.todos[index].complete = !this.todos[index].complete;
      console.log(this.todos[index].complete);
    },

    clickAway() {
      console.log('clicked away');
      this.showInput = false;
      this.addTodo();
    }
  }
};
</script>

<style>
.todo-input {
  font-size: 14px;
}
.new-todo {
  width: 10px;
  margin-left: 50px;
}

.todo-label {
  position: absolute;
  font-size: 14px;
  cursor: pointer;
  margin-top: -5px;
  color: #2c3e50;
  padding: 5px;
}

.todo-label:hover {
  border: 2px solid purple;
  margin: -7px;
  margin-left: 1px;
}

.todo {
  margin-left: 50px;
  cursor: pointer;
  font-size: 18px;
}

.strike-through {
  text-decoration: line-through;
}
</style>
