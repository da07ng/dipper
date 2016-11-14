// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../../core/declare dojo/_base/lang dojo/_base/array dojo/promise/all dojo/_base/Deferred ../../../core/Accessor ../../../core/HandleRegistry ../../../core/Promise ../../../core/Evented ../../support/StreamPurger ../../../Graphic ../../../geometry/support/jsonUtils".split(" "),function(g,f,h,k,l,m,n,p,q,r,s,t){return g([m,p,q],{declaredClass:"esri.layers.graphics.controllers.StreamController",constructor:function(){this._addFeatures=f.hitch(this,this._addFeatures);this._handleMessage=f.hitch(this,
this._handleMessage);this._handleRegistry=new n;this._nextId=0;this._socketConnector=null;this._filter={geometry:null,where:null}},initialize:function(){var a=this,b=new l;k([this.layer,this.layerView]).then(function(){a.graphicsSource=a.layer.graphicsSource;a.graphicsCollection=a.graphicsCollection||a.layer.graphicsCollection;var c=new r(a);c.then(function(){a.purger=c;a._handleRegistry.add(a.watch("layer.requestedDefinitionExpression",function(b){b={where:b};a._filterValid(b)&&a._filterChanged(b)&&
a._setFilter(b)}));a._handleRegistry.add(a.watch("layer.requestedGeometryDefinition",function(b){b={geometry:b};a._filterValid(b)&&a._filterChanged(b)&&a._setFilter(b)}));a._makeConnection()},function(u){a.addResolvingPromise(b.promise);b.reject(u)})});return b.promise},destroy:function(){this._handleRegistry&&(this._handleRegistry.destroy(),this._handleRegistry=null);this.purger&&(this.purger.destroy(),this.purger=null);this._socketConnector&&(this._disconnect(),this._socketConnector=null)},graphicsCollection:null,
_gfxColHdl:null,_graphicsCollectionSetter:function(a){var b=this.graphicsCollection;if(b===a)return b;this._gfxColHdl&&(this._gfxColHdl.remove(),this._gfxColHdl=null,b.forEach(function(a){a.layer=null}));a&&(a.forEach(function(a){a.layer=this.layer},this),this._gfxColHdl=a.on("change",f.hitch(this,function(a){var b,d,e;e=a.added;for(b=0;d=e[b];b++)d.layer=this.layer;e=a.removed;for(b=0;d=e[b];b++)d.layer=null})));return a},_definitionExpressionSetter:function(a){var b=this._filter.where;a={definitionExpression:a};
if(!this._filterValid(a)||!this._filterChanged(a))return b;this._setFilter(a)},_definitionExpressionGetter:function(){return this._filter.where},_geometryDefinitionSetter:function(a){var b=this._filter.geometry;a={geometryDefinition:a};if(!this._filterValid(a)||!this._filterChanged(a))return b;this._setFilter(a)},_geometryDefinitionGetter:function(){return this._filter.geometry},connect:function(){this._connect()},disconnect:function(){this._disconnect()},_makeConnection:function(){var a=this;this.graphicsSource.createWebSocketConnector(this.layerView.view.map.spatialReference).then(function(b){a._socketConnector=
b;b.on("connect",function(){a.emit("connect")});b.on("disconnect",function(){a.emit("disconnect")});b.on("message",function(b){a._handleMessage(b)});b.connect()})},_connect:function(){this._socketConnector&&this._socketConnector.connect()},_disconnect:function(){this._socketConnector&&this._socketConnector.disconnect()},_handleMessage:function(a){a=JSON.parse(a);this.emit("message",a);a.hasOwnProperty("filter")?this._handleFilterMessage(a):(a=a instanceof Array?a:[a],this._addFeatures(a))},_addFeatures:function(a){var b=
this.layer.objectIdField,c=[];h.forEach(a,function(a){if(!a.attributes||!(a.attributes[b]||0===a.attributes[b])){if(!a.geometry)return!1;a.attributes=a.attributes||{};a.attributes[b]=this._nextId++}a=a.declaredClass?a:s.fromJSON(a);c.push(a)},this);this.graphicsCollection.addItems(c);return a},_filterChanged:function(a){var b=!1,c=!1;a=a?this.graphicsSource.makeFilter(a):{geometry:null,where:null};a.hasOwnProperty("geometry")&&(b=a.geometry?!a.geometry.equals(this._filter.geometry):a.geometry!==this._filter.geometry);
a.hasOwnProperty("where")&&(c=a.where!==this._filter.where);return b||c},_filterValid:function(a){var b=!0;if(a){if(a.hasOwnProperty("geometryDefinition")&&a.geometryDefinition&&(!a.geometryDefinition.type||"extent"!==a.geometryDefinition.type))b=!1;b&&a.hasOwnProperty("definitionExpression")&&a.definitionExpression&&"string"!==typeof a.definitionExpression&&(b=!1)}return b},_setFilter:function(a){a=this.graphicsSource.makeFilter(a);a.geometry&&"string"!==typeof a&&(a.geometry=JSON.stringify(a.geometry.toJSON()));
this._socketConnector.send({filter:a||null})},_handleFilterMessage:function(a){var b;if(a.error)b=Error(a.error.join(",")),this.emit("filter-change",{filter:a.filter,error:b});else{b=a.filter.where?a.filter.where:null;if(a=a.filter.geometry?a.filter.geometry:null)"string"===typeof a&&(a=JSON.parse(a)),a=t.fromJSON(a);this._filter.geometry=a;this._filter.where=b;this.notifyChange("definitionExpression");this.notifyChange("geometryDefinition");this.emit("filter-change",{filter:this._filter})}}})});