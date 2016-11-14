// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./Symbol3DLayer"],function(d,a,e,b,f){return d(f,{type:"Text",material:void 0,size:void 0,_sizeReader:b.pt2px,text:void 0,font:void 0,toJSON:function(){var c={font:this.font?a.clone(this.font):void 0,size:null!=this.size?b.px2pt(this.size):void 0};a.mixin(c,this.inherited(arguments));return e.fixJson(c,!0)}})});