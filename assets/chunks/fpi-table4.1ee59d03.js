import{m as p}from"./mockAjax.7dfb9507.js";import{d as l,h as i,J as m,o as c,b as d}from"./framework.c4e3e1ab.js";import"../app.8dda268f.js";import"./theme.86115513.js";import"./directive.a023c772.js";const g=l({__name:"fpi-table4",setup(f){const t=(e={})=>p({url:"/tableDataMidOffset",method:"post",data:e}),o={stationCodes:1,regionCodes:"3301"},a=[{type:"index",label:"序号",width:"60",align:"center"},{prop:"date",label:"Date",width:"180"},{prop:"name",label:"Name",width:"180"},{prop:"address",label:"Address"}],r=i();return(e,u)=>{const s=m("FpiElTable");return c(),d(s,{ref:n=>r.value=n,column:a,api:t,params:o,"current-page-offset":-1},null,512)}}});export{g as default};