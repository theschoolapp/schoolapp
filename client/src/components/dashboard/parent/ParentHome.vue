<template>
  <div class="adminHome">

  	<div class="container-fluid vue-home-container">
					<div class="row">
						<div class="col-lg-12 clear-padding-xs">
							<h5 class="page-title"><i class="fa fa-home"></i>HOME</h5>
							<div class="section-divider"></div>
							<div class="dashboard-stats">
								<div class="col-sm-6 col-md-3">
									<div class="stat-item">
										<div class="stats">
											<div class="col-xs-8 count">
												<h1>{{dashData.nS}}</h1>
												<p>STUDENTS</p>
											</div>
											<div class="col-xs-4 icon">
												<i class="fa fa-users ex-icon"></i>
											</div>
											<div class="clearfix"></div>
										</div>
										<div class="status">
											<p class="text-ex"><i class="fa fa-pencil-square-o"></i>10 Absent Today</p>
										</div>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="stat-item">
										<div class="stats">
											<div class="col-xs-8 count">
												<h1>{{dashData.nT}}</h1>
												<p>TEACHERS</p>
											</div>
											<div class="col-xs-4 icon">
												<i class="fa fa-user-secret danger-icon"></i>
											</div>
											<div class="clearfix"></div>
										</div>
										<div class="status">
											<p class="text-danger"><i class="fa fa-exclamation-triangle"></i>5 On Leave Today</p>
										</div>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix visible-sm"></div>
								<div class="col-sm-6 col-md-3">
									<div class="stat-item">
										<div class="stats">
											<div class="col-xs-8 count">
												<h1>{{dashData.nE}}</h1>
												<p>EVENTS</p>
											</div>
											<div class="col-xs-4 icon">
												<i class="fa fa-flag look-icon"></i>
											</div>
											<div class="clearfix"></div>
										</div>
										<div class="status">
											<p class="text-look"><i class="fa fa-clock-o"></i>1 Event tomorrow</p>
										</div>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="stat-item">
										<div class="stats">
											<div class="col-xs-8 count">
												<h1>{{dashData.nM}}</h1>
												<p>MESSAGES</p>
											</div>
											<div class="col-xs-4 icon">
												<i class="fa fa-envelope-o success-icon"></i>
											</div>
											<div class="clearfix"></div>
										</div>
										<div class="status">
											<p class="text-success"><i class="fa fa-folder-open-o"></i>10 Unread messages</p>
										</div>
										<div class="clearfix"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 clear-padding-xs">
							<div class="col-sm-8">
								<div>
									<div class="my-msg dash-item">
										<h6 class="item-title"><i class="fa fa-bar-chart"></i>STUDENT ATTENDENCE TREND</h6>
										<div class="inner-item">
											<div class="summary-chart">
												<canvas id="studentAttendenceLine" height="100px"></canvas>
												<div class="chart-legends">
													<span class="red">ABSENT</span>
													<span class="orange">ON LEAVE</span>
													<span class="green">PRESENT</span>
												</div>
												<div class="chart-title">
													<h6 class="bottom-title">STUDENT ATTENDENCE TREND</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div>
									<div class="my-msg dash-item">
										<h6 class="item-title"><i class="fa fa-calendar"></i>TODAY'S TASK</h6>
										<div class="inner-item">
											<div class="timetable-item">
												<div class="col-xs-3 clear-padding">
													<p><span class="time">10 AM</span></p>
												</div>
												<div class="col-xs-9">
													<p class="title">Teacher Meeting</p>
													<p class="sent-by"><i class="fa fa-map-marker"></i> ROOM NO - 601</p>
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="timetable-item">
												<div class="col-xs-3 clear-padding">
													<p><span class="time">11 AM</span></p>
												</div>
												<div class="col-xs-9">
													<p class="title">Campus Tour</p>
													<p class="sent-by"><i class="fa fa-map-marker"></i> CAMPUS</p>
													
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="timetable-item">
												<div class="col-xs-3 clear-padding">
													<p><span class="time">12 PM</span></p>
												</div>
												<div class="col-xs-9">
													<p class="title">Parent Meeting</p>
													<p class="sent-by"><i class="fa fa-map-marker"></i> ROOM NO - 601</p>
													
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="timetable-item">
												<div class="col-xs-3 clear-padding">
													<p><span class="time">01 PM</span></p>
												</div>
												<div class="col-xs-9">
													<p class="title">Guest Lecture</p>
													<p class="sent-by"><i class="fa fa-map-marker"></i> ROOM NO - 601</p>
													
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="timetable-item">
												<div class="col-xs-3 clear-padding">
													<p><span class="time">02 PM</span></p>
												</div>
												<div class="col-xs-9">
													<p class="title">Teacher Meeting</p>
													<p class="sent-by"><i class="fa fa-map-marker"></i> ROOM NO - 601</p>
												</div>
												<div class="clearfix"></div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 clear-padding-xs">
							<div class="col-sm-8">
								<div>
									<div class="my-msg dash-item">
										<h6 class="item-title"><i class="fa fa-bar-chart"></i>TODAY'S STUDENT ATTENDENCE</h6>
										<div class="inner-item">
											<div class="summary-chart">
												<canvas id="studentAttendenceBar" height="100px"></canvas>
												<div class="chart-legends">
													<span class="red">ABSENT</span>
													<span class="orange">ON LEAVE</span>
													<span class="green">PRESENT</span>
												</div>
												<div class="chart-title">
													<h6 class="bottom-title">STUDENT ATTENDENCE BAR</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div>
									<div class="my-msg dash-item">
										<h6 class="item-title"><i class="fa fa-pie-chart"></i>TEACHER ATTENDENCE</h6>
										<div class="chart-item">
											<canvas id="studentPie" height = 250px></canvas>
											<div class="chart-legends">
												<span class="red">ABSENT</span>
												<span class="orange">PRESENT</span>
												<span class="green">LEAVE</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 clear-padding-xs">
							<div class="col-md-12">
								<div class="my-msg dash-item">
									<h6 class="item-title"><i class="fa fa-bullhorn"></i>ANNOUNCEMENTS</h6>
									<div class="inner-item dashboard-tabs">
										<ul class="nav nav-tabs">
											<li class="active">
												<a  href="#1" data-toggle="tab"><i class="fa fa-graduation-cap"></i><span>ACADEMICS</span></a>
											</li>
											<li>								
												<a href="#2" data-toggle="tab"><i class="fa fa-users"></i><span>ADMISSIONS</span></a>
											</li>
											<li>								
												<a href="#3" data-toggle="tab"><i class="fa fa-trophy"></i><span>SPORTS</span></a>
											</li>
										</ul>
										<div class="tab-content">
											<div class="tab-pane active" id="1">
												<div class="announcement-item">
													<h5>Guest lecture on fine arts by Smith.<span class="new">New</span></h5>
													<h6><i class="fa fa-clock-o"></i>06-24-2017, 13:34</h6>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
													<div class="posted-by">
														<p>Thanks,</p>
														<h6>John Doe, Principal</h6>
													</div>
												</div>
												<div class="announcement-item">
													<h5>Guest lecture on fine arts by Smith</h5>
													<h6><i class="fa fa-clock-o"></i>06-24-2017, 13:34</h6>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
													<div class="posted-by">
														<p>Thanks,</p>
														<h6>John Doe, Principal</h6>
													</div>
												</div>
											</div>
											<div class="tab-pane" id="2">
												<div class="announcement-item">
													<h5>2</h5>
												</div>
											</div>
											<div class="tab-pane" id="3">
												<div class="announcement-item">
													<h5>3</h5>
												</div>
											</div>
										</div>
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
import Chart from 'chart.js';

export default {
  name: 'ParentHome',
  data () {
    return {
      dashData: {
      	nT: 0,
      	nS: 0,
      	nE: 0,
      	nM: 0
      },
      chartData: {}
    }
  },

  methods: {
  	createCharts(){
// Chart 1
  		const ctx = document.getElementById('studentAttendenceBar');
  		const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["STD 5", "STD 6", "STD 7", "STD 8", "STD 9", "STD 10"],
			datasets: [
					{
						data: [23, 21, 18 , 19, 15, 29],
						backgroundColor: 'rgba(255, 118, 118, 1)',
						borderWidth: 0
					},
					{
						data: [15, 20, 21, 22, 24, 28],
						backgroundColor:'rgba(255, 195, 109, 1)',
						borderWidth: 0
					},
					{
						data: [26, 25, 23, 26, 26, 28],
						backgroundColor: 'rgba(39, 174, 96, 1)',
						borderWidth: 0
					}
				]
				},
				options: {
					scales: {
						xAxes: [{
							ticks: {
								beginAtZero:true
							},
							gridLines: {
								display:false
							}
						}],
						yAxes: [{
							gridLines: {
								display:false
							},
							//barPercentage: 0.5,
							categoryPercentage: 0.5,
							ticks: {
								beginAtZero:true
							}
						}]
					},
					legend: {
						display: false
					}
				}
			});
// Chart 2
		const ctx2 = document.getElementById('studentAttendenceLine');
		const myChart2 = new Chart(ctx2, {
		type: 'line',
		data: {
			labels: ["21 Jul", "22 Jul", "23 Jul", "24 Jul", "25 Jul", "26 Jul", "27 Jul"],
			datasets: [
				{
					data: [10, 11, 12, 9, 8, 15, 11],
					borderColor: "#FF7676",
					fill: false
				},
				{
					data: [15, 11, 14, 5, 11, 4, 9],
					borderColor: "#FFC36D",
					fill: false
				},
				{
					data: [25, 21, 24, 25, 21, 20, 24],
					borderColor: "#27AE60",
					fill: false
				},
			]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true
					},
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 0.2,
					categoryPercentage: 0.5,
					ticks: {
						beginAtZero:true
					}
				}]
			},
			legend: {
				display: false
			}
		}
	});


// Chart 3

	var myChart3 = new Chart( $('#studentPie'), {
		type: 'pie',
		data: {
			labels: ["Absent", "Leave", "Present"],
			datasets: [{
			  backgroundColor: [
				"#FF7676",
				"#FFC36D",
				"#27AE60"
			  ],
			  data: [20, 10, 70]
			}]
		},
		options: {
			legend: {
				display: false
			}
		}
	});

  	},

  	getDashData(){

  		let dashUrl = 'http://localhost:5000/admin/getDashboard';
  		let reqObj = { adminId: '5b51b0c4d3f4bcbda8a133e7'};
  		this.axios.post(dashUrl, reqObj ).then(res => {
              console.log(res.data);
              this.dashData.nT = res.data.nT;
              this.dashData.nS = res.data.nS;
              this.dashData.nE = res.data.nE;
              this.dashData.nM = res.data.nM;
            }).catch( err =>{
              console.log(err);
            });
  	}

  },

  created() {
    this.getDashData();
    console.log("I'm up...")
  },

  mounted() {
	  this.createCharts();
	  
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.adminHome {

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