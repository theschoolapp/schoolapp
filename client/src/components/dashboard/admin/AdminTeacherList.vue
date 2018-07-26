<template>
  <div class="admin">
     
    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-user-secret"></i>ALL TEACHER</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-lg-12">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-user"></i>TEACHERS</h6>
                  <div class="inner-item">
                    <table id="attendenceDetailedTable" class="display responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th><i class="fa fa-user"></i>NAME</th>
                          <th><i class="fa fa-graduation-cap"></i>HIGHEST DEGREE</th>
                          <th><i class="fa fa-building"></i>UNIVERSITY</th>
                          <th><i class="fa fa-calendar"></i>YEAR PASSED</th>
                          <th><i class="fa fa-puzzle-piece"></i>CGPA</th>
                          <th><i class="fa fa-phone"></i>CONTACT #</th>
                          <th><i class="fa fa-envelope-o"></i>EMAIL</th>
                          <th><i class="fa fa-tasks"></i>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>JOHN DOE</td>
                          <td>PhD</td>
                          <td>IIT Delhi</td>
                          <td>2008</td>
                          <td>08.65</td>
                          <td>1234567890</td>
                          <td>john@gmail.com</td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>LENNORE DOE</td>
                          <td>MSc</td>
                          <td>Harvard</td>
                          <td>2006</td>
                          <td>07.65</td>
                          <td>0999878775</td>
                          <td>lennore@gmail.com</td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

  </div>
</template>

<script>
export default {
  name: 'AdminTeacherList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

.admin {

  height: calc(100vh - 46px);
  overflow-y: scroll;
  top: 46px !important;
  background-color: #f7f7f7;
}

.vue-page-container {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 20px !important;

}

.page-title {
  color: #333;
  text-align: left;
}



</style>
