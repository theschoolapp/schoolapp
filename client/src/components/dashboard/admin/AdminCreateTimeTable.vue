<template>
  <div class="admin">
    
    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-clock-o"></i>TIME SLOTS</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-sm-12">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-plus-circle"></i>ADD SLOT</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-calendar"></i>DAY</label>
                        <select>
                          <option>-- Select --</option>
                          <option>Monday</option>
                          <option>Tuesday</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-clock-o"></i>SLOT</label>
                        <select>
                          <option>-- Select --</option>
                          <option>09-10 AM</option>
                          <option>10-11 PM</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-book"></i>CLASS</label>
                        <select>
                          <option>-- Select --</option>
                          <option>STD 5</option>
                          <option>STD 6</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-users"></i>SECTION</label>
                        <select>
                          <option>-- Select --</option>
                          <option>STD 5</option>
                          <option>STD 6</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-code"></i>SUBJECT</label>
                        <select>
                          <option>-- Select --</option>
                          <option>PHY101</option>
                          <option>MTH101</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-user"></i>TEACHER</label>
                        <select>
                          <option>-- Select --</option>
                          <option>John Doe</option>
                          <option>Lennore Doe</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-home"></i>CLASS ROOM</label>
                        <select>
                          <option>-- Select --</option>
                          <option>101</option>
                          <option>103</option>
                        </select>
                      </div>
                      <div class="col-sm-12">
                        <a href="#"><i class="fa fa-paper-plane"></i> CREATE</a>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="dash-item">
                  <h6 class="item-title"><i class="fa fa-sliders"></i>ALL SLOTS</h6>
                  <div class="inner-item">
                    <table id="attendenceDetailedTable" class="display responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th><i class="fa fa-calendar"></i>DAY</th>
                          <th><i class="fa fa-clock-o"></i>SLOT</th>
                          <th><i class="fa fa-book"></i>CLASS</th>
                          <th><i class="fa fa-cogs"></i>SECTION</th>
                          <th><i class="fa fa-code"></i>SUBJECT</th>
                          <th><i class="fa fa-user"></i>TEACHER</th>
                          <th><i class="fa fa-home"></i>ROOM</th>
                          <th><i class="fa fa-sliders"></i>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>09-10 AM</td>
                          <td>5 STD</td>
                          <td>A</td>
                          <td>MTH101</td>
                          <td>John Doe</td>
                          <td>101</td>
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

    <div class="dash-footer col-lg-12">
          <p>Copyright Prototype</p>
        </div>

  </div>
</template>

<script>
export default {
  name: 'AdminCreateTimeTable',
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
