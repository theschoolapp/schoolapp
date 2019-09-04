<template>
  <div class="admin">
    
    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-user-secret"></i>ADD FINANCE DEPARTMENT ADMIN</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-md-12">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-user"></i>ADMIN INFO</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>FIRST NAME</label>
                        <input type="text" v-model="fin.firstName" placeholder="First Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MIDDLE NAME</label>
                        <input type="text" v-model="fin.middleName" placeholder="Middle Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>LAST NAME</label>
                        <input type="text" v-model="fin.lastName" placeholder="Last Name" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-venus"></i>GENDER</label>
                        <select v-model="fin.gender">
                          <option>-- Select --</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-calendar"></i>DATE OF BIRTH</label>
                        <input type="text" v-model="fin.dob" placeholder="MM/DD/YYYY" />
                      </div>
                      
                      
                      <div class="col-sm-3">
                        <label><i class="fa fa-bell-o"></i>RELIGION</label>
                        <select v-model="fin.religion">
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
                        <input type="text" v-model="fin.address" placeholder="H/N 42 Street# 10" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-phone"></i>PHONE #</label>
                        <input type="text" v-model="fin.phoneNumber1" placeholder="077 000 000" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-phone"></i>ALTERNATE PHONE #</label>
                        <input type="text" v-model="fin.phoneNumber2" placeholder="077 000 000" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-envelope-o"></i>EMAIL</label>
                        <input type="email" v-model="fin.email" placeholder="email@host.com" />
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
                        <input type="text" v-model="fin.highestDegree" placeholder="PhD" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-building"></i>UNIVERSITY/COLLEGE</label>
                         <input type="text" v-model="fin.university" placeholder="University" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-calaendar"></i>YEAR PASSED</label>
                       <input type="text" v-model="fin.graduatingYear" placeholder="YYYY" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-puzzle-piece"></i>CGPA</label>
                        <input type="text" v-model="fin.CGPA" placeholder="08.65" />
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-graduation-cap"></i>OTHER DEGREE</label>
                        <input type="text"  v-model="fin.otherDegrees[0]" placeholder="MSc" />
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
                      <div class="col-sm-12">
                        <a @click="submitForm($event)"><i class="fa fa-paper-plane"></i> SAVE</a>
                      </div>
                      <div class="clearfix"></div>
                      <div v-if="showAlert" class="col-sm-12">
                        <div class="alert alert-success alert-dismissible vue-alert" role="alert">
                          <button type="button" @click="cleanUp()" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <strong><i class="fa fa-check-square-o" aria-hidden="true"></i> Success</strong> New Finance Admin created successfully.
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
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
  name: 'AdminAddFinanceAdmin',
  data () {
    return {
      showAlert: false,
      fin: {
        firstName: "",
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
      }
    }
  },

  methods: {
    submitForm(event){
      event.preventDefault();
      console.log('Submitting...');
      let data = {
        validated: true,
        financeAdmin: this.fin
      }
      this.axios.post("http://localhost:5000/admin/addFinanceAdmin", data)
      .then((resp) => {

        console.log(resp.data);
        if(resp.data.success){
          this.showAlert = true;
        }
        
        
      })
      .catch((err) => {
        console.log(err);
      });

    },
    cleanUp(){
    this.showAlert = false;
    this.fin = {
        firstName: "",
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
      }
     
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

.vue-alert {
  margin-top: 10px !important;
}

</style>