<template>
  <div class="loginPage">
    
     <div class="row nav-row trans-menu">
            <div class="container nav-container">
				<div class="top-navbar">
					<div class = "pull-right">
						<div class="top-nav-social pull-left">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								<a href="#"><i class="fa fa-google-plus"></i></a>
								<a href="#"><i class="fa fa-linkedin"></i></a>
						</div>
						<div class="top-nav-login-btn pull-right">
							<a href="#" data-toggle="modal" data-target="#loginModal"><i class="fa fa-sign-in"></i>LOGIN</a>
						</div>
						<!--<div class="top-navbar-search pull-right">
							<i class="fa fa-search"></i>
							<input type = "text" placeholder = "Search"/>
						</div>-->
					</div>
					<div class = "clearfix"></div>
				</div> 
				<div class = "clearfix"></div>
                <nav id="pathshalaNavbar" class="navbar navbar-default" role="navigation">
                    <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#PrototypeNavbarCollapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html">Prototype</a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="PrototypeNavbarCollapse">
                        <ul class="nav navbar-nav">
                            <li><a href="index.html"><i class="fa fa-home"></i>HOME</a></li>
							<li class="dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle"><i class="fa fa-graduation-cap"></i>ACADEMICS <b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#"><i class="fa fa-certificate"></i>UPPER</a></li>
                                    <li><a href="#"><i class="fa fa-child"></i>MIDDLE</a></li>
									<li><a href="#"><i class="fa fa-puzzle-piece"></i>LOWER</a></li>
									<li><a href="#"><i class="fa fa-cube"></i>PRESCHOOL</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="fa fa-users"></i>ADMISSIONS</a></li>
                            <li><a href="events.html"><i class="fa fa-calendar-check-o"></i>EVENTS</a></li>
							<li class="dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle"><i class="fa fa-dashboard"></i>DASHBOARD <b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="dashboard/admin-dashboard.html"><i class="fa fa-user-secret"></i>ADMIN</a></li>
									<li><a href="dashboard/teacher-dashboard.html"><i class="fa fa-user"></i>TEACHER</a></li>
                                    <li><a href="dashboard/student-dashboard.html"><i class="fa fa-child"></i>STUDENT</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html"><i class="fa fa-phone-square"></i>CONTACT US</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
		
		<!-- Page Title Section -->
		<div class="row page-title page-title-about">
			<div class="container">
				<h2><i class="fa fa-sign-in"></i>SIGN IN</h2>
				<p>We here at <strong>Prototype</strong> provides best education <br /> to your little one</p>
			</div>
		</div>
		
		<!-- contact row -->
		<div class="row contact-row">
			<div class="container">
				<div class="contact-form col-sm-6">
					<div class="col-xs-12">
						<h3><i class="fa fa-edit"></i>Sign In To Your Account.</h3>
					</div>
					<div class="clearfix"></div>
					<div class="col-xs-12">
						<label>EMAIL</label>
						<input type="email" v-model="login.username" placeholder="Email or Username" class="form-control">
					</div>
					<div class="col-xs-12">
						<label>PASSWORD</label>
						<input type="password" v-model="login.password" placeholder="Password" class="form-control">
					</div>
					
					<div class="col-xs-12">
						<a href="#" v-on:click="accountLogin($event)" class="submit-contact-form">SIGN IN</a>
					</div>
					<div class="clearfix"></div>
				</div>


				<div class="col-sm-6 address-box">
					<h3><i class="fa fa-phone"></i>Don't Have An Account?</h3>
					<div class="address-body">
						<div class="address-item">
							<div class="col-xs-1">
								<i class="fa fa-map-marker"></i>
							</div>
							<div class="col-xs-11">
								<p>Prototype Education Limited. 9280 Sunny Treasure Canyon, Eagle River, Prince Edward Island, C9K-2M1</p>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="address-item">
							<div class="col-xs-1">
								<i class="fa fa-envelope-o"></i>
							</div>
							<div class="col-xs-11">
								<p>example@prototype.com</p>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="address-item">
							<div class="col-sm-1">
								<i class="fa fa-phone"></i>
							</div>
							<div class="col-xs-11">
								<p>+91 1234567890</p>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="address-item no-border">
							<div class="col-xs-1">
								<i class="fa fa-clock-o"></i>
							</div>
							<div class="col-xs-11">
								<p>MON to FRI: 09:00 AM - 03:00 PM </p>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Know More Info & Admission apply row -->
		<div class="row apply-know-row">
			<div class="container">
				<div class="col-sm-6 admission-row">
					<h3>ADMISSIONS ARE OPEN</h3>
					<p>It is a long established fact that a reader will be distracted by the content of a page when looking at its layout.</p>
					<a href="#"><i class="fa fa-edit"></i>APPLY NOW</a>
				</div>
				<div class="col-sm-6 info-row">
					<h3>HAVE ANY QUERIES?</h3>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<div class="input-wrapper">
						<input type="text" placeholder="e.g. email@prototype.com"/><a href="#"><i class="fa fa-paper-plane"></i></a>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Footer Section -->
		<div class="row footer-row">
			<div class="container">
				<div class="school-logo">
					<i class="fa fa-graduation-cap"></i>
					<h3>Prototype</h3>
					<h6>BETTER WAY TO LEARN & GROW</h6>
				</div>
				<div class="col-md-4 col-sm-6 footer-item">
					<h5>CONTACT US</h5>
					<p><i class="fa fa-map-marker"></i>Address, City, Country</p>
					<p><i class="fa fa-mobile"></i> +27 8910000891</p>
					<p><i class="fa fa-envelope"></i>email@prototype.com</p>
				</div>
				<div class="col-md-2 col-sm-6 footer-item">
					<h5>QUICK LINKS</h5>
					<div class="quick-link-box">
						<a href="#"><i class="fa fa-graduation-cap"></i>ACADEMICS</a>
						<a href="#"><i class="fa fa-users"></i>ADMISSION</a>
						<a href="#"><i class="fa fa-calendar"></i>EVENTS</a>
						<a href="#"><i class="fa fa-thumbs-up"></i>CAMPUS LIFE</a>
					</div>
				</div>
				<div class="clearfix visible-sm"></div>
				<div class="col-md-3 col-sm-6 footer-item">
					<h5>SCHOOL TIMINGS</h5>
					<p><i class="fa fa-clock-o"></i> MON - FRI 9:00 AM - 3:00 PM</p>
					<p><i class="fa fa-clock-o"></i> SAT 9:00 AM - 1:00 PM</p>
				</div>
				<div class="col-md-3 col-sm-6 footer-item">
					<h5>SUBSCRIBE</h5>
					<div class="footer-subscribe">
						<i class="fa fa-envelope"></i></a><input type="text" placeholder="example@Prototype.com" />
					</div>
					<a href="#" class="subscribe-link"><i class="fa fa-paper-plane"></i>SUBMIT</a>
				</div>
			</div>
			<div class="footer-social-row">
				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-google-plus"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
			</div>
		</div>
		
		
		<!-- Login Modal -->
		<!-- Modal -->
		<div class="modal fade" id="loginModal" role="dialog">
			<div class="modal-dialog modal-sm">
				<div class="modal-content login-modal">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title"><i class="fa fa-sign-in"></i>LOGIN</h4>
					</div>
					<div class="modal-body">
						<div>
							<label><i class="fa fa-user"></i>USERNAME/EMAIL</label>
							<input class="form-control" type="text" placeholder="Username/Email">
						</div>
						<div>
							<label><i class="fa fa-key"></i>PASSWORD</label>
							<input class="form-control" type="password" placeholder="Password">
						</div>
						<a href="#" class="forgot-link">FORGOT PASSWORD?</a>
						<a href="#" class="login-link"><i class="fa fa-sign-in"></i>LOGIN</a>
					</div>
				</div>
			</div>
		</div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      login: {
      	password: '',
      	username: ''
      }
    }
  },
  methods: {
  	accountLogin(event) {
            if(event){
              event.preventDefault();
              console.log(event);
            }
            let url = "http://localhost:5000/accounts/signIn";
            this.axios({
              method: 'post',
              url: url,
              data: this.login,
              params: {
                include: 'user'
              }
            })
            .then(res => {
              console.log(res.data);
              if(res.data.accountType == 'admin'){
              	this.$router.push('/adminHome');
              }
              

            }).catch( err =>{
              console.log(err);
              this.error = err;
            });
            
       }
  }
}
</script>

<style scoped>
	@import '../../static/assets/css/style.css'
</style>
