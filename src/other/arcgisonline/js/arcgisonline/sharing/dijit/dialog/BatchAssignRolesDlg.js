// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:arcgisonline/sharing/dijit/dialog/templates/BatchAssignRolesDlg.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${baseClass} batch-assign-group-dialog" data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"_dialog"\r\n       title\x3d"${i18n.assignRoles}" data-dojo-props\x3d"closable:false"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/StackContainer" data-dojo-attach-point\x3d"_stackContainer"\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-attach-point\x3d"_stackSelectUsers" class\x3d"select-users-stack"\x3e\r\n        \x3cdiv class\x3d"stepHeader"\x3e\r\n          \x3cdiv class\x3d"esriFloatLeading stepSprite step1"\x3e\x26nbsp;\x3c/div\x3e\x26nbsp;\x26nbsp;\r\n          \x3cdiv class\x3d"stepMessageContainer"\x3e\r\n            \x3cdiv class\x3d"stepMessage" data-dojo-attach-point\x3d"_step1Message"\x3e\x3cstrong\x3e${i18n.step1}\x3c/strong\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"_userSelectContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"_userSelector" data-dojo-type\x3d"arcgisonline/sharing/dijit/OrgUserSelector"\r\n            data-dojo-props\x3d"enableListActions:true, excludeCurrentUser:true"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cbr\x3e\r\n\r\n        \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n          \x3cbutton class\x3d"calcite blue small" type\x3d"button" data-dojo-type\x3d"dijit/form/Button"\r\n            data-dojo-attach-point\x3d"_selectUsersNext"\x3e${i18n.next}\x3c/button\x3e\r\n          \x3cbutton class\x3d"calcite transparent small" type\x3d"button" data-dojo-type\x3d"dijit/form/Button"\r\n            data-dojo-attach-point\x3d"_selectUsersClose"\x3e${i18n.cancel}\x3c/button\x3e\r\n        \x3c/div\x3e\r\n        \x3cbr class\x3d"clearBreak"\x3e\r\n        \x3cbr\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-attach-point\x3d"_stackSelectRole" class\x3d"select-role-stack"\x3e\r\n        \x3cdiv class\x3d"stepHeader"\x3e\r\n          \x3cdiv class\x3d"esriFloatLeading stepSprite step2"\x3e\x26nbsp;\x3c/div\x3e\x26nbsp;\x26nbsp;\r\n          \x3cdiv class\x3d"stepMessageContainer"\x3e\r\n            \x3cdiv class\x3d"stepMessage" data-dojo-attach-point\x3d"_step2Message"\x3e\x3cstrong\x3e${i18n.step2}\x3c/strong\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"marginTop1" data-dojo-attach-point\x3d"_summaryContainer"\x3e\r\n          \x3ctable class\x3d"marginTop1" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"column270"\x3e\r\n                \x3cdiv class\x3d"listLabel"\x3e\r\n                  \x3cdiv data-dojo-attach-point\x3d"_userListLabel"\x3e${i18n.selectedUsers}\x3c/div\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"listContainer" data-dojo-type\x3d"dijit/layout/BorderContainer"\r\n                     data-dojo-props\x3d"gutters:false,splitters:false,design:\'headline\'"\x3e\r\n                  \x3cdiv class\x3d"listInnerContainer"\r\n                       data-dojo-type\x3d"dijit/layout/ContentPane"\r\n                       data-dojo-props\x3d"region:\'middle\',splitter:false"\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"_selectedUsersPane"\x3e\r\n                      \x3c!-- selected user list is populated here --\x3e\r\n                    \x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/div\x3e\r\n              \x3c/td\x3e\r\n              \x3ctd class\x3d"column10"\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"column270"\x3e\r\n                \x3cdiv class\x3d"roleLabel"\x3e${i18n.newRole}\x3c/div\x3e\x3cbr\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_roleSelect" class\x3d"roleSelect roleFilter"\r\n                     data-dojo-props\x3d"searchAttr:\'name\'" data-dojo-type\x3d"dijit/form/FilteringSelect"\x3e\x3c/div\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n          \x3c/div\x3e\r\n        \x3cbr\x3e\r\n        \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n          \x3cbutton class\x3d"calcite default small hoverWhite" type\x3d"button" data-dojo-type\x3d"dijit/form/Button"\r\n                  data-dojo-attach-point\x3d"_summaryBack"\x3e${i18n.back}\x3c/button\x3e\r\n          \x3cbutton class\x3d"calcite green small" type\x3d"button" data-dojo-type\x3d"dijit/form/Button"\r\n                  data-dojo-attach-point\x3d"_summaryAssign"\x3e${i18n.assign}\x3c/button\x3e\r\n          \x3cbutton class\x3d"calcite transparent small" type\x3d"button" data-dojo-type\x3d"dijit/form/Button"\r\n                  data-dojo-attach-point\x3d"_summaryClose"\x3e${i18n.cancel}\x3c/button\x3e\r\n        \x3c/div\x3e\r\n        \x3cbr style\x3d"clear:both;"\x3e\r\n        \x3cbr\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-attach-point\x3d"_stackResultSummary" class\x3d"result-summary-stack"\x3e\r\n        \x3cdiv class\x3d"stepHeader"\x3e\r\n          \x3cdiv class\x3d"esriFloatLeading stepSprite step4"\x3e\x26nbsp;\x3c/div\x3e\x26nbsp;\x26nbsp;\r\n          \x3cdiv class\x3d"stepMessageContainer"\x3e\r\n            \x3cdiv class\x3d"stepMessage" data-dojo-attach-point\x3d"_step3Message"\x3e\x3cstrong\x3e${i18n.assignmentComplete}\x3c/strong\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"resultSummary"\x3e\r\n          \x3cdiv class\x3d"resultScroll" data-dojo-attach-point\x3d"_resultMessage"\x3e\x3c/div\x3e\r\n          \x3cdiv class\x3d"marginTop1"\x3e\x3clabel\x3e${i18n.continueAssignment}\x3c/label\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cbr\x3e\r\n        \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n          \x3cbutton class\x3d"calcite blue small" type\x3d"button" data-dojo-type\x3d"dijit/form/Button"\r\n                  data-dojo-attach-point\x3d"_resultAssign"\x3e${i18n.assignMore}\x3c/button\x3e\r\n          \x3cbutton class\x3d"calcite default small hoverWhite" type\x3d"button" data-dojo-type\x3d"dijit/form/Button"\r\n                  data-dojo-attach-point\x3d"_resultClose"\x3e${i18n.done}\x3c/button\x3e\r\n        \x3c/div\x3e\r\n        \x3cbr style\x3d"clear:both;"\x3e\r\n        \x3cbr\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("arcgisonline/sharing/dijit/dialog/BatchAssignRolesDlg","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-attr dojo/dom-construct dojo/dom-style dojo/sniff dojo/on dijit/a11yclick dojo/mouse dojo/topic dojo/Deferred dojo/promise/all dojo/store/Memory dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/Dialog dijit/layout/BorderContainer dijit/layout/StackContainer dijit/layout/ContentPane dijit/form/Button dijit/form/FilteringSelect dijit/Tooltip esri/lang arcgisonline/sharing/util arcgisonline/sharing/dijit/OrgUserSelector arcgisonline/sharing/dijit/GroupSelector dojo/i18n!arcgisonline/nls/arcgisonline dojo/text!arcgisonline/sharing/dijit/dialog/templates/BatchAssignRolesDlg.html".split(" "),
function(x,s,d,k,q,t,G,u,v,e,w,y,H,I,z,A,B,C,J,K,L,M,N,O,n,l,D,P,Q,h,E){var F=s(z,{query:function(a,b){if(b){var c=b&&b.sort&&b.sort[0]||{attribute:"name",descending:!1};"name"===c.attribute&&(b.sort=function(a,b){var d=a[c.attribute],f=b[c.attribute];return d!==f?!!c.descending===(null===d||d.toLowerCase()>(f&&f.toLowerCase()))?-1:1:0})}return this.inherited(arguments)}}),r=s("arcgisonline.sharing.dijit.dialog.BatchAssignRolesDlg",[A,B,C],{declaredClass:"arcgisonline.sharing.dijit.dialog.BatchAssignRolesDlg",
baseClass:"esriBatchAssignToGroups",basePath:x.toUrl("arcgisonline/sharing/dijit/dialog"),templateString:E,widgetsInTemplate:!0,constructor:function(a){a&&l.isDefined(a.initialUserSearch)&&this._set("initialUserSearch",a.initialUserSearch)},postMixInProperties:function(){this.inherited(arguments);this.i18n=d.mixin({},h.common);d.mixin(this.i18n,h.batchAssignToGroupsDlg);d.mixin(this.i18n,h.batchAssignRolesDlg)},postCreate:function(){this.inherited(arguments);this._setupConnections()},startup:function(){this.inherited(arguments)},
_setupConnections:function(){var a=d.hitch(this,this.hide);this.own(e(this._selectUsersNext,d.hitch(this,this._selectRoleClick)),e(this._selectUsersClose,a),e(this._summaryBack,d.hitch(this,this._backToSelectUsersClick)),e(this._summaryAssign,d.hitch(this,this._assignClick)),e(this._summaryClose,a),e(this._resultAssign,d.hitch(this,this._assignMoreClick)),e(this._resultClose,d.hitch(this,this._resultCloseClick)),this._userSelector.on("selection-change",d.hitch(this,this._selectUsersChange)))},_goToSelectUsers:function(){var a=
this._get("initialUserSearch");this._stackContainer.selectChild(this._stackSelectUsers);this._userSelector.focusSearch();a&&(this._userSelector._searchBox.set("value",a),this._userSelector._toggleClearSearchButton(),this._userSelector._searchClick())},_goToSelectRole:function(){this._stackContainer.selectChild(this._stackSelectRole)},_goToResultSummary:function(){this._assigningRole(!1);this._stackContainer.selectChild(this._stackResultSummary)},_selectUsersChange:function(a){a&&a.selectedUsers&&
(this._set("selectedUsers",a.selectedUsers),this._refreshSelectedUsers())},_selectRoleClick:function(a){a&&a.preventDefault();var b=this;0===(b._get("selectedUsers")||[]).length?(a='\x3cspan style\x3d"color:red;"\x3e'+b.i18n.mustSelectUsers+"\x3c/span\x3e",n.show(a,b._selectUsersNext.domNode),v.once(b._selectUsersNext.domNode,w.leave,function(){n.hide(b._selectUsersNext.domNode)})):b._goToSelectRole()},_backToSelectUsersClick:function(a){a&&a.preventDefault();this._goToSelectUsers()},_emitRolesChanged:function(){y.publish("roles-change",
{})},_assigningRole:function(a){this._summaryAssign.set("disabled",a);this._summaryAssign.set("label",a?this.i18n.assigning:this.i18n.assign)},_assignClick:function(a){a&&a.preventDefault();var b=this,c=b._get("selectedUsers")||[],d=b._roleSelect.get("value"),g=[],e=0,f,p,h,m;b._assigningRole(!0);!l.isDefined(d)||0===d.length?(a='\x3cspan style\x3d"color:red;"\x3e'+b.i18n.mustSelectRole+"\x3c/span\x3e",n.show(a,b._summaryAssign.domNode),v.once(b._summaryAssign.domNode,w.leave,function(){n.hide(b._summaryAssign.domNode)}),
b._assigningRole(!1)):(k.forEach(c,function(a){b._assignRoleToUser(a,d).then(function(c){c&&!c.code?g.push({success:!0}):c&&c.code&&(p=c?c.messageCode&&"ORG_1052"===c.messageCode?b.i18n.errors.ORG_1052:c.messageCode&&"COM_1072"===c.messageCode?b.i18n.errors.COM_1072:b.i18n.errors.unableToAssign:b.i18n.errors.unableToAssign,g.push({success:!1,errorMessage:l.substitute({name:a.username},p)}));e+=1},function(c){p=c?c.messageCode&&"ORG_1052"===c.messageCode?b.i18n.errors.ORG_1052:c.messageCode&&"COM_1072"===
c.messageCode?b.i18n.errors.COM_1072:b.i18n.errors.unableToAssign:b.i18n.errors.unableToAssign;g.push({success:!1,errorMessage:l.substitute({name:a.username},p)});e+=1})}),h=setInterval(function(){if(e===c.length){clearInterval(h);b._assigningRole(!1);if(k.every(g,function(a){return a.success}))f=b.i18n.assignmentSuccessful;else{f=k.every(g,function(a){return!a.success})?b.i18n.assignmentFailure+"\x3cbr\x3e":b.i18n.assignmentPartialSuccess+"\x3cbr\x3e";for(m=0;m<g.length;m++)g[m].errorMessage&&(f+=
"\x3cbr\x3e"+g[m].errorMessage)}q.set(b._resultMessage,"innerHTML",f);b._goToResultSummary()}},100))},_assignMoreClick:function(a){a&&a.preventDefault();this.clear()},_resultCloseClick:function(a){a&&a.preventDefault();this._emitRolesChanged();this.hide()},_getUsernameList:function(a){var b=[];k.forEach(a,function(a){a&&a.username&&b.push(a.username)});return b},_getGroupIDList:function(a){var b=[];k.forEach(a,function(a){a&&a.id&&b.push(a.id)});return b},_refreshSelectedUsers:function(){q.set(this._selectedUsersPane,
"innerHTML","");var a=this._get("selectedUsers")||[],b,c;if(a)for(b=0;b<a.length;b++)c=a[b],t.create("span",{id:"selected-user-"+b,innerHTML:c.altName||c.fullName,"data-fullName":c.fullName,"data-username":c.username},this._selectedUsersPane),t.create("br",null,this._selectedUsersPane)},_assignRoleToUser:function(a,b){return D.request({url:esriGeowConfig.restBaseUrl+"portals/self/updateUserRole",content:{user:a.username,role:b}},{usePost:!0}).promise},clear:function(){l.isDefined(this._roleStore)||
(this._roleStore=new F({data:this._get("roles")}));this._roleSelect.set("store",this._roleStore);this._userSelector.reset();this._userSelector._initialize();this._set("selectedUsers",[]);this._refreshSelectedUsers();this._assigningRole(!1);this._roleSelect.set("value","org_user");q.set(this._resultMessage,"innerHTML","");this._goToSelectUsers()},show:function(a){this._set("roles",a);this.clear();this._dialog.show()},hide:function(){this._dialog.hide();(9>u("ie")||5>u("trident"))&&this._goToSelectUsers()},
onCancel:function(a){a&&a.preventDefault();this._resultCloseClick()}});r.prototype.statics={_instance:null,getInstance:function(){null==this._instance&&(this._instance=new r);return this._instance}};return r});