import Vue from 'vue';
import Vuex from 'vuex';
import { onLogout, apolloClient } from '../../graphql/index';
import { LOGIN_USER, ADD_USER } from '../../graphql/mutations';
import { LOGGED_IN_USER } from '../../graphql/queries';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    token: null,
    user: {}
  },
  getters: {
    isAuthenticated: state => !!state.token,
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user
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
      state.token = null;
      localStorage.removeItem('apollo-token');
    }
  },
  actions: {
    async register({ commit, dispatch }, authDetails) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: ADD_USER,
          variables: { ...authDetails }
        });
        const token = data.signup.token;
        localStorage.setItem('apollo-token', token);
        console.log(data);

        commit('SET_TOKEN', token);
        // onLogin(apolloClient, user.token)
        dispatch('setUser');
        // commit('LOGIN_USER', data.signup.user);
      } catch (e) {
        console.log(e);
      }
    },
    async login({ commit, dispatch }, authDetails) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: LOGIN_USER,
          variables: { ...authDetails }
        });
        const token = data.login.token;
        commit('SET_TOKEN', token);
        localStorage.setItem('apollo-token', token);
        dispatch('setUser');
      } catch (e) {
        console.log(e);
      }
    },
    //STUCK HERE
    async setUser({ commit }) {
      const { data } = await apolloClient.query({
        query: LOGGED_IN_USER
      });
      console.log(data);

      commit('LOGIN_USER', data.me);
    },
    async logOut({ commit, dispatch }) {
      commit('LOGOUT_USER');
      onLogout(apolloClient);
    }
  },
  modules: {}
});
