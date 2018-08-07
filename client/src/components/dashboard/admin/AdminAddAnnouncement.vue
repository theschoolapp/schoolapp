<template>
  <div class="admin">
    
    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-bullhorn"></i>ALL ANNOUNCEMENTS</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-sm-4">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-plus-circle"></i>ADD ANNOUNCEMENT</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <label class="clear-top-margin"><i class="fa fa-cogs"></i>FROM</label>
                      <select v-model="announcement.from">
                        <option>-- Select --</option>
                        <option>Academics</option>
                        <option>Administration</option>
                        <option>Sports</option>
                      </select>


                      <label><i class="fa fa-user-secret"></i>FOR</label>
                      <select v-model="forWho">
                        <option>-- Select --</option>
                        <option>All</option>
                        <option>Teacher</option>
                        <option>Student</option>
                      </select>


                      <label><i class="fa fa-code"></i>TITLE</label>
                      <input type="text" v-model="announcement.title" placeholder="Announcement Title" />


                      <label><i class="fa fa-info-circle"></i>Message</label>
                      <textarea v-model="announcement.msg" placeholder="Enter Message Here"></textarea>


                      <div>
                        <a @click="submitForm($event)"><i class="fa fa-paper-plane"></i> CREATE</a>
                      </div>

                      <div v-if="showAlert" class="">
                        <div class="alert alert-success alert-dismissible vue-alert" role="alert">
                          <button type="button" @click="cleanUp()" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <strong><i class="fa fa-check-square-o" aria-hidden="true"></i> Success</strong> New student and new parent created successfully.
                        </div>
                      </div> 


                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-bullhorn"></i>ALL ANNOUNCEMENTS</h6>
                  <div class="inner-item">
                    <table id="attendenceDetailedTable" class="display responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th><i class="fa fa-cogs"></i>TYPE</th>
                          <th><i class="fa fa-user-secret"></i>FOR</th>
                          <th><i class="fa fa-user-info"></i>SUBJECT</th>
                          <th><i class="fa fa-info-circle"></i>DESCRIPTION</th>
                          <th><i class="fa fa-user"></i>CREATED BY</th>
                          <th><i class="fa fa-sliders"></i>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Academic</td>
                          <td>All</td>
                          <td>End Term Exam</td>
                          <td>Description goes here.</td>
                          <td>John Doe</td>
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

        <div class="dash-footer col-lg-12">
          <p>Copyright Prototype</p>
        </div>

  </div>
</template>

<script>


export default {
  name: 'AdminAddAnnouncement',
  data () {
    return {
      forWho: "-- Select --",
      showAlert: true,
      announcement: {
        msg :  "",
        title :  "",
        from :  "-- Select --",
        forTeachers : false,
        forStudents : false
      }


    }
  },

   methods: {
      submitForm(event){
      event.preventDefault();
      console.log('Submitting...');
      let data = {
        validated: true,
        announcement: this.announcement
      }
      this.axios.post("http://localhost:5000/admin/addAnnouncement", data)
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
    this.announcement = {
        msg :  "",
        title :  "",
        from :  "",
        forTeachers : false,
        forStudents : false
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
