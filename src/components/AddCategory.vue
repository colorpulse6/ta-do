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
            v-model="title"
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
import verte from 'verte';
import 'verte/dist/verte.css';
import { GET_CATEGORIES, ADD_CATEGORY } from '../../graphql/mutations';

const clickaway = require('vue-clickaway').mixin;
interface Data {
  title: string;
  showInput: boolean;
  showChooseColor: boolean;
  color: string;
}

export default {
  mixins: [clickaway],
  components: { verte },
  props: ['userCategories'],

  data(): Data {
    return {
      title: '',
      color: '#7817fc',
      showInput: false,
      showChooseColor: false
    };
  },
  methods: {
    setShowInput() {
      this.showInput = !this.showInput;
    },
    async addCategory() {
      if (this.title != '')
        await this.$apollo
          .mutate({
            mutation: ADD_CATEGORY,

            variables: {
              title: this.title,
              color: this.color,
              userId: this.$store.state.user.id
            },

            refetchQueries: [
              {
                query: GET_CATEGORIES
              }
            ]
          })
          .then(response => {
            this.userCategories.push(response.data.addCategory); //adding it to our previous query
            // location.reload();
            this.title = '';
            this.showInput = false;
          });
    },
    clickAway() {
      console.log('clicked away');
      this.showInput = false;

      this.addCategory();
    }
  }
};
</script>
