// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/lang"],function(c,b,d){return c(null,{declaredClass:"esri.layers.support.DimensionalDefinition",variableName:null,dimensionName:null,values:[],isSlice:!1,constructor:function(a){b.isObject(a)&&b.mixin(this,a)},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){return d.filter({variableName:this.variableName,dimensionName:this.dimensionName,values:this.values,
isSlice:this.isSlice},function(a){return null!==a})}})});