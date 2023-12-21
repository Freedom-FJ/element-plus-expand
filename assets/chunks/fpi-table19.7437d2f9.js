import{d as l,h as n,j as i,J as d,o as r,b as p}from"./framework.c4e3e1ab.js";const g=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,A=l({__name:"fpi-table19",setup(m){const a=[{type:"index",label:"序号",width:"60"},{prop:"date",label:"Date",width:"180"},{prop:"name",label:"Name",width:"180"},{prop:"address",label:"Address"}],t=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}],e=n();return i(()=>{e.value.changeLoading(!0)}),(c,f)=>{const o=d("FpiElTable");return r(),p(o,{ref:s=>e.value=s,column:a,"table-data":t,"is-show-page":!1,"element-loading-text":"加载中","element-loading-svg":g,"element-loading-svg-view-box":"-10, -10, 50, 50","element-loading-background":"rgba(122, 122, 122, 0.8)"},null,512)}}});export{A as default};
