// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/screenUtils","./Symbol"],function(c,d,b,e){return c(e,{declaredClass:"esri.symbols.LineSymbol",type:null,width:1,_widthReader:b.pt2px,toJSON:function(){var a=b.px2pt(this.width),a=isNaN(a)?void 0:a;return d.mixin(this.inherited(arguments),{width:a})}})});