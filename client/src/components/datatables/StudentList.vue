<template>
 
<div class="tableContainer">

    <table class="table table-striped table-bordered display responsive nowrap" id="studentList" cellspacing="0" width="100%" >
                    <thead>
                      <tr role="row">

                      <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="From: activate to sort column descending" style="width: 262px;" aria-sort="ascending">Reg Number</th>

                      <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Category: activate to sort column ascending" style="width: 153px;">Last Name</th>

                      <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 122px;">First Name</th>

                      <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Location: activate to sort column ascending" style="width: 144px;">Year Class</th>

                      <th style="text-align: center; width: 86px;" class="sorting_disabled" rowspan="1" colspan="1" aria-label="Add row ">Functions</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="student in tableData" :key="student.id">
                      
                       

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
                  :height="200" 
                  :width="598">
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" @click="closeDModal($event)">&times;</button>
                        <h4 class="modal-title"><i class="fa fa-trash"></i>DELETE STUDENT</h4>
                      </div>
                      <div class="modal-body">
                            
                            <div class="alert alert-success vue-alert" role="alert">
                              <strong><i class="fa fa-check-square-o" aria-hidden="true"></i> Are you sure you want to delete this student, </strong> {{deleteStudent[2]}} {{deleteStudent[1]}} , {{deleteStudent[0]}}<strong> ?</strong>
                            </div>
                          
                        <div class="table-action-box">
                          <a @click="deleteAStudent($event)" class="save"><i class="fa fa-check"></i>YES</a>
                          <a @click="closeDModal($event)" class="cancel"><i class="fa fa-ban"></i>CLOSE</a>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                </modal>

                <modal 
                  name='EditStudent'
                  :height="500" 
                  :width="800"
                  >
                    <!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" @click="closeEModal($event)">&times;</button>
						<h4 class="modal-title"><i class="fa fa-edit"></i>EDIT STUDENT DETAILS</h4>
					</div>

					<div class="modal-body editModal-body">

            <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-user"></i>STUDENT INFO</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>FIRST NAME</label>
                        <input type="text" v-model="editStudent.firstName" placeholder="First Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MIDDLE NAME</label>
                        <input type="text" v-model="editStudent.middleName" placeholder="Middle Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>LAST NAME</label>
                        <input type="text" v-model="editStudent.lastName" placeholder="Last Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-venus"></i>GENDER</label>
                        <select v-model="editStudent.gender" >
                          <option>-- Select --</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-calendar"></i>DATE OF BIRTH</label>
                        <input type="text" v-model="editStudent.dob" placeholder="MM/DD/YYYY" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-phone"></i>PHONE #</label>
                        <input type="text" v-model="editStudent.phoneNumber" placeholder="0700 000 000" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-envelope-o"></i>EMAIL</label>
                        <input type="email" v-model="editStudent.email" placeholder="email@host.com" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-bell-o"></i>RELIGION</label>
                        <select v-model="editStudent.religion">
                          <option>-- Select --</option>
                          <option>Atheism</option>
                          <option>Buddhism</option>
                          <option>Christian</option>
                          <option>Hinduism</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="dash-item">
                  <h6 class="item-title"><i class="fa fa-book"></i>ACADEMIC INFO</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-id-card"></i>REGISTRATION #</label>
                        <input type="text" v-model="editStudent.regNumber" placeholder="PTH2017001" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-book"></i>CLASS</label>
                        <select v-model="editStudent.yearClass">
                          <option>-- Select --</option>
                          <option>5 STD</option>
                          <option>6 STD</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-cogs"></i>SECTION</label>
                        <select>
                          <option>-- Select --</option>
                          <option>PTH05A</option>
                          <option>PTH05B</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-puzzle-piece"></i>ROLL #</label>
                        <input type="text"  placeholder="PTH05A01" />
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-graduation-cap"></i>LAST SCHOOL</label>
                        <input type="text" v-model="editStudent.lastSchool" placeholder="ABC SCHOOL" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-star"></i>LAST STD</label>
                        <input type="text"  placeholder="4 STD" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-code"></i>MARKS OBTAINED</label>
                        <input type="text" v-model="editStudent.lastSchoolMarks" placeholder="76%" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-futbol-o"></i>SPORTS</label>
                        <select v-model="editStudent.sports[0]">
                          <option>-- Select --</option>
                          <option>Cricket</option>
                          <option>Football</option>
                          <option>Tenis</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                      
                      
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
            
          </div>
					<div class="modal-footer">
						<div class="table-action-box">
							<a @click="editAStudent($event)" class="save"><i class="fa fa-check"></i>SAVE CHANGES</a>
							<a @click="closeEModal($event)" class="cancel" data-dismiss="modal"><i class="fa fa-ban"></i>CLOSE</a>
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
      deleteStudent: [],
      editStudent: {
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '-- Select --',
            dob: '',
            religion: '-- Select --',
            email: '',
            phoneNumber: '',
            sports: [ ],
            lastSchoolMarks: '',
            lastSchool: '',
            regNumber: ''
      },
      dRow:[ ],
      es: []

    }
  },

  props: [ 'tableData', 'editData' ],

  watch: { 
      	tableData: function(newVal, oldVal) { 
          console.log('TableData changed: ', newVal, ' | was: ', oldVal);
        },
        editData: function(newVal, oldVal){
          console.log('Edit changed: ', newVal, ' | was: ', oldVal);
          this.editStudent = newVal;
        }
      },

  mounted: function() {

    this.createTable();
    this.data = this.tableData;
    


    
  },

   methods: {
//------------------------------------------------------------DELETE MODAL
    deleteModal(event) {
    	event.preventDefault();
      
      
      let target = $( event.target )
      if(target.is("i")){
        
        this.dRow = event.target.parentElement.parentElement.parentElement;
      }
      if(target.is("a")){
         
         this.dRow = event.target.parentElement.parentElement;
      }

      let $rowData = $(this.dRow).find("td");
      let dStudent = [];
      $.each($rowData, function() {             
          
          dStudent.push($(this).text());
               
      });
      this.deleteStudent = dStudent;

    
      

     
      
      
      this.$modal.show('DeleteStudent');

    },
    closeDModal(event){
      event.preventDefault();
      this.$modal.hide('DeleteStudent');
    },
//------------------------------------------------------------EDIT MODAL
    editModal(event) {
      this.$modal.show('EditStudent');
      let target = $( event.target )
      if(target.is("i")){
        
        this.dRow = event.target.parentElement.parentElement.parentElement;
      }
      if(target.is("a")){
         
         this.dRow = event.target.parentElement.parentElement;
      }

      let $rowData = $(this.dRow).find("td");
      let eStudent = [];
      $.each($rowData, function() {             
          console.log($(this).text());
          eStudent.push($(this).text());
                  
      });

      this.es = eStudent;
      this.$emit('editStudent', this.es);
      
    },

    closeEModal(event){
      event.preventDefault();
      this.$modal.hide('EditStudent');
    },

    createTable(){
    	this.table = $('#studentList').DataTable();
    	
    },

    deleteAStudent(event){
      event.preventDefault();
      this.$modal.hide('DeleteStudent');
      this.$emit('deleteStudent', this.deleteStudent);
     
    },

     editAStudent(event){
      event.preventDefault();
      this.$modal.hide('EditStudent');
      this.$emit('editedStudent', this.editStudent);
     
    }

    
  }

}
</script>


<style scoped>

  .editModal-body {
    height: 360px;
    overflow-y: scroll;
  }


</style>
