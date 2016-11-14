// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/ShareGroupDlg",["dijit","dojo","dojox","dojo/require!dijit/_Widget,dijit/_Templated,dijit/Dialog,dijit/form/CheckBox,dijit/form/RadioButton,dijit/form/SimpleTextarea,dijit/form/Textarea,dijit/form/TextBox,dijit/layout/StackContainer,dojo/data/ObjectStore,dojo/store/Memory,arcgisonline/sharing/dijit/ComboBox,arcgisonline/sharing/dijit/GroupTemplatesGrid,arcgisonline/sharing/dijit/dialog/GeneralDlg,arcgisonline/sharing/geow/Account,arcgisonline/sharing/geow/Content,arcgisonline/sharing/geow/Community,arcgisonline/sharing/util,esri/dijit/Tags,arcgisonline/sharing/dijit/dialog/BrowseItemsDlg,arcgisonline/sharing/dijit/dialog/PluginGroupTemplates,arcgisonline/sharing/dijit/dialog/ConfirmDialog,arcgisonline/sharing/dijit/dialog/ItemPropertiesDlg,arcgisonline/sharing/dijit/dialog/_CreateItemUtilMixin"],
function(d,a,k){a.provide("arcgisonline.sharing.dijit.dialog.ShareGroupDlg");a.require("dijit._Widget");a.require("dijit._Templated");a.require("dijit.Dialog");a.require("dijit.form.CheckBox");a.require("dijit.form.RadioButton");a.require("dijit.form.SimpleTextarea");a.require("dijit.form.Textarea");a.require("dijit.form.TextBox");a.require("dijit.layout.StackContainer");a.require("dojo.data.ObjectStore");a.require("dojo.store.Memory");a.require("arcgisonline.sharing.dijit.ComboBox");a.require("arcgisonline.sharing.dijit.GroupTemplatesGrid");
a.require("arcgisonline.sharing.dijit.dialog.GeneralDlg");a.require("arcgisonline.sharing.geow.Account");a.require("arcgisonline.sharing.geow.Content");a.require("arcgisonline.sharing.geow.Community");a.require("arcgisonline.sharing.util");a.require("esri.dijit.Tags");a.require("arcgisonline.sharing.dijit.dialog.BrowseItemsDlg");a.require("arcgisonline.sharing.dijit.dialog.PluginGroupTemplates");a.require("arcgisonline.sharing.dijit.dialog.ConfirmDialog");a.require("arcgisonline.sharing.dijit.dialog.ItemPropertiesDlg");
a.require("arcgisonline.sharing.dijit.dialog._CreateItemUtilMixin");a.declare("arcgisonline.sharing.dijit.dialog.ShareGroupDlg",[d._Widget,d._Templated],{widgetsInTemplate:!0,templateString:'\x3cdiv class\x3d"widgetContent"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit.Dialog" data-dojo-attach-point\x3d"_shareGroupDialog" id\x3d"share-group-dialog" title\x3d"${i18n.share}"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit.layout.StackContainer" id\x3d"share-group-stack" data-dojo-attach-point\x3d"_stackContainer"\x3e\r\n            \x3c!-- all options --\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" data-dojo-attach-point\x3d"_stackAllOptions" class\x3d"share-map-stack-stack" style\x3d"overflow-y:auto;"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_shareGroupNotice"\x3e${i18n.shareGroup}\x3c/div\x3e\r\n                \x3cdiv style\x3d"padding-top:30px;"\x3e\x3clabel style\x3d"font-weight:bold;"\x3e${i18n.linkToGroup}\x3c/label\x3e\x3c/div\x3e\r\n                \x3cdiv class\x3d"esriLeadingPadding05" style\x3d"clear:both; height:30px;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading" style\x3d"padding-top:10px; width:320px;"\x3e\r\n                        \x3cdiv data-dojo-attach-point\x3d"_shareGroupUrl" data-dojo-type\x3d"dijit.form.Textarea" style\x3d"width:270px; color:#000;"\x3e\x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv id\x3d"socialNetworkLinks" style\x3d"padding-top:10px;" class\x3d"socialNetworkBadges esriFloatLeading"\x3e\r\n                        \x3cdiv class\x3d"esriItemLinks"\x3e\r\n                            \x3c!-- use table because of RTL + IE --\x3e\r\n                            \x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd style\x3d"width:30px;"\x3e\r\n                                \x3ca id\x3d"facebookLink" href\x3d"#" title\x3d"${i18n.shareFacebook}" target\x3d"_blank"\x3e\x3cspan class\x3d"badge facebookBadge dijitInline"\x3e\x3c/span\x3e\x3c/a\x3e\r\n                            \x3c/td\x3e\x3ctd\x3e\r\n                                \x3ca id\x3d"facebookLink2" class\x3d"label" style\x3d"vertical-align:top;" title\x3d"${i18n.shareFacebook}" target\x3d"_blank"\x3e${i18n.facebook}\x3c/a\x3e\r\n                            \x3c/td\x3e\x3ctd style\x3d"width:25px;"\x3e\r\n                                \x26nbsp;\r\n                            \x3c/td\x3e\x3ctd style\x3d"width:30px;"\x3e\r\n                                \x3ca id\x3d"twitterLink" href\x3d"#" title\x3d"${i18n.shareTwitter}" target\x3d"_blank"\x3e\x3cspan class\x3d"badge twitterBadge dijitInline"\x3e\x3c/span\x3e\x3c/a\x3e\r\n                            \x3c/td\x3e\x3ctd\x3e\r\n                                \x3ca id\x3d"twitterLink2" class\x3d"label" style\x3d"vertical-align:top;" title\x3d"${i18n.shareTwitter}" target\x3d"_blank"\x3e${i18n.twitter}\x3c/a\x3e\r\n                            \x3c/td\x3e\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv style\x3d"clear:both; padding-top:15px;"\x3e\x3clabel style\x3d"font-weight:bold;"\x3e${i18n.embedGroup}\x3c/label\x3e\x3c/div\x3e\r\n\r\n                \x3cdiv class\x3d"esriFloatLeading esriLeadingPadding05" style\x3d"clear:both; padding-top:10px;"\x3e\r\n                    \x3cbutton id\x3d"button-share-group-embed" data-dojo-type\x3d"dijit.form.Button" type\x3d"button" data-dojo-attach-event\x3d"onClick:onEmbed"\x3e${i18n.embedInWebsite}\x3c/button\x3e\r\n                    \x3cbutton id\x3d"button-share-group-application" data-dojo-type\x3d"dijit.form.Button" type\x3d"button" data-dojo-attach-event\x3d"onClick:onApplication"\x3e${i18n.makeWebApp}\x3c/button\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing buttonContainer"\x3e\r\n                    \x3cbutton class\x3d"calcite primary" data-dojo-type\x3d"dijit.form.Button" type\x3d"button" data-dojo-attach-event\x3d"onClick:onClose"\x3e${i18n.done}\x3c/button\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3c!-- embed option --\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" data-dojo-attach-point\x3d"_stackEmbed" class\x3d"share-map-stack-stack" style\x3d"overflow-y:auto;"\x3e\r\n                \x3c!--\x3cdiv\x3e\x3clabel style\x3d"font-weight:bold; text-decoration:underline;"\x3e${i18n.embedInWebsite}\x3c/label\x3e\x3c/div\x3e--\x3e\r\n\r\n                \x3cdiv style\x3d"padding-top:15px;"\x3e${i18n.embedGroupInWebsite}\x3c/div\x3e\r\n\r\n                \x3cdiv style\x3d"padding-bottom:5px; padding-top:15px;"\x3e\r\n                    \x3clabel for\x3d"share-group-embed" style\x3d"font-weight:bold;"\x3e${i18n.copyPaste}\x3c/label\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_shareGroupEmbed" id\x3d"share-group-embed" data-dojo-type\x3d"dijit.form.Textarea" style\x3d"width:98%; min-height:100px; max-height:100px;"\x3e\x3c/div\x3e\r\n\r\n                \x3cdiv id\x3d"share-group-groupsize" style\x3d"padding-top:20px; line-height:18px;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2" style\x3d"width:34px; text-align:center;"\x3e\r\n                        \x3cdiv class\x3d"groupGallerySize1"\x3e\x3clabel for\x3d"groupSize:one"\x3e\x26nbsp;\x3c/label\x3e\x3c/div\x3e\r\n                        \x3cinput type\x3d"radio" name\x3d"groupSize" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onGroupSizeClick" data-dojo-attach-point\x3d"_groupSizeOne" id\x3d"groupSize:one" checked/\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2" style\x3d"width:34px; text-align:center;"\x3e\r\n                        \x3cdiv class\x3d"groupGallerySize2"\x3e\x3clabel for\x3d"groupSize:two"\x3e\x26nbsp;\x3c/label\x3e\x3c/div\x3e\r\n                        \x3cinput type\x3d"radio" name\x3d"groupSize" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onGroupSizeClick" id\x3d"groupSize:two"/\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2" style\x3d"width:34px; text-align:center;"\x3e\r\n                        \x3cdiv class\x3d"groupGallerySize3"\x3e\x3clabel for\x3d"groupSize:three"\x3e\x26nbsp;\x3c/label\x3e\x3c/div\x3e\r\n                        \x3cinput type\x3d"radio" name\x3d"groupSize" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onGroupSizeClick" id\x3d"groupSize:three"/\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2" style\x3d"width:34px; text-align:center;"\x3e\r\n                        \x3cdiv class\x3d"groupGallerySize4"\x3e\x3clabel for\x3d"groupSize:four"\x3e\x26nbsp;\x3c/label\x3e\x3c/div\x3e\r\n                        \x3cinput type\x3d"radio" name\x3d"groupSize" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onGroupSizeClick" id\x3d"groupSize:four"/\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2" style\x3d"width:34px; text-align:center;"\x3e\r\n                        \x3cdiv class\x3d"groupGallerySize5"\x3e\x3clabel for\x3d"groupSize:five"\x3e\x26nbsp;\x3c/label\x3e\x3c/div\x3e\r\n                        \x3cinput type\x3d"radio" name\x3d"groupSize" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onGroupSizeClick" id\x3d"groupSize:five"/\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2" style\x3d"width:34px; text-align:center;"\x3e\r\n                        \x3cdiv class\x3d"groupGallerySize6"\x3e\x3clabel for\x3d"groupSize:six"\x3e\x26nbsp;\x3c/label\x3e\x3c/div\x3e\r\n                        \x3cinput type\x3d"radio" name\x3d"groupSize" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onGroupSizeClick" id\x3d"groupSize:six"/\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n\r\n                \x3cdiv style\x3d"clear:both; padding-top:15px;"\x3e\r\n                    \x3ctable border\x3d"0" style\x3d"width:100%;"\x3e\r\n                        \x3ctbody\x3e\r\n                        \x3ctr\x3e\r\n                            \x3ctd style\x3d"vertical-align:top;"\x3e${i18n.displayWebMaps}\x3c/td\x3e\r\n                            \x3ctd style\x3d"vertical-align:top; width:425px;"\x3e\r\n                                \x3cdiv\x3e\r\n                                    \x3cspan\x3e\x3cinput type\x3d"radio" name\x3d"displayWebMaps" id\x3d"displayWebMaps:over" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-point\x3d"_displayWebMapsOver" data-dojo-attach-event\x3d"onClick:onDisplayWebMapsClick" checked /\x3e \x3clabel for\x3d"displayWebMaps:over"\x3e${i18n.displayOverEmbeddedGallery}\x3c/label\x3e\x3c/span\x3e\x3cbr/\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv\x3e\r\n                                    \x3cspan\x3e\x3cinput type\x3d"radio" name\x3d"displayWebMaps" id\x3d"displayWebMaps:predefined" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onDisplayWebMapsClick"/\x3e \x3clabel for\x3d"displayWebMaps:predefined"\x3e${i18n.displayInPredefinedApp}\x3c/label\x3e\x3c/span\x3e\x3cbr/\x3e\r\n                                    \x3cdiv style\x3d"margin-left:20px; line-height:18px;" id\x3d"sharePredefinedApp" data-dojo-attach-point\x3d"_sharePredefinedApp" data-dojo-attach-event\x3d"onChange:onPreconfiguredAppChange" data-dojo-type\x3d"arcgisonline.sharing.dijit.ComboBox"\x3e\x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv\x3e\r\n                                    \x3cspan\x3e\x3cinput type\x3d"radio" name\x3d"displayWebMaps" id\x3d"displayWebMaps:configured" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-attach-event\x3d"onClick:onDisplayWebMapsClick"/\x3e \x3clabel for\x3d"displayWebMaps:configured"\x3e${i18n.displayInConfiguredApp}\x3c/label\x3e\x3c/span\x3e\x3cbr/\x3e\r\n                                    \x3cdiv style\x3d"margin-left:20px; padding-left:5px;" data-dojo-attach-point\x3d"_shareConfiguredApp" data-dojo-attach-event\x3d"onChange:onConfiguredAppChange,onKeyPress:onConfiguredAppKeyPress" data-dojo-type\x3d"dijit.form.TextBox" data-dojo-props\x3d"trim:true"\x3e\x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3c/tbody\x3e\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n\r\n                \x3cdiv class\x3d"esriFloatTrailing buttonContainer"\x3e\r\n                    \x3cbutton class\x3d"calcite default" data-dojo-type\x3d"dijit.form.Button" data-dojo-attach-event\x3d"onClick:onApplicationBack"\x3e${i18n.back}\x3c/button\x3e\r\n                    \x3cbutton class\x3d"calcite primary" data-dojo-type\x3d"dijit.form.Button" data-dojo-attach-event\x3d"onClick:onClose"\x3e${i18n.done}\x3c/button\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3c!-- application option gallery  --\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" data-dojo-attach-point\x3d"_stackApplicationGallery" class\x3d"share-map-stack-stack"\x3e\r\n                \x3cdiv id\x3d"share-map-application-gallery-box"\x3e\r\n                    \x3cdiv id\x3d"gallery-grid"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing buttonContainer"\x3e\r\n                    \x3cbutton class\x3d"calcite default" data-dojo-type\x3d"dijit.form.Button" type\x3d"button" data-dojo-attach-event\x3d"onClick:onApplicationBack"\x3e${i18n.back}\x3c/button\x3e\r\n                    \x3cbutton class\x3d"calcite cancel" data-dojo-type\x3d"dijit.form.Button" type\x3d"button" data-dojo-attach-event\x3d"onClick:onClose"\x3e${i18n.cancel}\x3c/button\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3c!-- application option publish  --\x3e\r\n            \x3cdiv id\x3d"share-group-application-publish" data-dojo-type\x3d"dijit.layout.ContentPane" data-dojo-attach-point\x3d"_stackApplicationPublish" class\x3d"share-map-stack-stack" style\x3d"overflow-y:auto;"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_itemProperties"\x3e\x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing buttonContainer"\x3e\r\n                    \x3cbutton id\x3d"publish-back-button" class\x3d"calcite default" type\x3d"button" data-dojo-type\x3d"dijit.form.Button" data-dojo-attach-event\x3d"onClick:onApplicationPublishBack"\x3e${i18n.back}\x3c/button\x3e\r\n                    \x3cbutton id\x3d"publish-group-button" class\x3d"calcite primary" type\x3d"button" data-dojo-type\x3d"dijit.form.Button"\x3e${i18n.done}\x3c/button\x3e\r\n                    \x3cbutton id\x3d"publish-cancel-button" class\x3d"calcite cancel" data-dojo-type\x3d"dijit.form.Button" data-dojo-attach-event\x3d"onClick:onClose"\x3e${i18n.cancel}\x3c/button\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3c!-- application option help  --\x3e\r\n            \x3cdiv id\x3d"share-map-application-help" data-dojo-type\x3d"dijit.layout.ContentPane" data-dojo-attach-point\x3d"_stackApplicationHelp" class\x3d"share-map-stack-stack" style\x3d"overflow-y:auto;"\x3e\r\n                \x3c!--\x3cdiv\x3e\x3clabel style\x3d"font-weight:bold; text-decoration:underline; "\x3e${i18n.makeWebApp}\x3c/label\x3e\x3c/div\x3e--\x3e\r\n                \x3cdiv style\x3d"padding-top:15px;"\x3e\x3clabel\x3e${i18n.followSteps}\x3c/label\x3e\x3c/div\x3e\r\n                \x3cdiv style\x3d"padding-top:0;"\x3e\r\n                    \x3cul\x3e\r\n                        \x3cli\x3e\r\n                            \x3cspan style\x3d"font-weight:bold;"\x3e${i18n.unzipFile}\x3c/span\x3e\r\n                            \x3cdiv\x3e${i18n.unzipFileInstructions}\x3c/div\x3e\r\n                        \x3c/li\x3e\r\n                        \x3cli style\x3d"margin-top:10px;"\x3e\r\n                            \x3cspan style\x3d"font-weight:bold;"\x3e${i18n.deployTheApp}\x3c/span\x3e\r\n                            \x3cdiv\x3e${i18n.copyAppToWeb}\x3c/div\x3e\r\n                        \x3c/li\x3e\r\n                        \x3cli style\x3d"margin-top:10px;"\x3e\r\n                            \x3cspan style\x3d"font-weight:bold;"\x3e${i18n.configureTheApp}\x3c/span\x3e\r\n                            \x3cdiv\x3e${i18n.makeAppChanges}\x3c/div\x3e\r\n                        \x3c/li\x3e\r\n                    \x3c/ul\x3e\r\n                    \x3cdiv style\x3d"padding-top:10px;"\x3e\r\n                        \x3cspan id\x3d"share-group-groupId"\x3e${i18n.yourGroupId} \x3c/span\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n\r\n                \x3cdiv class\x3d"esriFloatTrailing buttonContainer"\x3e\r\n                    \x3cbutton class\x3d"calcite default" data-dojo-type\x3d"dijit.form.Button" type\x3d"button" data-dojo-attach-event\x3d"onClick:onApplicationHelpBack"\x3e${i18n.back}\x3c/button\x3e\r\n                    \x3cbutton class\x3d"calcite primary" data-dojo-type\x3d"dijit.form.Button" data-dojo-attach-event\x3d"onClick:onClose"\x3e${i18n.done}\x3c/button\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
account:arcgisonline.sharing.geow.Account,content:arcgisonline.sharing.geow.Content,community:arcgisonline.sharing.geow.Community,createItemUtil:arcgisonline.sharing.dijit.dialog._CreateItemUtilMixin,util:arcgisonline.sharing.util,group:null,i18n:null,init:!1,shortenedUrl:null,allItemNames:null,templatesGroupId:null,_user:null,_groupUser:null,_isAdmin:!1,_isPublishing:!1,_folders:null,_folderStore:null,_selectedTemplate:null,_stackContainer:null,_stackAllOptions:null,_stackEmbed:null,_stackApplicationGallery:null,
_stackApplicationPublish:null,_stackApplicationPublishHelp:null,_stackApplicationHelp:null,_templateStore:null,iframeSrc:'\x3ciframe title\x3d"${title}" scrolling\x3d"no" frameborder\x3d"0" src\x3d"${host}/webmap/embedGallery.html?displayapps\x3d${displayApps}\x26displayinline\x3d${displayInline}\x26group\x3d${groupId}${templateUrl}" style\x3d"width:${galleryWidth}px; height:${galleryHeight}px"\x3e\x3c/iframe\x3e',displayApps:!0,displayInline:!1,galleryWidth:960,galleryHeight:238,displayWebMapsMode:"over",
predefinedUrl:"",configuredUrl:"",publishViewItemButtonHandler:null,statics:{_instance:null,getInstance:function(){null==this._instance&&(this._instance=new arcgisonline.sharing.dijit.dialog.ShareGroupDlg);return this._instance}},postMixInProperties:function(){this.inherited(arguments);this.i18n=a.i18n.getLocalization("arcgisonline","arcgisonline").common;a.mixin(this.i18n,a.i18n.getLocalization("arcgisonline","arcgisonline").shareGroupDlg);this.i18n.browseItemsDlg=a.i18n.getLocalization("arcgisonline",
"arcgisonline").browseItemsDlg},postCreate:function(){this.init||(this.loadConnections(),this.init=!0,this._setupItemPropertiesDlg(),this._stackContainer.selectChild(this._stackEmbed))},destroy:function(){this._itemPropDlg&&(this._itemPropDlg.destroy(),this._itemPropDlg=null)},show:function(a,c,h,e){this.group=a;this._user=c;this._groupUser=h;this._isAdmin=e;this._roleCanCreateItem=(this._isCustomRole=esriGeowConfig.userRole&&esriGeowConfig.userRole.isCustom())&&esriGeowConfig.userRole.canCreateItem();
this._roleCanShareGroupToPublic=this._isCustomRole&&esriGeowConfig.userRole.canShareGroupToPublic();this.clear();this._stackContainer.selectChild(this._stackAllOptions);d.byId("share-group-dialog").show();this.updateDlgComponents()},_setupItemPropertiesDlg:function(){this._itemPropDlg||this.getUserItemTitles(a.hitch(this,function(){this._itemPropDlg=new arcgisonline.sharing.dijit.dialog.ItemPropertiesDlg({typeInfo:"configapp",existingItems:this.allItemNames,showFolders:!0,showFile:!1,item:a.mixin({},
this._webAppItemCard)},a.create("div",{},this._itemProperties));this._itemPropDlg.startup()}))},updateDlgComponents:function(){"public"!==this.group.access&&(a.attr(this._shareGroupNotice,"innerHTML",this.i18n.shareGroup+" "+this.i18n.privateGroup),d.byId("button-share-group-embed").set("disabled",!0));this._isCustomRole&&(this._roleCanCreateItem||(d.byId("button-share-group-application").set("disabled",!0),d.byId("publish-group-button").set("disabled",!0)),this._roleCanShareGroupToPublic||d.byId("button-share-group-embed").set("disabled",
!0));var b=esri.urlToObject(window.location.href).path+"?id\x3d"+this.group.id;esriGeowConfig.self&&esriGeowConfig.self.customBaseUrl&&-1<b.indexOf(esriGeowConfig.self.customBaseUrl)&&(b=esriGeowConfig.baseUrl+"group.html?id\x3d"+this.group.id);esriGeowConfig.showSocialMediaLinks&&esriGeowConfig.bitlyUrl&&0<esriGeowConfig.bitlyUrl.length?(a.style(this._shareGroupUrl,"width","270px"),this.useShortenedUrl(b)):(this._shareGroupUrl.set("value",b),this._shareGroupUrl.focus(),a.style(this._shareGroupUrl,
"width","450px"));if(esriGeowConfig.showSocialMediaLinks&&this.util.canSharePublic()){var c=arcgisonline.sharing.util.socialNetworkTitle(this.group.title);a.connect(a.byId("facebookLink"),"onclick",a.partial(arcgisonline.sharing.util._checkShare,this.group,"Facebook"));a.connect(a.byId("facebookLink2"),"onclick",a.partial(arcgisonline.sharing.util._checkShare,this.group,"Facebook"));a.connect(a.byId("twitterLink"),"onclick",a.partial(arcgisonline.sharing.util._checkShare,this.group,"Twitter"));a.connect(a.byId("twitterLink2"),
"onclick",a.partial(arcgisonline.sharing.util._checkShare,this.group,"Twitter"));a.byId("facebookLink").href=esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+c+"\x26n\x3dfb\x26u\x3d"+b);a.byId("facebookLink2").href=esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+c+"\x26n\x3dfb\x26u\x3d"+b);a.byId("twitterLink").href=esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+c+"\x26n\x3dtw\x26u\x3d"+b);a.byId("twitterLink2").href=esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+
c+"\x26n\x3dtw\x26u\x3d"+b)}else a.style(a.byId("socialNetworkLinks"),"display","none");this.onGroupSizeClick({target:{id:"groupSize:one"}});esriGeowConfig.self&&esriGeowConfig.self.templatesGroupQuery&&(b=esriGeowConfig.self.templatesGroupQuery,this.templatesGroupId||this.community.searchGroups(b,a.hitch(this,"handleGetTemplatesGroupId"),a.hitch(this,"handleGetTemplatesGroupId")));a.attr(a.byId("share-group-groupId"),"innerHTML",this.i18n.yourGroupId+" "+this.group.id)},handleGetTemplatesGroupId:function(b){b&&
1===b.total&&(this.templatesGroupId=b.results[0].id,this.content.search(esriGeowConfig.restBaseUrl+"search",{q:"group:"+this.templatesGroupId+' AND type:"Web Mapping Application"',sortField:"title",num:"50"},a.hitch(this,this.handleTemplates),a.hitch(this,this.handleTemplates)))},handleTemplates:function(b){b&&0<b.total&&(b=b.results,this._templateStore=new a.store.Memory({data:b,idProperty:"title"}),this._sharePredefinedApp.set("store",new a.data.ObjectStore({objectStore:this._templateStore})),this._sharePredefinedApp.set("searchAttr",
"title"),this._sharePredefinedApp.set("labelType","html"),this._sharePredefinedApp.set("labelFunc",this.templateLabelFunc),this._sharePredefinedApp.set("value",b[0].title),this.predefinedUrl=b[0].url)},templateLabelFunc:function(a,c){var d=c.getValue(a,"id"),e=c.getValue(a,"title"),f=c.getValue(a,"thumbnail"),g=arcgisonline.sharing.util.getToken(),f=f?esriGeowConfig.restBaseUrl+"content/items/"+d+"/info/"+f+(g?"?token\x3d"+g:""):arcgisonline.sharing.util.relativeToExplicitUrl("images/transparent.gif");
return["\x3cdiv style\x3d'width:100px; height:100px; padding:0.5em; display:inline;' id\x3d'galleryNode_"+d+"'\x3e\x3cimg style\x3d'width:90px; height:60px; vertical-align:middle;' src\x3d'"+f+"' alt\x3d'"+e+"' title\x3d'"+e+"'/\x3e\x3cbr/\x3e\x3cspan class\x3d'esriLeadingMargin05' style\x3d'width:90px; max-width:90px; white-space:normal !important;'\x3e"+e+"\x3c/span\x3e\x3c/div\x3e"]},useShortenedUrl:function(b){if(this.shortenedUrl)this._shareGroupUrl.set("value",this.shortenedUrl);else{var c=
arcgisonline.sharing.util.getUser();if(c&&"public"===this.group.access&&esriGeowConfig.self.id===c.accountId&&"public"!==esriGeowConfig.self.access){var c=b.indexOf("://"),d=b.indexOf("/",c+3);b=b.substring(0,c+3)+esriGeowConfig.self.portalHostname+b.substring(d)}this.util.shortenUrl(b,a.hitch(this,function(c){this.shortenedUrl=c;var d=this.util.socialNetworkTitle(this.group.title);this._shareGroupUrl.set("value",c);this._shareGroupUrl.focus();a.connect(a.byId("facebookLink"),"onclick",a.partial(arcgisonline.sharing.util._checkShare,
this.group,"Facebook"));a.connect(a.byId("facebookLink2"),"onclick",a.partial(arcgisonline.sharing.util._checkShare,this.group,"Facebook"));a.connect(a.byId("twitterLink"),"onclick",a.partial(arcgisonline.sharing.util._checkShare,this.group,"Twitter"));a.connect(a.byId("twitterLink2"),"onclick",a.partial(arcgisonline.sharing.util._checkShare,this.group,"Twitter"));a.byId("facebookLink").href=esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+d+"\x26n\x3dfb\x26u\x3d"+b);a.byId("facebookLink2").href=
esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+d+"\x26n\x3dfb\x26u\x3d"+b);a.byId("twitterLink").href=esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+d+"\x26n\x3dtw\x26u\x3d"+b);a.byId("twitterLink2").href=esriGeowConfig.baseUrl+encodeURI("socialnetwork.html?t\x3d"+d+"\x26n\x3dtw\x26u\x3d"+b)}),a.hitch(this,function(c,d){this._shareGroupUrl.set("value",b);this._shareGroupUrl.focus();a.style(a.byId("socialNetworkLinks"),"display","none");a.style(a.byId("share-map-url"),"width",
"450px")}))}},getUserItemTitles:function(b){var c=arcgisonline.sharing.util.getUser();null!=c&&arcgisonline.sharing.util.getJson(esriGeowConfig.restBaseUrl+'search?num\x3d100\x26q\x3d%2Btype:"Web Mapping Application"%20%2Bitemtype:text%20%2Bowner:'+c.email,a.hitch(this,function(c){this.allItemNames=a.map(c.results,a.hitch(this,function(a){return a.title}));b()}),a.hitch(this,function(a){this.showError({title:this.i18n.errorTitle,message:esri.substitute({message:a.message},this.i18n.searchMapsFailed)});
b()}))},clear:function(){this._isPublishing=!1;this.displayInline=this.displayApps=!0;this.galleryWidth=960;this.galleryHeight=238;this.displayWebMapsMode="over";this.configuredUrl=this.predefinedUrl="";a.attr(this._shareGroupNotice,"innerHTML",this.i18n.shareGroup);a.attr(this._shareGroupUrl,"value","");a.attr(a.byId("facebookLink"),"href","#");a.attr(a.byId("facebookLink2"),"href","#");a.attr(a.byId("twitterLink"),"href","#");a.attr(a.byId("twitterLink2"),"href","#");this._shareGroupEmbed.set("value",
"");this._groupSizeOne.set("checked",!0);this._displayWebMapsOver.set("checked",!0);this._sharePredefinedApp.set("disabled",!0);this._shareConfiguredApp.set("disabled",!0);this._shareConfiguredApp.set("value","");this._shareConfiguredApp.set("placeholder",this.i18n.enterURLToApp);d.byId("publish-group-button").set("disabled",!1);d.byId("publish-group-button").set("label",this.i18n.done);a.attr(a.byId("share-group-groupId"),"innerHTML",this.i18n.yourGroupId+" ")},onEmbed:function(){d.byId("button-share-group-embed").get("disabled")||
(this._stackContainer.selectChild(this._stackEmbed),d.byId("share-group-dialog").set("title",this.i18n.embedInWebsite))},onApplication:function(){if(!d.byId("button-share-group-application").get("disabled")){this._stackContainer.selectChild(this._stackApplicationGallery);d.byId("share-group-dialog").set("title",this.i18n.makeNewWebApp);var a=d.byId("templatesGallery");a&&a._groupDoesntExist&&arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({title:this.i18n.notice,
message:this.i18n.groupDoesntExist})}},onApplicationBack:function(a){a.preventDefault();this._stackContainer.selectChild(this._stackAllOptions);d.byId("share-group-dialog").set("title",this.i18n.share)},onApplicationHelpBack:function(){this._stackContainer.selectChild(this._stackApplicationGallery)},onApplicationPublishBack:function(){this._isPublishing||(this._stackContainer.back(),d.byId("share-group-dialog").set("title",this.i18n.share))},onTempPublishHelp:function(){this._stackContainer.selectChild(this._stackApplicationPublishHelp)},
onTempHelp:function(){this._stackContainer.selectChild(this._stackApplicationHelp)},loadConnections:function(){d.byId("templatesGallery");a.connect(this._stackApplicationGallery,"onShow",a.hitch(this,function(){this._browseItemsDlg||(this._browseItemsDlg=new arcgisonline.sharing.dijit.dialog.BrowseItemsDlg({message:this.i18n.selectTemplate,plugin:"arcgisonline/sharing/dijit/dialog/PluginGroupTemplates","class":"esriBrowseItemsDlg"},a.create("div",{},a.byId("gallery-grid"))),this._browseItemsDlg.startup(),
this._browseItemstopicHandle=a.topic.subscribe("/esri/browseitems/close",a.hitch(this,function(a,c){if("create-app"===a)this.onCreateApp(c);else if("preview-app"===a)this.onPreviewApp(c);else if("download-app"===a)this.onDownload(c)})))}));a.connect(d.byId("publish-group-button"),"onClick",this,"publishWebApp");a.connect(this._shareGroupEmbed,"onKeyPress",a.hitch(this,this.doNothing));a.mixin(d.byId("share-group-dialog"),{onCancel:a.hitch(this,function(){this.hide()})})},onCreateApp:function(b){this._user?
this.content.getItemData(b.id,a.hitch(this,function(c){this._selectedTemplate=a.mixin(b,{data:c});this._itemPropDlg.set("title",this._selectedTemplate.title);this._stackContainer.selectChild(this._stackApplicationPublish)})):window.location=esriGeowConfig.baseUrl+"signin.html?error\x3d403\x26returnUrl\x3d"+encodeURIComponent(window.location)},onPreviewApp:function(a){var c=esriGeowConfig.restBaseUrl+"content/items/"+a.id+"/data",d=this.util.getToken();esri.request({url:c+(d?"?token\x3d"+d:""),callbackParamName:"callback"});
c=arcgisonline.sharing.util.getHomeAppContext();arcgisonline.sharing.util.isPortal()&&(a.url&&0===a.url.indexOf("/")&&a.url&&-1===a.url.indexOf(c))&&(a.url=c+a.url);window.open(a.url+"?group\x3d"+this.group.id)},onDownload:function(a){arcgisonline.sharing.util.downloadWebMappingApp(a);this._stackContainer.selectChild(this._stackApplicationHelp)},publishWebApp:function(b){b.preventDefault();var c=this._selectedTemplate,h=this._itemPropDlg,e=arcgisonline.sharing.util.getHomeAppContext(),f=a.mixin(this._itemPropDlg.get("item"),
{groupId:this.group.id}),g=a.hitch(this,function(b){this._itemPropDlg.set("readOnly",b);a.query(".share-map-application-publish-config-back").style("color",b?"#999":"#21759B");d.byId("publish-group-button").set("disabled",b);d.byId("publish-group-button").set("label",b?this.i18n.savingAndPublishing:this.i18n.done)});g(!0);h._validate().then(a.hitch(this,function(b){arcgisonline.sharing.util.isPortal()&&(c.url&&0===c.url.indexOf("/")&&c.url&&-1===c.url.indexOf(e))&&(c.url=e+c.url);this.createItemUtil.createTemplatedApplication(f,
this._selectedTemplate,h._portal).then(a.hitch(this,function(a){window.location=a.configureUrl}),a.hitch(this,function(a){g(!1);var b=this.i18n.errorAddingItem;a&&a.message&&(b=a.message);b={title:this.i18n.errorTitle,message:esri.substitute({title:c.title,message:b},this.i18n.savingApplicationFailed)};409===a.code&&(b.message=esri.substitute({title:c.title},this.i18n.applicationAlreadyExists));this.showError(b)}))}),a.hitch(this,function(a){g(!1);this.showError(a)}))},showError:function(a){(this._dlg||
(this._dlg=arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance())).show({title:a.title,message:a.message})},onPreconfiguredAppChange:function(b){b=this._sharePredefinedApp.get("value");var c=!1;this._sharePredefinedApp.get("store").query({title:b}).forEach(a.hitch(this,function(a){c||(this.predefinedUrl=a.url,this.buildIFrameSrc(),c=!0)}))},onConfiguredAppChange:function(a){this.configuredUrl=this._shareConfiguredApp.get("value");this.buildIFrameSrc()},onConfiguredAppKeyPress:function(b){b.keyCode==
a.keys.ENTER&&(a.stopEvent(b),this.onConfiguredAppChange(b));this.buildIFrameSrc()},doNothing:function(a){(!a.metaKey&&!a.ctrlKey||!("c"===a.keyChar||"a"===a.keyChar))&&a.preventDefault()},onGroupSizeClick:function(a){a&&a.target&&("groupSize:one"===a.target.id?(this.galleryWidth=720,this.galleryHeight=687):"groupSize:two"===a.target.id?(this.galleryWidth=720,this.galleryHeight=460):"groupSize:three"===a.target.id?(this.galleryWidth=720,this.galleryHeight=238):"groupSize:four"===a.target.id?(this.galleryWidth=
960,this.galleryHeight=687):"groupSize:five"===a.target.id?(this.galleryWidth=960,this.galleryHeight=460):"groupSize:six"===a.target.id&&(this.galleryWidth=960,this.galleryHeight=238),this.buildIFrameSrc())},buildIFrameSrc:function(){var a="",c=!1===esriGeowConfig.isMultiTenant,d=location.protocol+"//"+esriGeowConfig.portalHostname;"predefined"===this.displayWebMapsMode?this.predefinedUrl&&0<this.predefinedUrl.length?(this.predefinedUrl=0===this.predefinedUrl.indexOf("http")||0===this.predefinedUrl.indexOf("//")?
this.predefinedUrl:d+this.predefinedUrl,this._user&&(this._user.accountId&&!c)&&(this.predefinedUrl=this.predefinedUrl.replace("/hosted/","/apps/")),a="\x26templateurl\x3d"+encodeURIComponent(this.predefinedUrl)):this.displayInline=!0:"configured"===this.displayWebMapsMode&&(this.configuredUrl&&0<this.configuredUrl.length?(a="\x26templateurl\x3d"+encodeURIComponent(this.configuredUrl),this.displayInline=!1):this.displayInline=!0);a=esri.substitute({displayApps:this.displayApps,displayInline:this.displayInline,
galleryWidth:this.galleryWidth,galleryHeight:this.galleryHeight,groupId:this.group.id,title:this.group.title,host:esriGeowConfig.baseUrl.substring(0,esriGeowConfig.baseUrl.length-1),templateUrl:a},this.iframeSrc);this._shareGroupEmbed.set("value",a)},onDisplayWebMapsClick:function(a){"displayWebMaps:over"===a.target.id?(this.displayWebMapsMode="over",this.displayInline=!0,this._sharePredefinedApp.set("disabled",!0),this._shareConfiguredApp.set("disabled",!0),this.buildIFrameSrc()):"displayWebMaps:predefined"===
a.target.id?(this.displayWebMapsMode="predefined",this.displayInline=!1,this._sharePredefinedApp.set("disabled",!1),this._shareConfiguredApp.set("disabled",!0),this.buildIFrameSrc()):"displayWebMaps:configured"===a.target.id&&(this.displayWebMapsMode="configured",this.displayInline=!1,this._sharePredefinedApp.set("disabled",!0),this._shareConfiguredApp.set("disabled",!1),this.buildIFrameSrc())},onClose:function(){this.hide();this._selectedTemplate=null;this._browseItemsDlg&&(this._browseItemsDlg.destroy(),
this._browseItemsDlg=null,this._browseItemstopicHandle.remove())},hide:function(){d.byId("share-group-dialog").hide();9>a.isIE&&this._stackContainer.selectChild(this._stackAllOptions)}})});