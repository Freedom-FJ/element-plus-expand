import{m as p}from"./mockAjax.7068b55a.js";import{d as r,J as n,o as l,b as i}from"./framework.2f197f38.js";import"../app.8c141a2e.js";import"./theme.15dc1a9f.js";import"./directive.dae8a5bb.js";const h=r({__name:"fpi-table1",setup(m){const a=(e={})=>p({url:"/tableDataMin",method:"get",params:e}),t={stationCodes:1,regionCodes:"3301"},o=[{type:"index",label:"序号",width:"60",align:"center"},{prop:"date",label:"Date",width:"180"},{prop:"name",label:"Name",width:"180"},{prop:"address",label:"Address"}];return(e,c)=>{const s=n("FpiElTable");return l(),i(s,{column:o,api:a,"is-show-page":!1,"res-expr":"data",params:t})}}});export{h as default};
