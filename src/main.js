import Vue from 'vue'
import App from './App.vue'
import Login from './views/Login'
import Register from './views/Register'
import DashBoard from './views/Dashboard'

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(DashBoard)
}).$mount('#app')
