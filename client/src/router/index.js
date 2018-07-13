import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Admin from '@/components/Admin'
import Teacher from '@/components/Teacher'
import Student from '@/components/Student'
import Parent from '@/components/Parent'
import AdminTimeSlots from '@/components/Parent'
import AdminAddStudent from '@/components/Parent'
import AdminAddTeacher from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children:[
        { path: 'addStudent', component: AdminAddStudent },
        {path:'addTeacher',component:AdminAddTeacher},
        { path: 'addTimeslot', component: AdminTimeSlots},

      ]
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
