// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../processors/SpatialIndex","dojo/Deferred"],function(e,f){return{add:function(a,b){b=b||{};if(a.spatialIndex)return a.spatialIndex;if("spatialIndex"in b){if(!1!==b.spatialIndex)return a.spatialIndex=b.spatialIndex,a.spatialIndex}else{var d=new f;b.autostart=!1;a.spatialIndex=new e(b);var c=a.spatialIndex;-1<a.declaredClass.indexOf("Map")?c.setMap(a):c.addLayer(a);c.on("start",function(){d.resolve(c)});c.start();return d.promise}},remove:function(a){var b=a.spatialIndex;b&&(-1<a.declaredClass.indexOf("Map")?
b.unsetMap():b.removeLayer(a),a.spatialIndex=void 0)}}});