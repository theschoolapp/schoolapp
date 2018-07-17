import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Admin from '@/components/Admin'
import Teacher from '@/components/Teacher'
import Student from '@/components/Student'
import Signin from '@/components/auth/signin'
import Parent from '@/components/Parent'
import AdminTimeSlots from '@/components/AdminTimeSlots'
import AdminAddStudent from '@/components/AdminAddStudent'
import AdminAddTeacher from '@/components/AdminaddTeacher'
import AdminAddParent from '@/components/AdminAddParent'
import AdminAddExam from '@/components/AdminAddExam'
import StudentAddAssignmemt from '@/components/StudentAddAssignment'
import TeacherAddAssignment from '@/components/TeacherAddAssignments'
import TeacherAddAttendence from '@/components/TeacherAddAttendence'
import TeacherAddMarks from '@/components/TeacherAddMArks'
import { isLoggedIn, getUserProfile } from '@/modules/authentication' 


Vue.use(Router)

function checkAuthentication (from, to, next) {
  if (isLoggedIn()) return next() 
  next('/signin')
}

function checkIfIsAdmin (from, to, next) {
  const user = getUserProfile()
  if (isLoggedIn() && user.role === 'admin') return next()
  next('/signin')
}

function checkIfIsTeacher(from, to, next) {
  const user = getUserProfile()
  if (isLoggedIn() && user.role === 'teacher') return next()
  next('/signin')
}
function isStudent(from, to, next) {
  const user = getUserProfile();
  if (isLoggedIn() && user.role === "student") return next();
  next("/signin");
}
function isParent(from, to, next) {
  const user = getUserProfile();
  if (isLoggedIn() && user.role === "parent") return next();
  next("/signin");
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      
    },
    {
      path: '/admin',
      name: 'Admin',
      //beforeEnter:checkIfIsAdmin,
      component: Admin,
    },
      
        { 
          path: '/addStudent',
          beforeEnter: checkIfIsAdmin,
           component: AdminAddStudent
           },
        {
          path:'/addParent',
          component:AdminAddParent,
          beforeEnter: checkIfIsAdmin,
        },
        {
          path:'/addExam',
          component:AdminAddExam,
          beforeEnter: checkIfIsAdmin,
        },
      
        { 
          path: '/addTimeslot',
           component: AdminTimeSlots,
            beforeEnter: checkIfIsAdmin,
          }
          ,
        {
          path:'/addTeacher',
          name:'add teacher' ,
          beforeEnter: checkIfIsAdmin,
          component:AdminAddTeacher
        },
       {
      path: '/teacher',
      beforeEnter: checkIfIsTeacher,
      name: 'Teacher',
      component: Teacher
      },
       {
         path:'/teacheraddAssignment',
         beforeEnter: checkIfIsTeacher,
         component:TeacherAddAssignment
        },
        {
          path:'/addattendence' , 
          //beforeEnter: checkIfIsTeacher,
          component:TeacherAddAttendence
        },
        {
          path:'/addMarks',
          beforeEnter: checkIfIsTeacher,
          component:TeacherAddMarks
        },
    {
      path: '/student',
      name: 'Student',
      beforeEnter: isStudent,
      component: Student
    },

    {
      path:'/studentAddAssigment',
      name:'StudentAddAssignment',
      beforeEnter:isStudent,
      component:StudentAddAssignmemt
    
    },

    {
      path: '/parent',
      name: 'Parent',
      beforeEnter: isParent,
      component: Parent
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    }
  ]
})
