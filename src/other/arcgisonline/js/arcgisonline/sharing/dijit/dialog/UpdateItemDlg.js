// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/UpdateItemDlg",["dijit","dojo","dojox","dojo/require!dijit/form/SimpleTextarea,dijit/form/TextBox,dijit/form/CheckBox,dijit/form/Button,dijit/InlineEditBox,dijit/Dialog,dijit/_Widget,dijit/_Templated,arcgisonline/sharing/util,arcgisonline/sharing/geow/Community,arcgisonline/sharing/geow/Content,arcgisonline/sharing/dijit/dialog/GeneralDlg,arcgisonline/sharing/dijit/dialog/TagsDlg,dojo/promise/all,dojo/number"],function(l,b,m){b.provide("arcgisonline.sharing.dijit.dialog.UpdateItemDlg");
b.require("dijit.form.SimpleTextarea");b.require("dijit.form.TextBox");b.require("dijit.form.CheckBox");b.require("dijit.form.Button");b.require("dijit.InlineEditBox");b.require("dijit.Dialog");b.require("dijit._Widget");b.require("dijit._Templated");b.require("arcgisonline.sharing.util");b.require("arcgisonline.sharing.geow.Community");b.require("arcgisonline.sharing.geow.Content");b.require("arcgisonline.sharing.dijit.dialog.GeneralDlg");b.require("arcgisonline.sharing.dijit.dialog.TagsDlg");b.require("dojo.promise.all");
b.require("dojo.number");b.declare("arcgisonline.sharing.dijit.dialog.UpdateItemDlg",[l._Widget,l._Templated],{util:arcgisonline.sharing.util,community:arcgisonline.sharing.geow.Community,content:arcgisonline.sharing.geow.Content,widgetsInTemplate:!0,templateString:'\x3cdiv class\x3d"widgetContainer"\x3e\r\n  \x3cdiv dojotype\x3d"dijit.Dialog" dojoAttachPoint\x3d"_updateItemDialog" title\x3d"${i18n.updateItem}" dojoAttachEvent\x3d"hide:clear" execute\x3d"" style\x3d"width:520px;"\x3e\r\n    \x3cdiv dojoAttachPoint\x3d"_errorDiv"\x3e\x3c/div\x3e\r\n    \x3cform dojoAttachPoint\x3d"_updateItemForm" dojoAttachEvent\x3d"onsubmit:uploadItem" enctype\x3d"multipart/form-data" action\x3d"" method\x3d"post"\x3e\r\n      \x3cdiv dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateItemFolderInput" type\x3d"hidden" value\x3d"0"\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"id" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateItemIdInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"name" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateItemNameInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"title" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateItemTitleInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"tags" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateItemTagsInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"type" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateItemTypeInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"typeKeywords" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateItemKeywordsInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"description" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateDescriptionInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"snippet" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateSnippetInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"accessInformation" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateAccessInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"licenseInfo" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateLicenseInfoInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"extent" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateExtentInput" type\x3d"hidden" value\x3d""\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"overwrite" dojotype\x3d"dijit.form.TextBox" dojoAttachPoint\x3d"_updateOverwriteInput" type\x3d"hidden" value\x3d"true"\x3e\x3c/div\x3e\r\n      \x3cdiv name\x3d"async" dojotype\x3d"dijit.form.TextBox" type\x3d"hidden" dojoAttachPoint\x3d"_updateAsyncInput" value\x3d"true"\x3e\x3c/div\x3e\r\n\r\n      \x3cdiv\x3e\x3clabel dojoAttachPoint\x3d"_replaceUpdateVerLabel"\x3e${i18n.replaceUpdatedVersionMsg}\x3c/label\x3e\x3c/div\x3e\r\n      \x3cbr/\x3e\r\n      \x3cdiv style\x3d"padding-top:4px;margin-bottom:1.0em;"\x3e\r\n        \x3clabel class\x3d"esriFloatLeading esriTrailingMargin2" style\x3d"margin-top:6px;" for\x3d"update-item-file"\x3e${i18n.itemLabel}\x3c/label\x3e\r\n        \x3cinput type\x3d"file" dojoAttachPoint\x3d"_updateItemFile" id\x3d"update-item-file" name\x3d"file" size\x3d"40" class\x3d"esriFileInput"\x3e\r\n      \x3c/div\x3e\r\n      \x3cbr/\x3e\r\n\r\n      \x3cdiv id\x3d"overwrite_section" class\x3d"hide" style\x3d"padding-top:4px;margin-bottom:1.0em;"\x3e\r\n        \x3cinput id\x3d"overwriteService" type\x3d"checkbox" name\x3d"overwriteService" dojotype\x3d"dijit.form.CheckBox" checked\x3d"checked" dojoAttachPoint\x3d"_overwriteService"/\x3e\r\n        \x3clabel id\x3d"overwriteServiceLbl" for\x3d"overwriteService"\x3e${i18n.overwriteService} ${i18n.keepFieldsSame}\x3c/label\x3e\r\n        \x3cbr /\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv id\x3d"update-item-keepdescription" style\x3d"width:100%;display:none;"\x3e\r\n        \x3cdiv style\x3d"padding-bottom:5px; padding-top:2px;"\x3e\r\n          \x3clabel\x3e${i18n.updateItemDescription}\x3c/label\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv style\x3d"line-height:23px"\x3e\r\n          \x3cinput type\x3d"radio" name\x3d"useDescription" dojotype\x3d"dijit.form.RadioButton" checked\x3d"checked" dojoAttachPoint\x3d"_useDescKeepRadio" id\x3d"useDescription:keep"/\x3e\r\n          \x3clabel for\x3d"useDescription:keep"\x3e${i18n.keepExistingProperties}\x3c/label\x3e\r\n          \x3cbr/\x3e\r\n          \x3cinput type\x3d"radio" name\x3d"useDescription" dojotype\x3d"dijit.form.RadioButton" dojoAttachPoint\x3d"_useDescUpdateRadio" id\x3d"useDescription:update"/\x3e\r\n          \x3clabel for\x3d"useDescription:update"\x3e${i18n.useUploadedProperties}\x3c/label\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cbr/\x3e\r\n\r\n      \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding-bottom:20px;"\x3e\r\n        \x3cspan dojoAttachPoint\x3d"_waitingSpan" style\x3d"display:none;"\x3e${i18n.uploadingItemMsg}\x3c/span\x3e\r\n        \x3cbutton id\x3d"button_update-item" type\x3d"submit" dojotype\x3d"dijit.form.Button" class\x3d"jevent primary" dojoAttachPoint\x3d"_updateItemBtn"\x3e${i18n.updateItem}\x3c/button\x3e\r\n        \x3cbutton dojotype\x3d"dijit.form.Button" dojoAttachEvent\x3d"onClick:_handleCancel" dojoAttachPoint\x3d"_cancelBtn" id\x3d"button_update-item-cancel" class\x3d"jevent cancel" type\x3d"cancel"\x3e${i18n.cancel}\x3c/button\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cbr/\x3e\r\n      \x3cbr/\x3e\r\n    \x3c/form\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
item:null,admin:null,i18n:null,_replaceUpdateVerLabel:null,_updateItemDialog:null,_updateItemForm:null,_updateItemBtn:null,_cancelBtn:null,_waitingSpan:null,_useDescUpdateRadio:null,_useDescKeepRadio:null,_updateItemFile:null,_errorDiv:null,_updateItemFolderInput:null,_updateItemIdInput:null,_updateItemNameInput:null,_updateItemTitleInout:null,_updateItemTagsInput:null,_updateItemTypeInput:null,_updateItemKeywordsInput:null,_updateDescriptonInput:null,_updateSnippetInput:null,_updateAccessInput:null,
_updateLicenseInfoInput:null,_updateExtentInput:null,_updateOverwriteInput:null,_updateAsyncInput:null,statics:{_instance:null,getInstance:function(){null===this._instance&&(this._instance=new arcgisonline.sharing.dijit.dialog.UpdateItemDlg);return this._instance}},postMixInProperties:function(){this.inherited(arguments);this.i18n=b.i18n.getLocalization("arcgisonline","arcgisonline").common;b.mixin(this.i18n,b.i18n.getLocalization("arcgisonline","arcgisonline").updateItemDlg);b.mixin(this.i18n,{updating:b.i18n.getLocalization("arcgisonline",
"arcgisonline").addItemFrm.updating})},postCreate:function(){},show:function(a,c){var d={Shapefile:1,"File Geodatabase":1,GeoJson:1,CSV:1};this.item=a;c&&null!==this.adminUser&&(this.admin=c);"Layer Package"==a.type&&b.style(b.byId("update-item-keepdescription"),"display","block");"Vector Tile Service"===a.type?b.attr(this._replaceUpdateVerLabel,"innerHTML",this.i18n.overwriteStyle):(this.itemName=this.item.relatedItem&&this.item.relatedItem.name||this.item.name,b.attr(this._replaceUpdateVerLabel,
"innerHTML",b.string.substitute(this.i18n.replaceUpdatedVersionMsg,[this.itemName])));this.util.isPortal()||(a&&a.type in d&&a.relatedService?this._overwriteService.set("checked",!1):a&&a.relatedItem?(this._updateItemDialog.set("title",this.i18n.updateFeatures),this._updateItemBtn.set("label",this.i18n.updateFeatures),b.attr(this._replaceUpdateVerLabel,"innerHTML",b.string.substitute(this.i18n.overwriteServiceMsg,[a.title,a.relatedItem.name]))):this._overwriteService.set("checked",!1));a&&a.relatedItem&&
(esri.hide(this._overwriteService.domNode),b.attr("overwriteServiceLbl","innerHTML",this.i18n.keepFieldsSame),b.removeClass("overwrite_section","hide"));this._updateItemDialog.show()},clear:function(){this._updateItemFile.value="";this._useDescKeepRadio.set("checked",!0);this._useDescUpdateRadio.set("checked",!1);this._overwriteService.set("checked",!0)},_handleCancel:function(b){b.preventDefault();this._updateItemDialog.hide()},hide:function(){this._updateItemDialog.hide()},uploadItem:function(a){a.preventDefault();
if(0===this._updateItemFile.value.length)return arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({title:this.i18n.errorLabel,message:this.i18n.error.providePath}),!1;a=this._fetchItem(this.item).then(b.hitch(this,"loadFile"));if(!this.util.isPortal()&&(this.item.relatedItem||this.item.relatedService&&this._overwriteService.get("checked")))b.attr(this._waitingSpan,"innerHTML",this.i18n.updating),a=a.then(b.hitch(this,"_updateServiceData",this.item.relatedItem||this.item));
return a.then(b.hitch(this,function(a){a&&(!a.success&&a.error)&&arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({title:this.i18n.updateItemErrorTitle,message:a.error.message||this.i18n.error.errorWhileUpdate});this._updateItemBtn.set("disabled",!1);this._cancelBtn.set("disabled",!1);b.style(this._waitingSpan,"display","none");this._updateItemDialog.hide();a&&a.serviceItemId?window.location="item.html?id\x3d"+a.serviceItemId+(a.jobId?"\x26jobid\x3d"+a.jobId:""):b.publish("onItemUpdate",
[""]);return!0}),b.hitch(this,function(a){b.isObject(a)&&arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({title:this.i18n.updateItemErrorTitle,message:a.message||this.i18n.error.errorWhileUpdate});this._updateItemBtn.set("disabled",!1);this._cancelBtn.set("disabled",!1);b.style(this._waitingSpan,"display","none")}))},_updateServiceData:function(a){var c=new b.Deferred;this._checkStatus(a,500,b.hitch(this,function(a){var f=esriGeowConfig.restBaseUrl+"content/users/"+
a.owner+"/publish",g,k,e={itemid:a.id,filetype:{"file geodatabase":"filegeodatabase",shapefile:"shapefile",geojson:"geojson",csv:"CSV"}[a.type.toLowerCase()],overwrite:!0,publishParameters:b.json.stringify({name:this.item.title?this.item.title.replace(/ /g,"_"):a.title.replace(/ /g,"_")})};b.attr(this._waitingSpan,"innerHTML",this.i18n.updating);b.promise.all([this._fetchPublishParameters(this.item),this._fetchServiceInfo(this.item.relatedService||this.item)]).then(b.hitch(this,function(h){g=h[1];
(k=h[0])?(h=b.mixin(b.mixin({},g.layers&&g.layers[0]),{fields:k.layerInfo.fields}),e.publishParameters=b.mixin(k,{layerInfo:h,name:k.name||a.title.replace(/ /g,"_")})):e.publishParameters={name:this.item.title?this.item.title.replace(/ /g,"_"):a.title.replace(/ /g,"_")};e.publishParameters=g?b.json.stringify(b.mixin(e.publishParameters,g)):e.publishParameters;return this.util.request({url:f,content:e},{usePost:!0}).then(b.hitch(this,function(b){c.resolve(b&&b.services&&b.services[0]||{serviceItemId:a.id})}),
b.hitch(this,function(a){c.reject(a)}))}))}));return c},_fetchServiceInfo:function(a){a=a.url;var c={addToken:(this.util.isHostedService(a)||this.util.isAgolService(a))&&!1!==esriGeowConfig.isMultiTenant},d=new b.Deferred,f;b.promise.all([this.util.request({url:a},c),this.util.request({url:a+"/layers"},c)]).then(b.hitch(this,function(a){var c={},e=a&&1<a.length&&a[1],h=e&&e.layers,e=e&&e.tables;h&&h.length&&(b.forEach(h,function(a){delete a.fields}),c.layers=h);e&&e.length&&(c.tables=e);f=b.mixin(a[0],
c);d.resolve(f)}));return d},_fetchPublishParameters:function(a){var c=esriGeowConfig.restBaseUrl+"content/items/"+a.id+"/info/publishParameters.json";a.relatedItem&&"CSV"===a.relatedItem.type?a=this.util.request({url:c}).then(b.hitch(this,function(a){return a})):(a=new b.Deferred,a.resolve(!1));return a},_fetchItem:function(a){var c;a.relatedItem?c=this.util.request({url:esriGeowConfig.restBaseUrl+"content/items/"+a.relatedItem.id}).then(b.hitch(this,function(a){a.folderId=a.ownerFolder;return a})):
(c=new b.Deferred,c.resolve(a));return c},loadFile:function(a){var c=new b.Deferred,d=this._updateItemFile.value,f=d.lastIndexOf("\\"),g=a.type;-1<f&&(d=d.substring(f+1,d.length));d=d.replace(/\ /g,"_");if("Vector Tile Service"!==a.type&&this.itemName!=d)return arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({title:this.i18n.errorLabel,message:b.string.substitute(this.i18n.error.sameFileName,[this.itemName])}),this._updateItemFile.value="",c.reject(!0),c;this._updateItemBtn.set("disabled",
!0);this._cancelBtn.set("disabled",!0);b.style(this._waitingSpan,"display","inline-block");d=!0;"Layer Package"==g&&(d=b.byId("useDescription:keep").checked);this._updateItemNameInput.set("value",this.itemName);this._updateItemTitleInput.set("value",a.title);this._updateItemTagsInput.set("value",a.tags);this._updateItemTypeInput.set("value",g);this._updateItemKeywordsInput.set("value",a.typeKeywords);this._updateAccessInput.set("value",a.accessInformation);this._updateLicenseInfoInput.set("value",
a.licenseInfo);this._updateItemFolderInput.set("value",a.folderId);d?(this._updateDescriptionInput.set("value",a.description),this._updateSnippetInput.set("value",a.snippet),this._updateExtentInput.set("value",a.extent)):(this._updateDescriptionInput.set("value",""),this._updateSnippetInput.set("value",""),this._updateExtentInput.set("value",""));g=function(a,b){if(a.success&&("completed"===a.status||!a.status))c.resolve(!0);else{var d=this.i18n.error.errorWhileUpdate;a&&(a.error&&a.error.message)&&
(d=a.error.message);-1<d.indexOf("The request size is greater than the max allowed of 1024MB")&&(d=this.i18n.error.exceedFileSizeLimit);arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({title:this.i18n.updateItemErrorTitle,message:d});c.reject(!0)}};d=function(a){this._updateItemBtn.set("disabled",!1);this._cancelBtn.set("disabled",!1);b.style(this._waitingSpan,"display","none");c.reject(a)};a&&"Vector Tile Service"===a.type?this._updateItemResource(a,this._updateItemForm).then(b.hitch(this,
g),b.hitch(this,d)):this.admin&&null!==this.admin?this.content.updateItemByUser(a,this._updateItemForm,b.hitch(this,g),b.hitch(this,d)):this.content.updateItem(a,this._updateItemForm,b.hitch(this,g),b.hitch(this,d));return c},_updateItemResource:function(a,c){var d=this.util.getUser(),f=a.folderId||a.ownerFolder,d={url:esriGeowConfig.restBaseUrl+"content/users/"+(a.owner||d.email)+"/"+(f?f+"/":"")+"/items/"+a.id+"/updateResources",form:c,content:{resourcesPrefix:"styles",filename:"root.json"}};b.query("input",
c).forEach(b.hitch(this,function(a){a&&"file"!==a.name&&b.attr(a,"name","")}));return this.util.request(d,{usePost:!0})},_checkStatus:function(a,c,d){this.util.request({url:esriGeowConfig.restBaseUrl+"content/users/"+a.owner+(a.ownerFolder&&"/"!==a.ownerFolder?"/"+a.ownerFolder:"")+"/items/"+a.id+"/status"}).then(b.hitch(this,function(f){f=f||{status:"failed"};"completed"===f.status?d(a):(c=(c||500)+250,setTimeout(b.hitch(this,function(){this._checkStatus(a,c,d)}),c))}))}})});