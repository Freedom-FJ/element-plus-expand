import{d as l,J as i,o as n,b as s}from"./framework.c4e3e1ab.js";const d=l({__name:"demo8",setup(f){const o=[100,100,99,98,95],t=[100,100,100,100,100],a={grid:{top:"90",left:"50",bottom:"30",right:"40"},title:{text:"title",left:90,top:20,textStyle:{fontSize:20,color:"#FFFFFF"}},tooltip:{trigger:"axis",formatter:e=>`${e[0].seriesName}  ${e[0].value}%`},xAxis:{type:"category",axisTick:{show:!1},data:[2017,2018,2019,2020,2021],axisLabel:{color:"rgba(255, 255, 255, 0.6)",fontFamily:"Microsoft YaHei",fontSize:14,fontWeight:"bold"},axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.2)"}}},yAxis:{name:"%",nameTextStyle:{fontFamily:"Bebas Neue",fontSize:14,color:"rgba(255, 255, 255, 0.6)",padding:[0,25,0,0]},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0)","rgba(3,139,143,0.1)"]},interval:1},axisLabel:{show:!0,color:"rgba(255,255,255,0.6)",fontFamily:"Bebas Neue",fontSize:14}},series:[{name:"达标率",type:"line",data:o,itemStyle:{normal:{label:{show:!0,formatter:e=>e.data<t[e.dataIndex]?"":e.data,textStyle:{fontSize:18,fontWeight:"bold",color:"#00e87e"}}}}},{name:"达标率",type:"line",symbol:"circle",symbolSize:6,data:o,lineStyle:{normal:{color:"#ffffff",width:"2"}},itemStyle:{normal:{color:e=>e.data<t[e.dataIndex]?"#E12234":"#00e87e",label:{show:!0,formatter:e=>e.data>=t[e.dataIndex]?"":e.data,textStyle:{fontSize:18,color:"red",fontWeight:"bold"}}}}}]};return(e,c)=>{const r=i("EchartDemo");return n(),s(r,{option:a,theme:"dark"})}}});export{d as default};