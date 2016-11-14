// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../config","./DynamicLayer","./mixins/ImageServiceLayerMixin"],function(d,e,f,g,h){return d([g,h],{declaredClass:"esri.layers.ArcGISImageServiceLayer",constructor:function(a,b){this._initialize(a,b);this.useMapImage=b&&b.useMapImage||!1},refresh:function(a){if(a)this.inherited(arguments);else{var b=this.disableClientCaching;this.disableClientCaching=!0;this.inherited(arguments);this.disableClientCaching=b}},exportMapImage:function(a,b){var c=f.defaults.map;
delete e.mixin({size:c.width+","+c.height},this._params,a?a.toJSON():{},{f:"json"})._ts;return null}})});