// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/lang","../../geometry/SpatialReference","./DataSource"],function(c,d,e,f,g){return c(g,{declaredClass:"esri.layers.support.QueryDataSource",constructor:function(a){a&&(a.oidFields&&d.isString(a.oidFields)&&(this.oidFields=a.oidFields.split(",")),a.spatialReference&&(this.spatialReference=new f(a.spatialReference)))},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},
toJSON:function(){var a={type:"queryTable",workspaceId:this.workspaceId,query:this.query,oidFields:this.oidFields&&this.oidFields.join(),spatialReference:this.spatialReference&&this.spatialReference.toJSON()};if(this.geometryType){var b;b="point"===this.geometryType.toLowerCase()?"esriGeometryPoint":"multipoint"===this.geometryType.toLowerCase()?"esriGeometryMultipoint":"polyline"===this.geometryType.toLowerCase()?"esriGeometryPolyline":"polygon"===this.geometryType.toLowerCase()?"esriGeometryPolygon":
this.geometryType;a.geometryType=b}return e.fixJson(a)}})});