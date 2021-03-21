import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ClientTable } from 'vue-tables-2'
import App from './App.vue'
import ProblemShow1 from './ProblemShow.vue'
import submissions from './components/VueDataTable.vue'
import BootstrapVue from "bootstrap-vue";


//<vue-data-table></vue-data-table>
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ClientTable);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/submissions/:problemId', component:ProblemShow1 },
    {path:'/submissions',component:submissions},
    
  ],
  mode :'history'
});

new Vue({
  el:'#app',
  router,
  render: h => h(App)
});



