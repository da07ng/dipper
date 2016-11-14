// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/array","./ColorRamp"],function(b,c,d){return b(d,{declaredClass:"esri.tasks.MultipartColorRamp",colorRamps:[],type:"multipart",toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){return{type:"multipart",colorRamps:c.map(this.colorRamps,function(a){return a.toJSON()})}}})});