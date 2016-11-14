// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./Symbol3DLayer"],function(c,d,e,a,f){return c(f,{type:"Line",size:0,_sizeReader:a.pt2px,material:null,toJSON:function(){var b={size:null!=this.size?a.px2pt(this.size):void 0};d.mixin(b,this.inherited(arguments));return e.fixJson(b,!0)}})});