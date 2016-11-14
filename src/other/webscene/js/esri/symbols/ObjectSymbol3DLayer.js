// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","./Symbol3DLayer"],function(c,a,d,e){return c(e,{type:"Object",material:void 0,resource:void 0,width:void 0,height:void 0,depth:void 0,anchor:void 0,toJSON:function(){var b={width:this.width,height:this.height,depth:this.depth,anchor:this.anchor,resource:a.clone(this.resource)};a.mixin(b,this.inherited(arguments));return d.fixJson(b,!0)}})});