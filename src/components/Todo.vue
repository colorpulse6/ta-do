<template>
  <div>
    <p class="todo" v-for="todo in todos" :key="todo">{{ todo.title }}</p>

    <form v-on-clickaway="clickAway" @submit.prevent="onSubmit" ref="todoInput">
      <button class="noBackground" type="submit">
        <img
          class="category-images new-todo"
          src="@/assets/plus-sign-green.png"
          alt=""
          @click="!showInput ? (showInput = true) : (showInput = false)"
        />
      </button>
      <transition name="grow">
        <input
          v-show="showInput"
          type="text"
          id="new-todo-input"
          name="new-todo"
          autocomplete="off"
          v-model="label"
        />
      </transition>
      <transition name="fade">
        <label class="todo-label" v-show="!showInput">New Todo</label>
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
}

interface Todo {
  title: string;
  category: string;
  complete: boolean;
}
export default {
  data(): Data {
    return {
      showInput: false,
      todoInput: '',
      todos: [],
      label: ''
    };
  },
  methods: {
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
    }
  }
};
</script>

<style></style>
