// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./GLVBO","../materials/internal/MaterialUtil"],function(h,k){return function(d,c,e,a){var b=d.faces,f=b.indices[b.positionKey].length,b=new Float32Array(f*c.getStride());this.fillInterleaved=!e?k.fillInterleaved:e;this.fillInterleaved(d,void 0,void 0,null,c,b,0);var g=new h(b,c,a);this.drawMode=a.TRIANGLES;this.enablePointRendering=function(c){this.drawMode=c?a.POINTS:a.TRIANGLES};this.render=function(b){g.bind();g.setPointers(b);c.enableVertexAttribArrays(a,b,!1);a.drawArrays(this.drawMode,
0,f,0);c.disableVertexAttribArrays(a,b,!1);a.bindBuffer(a.ARRAY_BUFFER,null)}}});