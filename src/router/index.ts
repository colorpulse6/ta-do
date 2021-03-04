import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Today from '../views/Today.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Landing from '../views/Landing';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/today',
    name: 'Today',
    component: Today
  },
  {
    path: '/date',
    name: 'Date',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */

        '../views/Date.vue'
      )
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () =>
      import(/* webpackChunkName: "timeline" */ '../views/Timeline.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () =>
      import(/* webpackChunkName: "history" */ '../views/History.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
