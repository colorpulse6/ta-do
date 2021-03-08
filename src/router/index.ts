import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Today from '../views/Today.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Landing from '../views/Landing';
import store from '../store';

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
    component: Today,
    meta: { requiresAuth: true }
  },
  {
    path: '/date',
    name: 'Date',
    component: () => import('../views/Date.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/Timeline.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue'),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Check if the user is logged in
router.beforeEach((to, from, next) => {
  const isUserLoggedIn = store.getters.isAuthenticated;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      store.dispatch('logOut');
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
