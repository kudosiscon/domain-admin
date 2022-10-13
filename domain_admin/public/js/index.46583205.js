import{C as b}from"./ConnectStatus.2cfdc4b8.js";import{_ as h}from"./index.131408e4.js";import{a5 as d,o as m,c as _,X as a,R as o,a as r,W as c,ak as w,S as D}from"./vendor-vue.e07d7f7e.js";import"./element-icon.bb5f2c38.js";import"./vendor-lib.bb870261.js";import"./element-plus.93c2f37e.js";const C={name:"",components:{ConnectStatus:b},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(s){this.currentRow=s,this.dialogVisible=!0},async handleDeleteClick(s){let t={id:s.id};const n=await this.$http.function(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},async handleStatusChange(s){let t={id:s.id};const n=await this.$http.function(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},handleUpdateSuccess(){this.$emit("on-success")}},created(){}};function y(s,t,n,f,i,p){const l=d("el-table-column"),u=d("ConnectStatus"),g=d("el-table");return m(),_("div",null,[a(g,{data:n.list,stripe:"",border:""},{default:o(()=>[a(l,{label:"ID",align:"center",prop:"id",width:"100"},{default:o(e=>[r("span",null,c(e.row.id||"-"),1)]),_:1}),a(l,{label:"\u5F00\u59CB\u65F6\u95F4","header-align":"center",align:"center",prop:"create_time"},{default:o(e=>[r("span",null,c(e.row.create_time||"-"),1)]),_:1}),a(l,{label:"\u7ED3\u675F\u65F6\u95F4","header-align":"center",align:"center",prop:"update_time"},{default:o(e=>[r("span",null,c(e.row.update_time||"-"),1)]),_:1}),a(l,{label:"\u6301\u7EED\u65F6\u95F4","header-align":"center",align:"center",prop:"total_time_label"},{default:o(e=>[r("span",null,c(e.row.total_time_label||"-"),1)]),_:1}),a(l,{label:"\u72B6\u6001","header-align":"center",align:"center",prop:"status",width:"60"},{default:o(e=>[a(u,{value:e.row.status},null,8,["value"])]),_:1}),a(l,{label:"\u9519\u8BEF\u4FE1\u606F","header-align":"center",align:"center",prop:"status"},{default:o(e=>[r("span",null,c(e.row.error_message||"-"),1)]),_:1})]),_:1},8,["data"])])}const S=h(C,[["render",y]]),k={name:"log-scheduler-list",props:{},components:{DataTable:S},data(){return{list:[],total:0,page:1,size:20,keywords:"",loading:!0,dialogVisible:!1}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let s={ticket:this.ticket,page:this.page,size:this.size,keywords:this.keywords};const t=await this.$http.getLogSchedulerList(s);t.code==0&&(this.list=t.data.list,this.total=t.data.total),this.loading=!1},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()}},created(){this.getData()}},v={class:"app-container"};function $(s,t,n,f,i,p){const l=d("DataTable"),u=d("el-pagination"),g=w("loading");return m(),_("div",v,[D(a(l,{list:i.list,onOnSuccess:p.resetData},null,8,["list","onOnSuccess"]),[[g,i.loading]]),a(u,{class:"mt-md justify-center",background:"",layout:"total, prev, pager, next",total:i.total,"page-size":i.size,"onUpdate:page-size":t[0]||(t[0]=e=>i.size=e),"current-page":i.page,"onUpdate:current-page":t[1]||(t[1]=e=>i.page=e),onCurrentChange:p.getData},null,8,["total","page-size","current-page","onCurrentChange"])])}const T=h(k,[["render",$]]);export{T as default};
