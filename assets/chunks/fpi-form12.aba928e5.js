import{d as m,an as b,j as d,ao as f,J as g,o as k,b as C,l as t,A as h}from"./framework.2f197f38.js";const _=m({__name:"fpi-form12",setup(v){const l=b({formOption:[{label:"数字输入框",type:"input",value:null,prop:"inputNum",rules:"unNull,number",inputProps:{inputLimit:"number",clearable:!0,placeholder:"测试",onInput:e=>{console.log(e)}}},{label:"select输入",type:"select",prop:"select",defaultSelect:0,rules:"select",option:[{label:"Zone one",value:"shanghai"},{label:"Zone two",value:"beijing"},{label:"Zone three",value:"hangzhou"}],inputProps:{onVisibleChange:e=>{console.log(e,"e")},clearable:!0}},{label:"自定义",type:"input",value:null,prop:"radio",rules:[{required:!0,message:"不能为空",trigger:"blur"}],inputProps:{clearable:!0,placeholder:"测试"}}],formData:{inputNum:"",radio:"",select:""},formBtnOption:[{type:"primary",label:"提交",onClick:"submit"},{label:"取消",onClick:"cancel"}]});d(()=>{l.formBtnOption=[{type:"primary",label:"提交",onClick:"submit",onDblclick:()=>{console.log("ondblclick")}},{type:"success",label:"自定义取消按钮",onClick:s},{label:"取消",onClick:"cancel"}],l.formOption[0].label="改变的label"});const a=(e,o)=>{console.log("表单提交回调",e,o)},r=(e,o)=>{console.log("表单取消回调",e,o)},s=(e,o)=>{e&&e.resetFields(),console.log("自定义按钮回调：",e,o)},{formOption:i,formData:n,formBtnOption:p}=f(l);return(e,o)=>{const u=g("FpiElForm");return k(),C(u,{modelValue:t(n),"onUpdate:modelValue":o[0]||(o[0]=c=>h(n)?n.value=c:null),"form-option":t(i),"form-btn-option":t(p),onSubmit:a,onCancel:r},null,8,["modelValue","form-option","form-btn-option"])}}});export{_ as default};
