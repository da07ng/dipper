// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define([],function(){var e=0,a=function(b,a){var f=e++;this.getFaces=function(){return b};this.getVertexAttr=function(){return a};this.getId=function(){return f};this.estimateGpuMemoryUsage=function(){var a=0,d;for(d in b){var c=3;b[d].indices.normal&&(c+=3);b[d].indices.uv0&&(c+=2);b[d].indices.color&&c++;a+=4*b[d].indices.position.length*c}return a}};a.getNewId=function(){return e++};a.AxisOrder={CG:0,GIS:1};return a});