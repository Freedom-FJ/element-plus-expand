import{d as i,J as l,o as r,b as s}from"./framework.c4e3e1ab.js";const m=i({__name:"demo6",setup(n){const o={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter(e){return`<div><div>${e[0].axisValue}</div><div
            style='display:
            flex;height:20px;align-items:center;'>${e[0].marker}
            <div>${e[0].data}${e[0].seriesName}</div></div>`}},color:["#03d5fb"],grid:{top:"16",left:"30",bottom:"30",right:"10"},xAxis:[{type:"category",axisTick:{show:!1},axisLabel:{color:"#ffffff",fontSize:14,interval:0,fontFamily:"TRENDS"},axisLine:{lineStyle:{color:"#038b8f"}},data:["五常","仁和","良渚","闲林","仓前","余杭","百丈"]}],yAxis:[{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(255,255,255,.2)"}},axisLabel:{color:"rgba(255,255,255,0.5)",fontFamily:"TRENDS",fontSize:12}}],series:[{name:"mm",type:"line",smooth:!0,connectNulls:!0,barWidth:13,data:[7.66,6,2.44,8,5,8.66,7],symbolSize:"none",itemStyle:{show:!1},lineStyle:{color:"#00DDFF"},areaStyle:{normal:{color:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 221, 255, 0.7)"},{offset:1,color:"rgba(0, 221, 255, 0)"}],globalCoord:!1}}},markLine:{symbol:"none",data:[{yAxis:5.66,name:"5.66m",label:{show:!0,formatter:"{b}",position:"insideEndBottom",fontSize:12,lineHeight:15,fontFamily:"Furore",color:"rgba(255, 153, 2, 1)"},lineStyle:{type:"dashed",color:"rgba(255, 153, 2, 1)",width:2}},{yAxis:6.66,name:"6.66m",label:{show:!0,formatter:"{b}",position:"insideEndTop",fontSize:12,lineHeight:15,color:"rgba(248, 68, 57, 1)",fontFamily:"Furore"},lineStyle:{type:"dashed",color:"rgba(248, 68, 57, 1)",width:2}},{yAxis:2,name:"2m",label:{show:!1},lineStyle:{type:"dashed",color:"white",width:2}}]}}]};return(e,t)=>{const a=l("EchartDemo");return r(),s(a,{option:o,theme:"dark"})}}});export{m as default};