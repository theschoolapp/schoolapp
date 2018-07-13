<template>
  <div class="hello">
    <h1>hello  admin</h1>

    <div>{{ studentPresent }} student present</div>
    <div>{{ teachersPresent }} student absent</div>
     <div>{{ events }} evenyts </div>
    <div>{{ messages }} messages</div>
     <div>{{studentAttend }} student absent</div>
    <div>{{task.name}} 
      <br> 
      {{task.description}}
    </div>
  </div>
</template>

<script>
import axios from '@/modules/axios'
export default  {
  name:'Admin',
  mounted(){
   //get total no# of students present and absent
axios.get('/students/count').then((response) => (this.studentPresent = response.data.value))
   //get total numner of  teachers present and on leave
axios.get('/teachers/count').then((response) => (this.teachersPresent = response.data.value))
   //total events 
   axios.get('/events/count').then((response) => (this.events = response.data.value))
   //total messages
   axios.get('/messages/count').then((response) => (this.messages = response.data.value))
   //tasks
   axios.get('/tasks/').then((response) => (this.tasks = response.data.value))
   //get attendex 
   axios.get('/students/attendance/count').the(res=>(this.studentAttend = res.data.value))
  },

  data (){
        return{

          studentPresent:0,
          studentAttend : 0,
          teachersPresent:0 ,
          events:0,
          messages: 0,
          tasks: tasks

        }
  }

}
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
