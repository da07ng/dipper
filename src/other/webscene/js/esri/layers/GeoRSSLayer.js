// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","../config","../request","./mixins/FeatureCollectionLayer"],function(a,b,c,d){return a([d],{declaredClass:"esri.layers.GeoRSSLayer",serviceUrl:location.protocol+"//utility.arcgis.com/sharing/rss",constructor:function(a,c){b.geoRSSServiceUrl&&(this.serviceUrl=b.geoRSSServiceUrl);this._createLayer()},parse:function(){return this._io=c({url:this.serviceUrl,content:{url:this.url,refresh:this.loaded?!0:void 0,outSR:this._outSR?JSON.stringify(this._outSR.toJSON()):void 0},callbackParamName:"callback"})},
_initLayer:function(a){this.inherited(arguments);this.loaded||(this.loaded=!0,this.onLoad(this))}})});