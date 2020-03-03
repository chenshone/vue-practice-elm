import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Me = () => import('views/me/Me')
const Order = () => import('views/order/Order')
const Search = () => import('views/search/Search')
const City = () => import('views/city/City')
const Download = () => import('views/download/Download')
const Service = () => import('views/service/Service')
const VIPCard = () => import('views/vipcard/VIPCard')
const Login = () => import('views/login/Login')

const routes = [
  {
    path: '',
    redirect: '/me'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/download',
    component: Download
  },
  {
    path: '/service',
    component: Service
  },
  {
    path: '/vipcard',
    component: VIPCard
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
