import{d as n,an as p,ao as s,J as i,o as m,b as c,l as o,A as b}from"./framework.c4e3e1ab.js";const h=n({__name:"fpi-form2",setup(d){const t=p({formOption:[{label:"输入框",type:"input",size:"small",prop:"input1",rules:"unNull",value:"88",inputProps:{placeholder:"测试",disabled:!0}},{label:"数字输入框",type:"input",value:null,prop:"inputNum",rules:"unNull,number",inputProps:{inputLimit:"number",clearable:!0,placeholder:"测试"}},{label:"select输入",type:"select",prop:"select",defaultSelect:0,rules:"select",option:[{label:"Zone one",value:"shanghai"},{label:"Zone two",value:"beijing"},{label:"Zone three",value:"hangzhou"}],inputProps:{clearable:!0}},{label:"自定义提示",type:"input",value:null,prop:"format",rules:{unNull:"自定义的message"},inputProps:{inputLimit:"number",clearable:!0,placeholder:"测试"}},{label:"数组rule",type:"input",value:null,prop:"radio",rules:[{required:!0,message:"不能为空",trigger:"blur"}],inputProps:{clearable:!0,placeholder:"测试"}}],formData:{input1:"",inputNum:"",format:"",radio:"",select:""}}),{formOption:a,formData:e}=s(t);return(f,l)=>{const r=i("FpiElForm");return m(),c(r,{modelValue:o(e),"onUpdate:modelValue":l[0]||(l[0]=u=>b(e)?e.value=u:null),"form-option":o(a)},null,8,["modelValue","form-option"])}}});export{h as default};