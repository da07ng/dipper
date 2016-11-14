// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/TagsDlg",["dijit","dojo","dojox","dojo/require!dijit/_Widget,dijit/_Templated,dijit/Dialog,dijit/form/MultiSelect,dijit/form/SimpleTextarea,arcgisonline/sharing/geow/Content"],function(d,a,f){a.provide("arcgisonline.sharing.dijit.dialog.TagsDlg");a.require("dijit._Widget");a.require("dijit._Templated");a.require("dijit.Dialog");a.require("dijit.form.MultiSelect");a.require("dijit.form.SimpleTextarea");a.require("arcgisonline.sharing.geow.Content");a.declare("arcgisonline.sharing.dijit.dialog.TagsDlg",
[d._Widget,d._Templated],{widgetsInTemplate:!0,templateString:'\x3cdiv class\x3d"widgetContent" \x3e\r\n  \x3cdiv dojotype\x3d"dijit.Dialog" dojoAttachPoint\x3d"_tagsDialog" dojoAttachPoint\x3d"onHide:clear" title\x3d"${i18n.tagDlgTitle}" class\x3d"tagsForm"\x3e\r\n    \x3cdiv dojoAttachPoint\x3d"_tagsErrorDiv"\x3e\x3c/div\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"_contentTagsDiv" style\x3d"display:block;"\x3e\r\n\t\t\x3clabel \x3e${i18n.selectTag}\x3c/label\x3e\r\n\t\t\x3cbr /\x3e\r\n\t\t\x3cbr /\x3e\r\n\t    \x3cselect dojoAttachPoint\x3d"_tagsSelect" dojoType\x3d"dijit.form.MultiSelect" style\x3d"width:100%;height:150px;"\x3e\x3c/select\x3e\r\n\t\t\x3cbr /\x3e\r\n\t\t\x3cdiv dojoAttachPoint\x3d"_cancelBtn" dojotype\x3d"dijit.form.Button" class\x3d"cancel" dojoAttachEvent\x3d"onClick:_handleCancelClick" style\x3d"float:right;"\x3e${i18n.cancel}\x3c/div\x3e\r\n\t\t\x3cdiv dojoAttachPoint\x3d"_submitBtn" dojotype\x3d"dijit.form.Button" class\x3d"primary" type\x3d"submit" dojoAttachEvent\x3d"onClick:getSelectedTags" style\x3d"float:right;"\x3e${i18n.useSelected}\x3c/div\x3e  \r\n\t\t\x3cbr /\x3e\r\n\t\t\x3cbr /\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"_contentNoTagsDiv" style\x3d"display:none;"\x3e\r\n\t\t\x3clabel\x3e${i18n.tagsNotAvailable}\x3c/label\x3e\r\n\t\t\x3cbr /\x3e\r\n\t\t\x3cbr /\x3e\r\n\t\t\x3cdiv id\x3d"button_tags-ok" dojoAttachPoint\x3d"_okBtn" dojotype\x3d"dijit.form.Button" class\x3d"primary" dojoAttachEvent\x3d"onClick:_handleCancelClick" style\x3d"float:right;"\x3e${i18n.ok}\x3c/div\x3e\r\n\t\t\x3cbr/\x3e\r\n\t\t\x3cbr/\x3e\r\n\t\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
_tagsDialog:null,_contentTagsDiv:null,_contentNoTagsDiv:null,_tagsSelect:null,i18n:null,statics:{_instance:null,getInstance:function(){null==this._instance&&(this._instance=new arcgisonline.sharing.dijit.dialog.TagsDlg);return this._instance}},postMixInProperties:function(){this.inherited(arguments);this.i18n=a.i18n.getLocalization("arcgisonline","arcgisonline").common;a.mixin(this.i18n,a.i18n.getLocalization("arcgisonline","arcgisonline").tagsDlg)},postCreate:function(){},_handleCancelClick:function(a){a.preventDefault();
this._tagsDialog.hide()},clear:function(){this._tagsSelect.reset();a.style(this._contentTagsDiv,"display","none");a.style(this._contentNoTagsDiv,"display","none")},hide:function(){this._tagsDialog.hide()},show:function(b){this.clear();var e=arcgisonline.sharing.util.getUser(),c=esriGeowConfig.restBaseUrl+"community/users/",c=b&&(b.username||b.email)?c+(b.username?b.username:b.email):c+e.email;arcgisonline.sharing.util.getJson(c+"/tags",a.hitch(this,this._handleTagResponse),a.hitch(this,this._handleError));
this._tagsDialog.show()},_handleTagResponse:function(b){0==b.tags.length?a.style(this._contentNoTagsDiv,"display",""):(a.style(this._contentTagsDiv,"display",""),a.empty(this._tagsSelect.domNode),a.forEach(b.tags,function(b){a.create("option",{innerHTML:b.tag,value:b.tag},this._tagsSelect.domNode)},this))},_handleError:function(a){},getSelectedTags:function(b){b.preventDefault();b=[];b=this._tagsSelect.get("value");a.publish("onSelectedTagsUpdate",[b.toString()])}})});