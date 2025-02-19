// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:arcgisonline/sharing/dijit/dialog/templates/SelectEnterpriseGroupDlg.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"_dialog" id\x3d"select-enterprise-group-dialog" class\x3d"${baseClass}" title\x3d"${i18n.selectGroup}" execute\x3d""\x3e\r\n    \x3cp\x3e${i18n.useSearch}\x3c/p\x3e\r\n    \x3cdiv class\x3d"esriFloatTrailing esriTrailingMargin025"\x3e\r\n      \x3clabel for\x3d"searchInput"\x3e${i18n.findGroup}\x3c/label\x3e\r\n      \x3cdiv id\x3d"searchInput" data-dojo-type\x3d"dijit/form/TextBox" class\x3d"${baseClass}" data-dojo-attach-point\x3d"_search" data-dojo-props\x3d"trim:true" data-dojo-attach-event\x3d"onKeyDown:onSearchKeyDown"\x3e\x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-point\x3d"_searchBtn" class\x3d"calcite light small" data-dojo-attach-event\x3d"onClick:onSearch"\x3e${i18n.search}\x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cbr style\x3d"clear:both;"/\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_gridContainer" style\x3d"margin-top:1em;"\x3e\x3c/div\x3e\r\n    \x3cdiv style\x3d"margin-top:1em;"\x3e\r\n      \x3cdiv class\x3d"esriFloatLeading" data-dojo-attach-point\x3d"_goToPageContainer"\x3e\r\n        \x3clabel for\x3d"goToInput"\x3e${i18n.goToPage}\x3c/label\x3e\r\n        \x3cdiv id\x3d"goToInput" class\x3d"${baseClass}" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"_goTo" data-dojo-attach-event\x3d"onKeyDown:onGoToPageKeyDown" data-dojo-props\x3d"trim:true"\x3e\x3c/div\x3e\r\n        \x3cbutton data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-point\x3d"_goBtn" class\x3d"calcite light small" data-dojo-attach-event\x3d"onClick:onGoToPage"\x3e${i18n.goTo}\x3c/button\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n        \x3cbutton data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-point\x3d"_okBtn" class\x3d"calcite blue" data-dojo-attach-event\x3d"onClick:onOk"\x3e${i18n.selectGroup}\x3c/button\x3e\r\n        \x3cbutton data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-point\x3d"_cancelBtn" class\x3d"calcite transparent" data-dojo-attach-event\x3d"onClick:onCancel"\x3e${i18n.cancel}\x3c/button\x3e\r\n      \x3c/div\x3e\r\n      \x3cbr style\x3d"clear:both;"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("arcgisonline/sharing/dijit/dialog/SelectEnterpriseGroupDlg","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/event dojo/on dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/i18n dojo/keys dojo/topic dojo/store/Memory esri/lang esri/request arcgisonline/sharing/util arcgisonline/sharing/dijit/Grid dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/Button dijit/form/TextBox dojo/text!arcgisonline/sharing/dijit/dialog/templates/SelectEnterpriseGroupDlg.html".split(" "),
function(k,l,b,x,d,y,z,A,f,m,g,B,h,n,p,e,C,q,r,s,t,u,D,E,v){return l([s,t,u],{declaredClass:"arcgisonline.sharing.dijit.dialog.SelectEnterpriseGroupDlg",basePath:k.toUrl("esri/arcgisonline/sharing/dijit/dialog"),baseClass:"esriSelectEnterpriseGroupDlg",widgetsInTemplate:!0,templateString:v,_maxGroups:1E3,_searchEnterpriseGroupsAPI:"security/groups/searchEnterpriseGroups",statics:{_instance:null,getInstance:function(){null===this._instance&&(this._instance=new arcgisonline.sharing.dijit.dialog.SelectEnterpriseGroupDlg);
return this._instance}},postMixInProperties:function(){this.inherited(arguments);this.i18n={};b.mixin(this.i18n,dojo.i18n.getLocalization("arcgisonline","arcgisonline").common);b.mixin(this.i18n,dojo.i18n.getLocalization("arcgisonline","arcgisonline").selectEnterpriseGroupDlg)},postCreate:function(){this.inherited(arguments);this._portalAdminUrl=esriGeowConfig.baseUrl.substring(0,esriGeowConfig.baseUrl.indexOf("/home"))+"/portaladmin/"},startup:function(){this.inherited(arguments)},show:function(a){this._clear();
this._initSearch(a);this._dialog.show();this._groupsGrid&&this._groupsGrid._started&&(this._groupsGrid._grid.resize(),this._groupsGrid._grid.refresh());this.onSearch()},onSearchKeyDown:function(a){a.keyCode==h.ENTER&&(d.stop(a),this.onSearch())},onSearch:function(a){a&&a.preventDefault();this._clearGroupsGrid();a=this._search.get("value");!a||""===a?this._defaultGroupsQuery():this._searchEnterpriseGroups(a).then(b.hitch(this,function(a){if(a&&a.groups&&0<a.groups.length){var c=this._groupsGrid.get("store"),
b;for(b=0;b<a.groups.length;b++)c.put(a.groups[b])}this._groupsGrid.refresh()}),b.hitch(this,function(a){this._groupsGrid.refresh()}))},onGoToPageKeyDown:function(a){a.keyCode==h.ENTER&&(d.stop(a),this.onGoToPage())},onGoToPage:function(){var a=this._goTo.get("value"),w=Math.ceil(this._groupsGrid._grid._total/this._groupsGrid._grid._rowsOnPage);try{a=parseInt(a),a<=w?this._groupsGrid._grid.gotoPage(a).then(b.hitch(this,function(){this._goTo.set("value","")})):this._goTo.set("value","")}catch(c){console.log("error attempting to go to page ",
a,c),this._goTo.set("value","")}},onCancel:function(){this._dialog.hide()},onOk:function(){n.publish("enterprise-group-selected",this._selectedGroup);this._dialog.hide()},_searchEnterpriseGroups:function(a,b){var c=this._portalAdminUrl+this._searchEnterpriseGroupsAPI,d={max:e.isDefined(b)?b:this._maxGroups};e.isDefined(a)&&0<a.length&&(d.filter=a);return q.request({url:c,content:d})},_defaultGroupsQuery:function(){this._clearGroupsGrid();this._searchEnterpriseGroups().then(b.hitch(this,function(a){if(a&&
a.groups&&0<a.groups.length){var b=this._groupsGrid.get("store"),c;for(c=0;c<a.groups.length;c++)b.put(a.groups[c])}this._groupsGrid.refresh()}),b.hitch(this,function(a){this._groupsGrid.refresh()}))},_groupsGridColumns:function(){return{rolename:{label:" "+this.i18n.groupNameCol,sortable:!1,formatter:b.hitch(this,function(a){return'\x3cspan class\x3d"esriContentTypeName"\x3e'+a+"\x3c/span\x3e"})},description:{label:" "+this.i18n.descCol,sortable:!1,formatter:b.hitch(this,function(a){a=e.isDefined(a)?
a:"";return'\x3cspan class\x3d"esriContentTypeName"\x3e'+a+"\x3c/span\x3e"})}}},_createGroupsGrid:function(){this._groupsGrid=new r({columns:this._groupsGridColumns(),id:"groupsGrid",region:"center",noDataMessage:this.i18n.noGroupsFound,showLoadingMessage:!0,showHeader:!0,rowsPerPage:10,pagingLinks:!0,selectionMode:"single",store:new p({identifier:"rolename",label:"rolename",data:[]})},m.create("div",null,this._gridContainer));this._groupsGrid.startup();this._groupsGrid.on("dgrid-select",b.hitch(this,
this._selectedGridRow));this._groupsGrid.on("dgrid-deselect",b.hitch(this,this._deselectedGridRow));this._groupsGrid.on("dgrid-refresh-complete",b.hitch(this,function(){1<Math.ceil(this._groupsGrid._grid._total/this._groupsGrid._grid._rowsOnPage)?g.set(this._goToPageContainer,"display",""):g.set(this._goToPageContainer,"display","none")}))},_selectedGridRow:function(a){f.add(a.rows[0].element,"selectedGroup");this._selectedGroup=a.rows[0].data;this._okBtn.set("disabled",!1)},_deselectedGridRow:function(a){f.remove(a.rows[0].element,
"selectedGroup");this._selectedGroup&&this._selectedGroup.name===a.rows[0].data.name&&(this._selectedGroup=null,this._okBtn.set("disabled",!0))},_initGrid:function(){this._groupsGrid?this._clearGroupsGrid():this._createGroupsGrid();this._groupsGrid.refresh()},_clearGroupsGrid:function(){var a=this._groupsGrid.get("store"),b=a.query(),c;for(c=0;c<b.length;c++)b[c]&&b[c].id&&a.remove(b[c].id)},_clear:function(){this._search.set("value","");this._selectedGroup=null;this._okBtn.set("disabled",!0);this._initGrid()},
_initSearch:function(a){e.isDefined(a)&&this._search.set("value",a)}})});