import{d as u,an as n,ao as s,J as i,o as c,c as m,N as d,l as t,A as _,_ as f}from"./framework.2f197f38.js";const b={class:"form-box-test"},v=u({__name:"fpi-form8",setup(y){const o=n({formOption:[{col:[{label:"企业名称：",span:12,type:"input",prop:"input1",rules:"unNull",inputProps:{placeholder:"请选择企业",clearable:!0}},{span:12,label:"企业生产状态：",type:"input",value:null,prop:"inputNum",rules:"unNull,number",inputProps:{inputLimit:"number",clearable:!0,placeholder:""}}]},{col:[{span:12,label:"排口名称：",type:"input",showPassword:!0,prop:"inputPass",rules:"unNull"},{span:12,label:"排口编号：",type:"input",showPassword:!0,prop:"inputPass",rules:"unNull",inputProps:{clearable:!0,disabled:!0}}]},{col:[{label:"邮箱：",type:"input",prop:"curEmails",rules:"email"}]},{label:"经纬度：",required:!0,gutter:15,col:[{span:5,type:"input",prop:"long",rules:"unNull",inputProps:{clearable:!0}},{span:5,type:"input",prop:"lat",rules:"unNull",inputProps:{clearable:!0}}]},{col:[{label:"是否参与有效率计算：",type:"radio",prop:"delivery",value:!0,option:[{label:"是",value:!0},{label:"否",value:!1}]}]}],formData:{input1:"",inputNum:"",inputPass:"",delivery:"",curEmails:"",lat:"",long:""}}),{formOption:p,formData:e}=s(o);return(N,l)=>{const a=i("FpiElForm");return c(),m("div",b,[d(a,{ref:"ruleFormRef",modelValue:t(e),"onUpdate:modelValue":l[0]||(l[0]=r=>_(e)?e.value=r:null),"form-option":t(p),"label-width":"160px"},null,8,["modelValue","form-option"])])}}});const F=f(v,[["__scopeId","data-v-473b304a"]]);export{F as default};
