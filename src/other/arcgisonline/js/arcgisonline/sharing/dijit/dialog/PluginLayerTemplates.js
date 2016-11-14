// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/PluginLayerTemplates",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array"],function(f,d,g){var e=f("arcgisonline.sharing.dijit.dialog.PluginLayerTemplates",null,{constructor:function(a){d.mixin(this,a)},fetchData:function(){this._portal=this.parent._portal;this._user=this._portal.getPortalUser();var a;return this._fetchGroups().then(d.hitch(this,function(c){a=g.map(c||[],function(a){if(a)return'group:"'+a.id+'"'});return this._fetchGroupItems(a)}))},
_fetchGroup:function(a,c){this._groups=this._groups||[];return this._groups[a]||this._portal.queryGroups(c,!0).then(d.hitch(this,function(b){b=b.total&&b.results&&b.results[0]||null;return(this._groups[a]=b)||{}}))},_fetchGroupItems:function(a,c){return this.parent._fetchItems({query:'type:"Layer Template" AND typekeywords: "Service Template" ',groups:a})},_fetchGroups:function(){return this._fetchEsriLayerTemplates()},_fetchEsriLayerTemplates:function(){return this._fetchGroup("esriLayerTemplates",
{q:esriGeowConfig&&esriGeowConfig.self&&esriGeowConfig.self.layerTemplatesGroupQuery,num:100,start:0,sortField:"title",sortOrder:"asc"}).then(d.hitch(this,function(a){return[a]}))}});d.mixin(e,{add:function(a,c){if(!a.plugIn){var b=c||{};b.parent=a;a.plugIn=new e(b)}},remove:function(a){a.plugIn&&(a.plugIn.destroy(),delete a.plugIn)}});return e});