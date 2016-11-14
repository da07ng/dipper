// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/lang"],function(b,c,d){return b(null,{declaredClass:"esri.layers.support.Domain",constructor:function(a){a&&c.isObject(a)&&(this.name=a.name,this.type=a.type)},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){return d.fixJson({name:this.name,type:this.type})}})});