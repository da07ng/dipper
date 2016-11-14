// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/Accessor"],function(c,b,d){return c(d,{declaredClass:"esri.tasks.ClassificationDefinition",baseSymbol:null,colorRamp:null,type:null,toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){var a={};this.baseSymbol&&b.mixin(a,{baseSymbol:this.baseSymbol.toJSON()});this.colorRamp&&!b.isString(this.colorRamp)&&b.mixin(a,{colorRamp:this.colorRamp.toJSON()});
return a}})});