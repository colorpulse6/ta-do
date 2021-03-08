import Vue from 'vue';
import Vuex from 'vuex';
import apolloClient from '../../graphql/index';
import { LOGIN_USER, ADD_USER, LOGGED_IN_USER } from '../../graphql/functions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    token: null,
    user: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGIN_USER(state, user) {
      state.isLoggedIn = true;
      state.user = { ...user };
    },
    LOGOUT_USER(state) {
      state.isLoggedIn = false;
      state.token = null && localStorage.removeItem('apollo-token');
    }
  },
  actions: {
    async register({ commit, dispatch }, authDetails) {
      await apolloClient
        .mutate({
          mutation: ADD_USER,
          variables: { ...authDetails }
        })
        .then((res: any) => {
          console.log(res);
          const token = res.data.signup.token;
          localStorage.setItem('apollo-token', token);
          dispatch('setUser');

          commit('SET_TOKEN', token);
          commit('LOGIN_USER', res.data.signup.user);
        })

        .catch((e: any) => {
          console.log(e);
        });
    },
    async login({ commit, dispatch }, authDetails) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: LOGIN_USER,
          variables: { ...authDetails }
        });
        const token = JSON.stringify(data.login.token);
        localStorage.setItem('apollo-token', token);

        commit('SET_TOKEN', token);
        dispatch('setUser');
      } catch (e) {
        console.log(e);
      }
    },
    async setUser({ commit }) {
      console.log('In Set User');
      await apolloClient
        .query({ query: LOGGED_IN_USER })
        .then((res: any) => {
          commit('LOGIN_USER', res.me);
        })
        .catch((error: any) => {
          console.log('Get User Error:  ' + error);
        });
    },
    async logOut({ commit, dispatch }) {
      commit('LOGOUT_USER');
    }
  },
  modules: {},
  getters: {
    isAuthenticated: state => !!state.token,
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user
  }
});
