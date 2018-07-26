<template>
  <div class="admin">
    
    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-user-secret"></i>ADD TEACHER</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-md-12">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-user"></i>TEACHER INFO</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>FIRST NAME</label>
                        <input type="text" placeholder="JOHN" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MIDDLE NAME</label>
                        <input type="text" placeholder="FIDLER" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>LAST NAME</label>
                        <input type="text" placeholder="DOE" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-venus"></i>GENDER</label>
                        <select>
                          <option>-- Select --</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-calendar"></i>DATE OF BIRTH</label>
                        <input type="text" id="studentDOB" placeholder="MM/DD/YYYY" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-phone"></i>PHONE #</label>
                        <input type="text" placeholder="1234567890" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-envelope-o"></i>EMAIL</label>
                        <input type="text" placeholder="john@Prototype.com" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-bell-o"></i>RELIGION</label>
                        <select>
                          <option>-- Select --</option>
                          <option>Buddhism</option>
                          <option>Christian</option>
                          <option>Hinduism</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-file-picture-o"></i>UPLOAD PHOTO</label>
                        <input type="file" placeholder="90890" />
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="dash-item">
                  <h6 class="item-title"><i class="fa fa-home"></i>CONTACT INFO</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-home"></i>ADDRESS 1</label>
                        <input type="text" placeholder="H/N 42 Street# 10" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-home"></i>ADDRESS 2</label>
                        <input type="text" placeholder="H/N 42 Street# 10" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-flag"></i>COUNTRY</label>
                        <select>
                          <option>-- Select --</option>
                          <option>Canada</option>
                          <option>India</option>
                          <option>Japan</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-id-card"></i>STATE</label>
                        <select>
                          <option>-- Select --</option>
                          <option>British Columbia</option>
                          <option>Ontario</option>
                        </select>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-code"></i>ZIP</label>
                        <input type="text" placeholder="90890" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-phone"></i>PHONE #</label>
                        <input type="text" placeholder="1234567890" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-phone"></i>ALTERNATE PHONE #</label>
                        <input type="text" placeholder="1234567890" />
                      </div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-envelope-o"></i>EMAIL</label>
                        <input type="text" placeholder="john@Prototype.com" />
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
                        <input type="text" placeholder="PhD" />
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-building"></i>UNIVERSITY/COLLEGE</label>
                        <select>
                          <option>-- Select --</option>
                          <option>IIT</option>
                          <option>Harvard</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-calaendar"></i>YEAR PASSED</label>
                        <select>
                          <option>-- Select --</option>
                          <option>2005</option>
                          <option>2006</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label class="clear-top-margin"><i class="fa fa-puzzle-piece"></i>CGPA</label>
                        <input type="text" placeholder="08.65" />
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-3">
                        <label><i class="fa fa-graduation-cap"></i>OTHER DEGREE</label>
                        <input type="text" placeholder="MSc" />
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
                        <a href="#"><i class="fa fa-paper-plane"></i> SAVE</a>
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
  name: 'AdminAddTeacher',
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
