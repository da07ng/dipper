// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/Rating",["dojo/_base/declare","dojox/form/Rating"],function(b,c){return b([c],{constructor:function(a){b.safeMixin(this,a)},_onMouse:function(){this.get("disabled")||this.inherited(arguments)},onStarClick:function(){this.get("disabled")||this.inherited(arguments)},_setValueAttr:function(a){a=Math.round(a);this.inherited(arguments)}})});