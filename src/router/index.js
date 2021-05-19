import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login"
import Home from "@/views/Home"
import WaitForDeliver from "@/views/orders/WaitForDeliver"
import WaitForReceive from "@/views/orders/WaitForReceive"
import CompletedOrders from "@/views/orders/CompletedOrders"
import BookList from "@/views/bookList/BookList"
import Advice from "@/views/advice/Advice"

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/waitForDeliver',
        name: 'waitForDeliver',
        component: WaitForDeliver
      },
      {
        path: '/waitForReceive',
        name: 'waitForReceive',
        component: WaitForReceive
      },
      {
        path: '/completedOrders',
        name: 'completedOrders',
        component: CompletedOrders
      },
      {
        path: '/bookList',
        name: 'bookList',
        component: BookList
      },
      {
        path: '/advice',
        name: 'advice',
        component: Advice
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
