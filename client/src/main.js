// The Vue build version to load with the `import` command

import "core-js/es6/promise";
import "core-js/es6/string";
import "core-js/es7/array";
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from "bootstrap-vue";
Vue.config.productionTip = false


Vue.use(BootstrapVue);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
