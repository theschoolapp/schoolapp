<template>
  <div class="admin">

    Table Test
    <DataTable v-bind:table-data="dt" ></DataTable>


    <br></br>
    <button v-on:click="openModal()">Modal</button>

    <modal 
    name='hello' 
    :height="134" 
    :width="598"
    >
     
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"><i class="fa fa-trash"></i>DELETE STUDENT</h4>
          </div>
          <div class="modal-body">
            <div class="table-action-box">
              <a href="#" class="save"><i class="fa fa-check"></i>YES</a>
              <a href="#" class="cancel" data-dismiss="modal"><i class="fa fa-ban"></i>CLOSE</a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      
   
    </modal>

    
  </div>
</template>

<script>
import DataTable from './datatables/DataTable.vue';


export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dt: [
      {
        name: 'Tate',
        id: '234'
      },
      {
        name: 'Tello',
        id: '235'
      },
      {
        name: 'Taf',
        id: '236'
      }
      ]
    }
  },

  components: {
    DataTable
  },

  methods: {
    openModal() {
      this.$modal.show('hello');
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
