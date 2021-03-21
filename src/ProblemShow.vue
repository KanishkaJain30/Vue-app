<template>
<div id ="ProblemShow">

<table class="data-table">
<thead>
<tr>
<th>Problem Name</th>
<th>Date</th>
<th>Result</th>
<th>Time Taken</th>
<th>Memory Taken</th>
</tr>
</thead>
<tr>
<td>{{row.Problem_Name}}</td>
<td>{{row.Date}}</td>
<td>{{row.Result}}</td>
<td>{{row.Time_Taken}}</td>
<td>{{row.Memory_Taken}}</td>
</tr>
</table>

<textarea type="textarea"  id ="text" ref="txt" class="txt pre-formatted"  >
 #include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main()
{
int t;
cin>>t;
while(t--)
{
int n;
cin>>n;
int a[n];
int b[101]={0};
vector<int>v;
for(int i=0;i<n;i++)
{
cin>>a[i];
int x=a[i];
if(b[a[i]]==0)
 a[i]=-1;
 b[x]++;
}
}
return 0;
</textarea>

 

</div>

</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/mode/sql/sql.js";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "./components/sql-hint.css";
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
 let temp;
 
export default {
   
  data()
  {
    return{
        row:[],
    }
  },



  mounted() {
        code: 'const a = 10',
        this.editor = CodeMirror.fromTextArea(this.$refs.txt, {
      tabSize: 4,
      mode: "C++",
      theme: "panda-syntax",
      lineNumbers: true,
      line: true,
      lineWrapping: true,
      hintOptions: {
        completeSingle: false,
        hint: this.hint
      },
      extraKeys: {
        "Ctrl-Space": editor => {
          editor.showHint();
        }
      }
    });
    this.editor.on("keypress", editor => {
      editor.showHint();
    });
        const x=this.$route.params.problemId
         this.axios.get(`http://localhost:4000/songs/${x}`).then(res => {
            this.row = res.data;
            this.code=this.row.code;
            console.log(this.code);
         

        })
        
      
    },
    
  }


</script>

<style>
.pre-formatted {
  white-space: pre;
  min-width: 100px;
  max-width:800px;
  background-color:8BF6FF;
  margin-left:10%;
  border: 1px groove black;
}


h:nth-child(3) {
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
    src:@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap');
    min-width: 1000px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width:100%;
}

.data-table thead tr {
    background-color: orange;
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

.txt {
  width: 50%;
  height: 100%;
}
</style>