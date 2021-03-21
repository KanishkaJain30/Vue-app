<template>
  <div class="container">
  
  <v-client-table class="data-table" striped hover :data="tableData"
          :selected-to="selectedRow"
          :columns="columns" 
          :options="options" 
          >
      </v-client-table >
      
  </div>
</template>

<script>

export default {
  name: "VueDataTable",
    data() {
        return {
            columns: ['id', 'Problem_Name', 'Date','Result', 'Time_Taken', 'Memory_Taken'],
            tableData: [],
            options: {
                headings: {
                    id: 'ID',
                    'Problem_Name': 'Problem Name',
                    'Date' : 'Date',
                    Result:'Result',
                    Time_Taken: 'Time Taken',
                    Memory_Taken: 'Memory Taken'
                    
                   
                },
                sortable: ['Time_Taken', 'Memory_Taken'],
                filterable: ['Problem_Name', 'id','Result']
            }
        }
    },
    mounted() {
       
        this.axios.get('http://localhost:4000/songs').then(res => {
            this.tableData = res.data;
            this.tableData.map(x=>{
              x.Time_Taken=parseInt(x.Time_Taken);
              x.Memory_Taken=parseInt(x.Memory_Taken);
            })
             
              

        })
    }
 
}
</script>

<style>
#app {
  width: 100%;
  margin-top: 0px; 
}

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
  border: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.12);

}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
 
}
th{
  padding: 15px 5px;
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-radius: 2px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  line-height:20px;
  margin-top:50px;
}

.data-table{
 border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: 'Pangolin', cursive;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    color:black;
}

.data-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.data-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.data-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.data-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.data-table tbody{
  color:black;
}
.data-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

td, th {
  padding: 15px 5px;
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-radius: 2px;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 30px;
  line-height: 30px;
  display: block;
  margin: auto;
  text-align: center;
  
  
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
.table::after{
 dispaly:none;
 opacity:0;
}
</style>