<template>
  <div id="bg-dark">
  
  
  <div class="container">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">Login</div>
       <div class="alert alert-warning" v-if="loginError">Invalid login details</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="1">Username</label>
            <input class="form-control" v-model="username" type="text" aria-describedby="emailHelp" placeholder="Enter username">
          </div>
          <div class="form-group">
            <label for=" ">Password</label>
            <input class="form-control" type="password"  v-model="password" placeholder="Password">
          </div>
        
         <button @click="loginBtn" class="btn btn-primary btn-block">Login</button>
        </form>
        
      </div>
    </div>
  </div>
  </div>

  
</template>

<script>
import { login, setAccessToken, setUserProfile } from '@/modules/authentication'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      loginError: false
    }
  },
  methods: {
    loginBtn () {
      login({
        username: this.username,
        password: this.password
      }).then((response) => {
        setAccessToken(response.data.token)
        setUserProfile(response.data.user)
        this.$router.replace({ path: '/' })
      })
      .catch(() => {
        this.loginError = true
      })
    }
  }
}
</script>

<style>
  .login-card {
    width: 80%;
    max-width: 400px;
    padding: 10px;
    margin: 60px auto 0 auto;
  }

  label, button {
    margin-top: 20px;
  }
</style>
