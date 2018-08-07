<template>
 
<div class="tableContainer">

    <table id="libList" class=" table table-striped table-bordered display responsive nowrap" cellspacing="0" width="100%">
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
                        <tr v-for="lib in tableData" :key="lib.id">
                          <td>{{lib.lastName}}, {{lib.firstName}}</td>
                           <td>{{lib.highestDegree}}</td>
                            <td>{{lib.university}}</td>
                             <td>{{lib.graduatingYear}}</td>
                              <td>{{lib.CGPA}}</td>
                          <td>{{lib.phoneNumber1}}</td>
                          <td>{{lib.email}}</td>
                          
                          <td class="action-link">
                            <a class="edit" v-on:click="editModal($event)" title="Edit"><i class="fa fa-edit"></i></a>
                            <a class="delete" v-on:click="deleteModal($event)" title="Delete" ><i class="fa fa-remove"></i></a>
                          </td>
                        </tr>
                    
                      </tbody>
                    </table>



                 <modal 
                  name='Delete'
                  :height="200" 
                  :width="598">
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" @click="closeDModal($event)">&times;</button>
                        <h4 class="modal-title"><i class="fa fa-trash"></i>DELETE TEACHER</h4>
                      </div>
                      <div class="modal-body">
                            
                            <div class="alert alert-success vue-alert" role="alert">
                              <strong><i class="fa fa-check-square-o" aria-hidden="true"></i> Are you sure you want to delete this teacher, </strong>{{deleteLib[0]}}<strong> ?</strong>
                            </div>
                          
                        <div class="table-action-box">
                          <a @click="doDelete($event)" class="save"><i class="fa fa-check"></i>YES</a>
                          <a @click="closeDModal($event)" class="cancel"><i class="fa fa-ban"></i>CLOSE</a>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                </modal>

                <modal 
                  name='Edit'
                  :height="500" 
                  :width="800"
                  >
                    <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeEModal($event)">&times;</button>
            <h4 class="modal-title"><i class="fa fa-edit"></i>EDIT TEACHER DETAILS</h4>
          </div>

          <div class="modal-body editModal-body">

           <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-user"></i>TEACHER INFO</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>FIRST NAME</label>
                        <input type="text" v-model="editLib.firstName" placeholder="First Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MIDDLE NAME</label>
                        <input type="text" v-model="editLib.middleName" placeholder="Middle Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>LAST NAME</label>
                        <input type="text" v-model="editLib.lastName" placeholder="Last Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-venus"></i>GENDER</label>
                        <select v-model="editLib.gender">
                          <option>-- Select --</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-calendar"></i>DATE OF BIRTH</label>
                        <input type="text" v-model="editLib.dob" placeholder="MM/DD/YYYY" />
                      </div>
                      
                      
                      <div class="col-sm-3">
                        <label><i class="fa fa-bell-o"></i>RELIGION</label>
                        <select v-model="editLib.religion">
                          <option>-- Select --</option>
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
                  <h6 class="item-title"><i class="fa fa-home"></i>CONTACT INFO</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-home"></i>STREET ADDRESS</label>
                        <input type="text" v-model="editLib.address" placeholder="H/N 42 Street# 10" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-phone"></i>PHONE #</label>
                        <input type="text" v-model="editLib.phoneNumber1" placeholder="077 000 000" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-phone"></i>ALTERNATE PHONE #</label>
                        <input type="text" v-model="editLib.phoneNumber2" placeholder="077 000 000" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-envelope-o"></i>EMAIL</label>
                        <input type="email" v-model="editLib.email" placeholder="email@host.com" />
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
                        <label class="clear-top-margin"><i class="fa fa-graduation-cap"></i>HIGHEST DEGREE</label>
                        <input type="text" v-model="editLib.highestDegree" placeholder="PhD" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-building"></i>UNIVERSITY/COLLEGE</label>
                         <input type="text" v-model="editLib.university" placeholder="University" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-calaendar"></i>YEAR PASSED</label>
                       <input type="text" v-model="editLib.graduatingYear" placeholder="YYYY" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-puzzle-piece"></i>CGPA</label>
                        <input type="text" v-model="editLib.CGPA" placeholder="08.65" />
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-graduation-cap"></i>OTHER DEGREE</label>
                        <input type="text"  v-model="editLib.otherDegrees[0]" placeholder="MSc" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-building"></i>UNIVERSITY/COLLEGE</label>
                        <select>
                          <option>-- Select --</option>
                          <option>IIT</option>
                          <option>Harvard</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-calaendar"></i>YEAR PASSED</label>
                        <select>
                          <option>-- Select --</option>
                          <option>2005</option>
                          <option>2006</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-puzzle-piece"></i>CGPA</label>
                        <input type="text" placeholder="08.65" />
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
              <a @click="doEdit($event)" class="save"><i class="fa fa-check"></i>SAVE CHANGES</a>
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
      deleteLib: [],
      editLib: {
            firstName: "",
            id: "",
            accountId: "",
            middleName: "",
            lastName : "",
            gender : "-- Select --",
            religion : "-- Select --",
            email : "",
            phoneNumber1 : "",
            phoneNumber2 : "",
            dob : "",
            address : "",
            highestDegree : "",
            otherDegrees : [ ],
            university: "",
            graduatingYear : "",
            CGPA : ""
      },
      dRow:[],
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
          this.editLib = newVal;
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
        console.log(this.dRow);
      }
      if(target.is("a")){
         
         this.dRow = event.target.parentElement.parentElement;
         console.log(this.dRow);
      }

      let $rowData = $(this.dRow).find("td");
      let dLib = [];
      $.each($rowData, function() {             
          

          dLib.push($(this).text());
               
      });
      this.deleteLib = dLib;
      console.log(dLib);

    
      

     
      
      
      this.$modal.show('Delete');

    },
    closeDModal(event){
      event.preventDefault();
      this.$modal.hide('Delete');
    },
//------------------------------------------------------------EDIT MODAL
    editModal(event) {
      this.$modal.show('Edit');
      let target = $( event.target )
      if(target.is("i")){
        
        this.dRow = event.target.parentElement.parentElement.parentElement;
      }
      if(target.is("a")){
         
         this.dRow = event.target.parentElement.parentElement;
      }

      let $rowData = $(this.dRow).find("td");
      let eLib = [];
      $.each($rowData, function() {             
          console.log($(this).text());
          eLib.push($(this).text());
                  
      });

      this.es = eLib;
      console.log("test")
      console.log(this.es)
      this.$emit('editLib', this.es);
      
    },

    closeEModal(event){
      event.preventDefault();
      this.$modal.hide('Edit');
    },

    createTable(){
      this.table = $('#libList').DataTable();
      
    },

    doDelete(event){
      event.preventDefault();
      this.$modal.hide('Delete');
      this.$emit('deleteLib', this.deleteLib);
     
    },

     doEdit(event){
      event.preventDefault();
      this.$modal.hide('Edit');
      console.log(this.edit);
      this.$emit('doEdit', this.editLib);
     
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
