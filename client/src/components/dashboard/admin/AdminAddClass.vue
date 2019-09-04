<template>
  <div class="admin">
    


        <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-sliders"></i>ALL CALSSES</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-sm-4">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-plus-circle"></i>ADD CLASS</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <label class="clear-top-margin"><i class="fa fa-book"></i>CLASS</label>
                      <input type="text" placeholder="5 STD" />
                      <label><i class="fa fa-code"></i>CLASS CODE</label>
                      <input type="text" placeholder="PTH05" />
                      <label><i class="fa fa-user-secret"></i>CLASS TEACHER</label>
                      <select>
                        <option>-- Select --</option>
                        <option>Lennore Doe</option>
                        <option>John Doe</option>
                      </select>
                      <select class="mdb-select" multiple>
                          <option value="" disabled selected>Choose your country</option>
                          <option value="1">USA</option>
                          <option value="2">Germany</option>
                          <option value="3">France</option>
                          <option value="4">Poland</option>
                          <option value="5">Japan</option>
                      </select>
                      <div>
                        <a href="#"><i class="fa fa-paper-plane"></i> CREATE</a>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-sliders"></i>ALL CLASSES</h6>
                  <div class="inner-item">
                    <table id="attendenceDetailedTable" class="display responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th><i class="fa fa-book"></i>CLASS</th>
                          <th><i class="fa fa-code"></i>CLASS CODE</th>
                          <th><i class="fa fa-user-secret"></i>CLASS TEACHER</th>
                          <th><i class="fa fa-info-circle"></i>DESCRIPTION</th>
                          <th><i class="fa fa-sliders"></i>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 STD</td>
                          <td>PTH05</td>
                          <td>Lennore Doe</td>
                          <td>DESCRIPTION</td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>4 STD</td>
                          <td>PTH04</td>
                          <td>John Doe</td>
                          <td>DESCRIPTION</td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>7 STD</td>
                          <td>PTH07</td>
                          <td>John Doe</td>
                          <td>DESCRIPTION</td>
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
  name: 'AdminAddClass',
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
