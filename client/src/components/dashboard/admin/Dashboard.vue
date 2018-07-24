<template>
  <div class="adminDash">
    <div class="row dashboard-top-nav">
      <div class="col-sm-3 logo">
        <h5><i class="fa fa-book"></i>Prototype</h5>
      </div>
      <div class="col-sm-4 top-search">
        <div class="search">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Search">
        </div>
      </div>
      <div class="col-sm-5 notification-area">
        <ul class="top-nav-list">
          <li class="notification dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="badge nav-badge">3</span>
            </a>
            <ul class="dropdown-menu notification-list">
              <li>              
                <div class="list-msg">
                  <div class="col-xs-2 icon clear-padding">
                    <i class="fa fa-trophy"></i>
                  </div>
                  <div class="col-sm-10 desc">
                    <h5><a href="#">Upcoming Sports Meet</a></h5>
                    <h6><i class="fa fa-clock-o"></i> 10 min ago</h6>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </li>
              <li>
                <div class="list-msg">
                  <div class="col-xs-2 icon clear-padding">
                    <i class="fa fa-paint-brush"></i>
                  </div>
                  <div class="col-sm-10 desc">
                    <h5><a href="#">Fine art workshop</a></h5>
                    <h6><i class="fa fa-clock-o"></i> 1 hour ago</h6>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </li>
              <li>
                <div class="list-msg">
                  <div class="col-xs-2 icon clear-padding">
                    <i class="fa fa-birthday-cake"></i>
                  </div>
                  <div class="col-sm-10 desc">
                    <h5><a href="#">Annual fest</a></h5>
                    <h6><i class="fa fa-clock-o"></i> 1 day ago</h6>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </li>
              <li>              
                <div class="list-msg">
                  <div class="col-xs-2 icon clear-padding">
                    <i class="fa fa-trophy"></i>
                  </div>
                  <div class="col-sm-10 desc">
                    <h5><a href="#">Upcoming Sports Meet</a></h5>
                    <h6><i class="fa fa-clock-o"></i> 10 min ago</h6>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </li>
              <li>
                <div class="all-notifications">
                  <a href="#">VIEW ALL NOTIFICATIONS</a>
                </div>
              </li>
            </ul>
          </li>
          <li class="message dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-comment-o"></i>
              <span class="badge nav-badge">5</span>
            </a>
            <ul class="dropdown-menu notification-list">
              <li>
                <div class="list-msg">
                  <div class="col-xs-2 image clear-padding">
                    <img src="/static/assets-dashboard/img/parent/parent2.jpg" alt="user" />
                  </div>
                  <div class="col-sm-10 desc">
                    <h5><a href="#">John Doey</a></h5>
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <h6><i class="fa fa-clock-o"></i> 1 day ago</h6>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </li>
              <li>
                <div class="list-msg">
                  <div class="col-xs-2 image clear-padding">
                    <img src="assets/img/parent/parent1.jpg" alt="user" />
                  </div>
                  <div class="col-sm-10 desc">
                    <h5><a href="#">Lenore Doe</a></h5>
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <h6><i class="fa fa-clock-o"></i> 1 day ago</h6>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </li>
              <li>
                <div class="all-notifications">
                  <a href="#">VIEW ALL MESSAGES</a>
                </div>
              </li>
            </ul>
          </li>
          <li class="user dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span><img src="/static/assets-dashboard/img/parent/parent2.jpg" alt="user">JOHN DOEY<span class="caret"></span></span>
            </a>
            <ul class="dropdown-menu notification-list">
              <li>
                <a href="#"><i class="fa fa-cogs"></i> SETTINGS</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-users"></i> USER PROFILE</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-key"></i> CHANGE PASSWORD</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-cogs"></i> SETTINGS</a>
              </li>
              <li>
                <div class="all-notifications">
                  <a href="#">LOGOUT</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid vue-main-container">
  <div class="row">
    <div class="col-xs-2 vue-sidebar">
          <!-- SIDE MENU -->
      
        <ul class="sidebar-nav">
          <li>
            
            <router-link to="/adminHome" > <i class="fa fa-home menu-icon"></i> HOME </router-link>
            
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-users menu-icon"></i> STUDENTS <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>              
                <!--<a href="admin-add-student.html"><i class="fa fa-caret-right"></i>ADD</a> -->
                <router-link to="/adminAddStudent" > <i class="fa fa-caret-right"></i>ADD </router-link>
              </li>
              <li>
                <a href="admin-student-list.html"><i class="fa fa-caret-right"></i>ALL STUDENT  </a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-user-secret menu-icon"></i> TEACHERS <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>              
                <a href="admin-add-teacher.html"><i class="fa fa-caret-right"></i>ADD</a>
              </li>
              <li>
                <a href="admin-teacher-list.html"><i class="fa fa-caret-right"></i>ALL TEACHER</a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </li>
          <li>
            <a href="message.html"><i class="fa fa-envelope menu-icon"></i> MY MESSAGES</a>
          </li>
          <li>
            <a href="admin-add-announcement.html"><i class="fa fa-bullhorn menu-icon"></i> ANNOUNCEMENTS</a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-file-o menu-icon"></i> CLASSES <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>              
                <a href="admin-add-class.html"><i class="fa fa-caret-right"></i>ADD CLASS</a>
              </li>
              <li>
                <a href="admin-add-section.html"><i class="fa fa-caret-right"></i>ADD SECTION</a>
              </li>
              <li>
                <a href="admin-add-class.html"><i class="fa fa-caret-right"></i>VIEW SECTIONS</a>
              </li>
              <li>
                <a href="admin-add-section.html"><i class="fa fa-caret-right"></i>VIEW CLASSES</a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-book menu-icon"></i> SUBJECTS <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>              
                <a href="admin-add-subject.html"><i class="fa fa-caret-right"></i>ADD</a>
              </li>
              <li>
                <a href="admin-add-subject.html"><i class="fa fa-caret-right"></i>VIEW SUBJECTS</a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-calendar menu-icon"></i> TIMETABLE <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>              
                <a href="admin-create-timetable.html"><i class="fa fa-caret-right"></i>CREATE</a>
              </li>
              <li>
                <a href="admin-class-timetable.html"><i class="fa fa-caret-right"></i>VIEW</a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-address-card menu-icon"></i> REPORTS <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>              
                <a href="teacher-attendence-report.html"><i class="fa fa-caret-right"></i>ATTENDENCE</a>
              </li>
              <li>
                <a href="teacher-marks-report.html"><i class="fa fa-caret-right"></i>MARKS</a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </li>
        </ul>
      
    </div>


    <div class="col-xs-10 vue-view-container">
      
      <router-view></router-view>
    </div>

  </div>
</div>





    
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../../../static/assets-dashboard/css/style.css'

.adminDash {
  overflow: hidden !important;
}
.vue-main-container {
  padding: 0px !important;
}
.vue-sidebar {
  height: calc(100vh - 46px);
  padding: 0px !important;
  background: #fff;
  box-shadow: 2px 0 5px #eee;
  border-right: 1px solid #eee;

}
.sidebar-nav {
  width: 100% !important;
}

.vue-view-container {
  overflow-y: scroll !important;
   height: calc(100vh - 46px);
   padding: 0px !important;


}




</style>