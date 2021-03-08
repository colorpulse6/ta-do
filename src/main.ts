import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Landing from './views/Landing.vue';

import apolloClient from '../graphql/index';
import VueApollo from 'vue-apollo';
import vuetify from './plugins/vuetify';

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $query: {
      fetchPolicy: 'cache-and-network'
    }
  },
  errorHandler(error) {
    // eslint-disable-next-line no-console
    console.log(
      '%cError',
      'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
      error.message
    );
  }
});
Vue.config.productionTip = false;

Vue.component('app-sidebar', Sidebar);
Vue.component('app-navbar', Navbar);
Vue.component('app-landing', Landing);

new Vue({
  apolloProvider,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
