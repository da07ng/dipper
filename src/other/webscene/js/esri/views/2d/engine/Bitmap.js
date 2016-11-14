// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../../core/declare","./DisplayObject"],function(c,d){return c(d,{source:null,_sourceSetter:function(a,b){if(a===b)return b;a.className=this.className;this.surface=a;this.requestRender();return a}})});