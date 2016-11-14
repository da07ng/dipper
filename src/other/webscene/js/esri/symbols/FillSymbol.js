// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","./Symbol","./SimpleLineSymbol"],function(b,c,a){return b(c,{declaredClass:"esri.symbols.FillSymbol",classMetadata:{properties:{outline:{type:a}}},type:null,_outlineReader:a.fromJSON,toJSON:function(){var a=this.inherited(arguments);this.outline&&(a.outline=this.outline.toJSON());return a}})});