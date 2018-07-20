<template>

<div class="mainBody container">
    <div class="hello">
      <h1>Axios Requests</h1>
      <p>...calls to and responses from the api...</p>
    </div>

    <div class="hello">
      <h5 class="text-muted">Login Requests</h5>
      
    </div>


    <div class="well request-section">
      <b>Request : </b><em>Login</em>
      <br></br>
      <form>
        <div class="form-group">
          <label for="adminEmail">Email/Username</label>
          <input type="email" v-model="login.username" class="form-control" id="adminEmail" placeholder="Email or Username">
        </div>
        <div class="form-group">
          <label for="adminPassword">Password</label>
          <input type="password" v-model="login.password" class="form-control" id="adminPassword" placeholder="Password">
        </div>
        <br></br>
        <button type="submit" class="btn btn-default" v-on:click="accountLogin($event)">Submit</button>
      </form>
      <div v-bind:class="{ hide: hideRes }" >
        <br></br>
        <div class="responseWell">
          <div class="hello">
            <p><b>Credentials Sent</b></p>
          <p>Email : {{login.username}},</p>
          <p>Password : {{login.password}}</p>
          </div>
          <br></br>
          {{resData}}
        </div>
      </div>
    </div>


<div class="hello">
      <h5 class="text-muted">Get Requests</h5>
      
    </div>


     <div class="well request-section">
      <b>Request : </b><em>Get Requests</em>
      <br></br>
      <form>
        <div class="form-group">
          <label for="requestUrl">Request Url</label>
          <input v-on:focus="getFocus()" type="text" v-model="getUrl" class="form-control" id="requestUrl" placeholder="-> http://localhost:5000/">
        </div>
        
        <br></br>
        <button type="submit" class="btn btn-default" v-on:click="getReq($event)">Submit</button>
      </form>
      <div v-bind:class="{ hide: hideRes2 }" >
        <div class="hello">
          <p>Response Time</p>
          <p><b>{{respTime}}</b><small>ms</small></p>
        </div>
        <br></br>
        <div class="responseWell">
          {{resData}}
         
        </div>
      </div>
    </div>


    <div class="hello">
      <h5 class="text-muted">Post Requests</h5>
      
    </div>


     <div class="well request-section">
      <b>Request : </b><em>Create New Student + Account</em>
      <br></br>
      <form>
        <div class="form-group">
          <label for="requestUrl">Request Url</label>
          <input v-on:focus="getFocus()" type="text" v-model="getUrl" class="form-control" id="requestUrl" placeholder="-> http://localhost:5000/">
        </div>
        
        <br></br>
        <button type="submit" class="btn btn-default" v-on:click="getReq($event)">Submit</button>
      </form>
      <div v-bind:class="{ hide: hideRes2 }" >
        <div class="hello">
          <p>Response Time</p>
          <p><b>{{respTime}}</b><small>ms</small></p>
        </div>
        <br></br>
        <div class="responseWell">
          {{resData}}
         
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'AllRequests',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hideRes: true,
      hideRes2: true,
      login: {
        username: '',
        password: ''
      },
      resData: {},
      error: {},
      getUrl: "",
      respTime: 0
    }
  },
  methods: {
       accountLogin(event) {
            if(event){
              event.preventDefault();
              console.log(event);
            }
            let url = "http://localhost:5000/accounts/signIn";
            this.axios.post(url, this.login).then(res => {
              console.log(res.data);
              this.resData = res.data;
              this.hideRes = false;

            }).catch( err =>{
              console.log(err);
              this.error = err;
            });
            
       },
       getReq(event) {
            
            if(event){
              event.preventDefault();
              console.log(event);
            }
            this.hideRes2 = false;
            let myTimer = ()=>{this.respTime += 1;};
            let timer = setInterval(myTimer, 1);

            if(this.getUrl != ""){

              this.axios.get(this.getUrl).then(res => {
              console.log(res.data);
              this.resData = res.data;
              
              clearInterval(timer);

            }).catch( err =>{
              console.log(err);
              this.error = err;
            });

            }else{

              alert("Enter a url...");
            }
            
            
       },
       getFocus(){
        this.getUrl = "http://localhost:5000/";
       }
    }





}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  text-align: center;
}

.request-section {
  text-align: left;
}
.responseWell {
  background-color: white;
  border-radius: 10px;
  min-height: 100px;
  padding: 20px;
  border: 1px solid lightgrey;
}

</style>