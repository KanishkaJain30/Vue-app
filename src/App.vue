<template>
  <div id="app">
    <header class="main-header">
        <div class="showcase container">
              <div class="row">
                  <div class="col s12 m12 center">
                      <h1>Welcome to our App</h1>
                      <h3>Build for the Future</h3>
                  </div>
              </div>
        </div>
          
        </header>

    <router-view></router-view>
    
    
  </div>
  
</template>

<script>
import VueDataTable from './components/VueDataTable.vue'
export default {
  name: 'app',
  components: {
    VueDataTable,
  }
}
</script>

<style>

.main-header .showcase {
    padding-top: 100px;
}
.main-header {
    background: url(./images/background1.png) bottom center;
    background-size: cover;
    min-height: 300px;
    color:#fff;
    z-index:0;
    font-family: Roboto;
   
}

@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}



.row .col.push-s12 {
  left: 100%;
}

 .row .col.m12 {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.offset-m12 {
    margin-left: 100%;
  }
  .row .col.pull-m12 {
    right: 100%;
  }
  .row .col.push-m12 {
    left: 100%;
  }
  .center, .center-align {
  text-align: center;
}
</style>