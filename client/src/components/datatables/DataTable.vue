<template>
 
<div class="tableContainer">

    <table class="table table-striped table-bordered display responsive nowrap" id="a" cellspacing="0" width="100%">
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
                    <tr v-for="person in data" :key="person.id">
                      <td>{{person.name}}</td>
                      <td>PTH2017002</td>
                      <td>STD 5</td>
                      <td>PTH05A</td>
                      <td>PTH05A01</td>

                      <td class="action-link">
                        <a class="edit" href="#" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" v-on:click="openModal()" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    
                    
                   
                   
                  </tbody>
                </table>



                 <modal 
                  name='hello2'
                  :height="134" 
                  :width="598"

                 >

                 
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title"><i class="fa fa-trash"></i>DELETE STUDENT</h4>
                      </div>
                      <div class="modal-body">
                        <div class="table-action-box">
                          <a href="#" class="save"><i class="fa fa-check"></i>YES</a>
                          <a href="#" class="cancel" data-dismiss="modal"><i class="fa fa-ban"></i>CLOSE</a>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  
                  
                </modal>
    </div>
  
</template>

<script>
export default {
  name: 'DataTable',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: this.tableData
    }
  },

  props: [ 'tableData' ],

  mounted: function() {
    $('#a').DataTable();
    console.log(this.data);
  },

   methods: {
    openModal() {
      this.$modal.show('hello2');
    }
  }

}
</script>


<style scoped>

.tableContainer {
  padding-left: 25px;
  padding-right: 25px;
}


</style>
