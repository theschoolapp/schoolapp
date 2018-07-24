<template>
  <div class="homePage">

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
              <a href="#" data-toggle="modal" data-target="#loginModal"><i class="fa fa-sign-in"></i>login</a>
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
                                    <li> <router-link to="/login"><i class="fa fa-user-secret"></i>ADMIN</router-link> </li>
                                    <li> <router-link to="/login"><i class="fa fa-user"></i>TEACHER</router-link> </li>
                                    <li> <router-link to="/login"><i class="fa fa-users"></i>PARENTS</router-link> </li>
                                    <li> <router-link to="/login"><i class="fa fa-child"></i>STUDENT</router-link> </li>
                                </ul>
                            </li>
                            <li><a href="contact.html"><i class="fa fa-phone-square"></i>CONTACT US</a></li>
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </nav>
            </div>
        </div>
    
        <div class="row">
            <div id="homeSlider" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#homeSlider" data-slide-to="0" class="active"></li>
                    <li data-target="#homeSlider" data-slide-to="1"></li>
          <li data-target="#homeSlider" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <!--Here they can put the text they want depending on the things the system provides-->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="/static/assets/img/slider/slide4.jpg" alt="slide1">
                        <div class="carousel-caption">
              <h4><i class="fa fa-star-o"></i>WE ARE BEST<i class="fa fa-star-o"></i></h4>
                            <h2>CHOOSE <span><i class="fa fa-trophy"></i>BEST</span> FOR YOUR CHILD</h2>
                            <p>We here at <strong>Prototype</strong> provides best education <br /> to your little one</p>
                            <a href="#"><i class="fa fa-paper-plane"></i>KNOW MORE</a>
                        </div>
                    </div>

                    <div class="item">
                        <img src="/static/assets/img/slider/slide5.jpg" alt="slide2">
                        <div class="carousel-caption">
              <h4><i class="fa fa-star-o"></i>WE ARE BEST<i class="fa fa-star-o"></i></h4>
                            <h2>LET YOUR CHILD <span><i class="fa fa-line-chart"></i>GROW</span></h2>
                            <p>We here at <strong>Prototype</strong> provides best education <br /> to your little one</p>
                            <a href="#"><i class="fa fa-paper-plane"></i>KNOW MORE</a>
                        </div>
                    </div>
          <div class="item">
                        <img src="/static/assets/img/slider/slide6.jpg" alt="slide2">
                        <div class="carousel-caption">
                            <h4><i class="fa fa-star-o"></i>WE ARE BEST<i class="fa fa-star-o"></i></h4>
                            <h2>GIVE <span><i class="fa fa-rocket"></i>BOOST</span> TO YOUR CHILD</h2>
              <p>We here at <strong>Prototype</strong> provides best education <br /> to your little one</p>
                            <a href="#"><i class="fa fa-paper-plane"></i>KNOW MORE</a>
                        </div>
                    </div>
                </div>

                <!-- Slide Controls -->
                <a class="left carousel-control" href="#homeSlider" role="button" data-slide="prev">
                    <span class="fa fa-arrow-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#homeSlider" role="button" data-slide="next">
                    <span class="fa fa-arrow-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    
    <!-- Principal Intro Section -->
    <div class="row principal-intro-row">
      <div class="container">
        <div class="col-sm-5">
          <img src="/static/assets/img/read.jpg" alt="Our Principal"/>
        </div>
        <div class="col-sm-7 principal-intro">
          <h6><i class="fa fa-star-o"></i><span>WE ARE BEST</span><i class="fa fa-star-o"></i></h6>
          <h3>About Prototype</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div>
            <a href="#" class="know-more-btn"><i class="fa fa-paper-plane"></i>KNOW MORE</a>
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
            <input type="text" placeholder="e.g. email@Prototype.com"/><a href="#"><i class="fa fa-paper-plane"></i></a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer Section -->
    <div class="row footer-row">
      <div class="container">
        <div class="school-logo">
          <i class="fa fa-graduation-cap"></i>
          <h3>PROTOTYPE</h3>
          <h6>BETTER WAY TO LEARN & GROW</h6>
        </div>
        <div class="col-md-4 col-sm-6 footer-item">
          <h5>CONTACT US</h5>
          <p><i class="fa fa-map-marker"></i>Address, City , Country</p>
          <p><i class="fa fa-mobile"></i> +27 8910000891</p>
          <p><i class="fa fa-envelope"></i>email@prototype.com</p>
        </div>
        <div class="col-md-2 col-sm-6 footer-item">
          <h5>QUICK LINKS</h5>
          <div class="quick-link-box">
            <a href="#"><i class="fa fa-graduation-cap"></i>Academics</a>
            <a href="#"><i class="fa fa-users"></i>Admission</a>
            <a href="#"><i class="fa fa-calendar"></i>Events</a>
            <a href="#"><i class="fa fa-thumbs-up"></i>Campus Life</a>
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
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>