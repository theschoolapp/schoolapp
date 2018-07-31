import Vue from 'vue'
import Router from 'vue-router'
//Test Component
import Admin from '@/components/Admin'
//Main Pages
import Home from '@/components/Home'
import Login from '@/components/Login'
//Admin Dashboard
import Dashboard from '@/components/dashboard/admin/Dashboard'
import AdminHome from '@/components/dashboard/admin/AdminHome'
import AdminAddStudent from '@/components/dashboard/admin/AdminAddStudent'
import AdminStudentList from '@/components/dashboard/admin/AdminStudentList'
import AdminAddAnnouncement from '@/components/dashboard/admin/AdminAddAnnouncement'
import AdminAddClass from '@/components/dashboard/admin/AdminAddClass'
import AdminAddSection from '@/components/dashboard/admin/AdminAddSection'
import AdminAddTeacher from '@/components/dashboard/admin/AdminAddTeacher'
import AdminClassTimeTable from '@/components/dashboard/admin/AdminClassTimeTable'
import AdminMessages from '@/components/dashboard/admin/AdminMessages'
import AdminTeacherList from '@/components/dashboard/admin/AdminTeacherList'
import AdminCreateTimeTable from '@/components/dashboard/admin/AdminCreateTimeTable'
import AdminAddSubject from '@/components/dashboard/admin/AdminAddSubject'
import AdminViewSubjects from '@/components/dashboard/admin/AdminViewSubjects'
import AdminViewClasses from '@/components/dashboard/admin/AdminViewClasses'
import AdminViewSections from '@/components/dashboard/admin/AdminViewSections'
import AdminAttendanceReport from '@/components/dashboard/admin/AdminAttendanceReport'
import AdminMarksReport from '@/components/dashboard/admin/AdminMarksReport'
//Parent Dashboard
import ParentDashboard from '@/components/dashboard/parent/ParentDashboard'
import ParentHome from '@/components/dashboard/parent/ParentHome'



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
        },
        {
          path: '/adminAllStudents',
          name: 'AdminAllStudents',
          component: AdminStudentList
        },
        {
          path: '/adminAddAnnouncement',
          name: 'AdminAddAnnouncement',
          component: AdminAddAnnouncement
        },
        {
          path: '/adminAddClass',
          name: 'AdminAddClass',
          component: AdminAddClass
        },
        {
          path: '/adminAddSection',
          name: 'AdminAddSection',
          component: AdminAddSection
        },
        {
          path: '/adminAddTeacher',
          name: 'AdminAddTeacher',
          component: AdminAddTeacher
        },
        {
          path: '/adminCreateTimeTable',
          name: 'AdminCreateTimeTable',
          component: AdminCreateTimeTable
        },
        {
          path: '/adminMessages',
          name: 'AdminMessages',
          component: AdminMessages
        },
        {
          path: '/adminTeacherList',
          name: 'AdminTeacherList',
          component: AdminTeacherList
        },
        {
          path: '/adminClassTimeTable',
          name: 'AdminClassTimeTable',
          component: AdminClassTimeTable
        },
        {
          path: '/adminAddSubject',
          name: 'AdminAddSubject',
          component: AdminAddSubject
        },
        {
          path: '/adminViewClasses',
          name: 'AdminViewClasses',
          component: AdminViewClasses
        },
        {
          path: '/adminViewSections',
          name: 'AdminViewSections',
          component: AdminViewSections
        },
        {
          path: '/adminViewSubjects',
          name: 'AdminViewSubjects',
          component: AdminViewSubjects
        },
        {
          path: '/adminAttendanceReport',
          name: 'AdminAttendanceReport',
          component: AdminAttendanceReport
        },
        {
          path: '/adminMarksReport',
          name: 'AdminMarksReport',
          component: AdminMarksReport
        }
      ]
    },
    {
      path: '/parentDashboard',
      name: 'ParentAdmin',
      component: ParentDashboard,
      children: [
        {
          path: '/parentHome',
          name: 'ParentHome',
          component: ParentHome
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
    
  ]
})
