// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define([],function(){return function(c,e){var d=[],b=-1;this.get=function(){var a;-1===b?a=new c:(b-=1,a=d.pop(),c.call(a));return a};this.put=function(a){a&&(e.call(a),b+=1,d[b]=a)}}});