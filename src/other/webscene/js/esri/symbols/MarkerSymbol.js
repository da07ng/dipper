// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/screenUtils","./Symbol"],function(e,f,b,g){return e(g,{declaredClass:"esri.symbols.MarkerSymbol",angle:0,_angleReader:function(a){return a&&-1*a},type:null,xoffset:0,_xoffsetReader:b.pt2px,yoffset:0,_yoffsetReader:b.pt2px,size:12,_sizeReader:function(a){return"auto"===a?a:b.pt2px(a)},toJSON:function(){var a=b.px2pt(this.size),a=isNaN(a)?void 0:a,c=b.px2pt(this.xoffset),c=isNaN(c)?void 0:c,d=b.px2pt(this.yoffset),d=isNaN(d)?void 0:d;return f.mixin(this.inherited(arguments),
{size:"auto"===this.size?this.size:a,angle:this.angle&&-1*this.angle,xoffset:c,yoffset:d})}})});