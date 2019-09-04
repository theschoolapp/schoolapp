<template>
  <div class="adminStudentAdd ">

  	<div class="container-fluid vue-page-container">
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
												<input type="text" v-model="student.firstName" placeholder="First Name" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MIDDLE NAME</label>
												<input type="text" v-model="student.middleName" placeholder="Middle Name" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>LAST NAME</label>
												<input type="text" v-model="student.lastName" placeholder="Last Name" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-venus"></i>GENDER</label>
												<select v-model="student.gender" >
													<option>-- Select --</option>
													<option>Male</option>
													<option>Female</option>
												</select>
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-3">
												<label><i class="fa fa-calendar"></i>DATE OF BIRTH</label>
												<input type="text" v-model="student.dob" placeholder="MM/DD/YYYY" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-phone"></i>PHONE #</label>
												<input type="text" v-model="student.phoneNumber" placeholder="0700 000 000" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-envelope-o"></i>EMAIL</label>
												<input type="email" v-model="student.email" placeholder="email@host.com" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-bell-o"></i>RELIGION</label>
												<select v-model="student.religion">
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
									<h6 class="item-title"><i class="fa fa-user-secret"></i>PARENT INFO</h6>
									<div class="inner-item">
										<div class="dash-form">
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>Title</label>
												<input type="text" v-model="parent.title" placeholder="Title" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>Last NAME</label>
												<input type="text" v-model="parent.lastName" placeholder="Last Name" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-briefcase"></i>OCCUPATION</label>
												<input type="text" v-model="parent.occupation" placeholder="Occupation" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-phone"></i>CONTACT #</label>
												<input type="text" v-model="parent.contact1" placeholder="0700 000 000" />
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-3">
												<label><i class="fa fa-phone"></i>ALTERNATE CONTACT #</label>
												<input type="text" v-model="parent.contact2" placeholder="0700 000 000" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-envelope-o"></i>EMAIL</label>
												<input type="email" v-model="parent.email" placeholder="email@host.com" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-bell-o"></i>RELIGION</label>
												<select v-model="parent.religion">
													<option>-- Select --</option>
													<option>Buddhism</option>
													<option>Christian</option>
													<option>Hinduism</option>
												</select>
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-flag"></i>NATIONALITY</label>
												<select v-model="parent.nationality">
													<option>-- Select --</option>
													<option>Zimbabwean</option>
													<option>Canadian</option>
													<option>Indian</option>
												</select>
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-3">
												<label><i class="fa fa-home"></i>ADDRESS</label>
												<input type="text" v-model="parent.address" placeholder="Street Address" />
											</div>
											<div class="col-sm-3">
												
											</div>
											<div class="col-sm-3">
												
											</div>
											<div class="col-sm-3">
											</div>
											<div class="clearfix"></div>
								
										</div>
										<div class="clearfix"></div>
									</div>
									<div class="clearfix"></div>
								</div>
								<div class="dash-item">
									<h6 class="item-title"><i class="fa fa-user-secret"></i>HEALTH INFO</h6>
									<div class="inner-item">
										<div class="dash-form">
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MEDICAL AID</label>
												<select v-model="healthRecord.medicalAid">
													<option>-- Select --</option>
													<option>CISMAS</option>
													<option>First Mutual</option>
													<option>None</option>
												</select>
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-user-circle-o"></i>MEDICAL AID NUMBER</label>
												<input type="text" v-model="healthRecord.medicalAidNumber" placeholder="Your Medical Aid Number" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-briefcase"></i>DOCTOR</label>
												<input type="text" v-model="healthRecord.doctor" placeholder="Doctor's Name" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-phone"></i>DOCTOR CONTACT #</label>
												<input type="text" v-model="healthRecord.doctorContact" placeholder="0700 000 000" />
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-6">
												<label><i class="fa fa-phone"></i>ALLERGIES</label>
												
												<textarea type="text" v-model="healthRecord.allergies[0]" placeholder="E.g pollen allergy, fish allergy"></textarea>
											</div>
											<div class="col-sm-6">
												<label><i class="fa fa-envelope-o"></i>HEALTH NOTES</label>
												<textarea type="text" v-model="healthRecord.healthNotes" placeholder="Health notes..."></textarea>
											</div>
											
											
											<div class="clearfix"></div>
											
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
												<input type="text" v-model="student.regNumber" placeholder="PTH2017001" />
											</div>
											<div class="col-sm-3">
												<label class="clear-top-margin"><i class="fa fa-book"></i>CLASS</label>
												<select v-model="student.yearClass">
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
												<input type="text" v-model="student.lastSchool" placeholder="ABC SCHOOL" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-star"></i>LAST STD</label>
												<input type="text"  placeholder="4 STD" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-code"></i>MARKS OBTAINED</label>
												<input type="text" v-model="student.lastSchoolMarks" placeholder="76%" />
											</div>
											<div class="col-sm-3">
												<label><i class="fa fa-futbol-o"></i>SPORTS</label>
												<select v-model="student.sports[0]">
													<option>-- Select --</option>
													<option>Cricket</option>
													<option>Football</option>
													<option>Tenis</option>
												</select>
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-12">
												<a @click="submitForm($event)"><i class="fa fa-paper-plane"></i> SAVE</a>
											</div>
											<div class="clearfix"></div>
											<div v-if="showAlert" class="col-sm-12">
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

      showAlert: false,
      
      student: {
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
      parent: {
      	title: '',
      	lastName: '',
      	occupation: '',
      	contact1: '',
      	contact2: '',
      	email: '',
      	religion: '-- Select --',
      	nationality: '-- Select --',
      	address: ''
      	
      },
      healthRecord: {
    	medicalAid: '-- Select --',
    	medicalAidNumber: '',
    	allergies: [],
    	doctor: '',
    	doctorContact: '',
    	healthNotes: ''

    }

    }

  },

  methods: {
  	submitForm(event){
  		event.preventDefault();
  		console.log('Submit');
  		let data = {
  			validated: true,
  			student: this.student,
  			parent: this.parent,
  			healthRecord: this.healthRecord
  		}
  		this.axios.post("http://localhost:5000/admin/addStudent", data)
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
  		this.student = {
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
		      };
		this.parent = {
		      	title: '',
		      	lastName: '',
		      	occupation: '',
		      	contact1: '',
		      	contact2: '',
		      	email: '',
		      	religion: '-- Select --',
		      	nationality: '-- Select --',
		      	address: ''
		      	
		      };
		this.healthRecord = {
		    	medicalAid: '-- Select --',
		    	medicalAidNumber: '',
		    	allergies: [ ],
		    	doctor: '',
		    	doctorContact: '',
		    	healthNotes: ''

    			};

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