<template>
  <div class="admin">


    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-users"></i>CLASS TIMETABLE</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-lg-12">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-search"></i>MAKE SELECTION</h6>
                  <div class="inner-item dash-search-form">
                    <div class="col-sm-4">
                      <label>CLASS</label>
                      <select>
                        <option>5th STD</option>
                        <option>6th STD</option>
                        <option>7th STD</option>
                      </select>
                    </div>
                    <div class="col-sm-4">
                      <label>SECTION</label>
                      <select>
                        <option>PTH05A</option>
                        <option>PTH05B</option>
                        <option>PTH06A</option>
                        <option>PTH06B</option>
                      </select>
                    </div>
                    <div class="col-sm-4">
                      <button type="submit" class="submit-btn"><i class="fa fa-search"></i>SELECT</button>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="dash-item">
                  <h6 class="item-title"><i class="fa fa-edit"></i>EDIT TIMETABLE</h6>
                  <div class="inner-item">
                    <table id="attendenceDetailedTable" class="display responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th><i class="fa fa-clock-o"></i>TIMINGS</th>
                          <th><i class="fa fa-calendar"></i>MONDAY</th>
                          <th><i class="fa fa-calendar"></i>TUESDAY</th>
                          <th><i class="fa fa-calendar"></i>WEDNESDAY</th>
                          <th><i class="fa fa-calendar"></i>THURSDAY</th>
                          <th><i class="fa fa-calendar"></i>FRIDAY</th>
                          <th><i class="fa fa-calendar"></i>SATURDAY</th>
                          <th><i class="fa fa-tasks"></i>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>09-10 AM</td>
                          <td>
                            <span>Lecture: MTH101</span>
                            <span>Room: 601</span>
                            <span>Teacher: John</span>
                          </td>
                          <td>
                            <span>Lecture: PHY101</span>
                            <span>Room: 303</span>
                            <span>Teacher: Lennore</span>
                          </td>
                          <td>
                            <span>Lecture: BIO101</span>
                            <span>Room: 302</span>
                            <span>Teacher: John</span>
                          </td>
                          <td>
                            <span>Lecture: PHY101</span>
                            <span>Room: 303</span>
                            <span>Teacher: Lennore</span>
                          </td>
                          <td>
                            <span>Lecture: BIO101</span>
                            <span>Room: 202</span>
                            <span>Teacher: John</span>
                          </td>
                          <td>
                            <span>Lecture: MTH101</span>
                            <span>Room: 601</span>
                            <span>Teacher: John</span>
                          </td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="table-action-box">
                      <a href="#" class="save"><i class="fa fa-check"></i>SAVE</a>
                      <a href="#" class="cancel"><i class="fa fa-ban"></i>CANCEL</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    


    <div class="dash-footer col-lg-12">
          <p>Copyright Prototype</p>
        </div>


  </div>
</template>

<script>
export default {
  name: 'AdminClassTimeTable',
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
