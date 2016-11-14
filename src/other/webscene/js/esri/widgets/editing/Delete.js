// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../core/declare dojo/_base/lang dojo/has ../../kernel ../../core/OperationBase ./Add".split(" "),function(b,e,f,g,c,d){return b(c,{declaredClass:"esri.widgets.editing.Delete",type:"edit",label:"Delete Features",constructor:function(a){a=a||{};this._add=new d({featureLayer:a.featureLayer,addedGraphics:a.deletedGraphics})},performUndo:function(){this._add.performRedo()},performRedo:function(){this._add.performUndo()}})});