<template>
  <div class="hello">
    <h1>hello tell0</h1>
        
        <form @submit.native="preventDefault"> 
            <div class="alert alert-danger" v-if="error">Failed to register a exmas{{error}}</div>
             <div class="form-group" >
                <input type="text" v-model="Mark.subject"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
             <div class="form-group" >
                <input type="text" v-model="Mark.student_id"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
             <div class="form-group" >
                <input type="text" v-model="Mark.mark"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
        <input value="Register" @click="addMarks" class="btn btn-danger btn-block"  >
             </form>
  </div>
</template>

<script>
import axios from '@/modules/axios'

export default {
  name: 'Mark',
  data () {
    return {
      Mark: {
        'student_id':'',
        'subject':'',
        'mark':""
    
       
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
    addMarks () {
      this.success = this.error = false
      axios.post('/student/{}/marks', {
        ...this.$data.Marks
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
