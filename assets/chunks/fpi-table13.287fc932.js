import{d as N,B as r,J as f,o as _,c as w,N as p,K as y}from"./framework.2f197f38.js";const C=N({__name:"fpi-table13",setup(T){const c=r([{prop:"id",width:"150",label:"ID",columnKey:"date"},{prop:"name",label:"Name"},{prop:"amount1",label:"Amount 1",sortable:!0},{prop:"amount2",label:"Amount 2",sortable:!0},{prop:"amount3",label:"Amount 3",sortable:!0}]),b=r([{prop:"id",width:"150",label:"ID",columnKey:"date"},{prop:"name",label:"Name"},{prop:"amount1",label:"Cost 1 ($)"},{prop:"amount2",label:"Cost 2 ($)"},{prop:"amount3",label:"Cost 3 ($)"}]),i=n=>{const{columns:l,data:o}=n,e=[];return l.forEach((d,t)=>{if(t===0){e[t]="Total Cost";return}const u=o.map(a=>Number(a[d.property]));u.every(a=>Number.isNaN(a))?e[t]="N/A":e[t]=`$ ${u.reduce((a,s)=>{const h=Number(s);return Number.isNaN(h)?a:a+s},0)}`}),e},m=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(n,l)=>{const o=f("FpiElTable");return _(),w(y,null,[p(o,{border:"",column:c.value,"table-data":m,"show-summary":"","is-show-page":!1,style:{width:"100%"}},null,8,["column"]),p(o,{border:"",column:b.value,"is-show-page":!1,"table-data":m,height:"200","summary-method":i,"show-summary":"",style:{width:"100%","margin-top":"20px"}},null,8,["column"])],64)}}});export{C as default};
