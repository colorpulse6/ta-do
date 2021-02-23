import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

Vue.config.productionTip = false;

Vue.component('app-sidebar', Sidebar);
Vue.component('app-navbar', Navbar);

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app');
