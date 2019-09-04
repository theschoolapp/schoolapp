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
                  <StudentList 
                  v-bind:table-data="students" 
                  v-bind:edit-data="obj"  
                  v-on:deleteStudent="deleteStu($event)"
                  v-on:editStudent="editStu($event)"
                  v-on:editedStudent="changeStu($event)"
                  ></StudentList>
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
import StudentList from '../../datatables/StudentList.vue'
export default {
  name: 'AdminStudentList',
  data () {
    return {
      obj: {},
      students: [
      {

            dob : " ",
            email : " ",
            enrolledClasses : " ",
            firstName : " ",
            gender : " ",
            id : " ",
            lastName : " ",
            lastSchool : " ",
            lastSchoolMark : " ",
            middleName : " ",
            phoneNumber : " ",
            regNumber : " ",
            religion : " ",
            sports : " ",
            yearClass : " "
      }]
      
    }
  },

  methods: {
    getStudents(){

      let apiUrl = 'http://localhost:5000/admin/getAllStudents';
      this.axios.get(apiUrl).then(res => {
              console.log(res.data);
              this.students = res.data;
              
              
            }).catch( err =>{
              console.log(err);
            });

    },

    gotMsg(){
      console.log('Got Event');
    },

    deleteStu(event){
      console.log('Got Delete Event');
      console.log(event);
    },

    editStu(event){
      this.obj = this.students.find(x => x.regNumber == event[0]);
      console.log(this.obj);
      if(this.obj.id){
        console.log(this.obj.id);
      }
      
    },
    changeStu(event){
      console.log('Got Edit Event');
      console.log(event);
      let obj = event;
      let apiUrl = 'http://localhost:5000/admin/editStudent';
      this.axios.post(apiUrl, obj)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
       
    }

  },

  components: {
    StudentList
  },

  created() {
    this.getStudents();
    
  },

  mounted() {
   
    
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



