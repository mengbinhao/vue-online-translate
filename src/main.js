// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import App from './App'
//import './assets/css/bootstrap.min.css' /*引入公共样式*/

Vue.config.productionTip = false

Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
