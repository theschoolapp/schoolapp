<template>
  <div class="hello">
    <h1>hello tell0</h1>
        
        <form @submit.native="preventDefault"> 
            <div class="alert alert-danger" v-if="error">Failed to register a birth{{error}}</div>
             <div class="form-group" >
                <input type="text" v-model="Timeslots.subject"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
             <div class="form-group" >
                <input type="text" v-model="Timeslots.time"   class="form-control input-sm" placeholder="First Name"  required>
  
            </div>
            
            <input  type="button" value="Register" @click="registerTimeslots" class="btn btn-danger btn-block"  >
             </form>
  </div>
</template>

<script>
import axios from '@/modules/axios'

export default {
  name: 'timeslots',
  data () {
    return {
      Timeslots: {
        'subject': '',
        'time': '',
       
    
       
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
    registerTimeslots () {
      this.success = this.error = false
      axios.post('/timeslot', {
        ...this.$data.Timeslots
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
