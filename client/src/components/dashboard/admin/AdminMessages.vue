<template>
  <div class="admin">
    
    <div class="container-fluid vue-page-container">
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <h5 class="page-title"><i class="fa fa-envelope-o"></i>MESSAGES</h5>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 clear-padding-xs">
              <div class="col-md-6">
                <div class="my-msg dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-envelope-o"></i>MY MESSAGES</h6>
                  <div class="inner-item">
                    <div class="msg-item">
                      <div class="col-xs-2 clear-padding">
                        <img src="assets/img/parent/parent1.jpg" alt="user" />
                      </div>
                      <div class="col-xs-10">
                        <p class="title">Submit your assigment.</p>
                        <p class="sent-by">JOHN DOE, MATH TEACHER</p>
                        <p class="msg-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p class="timestamp"><i class="fa fa-clock-o"></i> <i>45 mins ago.</i></p>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="msg-item">
                      <div class="col-xs-2 clear-padding">
                        <img src="assets/img/parent/parent2.jpg" alt="user" />
                      </div>
                      <div class="col-xs-10">
                        <p class="title">Your fee is due.</p>
                        <p class="sent-by">LENNORE, ACCOUNTANT</p>
                        <p class="msg-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p class="timestamp"><i class="fa fa-clock-o"></i> <i>45 mins ago.</i></p>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="msg-item">
                      <div class="col-xs-2 clear-padding">
                        <img src="assets/img/parent/parent1.jpg" alt="user" />
                      </div>
                      <div class="col-xs-10">
                        <p class="title">Submit your assigment.</p>
                        <p class="sent-by">JOHN DOE, MATH TEACHER</p>
                        <p class="msg-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p class="timestamp"><i class="fa fa-clock-o"></i> <i>45 mins ago.</i></p>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dash-item first-dash-item">
                  <h6 class="item-title"><i class="fa fa-paper-plane"></i>CREATE NEW MESSAGE</h6>
                  <div class="inner-item">
                    <div class="dash-form">
                      <div class="col-xs-6">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>TO</label>
                        <input type="text" placeholder="TO" />
                      </div>
                      <div class="col-xs-6">
                        <label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>FROM</label>
                        <input type="text" placeholder="FROM" />
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-sm-12">
                        <label><i class="fa fa-bullhorn"></i>SUBJECT</label>
                        <input type="text" placeholder="SUBJECT" />
                      </div>
                      <div class="col-sm-12">
                        <label><i class="fa fa-info-circle"></i>MESSAGE</label>
                        <textarea placeholder="MESSAGE"></textarea>
                      </div>
                      <div class="col-sm-12">
                        <a href="#"><i class="fa fa-paper-plane"></i> SEND</a>
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
  name: 'AdminMessages',
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
