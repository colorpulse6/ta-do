<template>
  <form @submit.prevent="addCategory" v-on-clickaway="clickAway">
    <div class="add-category">
      <button class="noBackground" v-if="showInput" type="submit">
        <img
          class="category-images new-category"
          src="@/assets/plus-sign-green.png"
          alt=""
        />
      </button>

      <img
        v-else
        class="category-images new-category"
        src="@/assets/plus-sign-green.png"
        alt=""
        @click="setShowInput"
      />

      <transition name="grow">
        <div v-if="showInput" class="input-div">
          <input
            type="text"
            id="new-category-input"
            name="new-category"
            autocomplete="off"
            v-model="name"
            class="category-input"
          />
          <verte
            picker="wheel"
            value="#7817fc"
            v-model="color"
            :style="{ width: '15px', cursor: 'pointer' }"
          ></verte>
        </div>
      </transition>

      <transition name="fade">
        <label class="category-label" v-show="!showInput">New Category</label>
      </transition>
    </div>
  </form>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import Category from '../components/Category.vue';
import verte from 'verte';
import 'verte/dist/verte.css';
const clickaway = require('vue-clickaway').mixin;
interface Data {
  name: string;
  categories: Array<Category>;

  showInput: boolean;
  showChooseColor: boolean;
  color: string;
}

interface Category {
  name: string;
  color: string;
}
// let categoryId = 1;
export default {
  mixins: [clickaway],
  components: { verte },

  data(): Data {
    return {
      name: '',
      color: '',
      categories: [],
      showInput: false,
      showChooseColor: false
    };
  },
  methods: {
    setShowInput() {
      this.showInput = !this.showInput;
    },
    addCategory() {
      console.log(this.name);
      this.$apollo
        .mutate({
          mutation: gql`
            mutation addCategory($name: String, $color: String) {
              addCategory(name: $name, color: $color) {
                name
                color
              }
            }
          `,
          variables: {
            name: this.name,
            color: this.color
          }
        })
        .then(response => {
          this.categories = response.data.addCategory; //adding it to our previous query
          location.reload();
        });
    },
    clickAway() {
      console.log('clicked away');
      this.showInput = false;

      //   this.addCategory();
    }
  }
};
</script>
