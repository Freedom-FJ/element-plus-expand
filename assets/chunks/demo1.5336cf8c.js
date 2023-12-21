import{d as s,J as r,o as l,b as d}from"./framework.2f197f38.js";const p=s({__name:"demo1",setup(c){const n=["国控","省控","市控","县控"],o=[{value:120,done:120,unDone:0},{value:110,done:70,unDone:40},{value:80,done:50,unDone:30},{value:75,done:50,unDone:25}],i={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter(e){return console.log(e,"params"),`<div><div>${e[0].axisValue}</div>
        <div style='display: flex;height:20px;align-items:center;'>
        <span>
        总共${e[0].data}${e[0].seriesName}：
        </span>
        </div>
        <div style='display: flex;height:20px;align-items:center;'>
        ${e[1].marker}
        <span>
        已处置：${e[1].data}${e[0].seriesName}
        </span>
        </div>
        <div style='display: flex;height:20px;align-items:center;'>
        ${e[0].marker}
        <span>
        未处置：${e[0].data-e[1].data}${e[0].seriesName}
        </span>
        </div>`}},color:["#F84439","#36F097"],grid:{top:"40",left:"35",bottom:"35",right:"15"},xAxis:[{type:"category",axisTick:{show:!1},axisLabel:{color:"#ffffff",fontSize:14,interval:0,fontFamily:"TRENDS"},axisLine:{lineStyle:{color:"#038b8f"}},data:n}],yAxis:[{axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},splitArea:{show:!0,areaStyle:{color:["transparent","rgba(255, 255, 255, 0.05)"]}},axisLabel:{color:"rgba(255,255,255,0.5)",fontFamily:"TRENDS",fontSize:12}}],series:[{name:"个",type:"bar",barWidth:25,data:o.map(e=>e.value),itemStyle:{color:"#F84439",normal:{}},label:{show:!0,position:"top",color:"white",fontFamily:"Furore",fontSize:14,formatter:e=>{const a=e.dataIndex,t=o[a];return`${Math.round(t.done/t.value*1e3)/10}%`}},z:"-1"},{name:"个",type:"bar",barWidth:25,data:o.map(e=>e.done),itemStyle:{color:"#36F097"},barGap:"-100%"}]};return(e,a)=>{const t=r("EchartDemo");return l(),d(t,{option:i,theme:"dark"})}}});export{p as default};
