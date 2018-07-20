import Vue from 'vue'
import Router from 'vue-router'
import AllRequests from '@/components/AllRequests'
import Admin from '@/components/Admin'
import Teacher from '@/components/Teacher'
import Child from '@/components/Child'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllRequests',
      component: AllRequests
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
