<template>
  <div>
    <div v-for="(todo, index) in todos" :key="index">
      <p
        v-if="todo.category === categoryName"
        class="todo"
        @click="completeTodo(index)"
        :class="{ 'strike-through': todo.complete === true }"
      >
        {{ todo.title }}
      </p>
    </div>
    <app-add-todo :categoryName="categoryName" :todos="todos"></app-add-todo>
  </div>
</template>

<script lang="ts">
interface Data {
  todos: Array<Todo>;
}

interface Todo {
  title: string;
  category: string;
  complete: boolean;
}
import gql from 'graphql-tag';
import AddTodo from './AddTodo';

export default {
  props: ['categoryName'],
  components: { 'app-add-todo': AddTodo },

  data(): Data {
    return {
      todos: []
    };
  },
  apollo: {
    todos: {
      query: gql`
        query {
          todos {
            title
            category
            complete
          }
        }
      `
    }
  },

  methods: {
    completeTodo(index: number) {
      this.todos[index].complete = !this.todos[index].complete;
      console.log(this.todos[index].complete);
      console.log(this.todos);
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
