import{_ as C,d as F,r as A}from"./index.131408e4.js";import{a5 as i,ak as I,S as j,o as y,c as v,X as t,R as s,a as d,Z as w,Q as k,V as $,W as m,aa as z}from"./vendor-vue.e07d7f7e.js";import{C as B}from"./ConnectStatus.2cfdc4b8.js";import{F as E}from"./vendor-lib.bb870261.js";import"./element-icon.bb5f2c38.js";import"./element-plus.93c2f37e.js";const N={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},q={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:N,form:{domain:""}}},computed:{},methods:{async getData(){if(this.loading=!0,this.row){let o={id:this.row.id},l=(await this.$http.getDomainById(o)).data;this.form.domain=l.domain}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),a={domain:this.form.domain},l=null;this.row?(a.id=this.row.id,l=await this.$http.updateDomainById(a)):l=await this.$http.addDomain(a),l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg),this.$nextTick(()=>{o.close()})}},created(){this.getData()}},H={class:"text-center"};function K(o,a,l,h,n,r){const _=i("el-input"),c=i("el-form-item"),p=i("el-form"),g=i("el-button"),D=I("loading");return j((y(),v("div",null,[t(p,{ref:"form",model:n.form,rules:n.rules,"label-width":"80px"},{default:s(()=>[t(c,{label:"\u57DF\u540D",prop:"domain"},{default:s(()=>[t(_,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":a[0]||(a[0]=b=>n.form.domain=b),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),d("div",H,[t(g,{onClick:r.handleCancel},{default:s(()=>[w("\u53D6 \u6D88")]),_:1},8,["onClick"]),t(g,{type:"primary",onClick:r.handleSubmit},{default:s(()=>[w("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[D,n.loading]])}const L=C(q,[["render",K]]),P={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:L},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function Q(o,a,l,h,n,r){const _=i("DataForm"),c=i("el-dialog");return y(),k(c,{title:r.dialogTitle,modelValue:r.dialogVisible,"onUpdate:modelValue":a[0]||(a[0]=p=>r.dialogVisible=p),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:s(()=>[r.dialogVisible?(y(),k(_,{key:0,row:l.row,onOnCancel:r.handleClose,onOnSuccess:r.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):$("",!0)]),_:1},8,["title","modelValue"])}const T=C(P,[["render",Q]]),W={name:"",props:{row:{type:Object,default:null}},components:{ConnectStatus:B},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}}}}},computed:{},methods:{async getData(){if(this.row){let o={id:this.row.id};const a=await this.$http.getDomainById(o);if(a.code!=0)return;let l=a.data;this.form.domain=l.domain,this.form.domain_url=l.domain_url,this.form.ip=l.ip,this.form.start_time=l.start_time,this.form.expire_time=l.expire_time,this.form.check_time=l.check_time,this.form.connect_status=l.connect_status,this.form.total_days=l.total_days,this.form.expire_days=l.expire_days,this.form.create_time=l.create_time,this.form.update_time=l.update_time,this.form.detail={issuer:l.detail.issuer||{},subject:l.detail.subject||{}}}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),a={domain:this.form.domain,domain_url:this.form.domain_url,ip:this.form.ip,start_time:this.form.start_time,expire_time:this.form.expire_time,check_time:this.form.check_time,connect_status:this.form.connect_status,total_days:this.form.total_days,expire_days:this.form.expire_days,create_time:this.form.create_time};this.row&&(a.id=this.row.id);const l=await this.$Http.function(a);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg),this.$nextTick(()=>{o.close()})},async handleUpdateRowDomainInfo(){let o=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),a={id:this.row.id};(await this.$http.updateDomainCertInfoById(a)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),o.close()}},created(){this.getData()}},X={class:"domain-detail"},Z={class:"mo-form-detail grid grid-cols-2 mt-sm"},G={class:"truncate"},J={class:"truncate"},M={class:"truncate"},Y={class:"flex justify-between flex-1"},ee=d("span",null," \u66F4\u65B0",-1),te={class:"truncate"},le={class:"truncate"},se={class:"truncate"},ae={class:"text-center mt-md"};function ne(o,a,l,h,n,r){const _=i("el-link"),c=i("el-form-item"),p=i("ConnectStatus"),g=i("el-form"),D=i("Refresh"),b=i("el-icon"),x=i("el-button");return y(),v("div",X,[d("div",Z,[t(g,{ref:"form",model:n.form,"label-width":"130px"},{default:s(()=>[t(c,{label:"\u57DF\u540D",prop:"domain"},{default:s(()=>[t(_,{underline:!1,href:n.form.domain_url,target:"_blank"},{default:s(()=>[w(m(n.form.domain),1)]),_:1},8,["href"])]),_:1}),t(c,{label:"ip",prop:"ip"},{default:s(()=>[d("span",null,m(n.form.ip||"-"),1)]),_:1}),t(c,{label:"\u57DF\u540D\u8FDE\u63A5\u72B6\u6001",prop:"connect_status"},{default:s(()=>[t(p,{value:n.form.connect_status},null,8,["value"])]),_:1}),t(c,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time"},{default:s(()=>[d("span",null,m(n.form.create_time||"-"),1)]),_:1}),t(c,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"create_time"},{default:s(()=>[d("span",null,m(n.form.update_time||"-"),1)]),_:1}),t(c,{label:"\u9881\u53D1\u8005.\u516C\u7528\u540D",prop:"expire_days"},{default:s(()=>[d("span",G,m(n.form.detail.issuer.CN||"-"),1)]),_:1}),t(c,{label:"\u9881\u53D1\u8005.\u7EC4\u7EC7",prop:"expire_days"},{default:s(()=>[d("span",J,m(n.form.detail.issuer.O||"-"),1)]),_:1}),t(c,{label:"\u9881\u53D1\u8005.\u7EC4\u7EC7\u5355\u4F4D",prop:"expire_days"},{default:s(()=>[d("span",M,m(n.form.detail.issuer.OU||"-"),1)]),_:1})]),_:1},8,["model"]),t(g,{ref:"form",model:n.form,"label-width":"130px"},{default:s(()=>[t(c,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"start_time"},{default:s(()=>[d("span",null,m(n.form.start_time||"-"),1)]),_:1}),t(c,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"expire_time"},{default:s(()=>[d("span",null,m(n.form.expire_time||"-"),1)]),_:1}),t(c,{label:"\u8BC1\u4E66\u68C0\u67E5\u65F6\u95F4",prop:"check_time"},{default:s(()=>[d("div",Y,[d("span",null,m(n.form.check_time||"-"),1),t(_,{underline:!1,type:"primary",onClick:r.handleUpdateRowDomainInfo},{default:s(()=>[t(b,null,{default:s(()=>[t(D)]),_:1}),ee]),_:1},8,["onClick"])])]),_:1}),t(c,{label:"\u6709\u6548\u671F\u603B\u5929\u6570",prop:"total_days"},{default:s(()=>[d("span",null,m(n.form.total_days||"-"),1)]),_:1}),t(c,{label:"\u8FC7\u671F\u5269\u4F59\u5929\u6570",prop:"expire_days"},{default:s(()=>[d("span",null,m(n.form.expire_days||"-"),1)]),_:1}),t(c,{label:"\u9881\u53D1\u5BF9\u8C61.\u516C\u7528\u540D",prop:"expire_days"},{default:s(()=>[d("span",te,m(n.form.detail.subject.CN||"-"),1)]),_:1}),t(c,{label:"\u9881\u53D1\u5BF9\u8C61.\u7EC4\u7EC7",prop:"expire_days"},{default:s(()=>[d("span",le,m(n.form.detail.subject.O||"-"),1)]),_:1}),t(c,{label:"\u9881\u53D1\u5BF9\u8C61.\u7EC4\u7EC7\u5355\u4F4D",prop:"expire_days"},{default:s(()=>[d("span",se,m(n.form.detail.subject.OU||"-"),1)]),_:1})]),_:1},8,["model"])]),d("div",ae,[t(x,{type:"primary",onClick:r.handleCancel},{default:s(()=>[w("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const oe=C(W,[["render",ne]]),ie={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:oe},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function re(o,a,l,h,n,r){const _=i("DataForm"),c=i("el-dialog");return y(),k(c,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:r.dialogVisible,"onUpdate:modelValue":a[0]||(a[0]=p=>r.dialogVisible=p),width:"900px",center:"","append-to-body":"","lock-scroll":!1,onClose:r.handleDialogClose},{default:s(()=>[r.dialogVisible?(y(),k(_,{key:0,row:l.row,onOnCancel:r.handleClose,onOnSuccess:r.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):$("",!0)]),_:1},8,["modelValue","onClose"])}const ce=C(ie,[["render",re]]),de={name:"",components:{DataFormDialog:T,DataDetailDialog:ce,ConnectStatus:B},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1}},methods:{handleEditRow(o){this.currentRow=o,this.dialogVisible=!0},async handleDeleteClick(o){let a={id:o.id};const l=await this.$http.deleteDomainById(a);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg)},async handleStatusChange(o){let a={id:o.id};const l=await this.$Http.function(a);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg)},async handleUpdateRowDomainInfo(o){let a=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),l={id:o.id};(await this.$http.updateDomainCertInfoById(l)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),a.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){this.$emit("on-success")},handleShowDetail(o){this.currentRow=o,this.dialogDetailVisible=!0}},created(){}},ue={class:"el-text-color-primary"},me=d("span",null," / ",-1),_e={class:"el-text-color-secondary"};function pe(o,a,l,h,n,r){const _=i("el-link"),c=i("el-table-column"),p=i("ConnectStatus"),g=i("el-progress"),D=i("Refresh"),b=i("el-icon"),x=i("Edit"),S=i("Delete"),V=i("el-popconfirm"),O=i("el-table"),R=i("DataFormDialog"),U=i("DataDetailDialog");return y(),v("div",null,[t(O,{data:l.list,stripe:"",border:""},{default:s(()=>[t(c,{label:"\u57DF\u540D","header-align":"center",align:"center",prop:"domain"},{default:s(u=>[t(_,{underline:!1,href:u.row.domain_url,target:"_blank"},{default:s(()=>[w(m(u.row.domain),1)]),_:2},1032,["href"])]),_:1}),t(c,{label:"ip\u5730\u5740","header-align":"center",align:"center",width:"140",prop:"ip"},{default:s(u=>[d("span",null,m(u.row.ip||"-"),1)]),_:1}),t(c,{label:"\u8FDE\u63A5\u72B6\u6001","header-align":"center",align:"center",width:"90",prop:"connect_status"},{default:s(u=>[t(p,{value:u.row.connect_status,onOnClick:f=>r.handleShowDetail(u.row)},null,8,["value","onOnClick"])]),_:1}),t(c,{label:"\u6709\u6548\u671F\u5929\u6570","header-align":"center",align:"center",width:"180",prop:"total_days"},{default:s(u=>[u.row.percentage?(y(),k(g,{key:0,percentage:u.row.percentage,"show-text":!1,status:u.row.percentage_status},null,8,["percentage","status"])):$("",!0),d("div",null,[d("span",ue,m(u.row.expire_days||"-"),1),me,d("span",_e,m(u.row.total_days||"-"),1)])]),_:1}),t(c,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"110",prop:"check_time"},{default:s(u=>[d("span",null,m(u.row.check_time_label||"-"),1)]),_:1}),t(c,{label:"\u66F4\u65B0",width:"60","header-align":"center",align:"center"},{default:s(u=>[t(_,{underline:!1,type:"primary",onClick:f=>r.handleUpdateRowDomainInfo(u.row)},{default:s(()=>[t(b,null,{default:s(()=>[t(D)]),_:1})]),_:2},1032,["onClick"])]),_:1}),t(c,{label:"\u7F16\u8F91",width:"60","header-align":"center",align:"center"},{default:s(u=>[t(_,{underline:!1,type:"primary",onClick:f=>r.handleEditRow(u.row)},{default:s(()=>[t(b,null,{default:s(()=>[t(x)]),_:1})]),_:2},1032,["onClick"])]),_:1}),t(c,{label:"\u5220\u9664",width:"60",align:"center",prop:"tag"},{default:s(({row:u})=>[t(V,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:f=>r.handleDeleteClick(u)},{reference:s(()=>[t(_,{underline:!1,type:"danger"},{default:s(()=>[t(b,null,{default:s(()=>[t(S)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),t(R,{visible:n.dialogVisible,"onUpdate:visible":a[0]||(a[0]=u=>n.dialogVisible=u),row:n.currentRow,onOnSuccess:r.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"]),t(U,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":a[1]||(a[1]=u=>n.dialogDetailVisible=u),onOnSuccess:r.handleDetailSuccess},null,8,["row","visible","onOnSuccess"])])}const he=C(de,[["render",pe]]),fe={name:"domain-list",props:{},components:{DataFormDialog:T,DataTable:he},data(){return{dataApi:F,list:[],total:0,page:1,size:20,keyword:"",loading:!0,dialogVisible:!1,export_to_file_url:A(F.exportDomainToFile)}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let o={page:this.page,size:this.size,keyword:this.keyword};const a=await this.$http.getDomainList(o);a.code==0?(this.list=a.data.list.map(l=>(l.expire_days&&l.total_days?l.percentage=l.expire_days/l.total_days*100:l.percentage=null,l.percentage_status="exception",l.expire_days>=30?l.percentage_status="":l.expire_days>=3&&(l.percentage_status="warning"),l)),this.total=a.data.total):this.$msg.error(e.msg),this.loading=!1},async updateAllDomainCertInfoOfUser(){let o=this.$loading({fullscreen:!0});(await this.$http.updateAllDomainCertInfoOfUser()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()),o.close()},async handleHttpRequest(o){let a=this.$loading({fullscreen:!0}),l=new FormData;l.append("file",o.file);const h=await this.$http.importDomainFromFile(l);h.code==0&&(this.$msg.success(`\u5BFC\u5165\u6210\u529F\uFF1A${h.data.count}`),this.resetData()),a.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){let a=(await this.$http.getAllDomainListOfUser()).data.list.map(h=>h.domain).join(`
`);var l=new Blob([a],{type:"text/plain;charset=utf-8"});E.saveAs(l,"domain.txt")},handleSearch(){this.resetData()}},created(){this.getData()}},ge={class:"app-container"},be={class:"flex justify-between"},we={class:"flex"};function ye(o,a,l,h,n,r){const _=i("Plus"),c=i("el-icon"),p=i("el-button"),g=i("Search"),D=i("el-input"),b=i("Refresh"),x=i("Upload"),S=i("el-upload"),V=i("Download"),O=i("DataTable"),R=i("el-pagination"),U=i("DataFormDialog"),u=I("loading");return y(),v("div",ge,[d("div",be,[d("div",null,[t(p,{type:"primary",onClick:r.handleAddRow},{default:s(()=>[t(c,null,{default:s(()=>[t(_)]),_:1}),w("\u6DFB\u52A0")]),_:1},8,["onClick"]),t(D,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":a[0]||(a[0]=f=>n.keyword=f),placeholder:"\u8F93\u5165\u57DF\u540D",clearable:"",onKeypress:z(r.handleSearch,["enter"]),onClear:r.handleSearch},{append:s(()=>[t(p,{onClick:r.handleSearch},{default:s(()=>[t(c,null,{default:s(()=>[t(g)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),d("div",we,[t(p,{onClick:r.updateAllDomainCertInfoOfUser},{default:s(()=>[t(c,null,{default:s(()=>[t(b)]),_:1}),w("\u5168\u90E8\u66F4\u65B0")]),_:1},8,["onClick"]),t(S,{class:"ml-sm",action:"action",limit:1,"show-file-list":!1,"http-request":r.handleHttpRequest},{default:s(()=>[t(p,null,{default:s(()=>[t(c,null,{default:s(()=>[t(x)]),_:1}),w("\u5BFC\u5165")]),_:1})]),_:1},8,["http-request"]),t(p,{class:"ml-sm",onClick:r.handleExportToFile},{default:s(()=>[t(c,null,{default:s(()=>[t(V)]),_:1}),w("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),j(t(O,{class:"mt-md",list:n.list,onOnSuccess:r.resetData},null,8,["list","onOnSuccess"]),[[u,n.loading]]),t(R,{class:"mt-md justify-center",background:"",layout:"total, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:page-size":a[1]||(a[1]=f=>n.size=f),"current-page":n.page,"onUpdate:current-page":a[2]||(a[2]=f=>n.page=f),onCurrentChange:r.getData},null,8,["total","page-size","current-page","onCurrentChange"]),t(U,{visible:n.dialogVisible,"onUpdate:visible":a[3]||(a[3]=f=>n.dialogVisible=f),onOnSuccess:r.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const Ve=C(fe,[["render",ye]]);export{Ve as default};
