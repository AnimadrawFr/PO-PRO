import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Tools from '../views/Tools'
import Customers from '../views/Customers'
import PrestationsType from '../views/PrestationsType'
import addCustomer from '../views/addCustomer'
import SingleCustomer from '../views/SingleCustomer'
import addCustomerPrestation from '../views/addCustomerPrestation'
import Login from '../views/Login'
import Register from '../views/Register'
import Gallery from '../views/Gallery'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'dashboard'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/tools',
    component: Tools,
    name: 'tools'
  },
  {
    path: '/inspiration',
    component: Gallery,
    name: 'inspiration'
  },
  {
    path: '/prestations',
    component: PrestationsType,
    name: 'prestations'
  },
  {
    path: '/customers',
    component: Customers,
    name: 'customers'
  },
  
  {
    path: '/addCustomer',
    component: addCustomer,
    name: 'addCustomer'
  },
  {
    path: '/singleCustomer',
    component: SingleCustomer,
    name: 'singleCustomer'
  },
  {
    path: '/addCustomerPrestation',
    component: addCustomerPrestation,
    name: 'addCustomerPrestation'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
