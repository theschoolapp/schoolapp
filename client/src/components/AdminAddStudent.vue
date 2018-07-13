<template>
  <div class="hello">
    <h1>hello tell0</h1>
        
        <form @submit.native="preventDefault"> 
            <div class="alert alert-danger" v-if="error">Failed to register a student{{error}}</div>
             <div class="form-group" >
                <input type="text" v-model="Student.firstname"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
             <div class="form-group" >
                <input type="text" v-model="Student.surname"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
             <div class="form-group" >
                <input type="text" v-model="Student.mark"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
            <input value="Register" @click="registerStudent" class="btn btn-danger btn-block"  >
             </form>
              <button class="btn btn-primary" @click="$router.push(`/parent/${Student.id}`)" >
  </div>
</template>

<script>
import axios from '@/modules/axios'

export default {
  name: 'Student',
  data () {
    return {
      Student: {
        'firstname': '',
        'surname': '',
        'mark': ''
    
       
      },
      success: false,
      error: false
    }
  },
  methods: {
    preventDefault (e) {
      console.log(e)
      e.preventDefault()
    }
    ,
    registerStudent () {
      this.success = this.error = false
      axios.post('/student', {
        ...this.$data.Student
      }).then((response) => {
        this.success = true
      })
      .catch(error => {
        console.log(JSON.stringify(error))
        this.error = true
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
