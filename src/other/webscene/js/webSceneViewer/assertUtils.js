// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define([],function(){function a(a){this.message=a}a.prototype.toString=function(){return"AssertException: "+this.message};return{AssertException:a,assert:function(c,d){if(!c){var b=Error("dummy");b.stack&&console.log(b.stack);throw new a(d);}}}});