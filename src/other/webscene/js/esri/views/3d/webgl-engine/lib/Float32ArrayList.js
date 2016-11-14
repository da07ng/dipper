// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./Util"],function(h){return function(f){f=void 0===f?16:h.nextHighestPowerOfTwo(f);var b=new Float32Array(f),c=0;this.resize=function(g,e){c=g;var a,d;if(c>b.length){for(a=b.length||1;a<c;)a*=2;d=new Float32Array(a);e&&d.set(b);b=d;return!0}if(c<=b.length/2){a=b.length;for(d=2*c;a>=d;)a/=2;d=new Float32Array(a);e&&d.set(b.subarray(0,a));b=d;return!0}return!1};this.append=function(g){var e=c;this.resize(c+g.length,!0);b.set(g,e)};this.erase=function(c,e){for(var a=c;a<e;++a)b[a]=0};this.getArray=
function(){return b};this.getSize=function(){return c}}});