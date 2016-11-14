// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/lang","./Domain"],function(b,c,d,e){return b([e],{declaredClass:"esri.layers.support.RangeDomain",constructor:function(a){a&&c.isObject(a)&&(this.minValue=a.range[0],this.maxValue=a.range[1])},toJSON:function(){var a=this.inherited(arguments);a.range=[this.minValue,this.maxValue];return d.fixJson(a)}})});