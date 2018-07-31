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
                  <StudentList v-bind:table-data="students"></StudentList>
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



