// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/lang"],function(b,c,d){return b(null,{declaredClass:"esri.InfoTemplate",constructor:function(a,b){a&&c.isObject(a)&&!c.isFunction(a)?c.mixin(this,a):(this.title=a||"${*}",this.content=b||"${*}")},title:null,content:null,setTitle:function(a){this.title=a;return this},setContent:function(a){this.content=a;return this},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},
toJSON:function(){return d.fixJson({title:this.title,content:this.content})}})});