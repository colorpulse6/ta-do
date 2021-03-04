<template>
  <div>
    <form v-on-clickaway="clickAway" @submit.prevent="addTodo">
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
          v-model="title"
          class="todo-input"
        />
      </transition>
    </form>
  </div>
</template>

<script lang="ts">
interface Data {
  showInput: boolean;
  todo: string;
  title: string;
  strikeThrough: string;
}

import gql from 'graphql-tag';
const clickaway = require('vue-clickaway').mixin;

export default {
  props: ['categoryName', 'todos'],
  mixins: [clickaway],

  data(): Data {
    return {
      showInput: false,
      todo: '',
      title: '',
      strikeThrough: ''
    };
  },

  methods: {
    addTodo() {
      if (this.title !== '') {
        this.$apollo
          .mutate({
            mutation: gql`
              mutation addTodo(
                $title: String!
                $category: String
                $complete: Boolean
              ) {
                addTodo(
                  title: $title
                  category: $category
                  complete: $complete
                ) {
                  title
                  category
                  complete
                }
              }
            `,
            variables: {
              title: this.title,
              category: this.categoryName,
              complete: false
            }
          })
          .then(response => {
            this.todos.push(response.data.addTodo); //adding it to our previous query
            console.log(response.data);
          });
      }
    },

    completeTodo(index: number) {
      this.todos[index].complete = !this.todos[index].complete;
      console.log(this.todos[index].complete);
      console.log(this.todos);
    },

    clickAway() {
      console.log('clicked away');
      this.showInput = false;
      this.addTodo();
    }
  }
};
</script>
