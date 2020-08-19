// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import './plugins/axios'
import VueOnsen from 'vue-onsenui'
import store from './store'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueOnsen)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  router,
  components: { App }
})
