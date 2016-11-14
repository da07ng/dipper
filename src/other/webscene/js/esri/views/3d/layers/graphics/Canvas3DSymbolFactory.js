// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("./Canvas3DIconSymbol ./Canvas3DObjectSymbol ./Canvas3DLineSymbol ./Canvas3DPathSymbol ./Canvas3DFillSymbol ./Canvas3DExtrudeSymbol ./Canvas3DTextSymbol ../../webgl-engine/lib/Util".split(" "),function(a,b,e,f,g,h,k,l){var m=l.assert,n={Icon:a,Object:b,Line:e,Path:f,Fill:g,Extrude:h,Text:k};return{make:function(c,a,b){var d=n[c.type];m(d,"unknown symbol type "+c.type);return new d(c,a,b)}}});