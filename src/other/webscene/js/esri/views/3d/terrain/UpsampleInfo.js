// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../support/ObjectPool","../lib/glMatrix"],function(e,f){function a(a,b,c,d){this.offset=g.create();this.scale=0;this.tile=null;void 0!==a&&this.init(a,b,c,d)}var g=f.vec2d;a.prototype.init=function(a,b,c,d){this.tile=a;this.offset[0]=b;this.offset[1]=c;this.scale=d};a.Pool=new e(400,a);return a});