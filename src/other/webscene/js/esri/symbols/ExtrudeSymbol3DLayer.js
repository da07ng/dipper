// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","./Symbol3DLayer"],function(b,c,d,e){return b(e,{type:"Extrude",size:0,material:null,toJSON:function(){var a={size:this.size};c.mixin(a,this.inherited(arguments));return d.fixJson(a,!0)}})});