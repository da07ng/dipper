// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/Accessor"],function(a,b){return a(b,{declaredClass:"esri.tasks.StatisticDefinition",onStatisticField:null,outStatisticFieldName:null,statisticType:null,toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){return{statisticType:this.statisticType,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,maxPointCount:this.maxPointCount,
maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount}}})});