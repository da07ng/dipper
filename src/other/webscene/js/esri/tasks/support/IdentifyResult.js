// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../Graphic","../../core/JSONSupport"],function(a,c,d){return a(d,{declaredClass:"esri.tasks.IdentifyResult",classMetadata:{reader:{add:["feature"],exclude:["geometry","attributes"]}},displayFieldName:null,feature:null,_featureReader:function(a,b){return c.fromJSON({geometry:b.geometry,attributes:b.attributes})},layerId:null,layerName:null})});