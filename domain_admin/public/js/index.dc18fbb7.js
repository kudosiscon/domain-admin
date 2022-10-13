import{_ as k}from"./index.131408e4.js";import{a5 as o,o as i,c as u,X as a,R as n,a as D,W as f,Q as w,F as S,Z as g,ak as V,S as R}from"./vendor-vue.e07d7f7e.js";import"./element-icon.bb5f2c38.js";import"./vendor-lib.bb870261.js";import"./element-plus.93c2f37e.js";const x={name:"",components:{},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(e){e.is_edit_mode=!0},handleCancelRow(e){e.is_edit_mode=!1},async handleDeleteClick(e){let l={id:e.id};const t=await this.$Http.function(l);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(e){let l={id:e.id};const t=await this.$Http.function(l);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleSaveRow(e){let l={key:e.key,value:e.value};const t=await this.$http.updateSystemConfig(l);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),e.is_edit_mode=!1):this.$msg.error(t.msg)},handleUpdateSuccess(){this.$emit("on-success")}},created(){}},B={key:1};function E(e,l,t,y,_,c){const d=o("el-table-column"),m=o("el-input"),$=o("Select"),h=o("el-icon"),p=o("el-link"),v=o("CloseBold"),b=o("Edit"),C=o("el-table");return i(),u("div",null,[a(C,{data:t.list,stripe:"",border:""},{default:n(()=>[a(d,{label:"\u914D\u7F6E\u9879","header-align":"center",align:"right",width:"260",prop:"label"},{default:n(s=>[D("span",null,f(s.row.label||"-"),1)]),_:1}),a(d,{label:"\u503C","header-align":"center",align:"left",prop:"value"},{default:n(s=>[s.row.is_edit_mode?(i(),w(m,{key:0,modelValue:s.row.value,"onUpdate:modelValue":r=>s.row.value=r,placeholder:s.row.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):(i(),u("span",B,f(s.row.value||"-"),1))]),_:1}),a(d,{label:"\u7F16\u8F91",width:"120","header-align":"center",align:"center"},{default:n(s=>[s.row.is_edit_mode?(i(),u(S,{key:0},[a(p,{underline:!1,type:"success",onClick:r=>c.handleSaveRow(s.row)},{default:n(()=>[a(h,null,{default:n(()=>[a($)]),_:1}),g("\u4FDD\u5B58")]),_:2},1032,["onClick"]),a(p,{class:"ml-sm",underline:!1,type:"warning",onClick:r=>c.handleCancelRow(s.row)},{default:n(()=>[a(h,null,{default:n(()=>[a(v)]),_:1}),g("\u53D6\u6D88")]),_:2},1032,["onClick"])],64)):(i(),w(p,{key:1,underline:!1,type:"primary",onClick:r=>c.handleEditRow(s.row)},{default:n(()=>[a(h,null,{default:n(()=>[a(b)]),_:1}),g("\u7F16\u8F91")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])])}const A=k(x,[["render",E]]),T={name:"system-list",props:{},components:{DataTable:A},data(){return{list:[],total:0,page:1,size:20,keywords:"",loading:!0,dialogVisible:!1}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let e={ticket:this.ticket,page:this.page,num:this.size,keywords:this.keywords};const l=await this.$http.getAllSystemConfig(e);l.code==0&&(this.list=l.data.list.map(t=>(t.is_edit_mode=!1,t)),this.total=parseInt(l.data.count)),this.loading=!1},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()}},created(){this.getData()}},N={class:"app-container"};function U(e,l,t,y,_,c){const d=o("DataTable"),m=V("loading");return i(),u("div",N,[R(a(d,{list:_.list,onOnSuccess:c.resetData},null,8,["list","onOnSuccess"]),[[m,_.loading]])])}const Q=k(T,[["render",U]]);export{Q as default};
