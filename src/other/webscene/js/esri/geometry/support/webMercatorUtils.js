// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/_base/array","../SpatialReference","../Point"],function(l,g,f){function k(a,d,b,e,c){if("point"===a.type){var h=d(a.x,a.y,e,n);return c?(c.x=h[0],c.y=h[1],c.spatialReference=b,c):new a.constructor(h[0],h[1],b)}if("extent"===a.type){var h=d(a.xmin,a.ymin,e,n),f=d(a.xmax,a.ymax,e,q);return c?(c.xmin=h[0],c.ymin=h[1],c.xmax=f[0],c.ymax=f[1],c.spatialReference=b,c):new a.constructor(h[0],h[1],f[0],f[1],b)}if("polyline"===a.type||"polygon"===a.type){var h="polyline"===a.type,g=[],k;l.forEach(h?
a.paths:a.rings,function(a){g.push(k=[]);l.forEach(a,function(a){k.push(d(a[0],a[1],e))})});return h?c?(c.paths=g,c.spatialReference=b,c):new a.constructor({paths:g,spatialReference:b}):c?(c.rings=g,c.spatialReference=b,c):new a.constructor({rings:g,spatialReference:b})}if("multipoint"===a.type){var m=[];l.forEach(a.points,function(a){m.push(d(a[0],a[1],e))});return c?(c.points=m,c.spatialReference=b,c):new a.constructor({points:m,spatialReference:b})}}function p(a,d){var b=a&&(null!=a.wkid?a:a.spatialReference),
e=d&&(null!=d.wkid?d:d.spatialReference);return!b||!e?!1:e.equals(b)?!0:e._canProject(b)}var n=[0,0],q=[0,0];return{canProject:p,project:function(a,d){var b=a&&a.spatialReference,e=d&&(null!=d.wkid?d:d.spatialReference);b&&e?b.equals(e)?a=a.clone():p(b,e)?e.isWebMercator()?a=k(a,f.lngLatToXY,g.WebMercator):4326===e.wkid&&(a=k(a,f.xyToLngLat,g.WGS84)):a=null:a=null;return a},lngLatToXY:f.lngLatToXY,xyToLngLat:f.xyToLngLat,geographicToWebMercator:function(a,d,b){return b?k(a,f.lngLatToXY,g.WebMercator,
d,b):k(a,f.lngLatToXY,g.WebMercator,d)},webMercatorToGeographic:function(a,d,b){return b?k(a,f.xyToLngLat,g.WGS84,d,b):k(a,f.xyToLngLat,g.WGS84,d)}}});