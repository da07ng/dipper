// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/Deferred","./SceneLayerView3D","./SceneGraphicsLayerView3D","../../../request"],function(e,f,g,h){return function(b){var k=b.layer,d=new e;h({url:k.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(function(a,e){var c=a.store&&a.store.profile?a.store.profile:"features-meshes",c="features-meshes"===c||"meshpyramids"===c?new f(b):new g(b);d.resolve({layerView:c})}.bind(this),function(a){console.log("layerInfoQuery query on "+b.layer.url+" failed");d.reject(a)});
return d.promise}});