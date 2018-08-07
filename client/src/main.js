// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VModal from 'vue-js-modal';
import {ClientTable, Event} from 'vue-tables-2';




Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VModal);
Vue.use(ClientTable);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
