// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare"],function(c){return c(null,{declaredClass:"esri.renderer.SymbolAger",getAgedSymbol:function(a,b){},_setSymbolSize:function(a,b){switch(a.type){case "simplemarkersymbol":a.setSize(b);break;case "picturemarkersymbol":a.setWidth(b);a.setHeight(b);break;case "simplelinesymbol":case "cartographiclinesymbol":a.setWidth(b);break;case "simplefillsymbol":case "picturefillsymbol":a.outline&&a.outline.setWidth(b)}}})});