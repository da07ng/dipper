// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang"],function(b,c){return b(null,{declaredClass:"esri.layers.support.LayerSource",type:null,constructor:function(a){a&&c.mixin(this,a)},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){}})});