import{d as h,an as u,h as c,j as w,ao as x,J as b,o as f,c as _,N as d,l as e,K as P}from"./framework.2f197f38.js";const E=h({__name:"fpi-table12",setup(C){const a=u({column:[{type:"index",label:"序号",width:"60"},{prop:"date",label:"date"},{prop:"name",label:"Name"}],pageParams:{currentPage:1,total:0,pageSizes:10},fpiElTableDom:c(),tableData:[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],tableData1:[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0},{id:4,date:"2016-05-03",name:"wangxiaohu"}]});w(()=>{a.fpiElTableDom.toggleRowExpansion(a.tableData[2],!0)});const s=(t,p,n)=>{setTimeout(()=>{n([{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}])},1e3)},o=t=>{a.pageParams.pageSizes=t.pageSizes,a.pageParams.currentPage=t.currentPage},{column:l,pageParams:i,tableData:r,tableData1:m}=x(a);return(t,p)=>{const n=b("FpiElTable");return f(),_(P,null,[d(n,{ref:g=>a.fpiElTableDom=g,column:e(l),style:{width:"100%","margin-bottom":"20px"},"table-data":e(r),"page-params":e(i),"row-key":"id","is-show-page":!1,"max-height":"250",onPageChange:o},null,8,["column","table-data","page-params"]),d(n,{column:e(l),style:{width:"100%"},"table-data":e(m),"page-params":e(i),"row-key":"id","max-height":"250","is-show-page":!1,lazy:"",load:s,"tree-props":{children:"children",hasChildren:"hasChildren"},onPageChange:o},null,8,["column","table-data","page-params"])],64)}}});export{E as default};
