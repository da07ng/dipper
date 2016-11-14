// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/SelectGroups",["dijit","dojo","dojox","dojo/i18n!arcgisonline/nls/arcgisonline","dojo/require!dojo/keys,dijit/_WidgetBase,dijit/form/Button,arcgisonline/sharing/util"],function(g,a,h){a.provide("arcgisonline.sharing.dijit.dialog.SelectGroups");a.require("dojo.keys");a.require("dijit._WidgetBase");a.require("dijit.form.Button");a.requireLocalization("arcgisonline","arcgisonline");a.require("arcgisonline.sharing.util");a.declare("arcgisonline.sharing.dijit.dialog.SelectGroups",
[g._WidgetBase],{baseClass:"esriAGOSelectGroups",widgetsInTemplate:!0,_util:arcgisonline.sharing.util,postMixInProperties:function(){this.inherited(arguments);this.i18n=a.mixin({},a.i18n.getLocalization("arcgisonline","arcgisonline").common);this.i18n=a.mixin(this.i18n,a.i18n.getLocalization("arcgisonline","arcgisonline").selectGroups)},buildRendering:function(){var b=document.createDocumentFragment(),c=a.create("div",{},b);a.create("div",{innerHTML:this.i18n.searchLabel},c);var d=new g.form.TextBox({name:"groupSearch",
trim:"true"},a.create("input",{},c)),c=new g.form.Button({width:"100px",height:"75px",label:this.i18n.search},a.create("button",{type:"button"},c)),e=a.create("div",{"class":"list"},b);a.create("span",{"class":"groupLabel",innerHTML:this.i18n.groupToAdd},e);a.create("div",{"class":"listHeader groupAllHeader",innerHTML:this.i18n.groups},e);var e=a.create("ul",{"class":"groupList"},e),f=a.create("div",{"class":"list"},b);a.create("span",{"class":"groupLabel",innerHTML:this.i18n.groupToRemove},f);a.create("div",
{"class":"listHeader groupAddHeader",innerHTML:this.i18n.addToTheseGroups},f);f=a.create("ul",{"class":"groupList"},f);this._searchBox=d;this._searchButton=c;this._groupsList=e;this._selectedGroupsList=f;this.inherited(arguments);this.domNode.appendChild(b)},startup:function(){this.inherited(arguments);this._groups=[];this._fetchOrganizationGroups({}).then(a.hitch(this,"_filterGroups"));this.connect(this._searchButton,"onClick",a.hitch(this,"_search"));this.connect(this._searchBox,"onKeyDown",a.hitch(this,
"_searchKeyDown"));this.connect(this._groupsList,"onclick",a.hitch(this,"_addGroup",this._selectedGroupsList));this.connect(this._selectedGroupsList,"onclick",a.hitch(this,"_removeGroup",this._groupsList))},_setDisabledAttr:function(b){a.forEach(g.registry.findWidgets(this.domNode,this.containerNode),function(a){a.set("disabled",b)})},_getValueAttr:function(){return a.query("*",this._selectedGroupsList).map(a.hitch(this,function(a){return this._groups[a.value]}))},_moveGroup:function(b,c){var d=c.target,
e=a.query("."+a.attr(d,"class"),b);if(!e||!e.length)b.appendChild(a.clone(d)),a.destroy(d)},_addGroup:function(b,c){var d=c.target,e=a.query("."+a.attr(d,"class"),b);(!e||!e.length)&&b.appendChild(a.clone(d))},_removeGroup:function(b,c){a.destroy(c.target)},_searchKeyDown:function(b){b.keyCode==a.keys.ENTER&&(a.stopEvent(b),this._search())},_search:function(){var b=this._searchBox.get("value");a.empty(this._groupsList);if(b){var c=RegExp(this._escapeRegexpChars(b),"ig");a.forEach(this._groups,a.hitch(this,
function(b,e){b.title.match(c)&&this._groupsList.appendChild(a.create("li",{innerHTML:b.title,value:e,id:b.id,"class":b.title.toLowerCase().replace(/ /g,"_")}))}))}else this._addGroups(this._groups)},_escapeRegexpChars:function(a){esri.isDefined(a)&&(a=a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$\x26"));return a},_filterGroups:function(b){a.forEach(b,a.hitch(this,function(c,d){a.forEach(b,a.hitch(this,function(a,b){b!==d&&a.title===c.title&&(a.title=a.title+" ("+a.owner+")",c.title=c.title+" ("+c.owner+
")")}))}));this._addGroups(b)},_addGroups:function(b){a.forEach(b,a.hitch(this,function(b,d){this._groupsList.appendChild(a.create("li",{innerHTML:b.title,value:d,id:b.id,"class":b.title.toLowerCase().replace(/ /g,"_")}))}))},_fetchOrganizationGroups:function(b){var c=esriGeowConfig.userInfo.accountId,d=esriGeowConfig.restBaseUrl+"community/groups";b=b||{};return this._util.getJson(d+"?"+a.objectToQuery({start:b.nextStart||1,sortField:"title",sortOrder:"asc",q:"(orgid:"+c+")"})).then(a.hitch(this,
function(a){this._groups=this._groups.concat(a.results);return-1!==a.nextStart?this._fetchOrganizationGroups(a):this._groups}))}})});