<template>
  <div class="adminStudents">
    <div class="container-fluid vue-page2-container">
      <div class="row">
          <div class="col-lg-12 clear-padding-xs">
            <h5 class="page-title"><i class="fa fa-users"></i>ALL TEACHERS</h5>
            <div class="section-divider"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 clear-padding-xs">
            <div class="col-lg-12">
              <div class="dash-item first-dash-item">
                <h6 class="item-title"><i class="fa fa-user"></i>TEACHERS</h6>
                <div class="inner-item">
                  <TeacherList 
                  v-bind:table-data="libs" 
                  v-bind:edit-data="obj"  
                  v-on:deleteLib="deleteRecord($event)"
                  v-on:editLib="editRecord($event)"
                  v-on:doEdit="changeRecord($event)"
                  ></TeacherList>
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
import TeacherList from '../../datatables/TeacherList.vue'
export default {
  name: 'AdminTeacherList',
  data () {
    return {
      obj: {},
      libs: [
      {

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
      }]
      
    }
  },

  methods: {
    getLibs(){

      let apiUrl = 'http://localhost:5000/admin/getAllTeachers';
      this.axios.get(apiUrl).then(res => {
              console.log(res.data);
              this.libs = res.data;
              
              
            }).catch( err =>{
              console.log(err);
            });

    },

  
    deleteRecord(event){
      console.log('Got Delete Event');
      console.log(event);
    },

    editRecord(event){
      this.obj = this.libs.find(x => x.email == event[6]);
      console.log(this.obj);
      if(this.obj.id){
        console.log(this.obj.id);
      }
      
    },
    changeRecord(event){
      console.log('Got Edit Event');
      console.log(event);
      let obj = event;
      let apiUrl = 'http://localhost:5000/admin/editTeacher';
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
    TeacherList
  },

  created() {
    this.getLibs();
    
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



