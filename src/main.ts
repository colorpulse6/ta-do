import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import apolloClient from '../graphql/index';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
Vue.config.productionTip = false;

Vue.component('app-sidebar', Sidebar);
Vue.component('app-navbar', Navbar);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
