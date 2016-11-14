// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../geometry/Point","./LocationProviderClientBase"],function(c,d,e){return c("esri.tasks.locationproviders.CoordinatesLocationProvider",e,{xField:null,yField:null,geometryType:"esriGeometryPoint",getGeometry:function(a){var b=parseFloat(a.attributes[this.xField]);a=parseFloat(a.attributes[this.yField]);if(!isNaN(b)&&!isNaN(a))return new d(b,a,this.inSpatialReference)}})});