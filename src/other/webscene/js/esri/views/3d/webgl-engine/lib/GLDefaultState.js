// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define([],function(){return function(a){this.cullEnabled=!1;this.blendFuncSrc=a.SRC_ALPHA;this.blendFuncDst=a.ONE_MINUS_SRC_ALPHA;this.depthFunc=a.LESS;this.apply=function(){this.cullEnabled?a.enable(a.CULL_FACE):a.disable(a.CULL_FACE);a.blendFunc(this.blendFuncSrc,this.blendFuncDst);a.depthFunc(this.depthFunc)}}});