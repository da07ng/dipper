// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","dojo/Deferred","../core/Collection","./Layer"],function(f,g,h,e,k){return f(k,{declaredClass:"esri.layers.GraphicsLayer",classMetadata:{properties:{graphics:{type:e}}},getDefaults:function(a){var b=this.inherited(arguments);a.graphics||(b=g.mixin(b,{graphics:new e}));return b},destroy:function(){this.clear()},viewModulePaths:{"2d":"../views/2d/layers/GraphicsLayerView2D","3d":"../views/3d/layers/GraphicsLayerView3D"},_gfxHdl:null,graphics:null,_graphicsSetter:function(a,
b){if(!b)return a.forEach(function(a){a.layer=this},this),this._gfxHdl=a.on("change",function(a){var b,c,d;d=a.added;for(b=0;c=d[b];b++)c.layer=this;d=a.removed;for(b=0;c=d[b];b++)c.layer=null}.bind(this)),a;b.clear();b.addItems(a);return b},popupTemplate:null,renderer:null,elevationInfo:null,add:function(a){a=a.hasOwnProperty("length")?a:[a];this.graphics.addItems(a)},clear:function(){this.graphics.clear()},createGraphicsController:function(a){var b=new h;a={layer:this,layerView:a.layerView,graphicsCollection:this.graphics};
this.emit("graphics-controller-create",{graphicsController:a});b.resolve(a);return b.promise},remove:function(a){a=a.hasOwnProperty("length")?a:[a];this.graphics.removeItems(a)},graphicChanged:function(a){this.emit("graphic-update",a)}})});