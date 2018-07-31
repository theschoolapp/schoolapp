<template>
 
<div class="tableContainer">

    <table class="table table-striped table-bordered display responsive nowrap" id="studentList" cellspacing="0" width="100%" >
                    <thead>
                      <tr role="row"><th class="sorting_disabled" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 100px;"> StudentId
                      </th>

                      <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="From: activate to sort column descending" style="width: 262px;" aria-sort="ascending">Reg Number</th>

                      <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Category: activate to sort column ascending" style="width: 153px;">Last Name</th>

                      <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 122px;">First Name</th>

                      <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Location: activate to sort column ascending" style="width: 144px;">Year Class</th>

                      <th style="text-align: center; width: 86px;" class="sorting_disabled" rowspan="1" colspan="1" aria-label="Add row ">Functions</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="student in tableData" :key="student.id">
                      
                       <td>{{ student.id }}</td>

                       <td>{{student.regNumber}}</td>

                        <td>{{student.lastName}}</td>

                        <td>{{student.firstName}}</td>

                       <td>{{student.yearClass}}</td>
                     

                      <td class="action-link">
                        <a class="edit" v-on:click="editModal($event)" title="Edit" data-toggle="modal" data-target="#editDetailModal"><i class="fa fa-edit"></i></a>
                        <a class="delete" v-on:click="deleteModal($event)" title="Delete" data-toggle="modal" data-target="#deleteDetailModal"><i class="fa fa-remove"></i></a>
                      </td>
                    </tr>
                    
                    
                   
                   
                  </tbody>
                </table>



                 <modal 
                  name='DeleteStudent'
                  :height="134" 
                  :width="598">
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

                <modal 
                  name='EditStudent'
                  :height="134" 
                  :width="598">
                    <!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title"><i class="fa fa-edit"></i>EDIT STUDENT DETAILS</h4>
					</div>
					<div class="modal-body dash-form">
						<div class="col-sm-3">
							<label class="clear-top-margin"><i class="fa fa-user"></i>FIRST NAME</label>
							<input type="text" placeholder="First Name" value="John" />
						</div>
						<div class="col-sm-3">
							<label class="clear-top-margin"><i class="fa fa-user"></i>MIDDLE NAME</label>
							<input type="text" placeholder="Middle Name" value="Fidler" />
						</div>
						<div class="col-sm-3">
							<label class="clear-top-margin"><i class="fa fa-user"></i>LAST NAME</label>
							<input type="text" placeholder="Last Name" value="Doe" />
						</div>
						<div class="col-sm-3">
							<label class="clear-top-margin"><i class="fa fa-book"></i>CLASS</label>
							<input type="text" placeholder="Standard" value="5 STD" />
						</div>
						<div class="clearfix"></div>
						<div class="col-sm-3">
							<label><i class="fa fa-cogs"></i>SECTION</label>
							<input type="text" placeholder="Section" value="PTH05A" />
						</div>
						<div class="col-sm-3">
							<label><i class="fa fa-puzzle-piece"></i>ROLL #</label>
							<input type="text" placeholder="Roll Number" value="Fidler" />
						</div>
						<div class="col-sm-3">
							<label><i class="fa fa-phone"></i>CONTACT #</label>
							<input type="text" placeholder="Contact Number" value="1234567890" />
						</div>
						<div class="col-sm-3">
							<label><i class="fa fa-envelope-o"></i>EMAIL</label>
							<input type="text" placeholder="Email" value="john@gmail.com" />
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="modal-footer">
						<div class="table-action-box">
							<a href="#" class="save"><i class="fa fa-check"></i>SAVE</a>
							<a href="#" class="cancel" data-dismiss="modal"><i class="fa fa-ban"></i>CLOSE</a>
						</div>
					</div>
				</div>
                </modal>
    </div>
  
</template>

<script>
export default {
  name: 'StudentList',
  data () {
    return {
      data: [ ],
      table: {},
      deletedStudent: {
      	studentId: ''
      },
      dRow:[ ]
    }
  },

  props: [ 'tableData' ],

  watch: { 
      	tableData: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal);
          console.log(this.table)
        }
      },

  mounted: function() {

    this.createTable();
    this.data = this.tableData;


    
  },

   methods: {

    deleteModal(event) {
    	event.preventDefault();
      this.$modal.show('DeleteStudent');
      
      this.dRow = this.table.row(event.target.parentElement.parentElement.parentElement).data();
      
      console.log(this.table);
      

    },

    editModal(event) {
      this.$modal.show('EditStudent');
      
      console.log($(event.target).parent().parent().parent());
    },

    createTable(){
    	this.table = $('#studentList').DataTable();
    	
    }

    
  }

}
</script>


<style scoped>



</style>
