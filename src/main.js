import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import Vue from 'vue'
import App from './App.vue'
import Login from './views/Login'
import Register from './views/Register'
import DashBoard from './views/Dashboard'
import Tools from './views/Tools'
import Customers from './views/Customers'
import addCustomer from './views/addCustomer'
import SingleCustomer from './views/SingleCustomer'
import addCutomerPrestation from './views/addCustomerPrestation'
import PrestationsType from './views/PrestationsType'

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
