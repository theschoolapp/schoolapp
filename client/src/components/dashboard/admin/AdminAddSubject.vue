<template>
  <div class="admin">
    Add Subject
  </div>
</template>

<script>
export default {
  name: 'AdminAddSubject',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      announcement: {
        msg :  "",
        title :  "",
        from :  "",
        forTeachers : false,
        forStudents : false,
        id :  ""
      }
    }
  }
}
</script>


<style scoped>

.admin {

  height: calc(100vh - 46px);
  overflow-y: scroll;
  top: 46px !important;
  background-color: #f7f7f7;
}

.vue-page2-container {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 20px !important;

}

.page-title {
  color: #333;
  text-align: left;
}

</style>
