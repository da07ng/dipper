// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../../core/declare","./PreallocArray"],function(d,e){var c=d([],{constructor:function(a,b){this.freelist=new e(a);this.cls=b;this.initialSize=a},_allocate:function(){return new this.cls},acquire:function(){if(0===this.freelist.length)for(var a=Math.max(1,this.initialSize/2),b=0;b<a;b++)this.freelist.push(new this.cls);return this.freelist.pop()},release:function(a){this.freelist.push(a)}});c.on=function(a,b){a._pool=null;Object.defineProperty(a,"Pool",{get:function(){this._pool||(this._pool=
new c(b,a));return this._pool}})};return c});