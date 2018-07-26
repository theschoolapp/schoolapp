<template>
  <div class="adminStudents">
    <div class="container-fluid vue-page2-container">
      <div class="row">
          <div class="col-lg-12 clear-padding-xs">
            <h5 class="page-title"><i class="fa fa-users"></i>ALL STUDENT</h5>
            <div class="section-divider"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 clear-padding-xs">
            <div class="col-lg-12">
              <div class="dash-item first-dash-item">
                <h6 class="item-title"><i class="fa fa-user"></i>STUDENTS</h6>
                <div class="inner-item">
                  <table class="table table-striped table-bordered display responsive nowrap" id="attendenceDetailedTable" cellspacing="0" width="100%">
                    <thead>
                      <tr role="row"><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Date
                        : activate to sort column ascending" style="width: 111px;">Date
                      </th><th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="From: activate to sort column descending" style="width: 262px;" aria-sort="ascending">From</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Category: activate to sort column ascending" style="width: 153px;">Category</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 122px;">Status</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Location: activate to sort column ascending" style="width: 144px;">Location</th><th style="text-align: center; width: 86px;" class="sorting_disabled" rowspan="1" colspan="1" aria-label="Add row 


                      ">Add row <button type="button" data-func="dt-add" class="btn btn-success btn-xs dt-add">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                      </button>
                    </th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>JOHN DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 5</td>
                      <td>PTH05A</td>
                      <td>PTH05A01</td>

                      <td class="action-link">
                        <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>LENNORE DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 5</td>
                      <td>PTH05A</td>
                      <td>PTH05A01</td>
                      <td class="action-link">
                        <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>JOHN DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 5</td>
                      <td>PTH05A</td>
                      <td>PTH05A01</td>
                      <td class="action-link">
                        <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>LENNORE DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 5</td>
                      <td>PTH05A</td>
                      <td>PTH05A01</td>
                      <td class="action-link">
                        <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>JOHN DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 5</td>
                      <td>PTH05A</td>
                      <td>PTH05A01</td>
                      <td class="action-link">
                        <button type="button" class="btn btn-primary btn-xs dt-edit" style="margin-right:16px;">
                          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                        <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>LENNORE DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 5</td>
                      <td>PTH05A</td>
                      <td>PTH05A01</td>
                      <td class="action-link">
                        <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>JOHN DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 3</td>
                      <td>PTH03A</td>
                      <td>PTH05A01</td>
                      <td class="action-link">
                        <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" href="#" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>LENNORE DOE</td>
                      <td>PTH2017001</td>
                      <td>STD 8</td>
                      <td>PTH08A</td>
                      <td>PTH05A01</td>
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
    


  </div>
</template>

<script>
export default {
  name: 'AdminStudentList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.adminStudents {

  height: calc(100vh - 46px);
  overflow-y: scroll;
  top: 46px !important;
  background-color: #f7f7f7;
}

.vue-page2-container {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 20px !important;

}

.page-title {
  color: #333;
  text-align: left;
}
</style>



