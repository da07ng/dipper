// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
require({cache:{"url:webSceneViewer/widgets/MessageListWidget/templates/MessageWidget.html":'\x3cdiv class\x3d"MessageWidget"  data-dojo-attach-event\x3d"click:_expand"\x3e\r\n    \x3cdiv class\x3d"" data-dojo-attach-point\x3d"MessageTypeIcon"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"MessageShortDesc" class \x3d "MessageTitle"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"MessageDetails" class \x3d "MessageContent"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"closeIcon" data-dojo-attach-event\x3d"click:_remove"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"ExpandIcon" class\x3d"arrowIcon"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/core/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/dom-class dojo/on dojo/_base/fx dojo/text!./templates/MessageWidget.html".split(" "),function(f,g,h,b,k,c,l){return f([g,h],{declaredClass:"MessageWidget",MessageTypes:{INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},templateString:l,message:void 0,details:void 0,type:void 0,timeout:void 0,collapsed:!1,constructor:function(a){},_remove:function(){clearTimeout(this.timer);var a=c.fadeOut({node:this.domNode,duration:500}).play();
k.once(a,"End",function(a,b){this.destroy()}.bind(this))},postCreate:function(){if(void 0===this.type||this.type!==this.MessageTypes.INFO&&this.type!==this.MessageTypes.SUCCESS&&this.type!==this.MessageTypes.WARNING&&this.type!==this.MessageTypes.ERROR)this.type=this.MessageTypes.INFO;void 0===this.collapsed&&(this.collapsed=!1);void 0===this.timeout&&(this.timeout=this.type===this.MessageTypes.ERROR?0:1E4);b.add(this.domNode,this.type);this.MessageShortDesc.innerHTML=this.message;this.MessageShortDesc.title=
this.message;this.details&&""!==this.details?this.MessageDetails.innerHTML=this.details:(b.add(this.ExpandIcon,"hide"),b.add(this.MessageDetails,"hide"));this.collapsed&&b.add(this.domNode,"collapsed");b.add(this.MessageTypeIcon,this.type+"Icon");0<this.timeout&&(this.timer=setTimeout(function(){this._remove()}.bind(this),this.timeout));c.fadeIn({node:this.domNode,duration:500}).play()},_expand:function(a){if(""!==this.details&&(a=a.target?a.target:a.srcElement,-1===a.className.indexOf("closeIcon")))if(-1===
a.className.indexOf("MessageWidget")&&(a=a.parentNode),-1!==a.className.indexOf("expand"))b.remove(a,"expand");else for(var c=a.parentNode,d=0;d<c.childNodes.length;d++){var e=c.childNodes[d];e===a?b.add(e,"expand"):b.remove(e,"expand")}}})});