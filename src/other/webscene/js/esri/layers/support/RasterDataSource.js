// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/lang","./DataSource"],function(a,b,c){return a(c,{declaredClass:"esri.layers.support.RasterDataSource",toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){return b.fixJson({type:"raster",workspaceId:this.workspaceId,dataSourceName:this.dataSourceName})}})});