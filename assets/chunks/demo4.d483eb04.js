import{d as t,J as a,o as i,b as r}from"./framework.2f197f38.js";const x=t({__name:"demo4",setup(s){const e={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},color:["#00fc83","#ff4d4f"],grid:{top:"40",left:"35",bottom:"45",right:"15"},legend:{show:!0,bottom:0,left:"center",icon:"circle",textStyle:{fontSize:"12",color:"#fff"}},xAxis:[{type:"category",axisTick:{show:!1},axisLabel:{color:"#fff",fontSize:"12px"},axisLine:{lineStyle:{color:"rgba(68, 136, 208, 0.25)"}},data:["乌鲁木齐市","哈密市","吐鲁番市","昌吉州","博州","新市"]}],yAxis:[{name:"%",nameTextStyle:{color:"rgba(255, 255, 255, 0.6)",fontSize:"12px",padding:[0,20,0,0]},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(68, 136, 208, 0.25)"}},axisLabel:{color:"rgba(255, 255, 255, 0.6)",fontSize:"12px"}}],series:[{name:"优良比例",type:"bar",barWidth:15,data:[72,86,48,63,40,50],itemStyle:{color:"#00fc83"}},{name:"劣V比例",type:"bar",barWidth:15,itemStyle:{color:"#ff4d4f"},data:[30,23,18,13,10,19]}]};return(f,d)=>{const o=a("EchartDemo");return i(),r(o,{option:e,theme:"dark"})}}});export{x as default};
