import Vue from 'vue'
import Router from 'vue-router'
import AllRequests from '@/components/AllRequests'
import Admin from '@/components/Admin'
import Teacher from '@/components/Teacher'
import Child from '@/components/Child'
import Parent from '@/components/Parent'
import Home from '@/components/Home'
import Login from '@/components/Login'

import Dashboard from '@/components/dashboard/admin/Dashboard'
import AdminHome from '@/components/dashboard/admin/AdminHome'
import AdminAddStudent from '@/components/dashboard/admin/AddStudent'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ar',
      name: 'AllRequests',
      component: AllRequests
    },
    {
      path: '/adminDashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/adminHome',
          name: 'AdminHome',
          component: AdminHome
        },
        {
          path: '/adminAddStudent',
          name: 'AdminAddStudent',
          component: AdminAddStudent
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/child',
      name: 'Child',
      component: Child
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
