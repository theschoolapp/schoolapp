<template>
  <div class="hello">
    <h1>hello parent</h1>
    <p>prent is here</p>
  </div>
</template>

<script>

import axios from '@/modules/axios'
export default {

  mounted(){

    //get fees for his child
    axios.get('').then((response) => (this.fees = response.data.value))
    //get child marks
    
    axios.get('').then((response) => (this.marks = response.data.value))
    //get  
    axios.get('').then((response) => (this.attendence = response.data.value))
  },

  data (){
        return{

          fees:0,
          marks: marks ,
          attendence:attendence
          
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
