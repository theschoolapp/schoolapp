<template>
  <div class="admin">
    

    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-cogs"></i>ALL SECTIONS</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-sm-4">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-plus-circle"></i>ADD SECTION</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <label class="clear-top-margin"><i class="fa fa-book"></i>SECTION</label>
                      <input type="text" placeholder="A" />
                      <label><i class="fa fa-code"></i>SECTION CLASS</label>
                      <select>
                        <option>-- Select --</option>
                        <option>STD 5</option>
                        <option>STD 6</option>
                      </select>
                      <label><i class="fa fa-user-secret"></i>SECTION CODE</label>
                      <input type="text" placeholder="PTH05A" />
                      <label><i class="fa fa-info-circle"></i>DESCRIPTION</label>
                      <textarea placeholder="Enter Description Here"></textarea>
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
                  <h6 class="item-title"><i class="fa fa-sliders"></i>ALL SECTIONS</h6>
                  <div class="inner-item">
                    <table id="attendenceDetailedTable" class="display responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th><i class="fa fa-book"></i>CLASS</th>
                          <th><i class="fa fa-cogs"></i>SECTION</th>
                          <th><i class="fa fa-code"></i>SECTION CODE</th>
                          <th><i class="fa fa-info-circle"></i>DESCRIPTION</th>
                          <th><i class="fa fa-sliders"></i>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 STD</td>
                          <td>A</td>
                          <td>PTH05A</td>
                          <td>Section Desc</td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>5 STD</td>
                          <td>B</td>
                          <td>PTH05B</td>
                          <td>Description</td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>4 STD</td>
                          <td>A</td>
                          <td>PTH04A</td>
                          <td>Section Desc</td>
                          <td class="action-link">
                            <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                            <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>4 STD</td>
                          <td>B</td>
                          <td>PTH04B</td>
                          <td>Description</td>
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
  name: 'Admin',
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
