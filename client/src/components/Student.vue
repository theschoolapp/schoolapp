<template>
  <div class="hello">
    <h1>hello child</h1>

    <div>
  {{timetable}} ,{{examTimeTable}} ,{{marks}} ,{{fees}}
    </div>
  </div>
</template>
<script>


import axios from '@/modules/axios'
export default {
  name: 'Dashboard',
  mounted () {
 //get time table
   axios.get('/timetable').then((response) => (this.timetable= response.data))
 //get exam-time-table
   axios.get('/exmasTimeTable').then((response) => (this.examTimeTable= response.data.value))
 //get marks for each subject
   axios.get('').then((response) => (this.marks= response.data.value))
 //get fincance record
   axios.get('').then((response) => (this.fees= response.data.value))
 //get assignement
    axios.get('').then((response) => (this.assignment = response.data.value))
    
  },
  data () {
    return {
      timetable:timetable
      ,examTimeTable:examTimeTable
      ,marks:marks,
      fees:fees,
      assignment:assignment

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
