// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:arcgisonline/map/dijit/renderer/templates/SymbolStylerDlg.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cdiv id\x3d"symbolStylerDiv"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriFloatTrailing" style\x3d"margin:10px 0;"\x3e\r\n    \x3cbutton type\x3d"button" data-dojo-attach-point\x3d"_okBtn" data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-event\x3d"onClick:_onOK" class\x3d"calcite primary"\x3e${i18n.ok}\x3c/button\x3e\r\n    \x3cbutton type\x3d"button" data-dojo-attach-point\x3d"_cancelBtn" data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-event\x3d"onClick:_onCancel" class\x3d"calcite cancel"\x3e${i18n.cancel}\x3c/button\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("arcgisonline/map/dijit/renderer/SymbolStylerDlg","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/has dojo/dom dojo/dom-style esri/dijit/SymbolStyler esri/dijit/SymbolStyler/ColorRampPicker dijit/_Widget dijit/_Templated dojo/i18n!arcgisonline/nls/arcgisonline dojo/text!arcgisonline/map/dijit/renderer/templates/SymbolStylerDlg.html".split(" "),function(b,e,f,r,c,g,h,k,d,l,m,n,p,q){b=e([m,n],{declaredClass:"arcgisonline.map.dijit.renderer.SymbolStylerDlg",
baseClass:"esriSymbolStylerDlg",basePath:b.toUrl("arcgisonline/map/renderer"),widgetsInTemplate:!0,templateString:q,postMixInProperties:function(){this.inherited(arguments);this.i18n=p.common},destroy:function(){this.picker&&this.picker.destroy();this.picker=null;this.inherited(arguments)},_onClose:function(a){a.preventDefault()},_onOK:function(a){a.preventDefault();this.picker instanceof d?(this.picker.storeColors(),c.publish("symbolStylerOk",[this.picker.getStyle(),this.picker.get("activeTab")])):
c.publish("symbolStylerOk",[this.picker.getStyle()])},_onCancel:function(a){a.preventDefault();c.publish("symbolStylerCancel")},show:function(a,b){a?(this.picker=new d({portalUrl:esriGeowConfig.restBaseUrl},"symbolStylerDiv"),this.picker.startup(),this.picker.edit(a,b)):(k.set(h.byId("symbolStylerDlgContent"),"padding","10px 30px"),this.picker=new l({},"symbolStylerDiv"),this.picker.startup(),this.picker.set(b))}});g("extend-esri")&&f.setObject("arcgisonline.map.dijit.renderer.SymbolStylerDlg",b);
return b});