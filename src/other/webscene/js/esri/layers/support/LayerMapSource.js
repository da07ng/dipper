// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/lang","./LayerSource"],function(a,b,c){return a(c,{declaredClass:"esri.layers.support.LayerMapSource",type:"mapLayer",toJSON:function(){return b.fixJson({type:this.type,mapLayerId:this.mapLayerId,gdbVersion:this.gdbVersion})}})});