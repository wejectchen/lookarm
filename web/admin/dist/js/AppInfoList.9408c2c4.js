(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AppInfoList"],{e1631:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:6}},[a("a-input-search",{attrs:{placeholder:"输入App名查找","enter-button":"",allowClear:""},on:{search:e.getAppInfoList},model:{value:e.queryParam.app_name,callback:function(t){e.$set(e.queryParam,"app_name",t)},expression:"queryParam.app_name"}})],1),a("a-col",{attrs:{span:4}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){e.addAppInfoVisible=!0}}},[e._v("新增")])],1),a("a-col",{attrs:{span:3}},[a("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择分类"},on:{change:e.gotoCatePage}},e._l(e.Catelist,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),a("a-col",{attrs:{span:1}},[a("a-button",{attrs:{type:"info"},on:{click:function(t){return e.router.push("/appinfo")}}},[e._v("显示全部")])],1),a("a-col",{attrs:{span:3,offset:2}},[a("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择状态"},on:{change:e.gotoTagPage}},e._l(e.Taglist,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.tag_name))])})),1)],1),a("a-col",{attrs:{span:1}},[a("a-button",{attrs:{type:"info"},on:{click:function(t){return e.router.push("AppInfo")}}},[e._v("显示全部")])],1)],1),a("a-table",{attrs:{rowKey:"ID",columns:e.columns,pagination:e.pagination,dataSource:e.AppInfolist,bordered:""},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t){return[a("div",{staticClass:"actionSlot"},[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary",icon:"edit"},on:{click:function(a){return e.editAppInfo(t.ID)}}},[e._v("编辑")]),a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"danger",icon:"delete"},on:{click:function(a){return e.deleteAppInfo(t.ID)}}},[e._v("删除")])],1)]}}])})],1),a("a-modal",{attrs:{closable:"",visible:e.addAppInfoVisible,width:"60%",destroyOnClose:""},on:{ok:e.addAppInfoOk,cancel:e.addAppInfoCancel}},[a("a-form-model",{model:{value:e.newAppInfo,callback:function(t){e.newAppInfo=t},expression:"newAppInfo"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{label:"提供人"}},[a("a-input",{model:{value:e.newAppInfo.user_name,callback:function(t){e.$set(e.newAppInfo,"user_name",t)},expression:"newAppInfo.user_name"}})],1)],1),a("a-col",{attrs:{span:6,offset:4}},[a("a-form-model-item",{attrs:{label:"提供人邮箱"}},[a("a-input",{model:{value:e.newAppInfo.email,callback:function(t){e.$set(e.newAppInfo,"email",t)},expression:"newAppInfo.email"}})],1)],1)],1),a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{label:"App分类"}},[a("a-select",{on:{change:e.cateChange},model:{value:e.newAppInfo.category_id,callback:function(t){e.$set(e.newAppInfo,"category_id",t)},expression:"newAppInfo.category_id"}},e._l(e.Catelist,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1)],1),a("a-col",{attrs:{span:6,offset:4}},[a("a-form-model-item",{attrs:{label:"状态"}},[a("a-select",{on:{change:e.tagChange},model:{value:e.newAppInfo.tag_id,callback:function(t){e.$set(e.newAppInfo,"tag_id",t)},expression:"newAppInfo.tag_id"}},e._l(e.Taglist,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.tag_name))])})),1)],1)],1)],1),a("a-form-model-item",{attrs:{label:"App名称"}},[a("a-input",{model:{value:e.newAppInfo.app_name,callback:function(t){e.$set(e.newAppInfo,"app_name",t)},expression:"newAppInfo.app_name"}})],1),a("a-form-model-item",{attrs:{label:"App版本"}},[a("a-input",{model:{value:e.newAppInfo.app_verison,callback:function(t){e.$set(e.newAppInfo,"app_verison",t)},expression:"newAppInfo.app_verison"}})],1),a("a-form-model-item",{attrs:{label:"App网站"}},[a("a-input",{model:{value:e.newAppInfo.app_website,callback:function(t){e.$set(e.newAppInfo,"app_website",t)},expression:"newAppInfo.app_website"}})],1),a("a-form-model-item",{attrs:{label:"开发者"}},[a("a-input",{model:{value:e.newAppInfo.app_developer,callback:function(t){e.$set(e.newAppInfo,"app_developer",t)},expression:"newAppInfo.app_developer"}})],1),a("a-form-model-item",{attrs:{label:"App描述"}},[a("a-input",{attrs:{type:"textarea"},model:{value:e.newAppInfo.app_desc,callback:function(t){e.$set(e.newAppInfo,"app_desc",t)},expression:"newAppInfo.app_desc"}})],1)],1)],1),a("a-modal",{attrs:{closable:"",visible:e.editAppInfoVisible,width:"60%",destroyOnClose:""},on:{ok:e.editAppInfoOk,cancel:e.editAppInfoCancel}},[a("a-form-model",{model:{value:e.AppInfo,callback:function(t){e.AppInfo=t},expression:"AppInfo"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{label:"提供人"}},[a("a-input",{model:{value:e.AppInfo.user_name,callback:function(t){e.$set(e.AppInfo,"user_name",t)},expression:"AppInfo.user_name"}})],1)],1),a("a-col",{attrs:{span:6,offset:4}},[a("a-form-model-item",{attrs:{label:"提供人邮箱"}},[a("a-input",{model:{value:e.AppInfo.email,callback:function(t){e.$set(e.AppInfo,"email",t)},expression:"AppInfo.email"}})],1)],1)],1),a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{label:"App分类"}},[a("a-select",{on:{change:e.cateChange},model:{value:e.AppInfo.category_id,callback:function(t){e.$set(e.AppInfo,"category_id",t)},expression:"AppInfo.category_id"}},e._l(e.Catelist,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1)],1),a("a-col",{attrs:{span:6,offset:4}},[a("a-form-model-item",{attrs:{label:"状态"}},[a("a-select",{on:{change:e.tagChange},model:{value:e.AppInfo.tag_id,callback:function(t){e.$set(e.AppInfo,"tag_id",t)},expression:"AppInfo.tag_id"}},e._l(e.Taglist,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.tag_name))])})),1)],1)],1)],1),a("a-form-model-item",{attrs:{label:"App名称"}},[a("a-input",{model:{value:e.AppInfo.app_name,callback:function(t){e.$set(e.AppInfo,"app_name",t)},expression:"AppInfo.app_name"}})],1),a("a-form-model-item",{attrs:{label:"App版本"}},[a("a-input",{model:{value:e.AppInfo.app_verison,callback:function(t){e.$set(e.AppInfo,"app_verison",t)},expression:"AppInfo.app_verison"}})],1),a("a-form-model-item",{attrs:{label:"App网站"}},[a("a-input",{model:{value:e.AppInfo.app_website,callback:function(t){e.$set(e.AppInfo,"app_website",t)},expression:"AppInfo.app_website"}})],1),a("a-form-model-item",{attrs:{label:"开发者"}},[a("a-input",{model:{value:e.AppInfo.app_developer,callback:function(t){e.$set(e.AppInfo,"app_developer",t)},expression:"AppInfo.app_developer"}})],1),a("a-form-model-item",{attrs:{label:"App描述"}},[a("a-input",{attrs:{type:"textarea"},model:{value:e.AppInfo.app_desc,callback:function(t){e.$set(e.AppInfo,"app_desc",t)},expression:"AppInfo.app_desc"}})],1)],1)],1)],1)},p=[],o=a("5530"),r=(a("96cf"),a("1da1")),i=a("c1df"),s=a.n(i),l=[{title:"ID",dataIndex:"ID",width:"5%",key:"id",align:"center"},{title:"提交日期",dataIndex:"CreatedAt",width:"10%",key:"CreatedAt",align:"center",customRender:function(e){return e?s()(e).format("YYYY年MM月DD日"):"暂无"}},{title:"分类",dataIndex:"Category.name",width:"10%",key:"Category.name",align:"center"},{title:"App名称",dataIndex:"app_name",width:"10%",key:"app_name",align:"center"},{title:"App状态",dataIndex:"Tag.tag_name",width:"15%",key:"Tag.tag_name",align:"center"},{title:"开发者",dataIndex:"app_developer",width:"10%",key:"app_developer",align:"center"},{title:"提交者",dataIndex:"user_name",width:"10%",key:"user_name",align:"center"},{title:"提交者邮箱",dataIndex:"email",width:"10%",key:"email",align:"center"},{title:"操作",width:"15%",key:"action",align:"center",scopedSlots:{customRender:"action"}}],c={data:function(){return{pagination:{pageSizeOptions:["5","10","20"],pageSize:10,total:0,showSizeChanger:!0,showTotal:function(e){return"共".concat(e,"条")}},AppInfolist:[],Catelist:[],Taglist:[],columns:l,addAppInfoVisible:!1,editAppInfoVisible:!1,queryParam:{app_name:"",pagesize:10,pagenum:1},newAppInfo:{app_name:"",app_version:"",app_webpage:"",app_desc:"",app_developer:"",user_name:"",email:"",category_id:2,tag_id:1},appInfo:{app_name:"",app_version:"",app_webpage:"",app_desc:"",app_developer:"",user_name:"",email:"",category_id:2,tag_id:1},AppInfo:{app_name:"",app_version:"",app_webpage:"",app_desc:"",app_developer:"",user_name:"",email:"",category_id:2,tag_id:1}}},created:function(){this.getAppInfoList(),this.getCateList(),this.getTaglist()},methods:{getAppInfoList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("appinfo/list",{params:{app_name:e.queryParam.app_name,pagesize:e.queryParam.pagesize,pagenum:e.queryParam.pagenum}});case 2:a=t.sent,n=a.data,200!==n.status&&(n.status,window.sessionStorage.clear(),e.$router.push("/login"),e.$message.error(n.message)),e.AppInfolist=n.data,e.pagination.total=n.total;case 7:case"end":return t.stop()}}),t)})))()},getCateList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("category/list");case 2:if(a=t.sent,n=a.data,200===n.status){t.next=6;break}return t.abrupt("return",e.$message.error(n.message));case 6:e.Catelist=n.data;case 7:case"end":return t.stop()}}),t)})))()},getTaglist:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("tag/list");case 2:if(a=t.sent,n=a.data,200===n.status){t.next=6;break}return t.abrupt("return",e.$message.error(n.message));case 6:e.Taglist=n.data;case 7:case"end":return t.stop()}}),t)})))()},handleTableChange:function(e,t,a){var n=Object(o["a"])({},this.pagination);n.current=e.current,n.pageSize=e.pageSize,this.queryParam.pagesize=e.pageSize,this.queryParam.pagenum=e.current,e.pageSize!==this.pagination.pageSize&&(this.queryParam.pagenum=1,n.current=1),this.pagination=n,this.getAppInfoList()},addAppInfoOk:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("appinfo/add",e.newAppInfo);case 2:if(a=t.sent,n=a.data,200==n.status){t.next=6;break}return t.abrupt("return",e.$message.error(n.message));case 6:return e.addAppInfoVisible=!1,e.$message.success("添加表单成功"),t.next=10,e.getAppInfoList();case 10:case"end":return t.stop()}}),t)})))()},addAppInfoCancel:function(){this.addAppInfoVisible=!1,this.$message.info("新增表单已取消")},cateChange:function(e){this.newAppInfo.category_id=e},tagChange:function(e){this.newAppInfo.tag_id=e},deleteAppInfo:function(e){var t=this;this.$confirm({title:"提示：请再次确认",content:"确定要删除该文章吗？一旦删除，无法恢复",onOk:function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(){var n,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http.delete("appinfo/delete/".concat(e));case 2:if(n=a.sent,p=n.data,200==p.status){a.next=6;break}return a.abrupt("return",t.$message.error(p.message));case 6:t.$message.success("删除成功"),t.getAppInfoList();case 8:case"end":return a.stop()}}),a)})));function n(){return a.apply(this,arguments)}return n}(),onCancel:function(){t.$message.info("已取消删除")}})},editAppInfo:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.editAppInfoVisible=!0,a.next=3,t.$http.get("appinfo/info/".concat(e));case 3:n=a.sent,p=n.data,t.AppInfo=p.data,t.AppInfo.id=e;case 7:case"end":return a.stop()}}),a)})))()},editAppInfoOk:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.put("appinfo/edit/".concat(e.AppInfo.id),e.AppInfo);case 2:if(a=t.sent,n=a.data,200==n.status){t.next=6;break}return t.abrupt("return",e.$message.error(n.message));case 6:e.editAppInfoVisible=!1,e.$message.success("更新分类信息成功"),e.getAppInfoList();case 9:case"end":return t.stop()}}),t)})))()},editAppInfoCancel:function(){this.editAppInfoVisible=!1,this.$message.info("编辑已取消")},gotoCatePage:function(e){this.$router.push("/appinfo/catelist/".concat(e))},gotoTagPage:function(e){this.$router.push("/appinfo/taglist/".concat(e))}}},u=c,f=(a("e8a8"),a("2877")),d=Object(f["a"])(u,n,p,!1,null,"5fdeb260",null);t["default"]=d.exports},e8a8:function(e,t,a){"use strict";a("f203")},f203:function(e,t,a){}}]);
//# sourceMappingURL=AppInfoList.9408c2c4.js.map