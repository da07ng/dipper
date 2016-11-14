// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/GeneralDlg",["dijit","dojo","dojox","dojo/require!dijit/Dialog,dijit/_Widget,dijit/_Templated"],function(c,a,d){a.provide("arcgisonline.sharing.dijit.dialog.GeneralDlg");a.require("dijit.Dialog");a.require("dijit._Widget");a.require("dijit._Templated");a.declare("arcgisonline.sharing.dijit.dialog.GeneralDlg",[c._Widget,c._Templated],{widgetsInTemplate:!0,templateString:'\x3cdiv class\x3d"widgetContent" \x3e\r\n  \x3cdiv dojotype\x3d"dijit.Dialog" id\x3d"general-dialog" title\x3d"${i18n.notificationDlgTitle}" execute\x3d""\x3e\r\n  \x3cdiv id\x3d"general-dialog-content"\x3e\x3c/div\x3e\r\n  \x3cbr\x3e\r\n  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n    \x3cbutton id\x3d"button_general-close" dojoAttachEvent\x3d"onClick:onOkClick" class\x3d"jevent primary" dojoType\x3d"dijit.form.Button"\x3e${i18n.ok}\x3c/button\x3e\r\n  \x3c/div\x3e\r\n    \x3cbr style\x3d"clear:both;"\x3e\r\n\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
statics:{_instance:null,getInstance:function(){null===this._instance&&(this._instance=new arcgisonline.sharing.dijit.dialog.GeneralDlg);return this._instance}},postMixInProperties:function(){this.inherited(arguments);this.i18n=a.i18n.getLocalization("arcgisonline","arcgisonline").common;a.mixin(this.i18n,a.i18n.getLocalization("arcgisonline","arcgisonline").generalDlg)},postCreate:function(){this.loadConnections()},show:function(b){this.clear();this.setTitle(b.title);this.setMessage(b.message);b.error&&
a.addClass("general-dialog-content","error");c.byId("general-dialog").show()},showWide:function(b){a.style(a.byId("general-dialog"),"width","700px");this.show(b)},clear:function(){a.byId("general-dialog_title").innerHTML="";a.byId("general-dialog-content").innerHTML="";a.removeClass("general-dialog-content","error")},loadConnections:function(){a.query(".jevent").connect("onclick",function(a){a.preventDefault()});a.query("#general-dialog .dijitDialogTitleBar .dijitDialogCloseIcon").forEach(a.hitch(this,
function(b){a.attr(b,"title",this.i18n.close)}));var b=c.byId("general-dialog");a.connect(b,"onCancel",a.hitch(this,function(a){this.onCancel(a)}));a.connect(b,"hide",a.hitch(this,function(a){this.onHide(a)}))},setTitle:function(b){b&&(a.byId("general-dialog_title").innerHTML=b)},setMessage:function(b){b&&(a.byId("general-dialog-content").innerHTML="\x3cp style\x3d'word-wrap:break-word;'\x3e"+b+"\x3c/p\x3e")},hide:function(){c.byId("general-dialog").hide()},onOkClick:function(a){c.byId("general-dialog").hide()},
onCancel:function(){},onHide:function(){}})});