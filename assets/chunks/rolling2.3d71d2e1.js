import{d as v,h as g,J as s,o as n,c as a,k as l,N as c,w as i,K as _,L as f,t as x,a as k,_ as V}from"./framework.2f197f38.js";const B={class:"rolling-test"},E={class:"model-box"},y=v({__name:"rolling2",setup(C){const d=[1,2,3,4,5,6,7,8],e=g(!0),r=()=>{e.value=!e.value};return(N,t)=>{const u=s("FpiElRolling"),p=s("ElButton");return n(),a(_,null,[l("div",B,[c(u,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),action:"dblclick"},{default:i(()=>[l("div",E,[(n(),a(_,null,f(d,(o,m)=>l("div",{key:m,class:"model"},x(o),1)),64))])]),_:1},8,["modelValue"])]),c(p,{onClick:t[1]||(t[1]=o=>r())},{default:i(()=>[k(" 点击修改状态 ")]),_:1})],64)}}});const L=V(y,[["__scopeId","data-v-2cc21781"]]);export{L as default};