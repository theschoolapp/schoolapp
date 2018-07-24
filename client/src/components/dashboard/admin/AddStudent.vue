<template>
  <div class="adminStudentAdd ">

  	<div class="container-fluid vue-home-container">
					<div class="row">
						<div class="col-lg-12 clear-padding-xs">
							<h5 class="page-title"><i class="fa fa-user"></i>ADD STUDENT</h5>
							<div class="section-divider"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 clear-padding-xs">
							<div class="col-md-12">
								<div class="dash-item first-dash-item">
									<h6 class="item-title"><i class="fa fa-user"></i>STUDENT INFO</h6>
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
									<h6 class="item-title"><i class="fa fa-user-secret"></i>PARENT INFO</h6>
									<div class="inner-item">
										<div class="dash-form">
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>FATHER NAME</label>
												<input type="text" placeholder="JOHN" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MOTHER NAME</label>
												<input type="text" placeholder="LENNORE" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-briefcase"></i>OCCUPATION</label>
												<select>
													<option>-- Select --</option>
													<option>Teacher</option>
													<option>Doctor</option>
												</select>
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-phone"></i>CONTACT #</label>
												<input type="text" placeholder="1234567890" />
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-3">
												<label><i class="fa fa-phone"></i>ALTERNATE CONTACT #</label>
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
											<div class="col-sm-3">
												<label><i class="fa fa-flag"></i>NATIONALITY</label>
												<select>
													<option>-- Select --</option>
													<option>Canadian</option>
													<option>Indian</option>
												</select>
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-3">
												<label><i class="fa fa-home"></i>ADDRESS</label>
												<input type="text" placeholder="H/N 42 Street# 10" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-flag"></i>COUNTRY</label>
												<select>
													<option>-- Select --</option>
													<option>Canada</option>
													<option>India</option>
													<option>Japan</option>
												</select>
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-id-card"></i>STATE</label>
												<select>
													<option>-- Select --</option>
													<option>British Columbia</option>
													<option>Ontario</option>
												</select>
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-code"></i>ZIP</label>
												<input type="text" placeholder="90890" />
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
									<h6 class="item-title"><i class="fa fa-book"></i>ACADEMIC INFO</h6>
									<div class="inner-item">
										<div class="dash-form">
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-id-card"></i>REGISTRATION #</label>
												<input type="text" placeholder="PTH2017001" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-book"></i>CLASS</label>
												<select>
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
												<input type="text" placeholder="PTH05A01" />
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-3">
												<label><i class="fa fa-graduation-cap"></i>LAST SCHOOL</label>
												<input type="text" placeholder="ABC SCHOOL" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-star"></i>LAST STD</label>
												<input type="text" placeholder="4 STD" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-code"></i>MARKS OBTAINED</label>
												<input type="text" placeholder="76%" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-futbol-o"></i>SPORTS</label>
												<select>
													<option>-- Select --</option>
													<option>Cricket</option>
													<option>Football</option>
													<option>Tenis</option>
												</select>
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
  name: 'AdminAddStudent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.adminStudentAdd {

	height: calc(100vh - 46px);
	overflow-y: scroll;
	top: 46px !important;
	background-color: #f7f7f7;
}

.vue-home-container {
	padding-left: 0px !important;
	padding-right: 0px !important;
	padding-top: 20px !important;

}

.page-title {
	color: #333;
	text-align: left;
}

</style>