// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../../core/declare dojo/promise/all dojo/Deferred dojo/_base/lang dojo/io-query ../../../layers/support/LabelClass ../../../core/urlUtils ../../../core/watchUtils ../../../geometry/support/webMercatorUtils ../../../geometry/support/scaleUtils ../../layers/GraphicsLayerView ../../../layers/graphics/controllers/SnapshotController ../../../geometry/SpatialReference ../../../geometry/Extent ../../../processors/SpatialIndex ./graphics/SymbolConverter ./graphics/TextureCollection ./graphics/Canvas3DSymbolSet ./graphics/Canvas3DGraphicSet ./graphics/graphicUtils ./support/LayerViewUpdatingPercentage ../support/ResourceController ../lib/glMatrix ../support/earthUtils ../support/projectionUtils ../support/Intersection ../webgl-engine/Stage ../webgl-engine/lib/Util ../webgl-engine/lib/Layer ../webgl-engine/lib/FloatingBoxLocalOriginFactory ../webgl-engine/materials/HUDMaterial ../support/PromiseLightweight ../webgl-engine/lib/TextTextureAtlas ../webgl-engine/lib/MaterialCollection ../../../core/arrayUtils".split(" "),
function(u,y,z,J,K,A,B,L,C,M,q,N,D,O,P,E,Q,R,S,T,U,V,F,v,k,w,r,G,H,W,X,Y,Z,$,aa){var x=function(a){a.remove()},s=-0.3*v.earthRadius,ba=0.5*v.earthRadius*Math.PI,ca=0.9*v.earthRadius,t=F.vec4d,g=F.vec3d,p=g.create();u=u([q,U],{declaredClass:"esri.views.3d.layers.GraphicsLayerView3D",supportsDraping:!0,hasDraped:!1,"symbols-updating":!1,_progressMaxNumNodes:1,updateElevation:!0,_overlayUpdating:!1,initialize:function(){this._stage=this.view._stage;this._stageLayer=new H(this.layer.id,{state:this.suspended?
"HIDDEN":"VISIBLE",fullExtent:k.convertExtent(this.layer.fullExtent,this.view.renderSpatialReference),initialExtent:k.convertExtent(this.layer.initialExtent,this.view.renderSpatialReference)},this.layer.id);this._stage.add(r.ModelContentType.LAYER,this._stageLayer);this._labelStageLayer=new H(this.layer.id,{state:this.suspended?"HIDDEN":"IGNORED"},this.layer.id+"_labels");this._stage.add(r.ModelContentType.LAYER,this._labelStageLayer);this._stage.addToViewContent([this._stageLayer.getId(),this._labelStageLayer.getId()]);
this.view.labelManager.addSceneServiceLayerView(this);this._streamDataSupplier=this.view.resourceController.registerClient(this,V.ClientType.SYMBOLOGY,this._addUrlToken.bind(this));this._canvas3DSymbols={};this._canvas3DGraphics={};this._canvas3DGraphicsKeys={};this._canvas3DGraphicsBySymbol={};this._elevationDirtyGraphicsQueue=[];this._elevationDirtyGraphicsSet={};this._updatingGraphicIds={};this._canvas3DGraphicsDrapedIds={};this.hudMaterialCollection=this.textTextureAtlas=null;this._sharedResources=
{textures:new Q(this._streamDataSupplier,this._stage)};this._symbolCreationContext={sharedResources:this._sharedResources,renderer:this.layer.renderer,stage:this._stage,streamDataSupplier:this._streamDataSupplier,elevationProvider:null,renderSpatialReference:this.view.renderSpatialReference,renderCoordsHelper:this.view.renderCoordsHelper,overlaySR:null,mapCoordsHelper:this.view.mapCoordsHelper,layer:this.layer,layerOrder:this.view.getDrawingOrder(this.layer.get("id"))||0,localOriginFactory:new W(5E6,
16),clippingExtent:null};this._graphicsCollectionEventHandle=this._graphicsCollection=null;this._graphicsControllerEventHandles=[];this._graphicsControllerLoading=!0;this._initGraphicsController();this._spatialIndex=new P;this._spatialIndexNumPendingQueries=this._spatialIndexNumGraphics=0;this.view.resourceController.registerIdleFrameWorker(this,{needsUpdate:this._needsIdleUpdate,idleFrame:this._idleUpdate});this._viewChangeListenerHandles=[];this._viewChangeUpdate=this._viewChangeUpdate.bind(this);
this._viewChangeListenerHandles.push(this.view.on("resize",this._viewChangeUpdate));this._viewChangeListenerHandles.push(this.view.navigation.on("currentViewChanged",this._viewChangeUpdate));this._scaleVisibility=this._scaleVisibilityDirty=this._frustumVisibility=this._frustumVisibilityDirty=!0;this._scaleVisibilityQuery=!1;this._clippingChangedHandle=this.view.watch("clippingArea",this._updateClippingExtent.bind(this));this._updateClippingExtent();this._updateSuspendScaleVisibleFinish=this._updateSuspendScaleVisibleFinish.bind(this);
this._viewChangeUpdate();this._suspendResumeExtent=this.computedExtent=null;this._suspendResumeExtentEngine={extent:Array(4),planes:Array(4),maxSpan:0,center:{origin:g.create(),direction:g.create()}};this._suspendResumeExtentEngineDirty=!0;for(var a=0;4>a;a++)this._suspendResumeExtentEngine.extent[a]={origin:g.create(),direction:g.create(),cap:{next:null,direction:g.create()}},this._suspendResumeExtentEngine.planes[a]=t.create();this._suspendResumeExtentEngine.planes[4]=t.create();this.on("suspend",
function(){this._stageLayer.setState("HIDDEN");this._labelStageLayer.setState("HIDDEN");this._hideAllGraphics();this.updateElevation=!1}.bind(this));this.on("resume",function(){this._stageLayer.setState("VISIBLE");this._labelStageLayer.setState("IGNORED");this.updateElevation&&this._markAllGraphicsElevationDirty();this._showLabelsChangeOnResume&&this._showLabelsChange();this.view.basemapTerrain&&this._updateGraphicsVisibility()});this._layerEventHandles=[this.layer.watch("renderer",this._rendererChange.bind(this)),
this.layer.watch("opacity",this._opacityChange.bind(this)),this.layer.watch("elevationInfo",this._elevationInfoChange.bind(this)),this.layer.watch("showLabels",this._showLabelsChange.bind(this)),this.layer.watch("minScale",this._layerMinMaxScaleChangeHandler.bind(this)),this.layer.watch("maxScale",this._layerMinMaxScaleChangeHandler.bind(this)),this.layer.on("graphic-update",this._graphicUpdateHandler.bind(this))];this._elevationUpdateEventHandle=this._scaleChangeEventHandle=null;this._showLabelsChangeOnResume=
!1;this._labelClasses=[];this.addResolvingPromise(this._initLabelingInfo());this._basemapTerrainEventHandle=this.view.watch("basemapTerrain",this._basemapTerrainChanged.bind(this));this._basemapTerrainChanged(this.view.basemapTerrain);this._viewIsSpherical="spherical"===this.view.globeMode;var b=new z;this._renderSREqualsMapSR=this._mapSR=null;L.whenOnce(this.view,"map.spatialReference",function(a){this._viewIsSpherical&&!a.isWebMercator()&&console.error("Map spatial reference must be Web Mercator in spherical SceneView mode");
this._mapSR=a;this._renderSREqualsMapSR=this.view.renderSpatialReference.equals(a);this._symbolCreationContext.overlaySR=a;b.resolve()}.bind(this));this.addResolvingPromise(b.promise)},_addUrlToken:function(a){if(-1!==a.indexOf("?token\x3d")||0===a.indexOf("data:"))return a;var b=J.mixin({token:this.layer.token}),b=K.objectToQuery(b);a+=b?"?"+b:"";null==this._canUseXhr&&(this._canUseXhr=B.canUseXhr(a));return!this._canUseXhr?B.addProxy(a):a},_updateClippingExtent:function(){var a=this._symbolCreationContext.clippingExtent,
b=[];k.extentToBoundingRect(this.view.clippingArea,b,this.view.map.spatialReference)?this._symbolCreationContext.clippingExtent=[b[0],b[1],-Infinity,b[2],b[3],Infinity]:this._symbolCreationContext.clippingExtent=null;aa.equals(this._symbolCreationContext.clippingExtent,a)||void 0!==a&&this._recreateAllGraphics()},_basemapTerrainChanged:function(a){this._symbolCreationContext.elevationProvider=a;this._recreateAllGraphics();a?(this._elevationUpdateEventHandle=a.on("elevation-change",this._elevationUpdateHandler.bind(this)),
this.updateElevation=!1,this._layerMinMaxScaleChangeHandler()):(this._elevationUpdateEventHandle&&(this._elevationUpdateEventHandle.remove(),this._elevationUpdateEventHandle=null),this._scaleChangeEventHandle&&(this._scaleChangeEventHandle.remove(),this._scaleChangeEventHandle=null))},_getVerticalUnitValueForSR:function(a){a=M.getUnitValueForSR(a);return 1E5<a?1:a},_getFeatureTransform:function(){if("esri.layers.FeatureLayer"===this.layer.declaredClass){var a=this.layer.spatialReference,b=this.view.map.spatialReference,
c=1;a.equals(b)||(a=this._getVerticalUnitValueForSR(a),b=this._getVerticalUnitValueForSR(b),c=a/b);if(1!==c){var d=function(a,b){for(var c=0;c<a.length;++c)for(var d=a[c],g=0;g<d.length;++g)d[g][2]*=b};return function(a){a=a.geometry;a.hasZ&&(a.z&&(a.z*=c),a.paths&&d(a.paths),a.rings&&d(a.rings))}}}return null},_initGraphicsController:function(){var a=this.layer.createGraphicsController({layerView:this,options:{maxPageSize:300,extentAccessor:this.view,extentProperty:"clippingArea",featureTransform:this._getFeatureTransform()}});
y([this,a]).then(function(a){a=a[1];if(a instanceof N){var c=a.on("all-features-loaded",function(){this._graphicsControllerLoading=!1;this._evaluateUpdatingState()}.bind(this));this._graphicsControllerEventHandles.push(c)}else this._graphicsControllerLoading=!1;this._graphicsCollection=a.graphicsCollection;this._graphicsCollectionEventHandle=this._graphicsCollection.on("change",this._collectionChangeHandler.bind(this));0<this._graphicsCollection.length&&this.add(this._graphicsCollection.getAll());
this._evaluateUpdatingState()}.bind(this))},_viewChangeUpdate:function(){this._frustumVisibilityDirty=!0},destroy:function(){this._graphicsCollection=null;this._graphicsCollectionEventHandle&&this._graphicsCollectionEventHandle.remove();this._graphicsControllerEventHandles.forEach(x);this._elevationUpdateEventHandle&&(this._elevationUpdateEventHandle.remove(),this._elevationUpdateEventHandle=null);this._layerEventHandles.forEach(x);this._scaleChangeEventHandle&&(this._scaleChangeEventHandle.remove(),
this._scaleChangeEventHandle=null);this._basemapTerrainEventHandle.remove();this._basemapTerrainEventHandle=null;var a=[this._stageLayer.getId(),this._labelStageLayer.getId()];this._stage.removeFromViewContent(a);this._stage.remove(r.ModelContentType.LAYER,a[0]);this._stage.remove(r.ModelContentType.LAYER,a[1]);this.view.resourceController.deregisterIdleFrameWorker(this);this.view.labelManager.removeSceneServiceLayerView(this);var a=!1,b;for(b in this._canvas3DGraphics)a=a||this._canvas3DGraphics[b].isDraped(),
this._canvas3DGraphics[b].destroy();this._canvas3DGraphics={};this._canvas3DGraphicsKeys=null;for(var c in this._canvas3DSymbols)this._canvas3DSymbols[c].destroy();this._canvas3DGraphicsDrapedIds={};this.hasDraped=!1;this._viewChangeListenerHandles.forEach(x);this._clippingChangedHandle.remove();null!=this._controller&&this._controller.destroy();a&&this.emit("draped-data-change");this._spatialIndex&&this._spatialIndex.destroy()},add:function(a){this.isResolved()?this._add(a):this.then(function(){this._add(a)}.bind(this))},
remove:function(a){for(var b=!1,c=a.length,d=0;d<c;d++){var e=a[d].id,f=this._canvas3DGraphics[e];if(f){f.isDraped()&&(delete this._canvas3DGraphicsDrapedIds[e],b=!0);var h=f.canvas3DSymbol.symbol.id;f.destroy();delete this._canvas3DGraphics[e];delete this._canvas3DGraphicsBySymbol[h][e];this._canvas3DGraphicsKeys=null}}this._updateHasDraped();b&&this.emit("draped-data-change");this.view.labelManager.setDirty()},getRenderingInfo:function(a){var b=this.inherited(arguments);if(b&&b.color){var c=b.color;
b.color=[c.r/255,c.g/255,c.b/255,c.a]}return b},_drawingOrderSetter:function(a){this._symbolCreationContext.layerOrder=a;var b={},c={},d;for(d in this._canvas3DGraphics)this._canvas3DGraphics[d].setDrawOrder(a,b,c);for(var e in c)this._canvas3DSymbols[e].setDrawOrder(a,b);G.objectEmpty(b)||(this.view._stage.getTextureGraphicsRenderer().updateRenderOrder(b),this.emit("draped-data-change"))},getGraphicsFromStageObject:function(a,b){var c=null;if(this._graphicsCollection){var d=a.getMetadata();this._graphicsCollection.some(function(a){return a.id===
d.graphicId?c=a:!1})}var e=new Y.Promise;null!=c?e.done(c):e.reject();return e},getCanvas3DGraphics:function(){return this._canvas3DGraphics},getCanvas3DGraphicsKeys:function(){null==this._canvas3DGraphicsKeys&&(this._canvas3DGraphicsKeys=Object.keys(this._canvas3DGraphics));return this._canvas3DGraphicsKeys},_collectionChangeHandler:function(a){this.add(a.added);this.remove(a.removed)},_needsIdleUpdate:function(){return this._frustumVisibilityDirty||this.view.basemapTerrain&&(this._scaleVisibilityDirty||
0<this._elevationDirtyGraphicsQueue.length)},_idleUpdate:function(a){if(this._frustumVisibilityDirty&&(this._updateSuspendFrustumVisible(),this._frustumVisibilityDirty=!1,a.done()))return;if(this.view.basemapTerrain){if(this._scaleVisibilityDirty&&(this._updateSuspendScaleVisible(),this._scaleVisibilityDirty=!1,a.done()))return;var b=this._elevationDirtyGraphicsQueue.length;if(0<b){for(var c=this._stageLayer.getId(),d=this._labelStageLayer.getId(),e=0,f=0;f<b;f++){var h=this._elevationDirtyGraphicsQueue[f],
n=this._canvas3DGraphics[h];n&&n.alignWithElevation(this.view.basemapTerrain,this.view.renderCoordsHelper,this.view.mapCoordsHelper);delete this._elevationDirtyGraphicsSet[h];e++;if(20<=e){this.view._stage.processDirtyLayer(c);this.view._stage.processDirtyLayer(d);if(a.done())break;e=0}}this.view._stage.processDirtyLayer(c);this.view._stage.processDirtyLayer(d);this._elevationDirtyGraphicsQueue.splice(0,f+1);this.view.labelManager.setDirty()}this._evaluateUpdatingState()}},_add:function(a){for(var b=
a.length,c=!1,d=this._scaleRangeEnabled(),e=0;e<b;e++){var f=a[e],h=f.geometry;if(null!=h&&(this._expandComputedExtent(h),h=this.getRenderingInfo(f))){var n=h.symbol,g=this._getOrCreateCanvas3DSymbol(n,h.renderer);g&&(this._beginGraphicUpdate(f),g.then(function(a,b,e,f){this._canvas3DGraphicsBySymbol[b.id]||(this._canvas3DGraphicsBySymbol[b.id]={});this._createCanvas3DGraphic(e,a,f,d);this._endGraphicUpdate(a,c);this.view.labelManager.setDirty()}.bind(this,f,n,g,h),function(a){this._endGraphicUpdate(a,
c)}.bind(this,f)))}}this._endGraphicUpdate(null,!0);c=!0},_getOrCreateCanvas3DSymbol:function(a,b){var c=this._canvas3DSymbols[a.id];if(!c){var d=E.toWeb3DSymbol(a,!0);if(d){var e;if(b&&b.backgroundFillSymbol&&(c=E.toWeb3DSymbol(b.backgroundFillSymbol)))e=c.symbolLayers;c=new R(d,this._symbolCreationContext,e);this._canvas3DSymbols[a.id]=c}}return c},_createCanvas3DGraphic:function(a,b,c,d){if(!this._canvas3DGraphics[b.id]){var e=a.createCanvas3DGraphic(b,c);this.layerLabelsEnabled()&&(e=this._createLabelsForGraphic(b,
e,c));this._canvas3DGraphics[b.id]=e;this._canvas3DGraphicsKeys=null;this._canvas3DGraphicsBySymbol[a.symbol.id][b.id]=e;e.initialize(this._stageLayer,this._labelStageLayer,this._stage);if(a=e.isDraped())this.hasDraped=this._canvas3DGraphicsDrapedIds[b.id]=!0;e.centroid=null;"point"!==b.geometry.type&&e instanceof S&&(e.centroid=T.computeCentroid(b.geometry,this._mapSR));c=!this.suspended;if(this._shouldAddToSpatialIndex(b,e,d)){var f=this._addGraphicToSpatialIndex(b,e);d&&f&&(c=c&&this._graphicVisibleAtScale(b,
e))}d=e.setVisibilityFlag("VISIBILITY_SCALERANGE",c);b=e.setVisibilityFlag("VISIBILITY_GRAPHIC",b.visible);d!==b&&a&&this.emit("draped-data-change")}},_shouldAddToSpatialIndex:function(a,b,c){return c||b.mustAlignToTerrain()},_addGraphicsToSpatialIndex:function(){if(this._graphicsCollection)for(var a=this._graphicsCollection.getAll(),b=a.length,c=this._scaleRangeEnabled(),d=0;d<b;d++){var e=a[d],f=this._canvas3DGraphics[e.id];f&&!f.addedToSpatialIndex&&this._shouldAddToSpatialIndex(e,f,c)&&this._addGraphicToSpatialIndex(e,
f)}},_addGraphicToSpatialIndex:function(a,b){var c=a.geometry.spatialReference,d=this._mapSR;if(!c.equals(d)){if(c.wkid===D.WGS84.wkid&&d.isWebMercator())c=C.geographicToWebMercator(a.geometry);else if(c.isWebMercator()&&d.wkid===D.WGS84.wkid)c=C.webMercatorToGeographic(a.geometry);else return console.warn("Cannot convert graphic geometry to map spatial reference, elevation and scale updates are disabled"),!1;a={id:a.id,geometry:c.toJSON(!0)}}this._spatialIndexNumGraphics++;this._spatialIndex.runProcess([a],
this.layer.id);b.addedToSpatialIndex=!0},_recreateSymbol:function(a){var b=this._canvas3DGraphicsBySymbol[a],c=[],d=!1,e;for(e in b){var f=b[e];f.isDraped()&&(delete this._canvas3DGraphicsDrapedIds[e],d=!0);c.push(f.graphic);f.destroy();this._canvas3DGraphics[e]=null}this._canvas3DGraphicsBySymbol[a]={};this._canvas3DSymbols[a].destroy();this._canvas3DSymbols[a]=null;this._updateHasDraped();d&&this.emit("draped-data-change");this.add(c)},_clearSymbolsAndGraphics:function(){var a=!1,b;for(b in this._canvas3DGraphics)a=
a||this._canvas3DGraphics[b].isDraped(),this._canvas3DGraphics[b].destroy();this._canvas3DGraphics={};this._canvas3DGraphicsKeys=null;for(var c in this._canvas3DSymbols)this._canvas3DSymbols[c].destroy();this._canvas3DSymbols={};this._canvas3DGraphicsBySymbol={};this._elevationDirtyGraphicsSet={};this._elevationDirtyGraphicsQueue=[];this._updatingGraphicIds={};this._canvas3DGraphicsDrapedIds={};this.hasDraped=!1;a&&this.emit("draped-data-change");this.view.labelManager.setDirty();this.textTextureAtlas&&
(this.textTextureAtlas.dispose(),this.textTextureAtlas=null);this.hudMaterialCollection&&(this.hudMaterialCollection.dispose(),this.hudMaterialCollection=null)},_initLabelingInfo:function(){var a=new z;this.layer.then(function(){var b=this.layer.labelingInfo;if(b){this._labelClasses=Array(b.length);for(var c=[],d=0;d<b.length;d++){var e=this._getOrCreateCanvas3DSymbol(b[d].symbol);e.then(function(a,c){this._labelClasses[a]={labelClass:b[a],canvas3DSymbol:c,canvas3DGraphics:[]}}.bind(this,d,e));c.push(e)}y(c).then(function(){a.resolve()})}else a.resolve()}.bind(this));
return a.promise},_createLabelsForGraphic:function(a,b,c){if(this._labelClasses&&0<this._labelClasses.length)for(var d=0;d<this._labelClasses.length;d++){var e=this._labelClasses[d];if(A.evaluateWhere(e.labelClass.where,a.attributes)){var f=e.labelClass.getLabelExpression();if(f&&(f=A.buildLabelText(f,a.attributes,this.layer.fields))){d=e.canvas3DSymbol.childCanvas3DSymbols[0];c=this._evalLabelPlacementParams(a,b,c);null==this.textTextureAtlas&&(this.textTextureAtlas=new Z(this.layer.id,this._stage),
this.hudMaterialCollection=new $(this._stage));if(a=d.createCanvas3DGraphic(a,{text:f,centerOffset:c.centerOffset,translation:c.translation,screenOffset:c.screenOffset,anchor:c.anchor},this.hudMaterialCollection,this.textTextureAtlas))a._labelClass=e.labelClass,b.addLabelGraphic(a),e.canvas3DGraphics.push(b),a.setVisibilityFlag("VISIBILITY_LABEL_SHOW",this.layerLabelsEnabled()),this.view.labelManager.setInitialLabelGraphicState(a);break}}}return b},_evalLabelPlacementParams:function(a,b,c){c=l[this.layer.labelingInfo[0].labelPlacement]||
l["default"];if("polygon"===a.geometry.type||"polyline"===a.geometry.type||"extent"===a.geometry.type)return{anchor:"center"};if("point"!==a.geometry.type)return{anchor:c.anchor};var d=b.canvas3DSymbol.symbol.symbolLayers[0];a={screenOffset:[0,0],centerOffset:[0,0,0,-1],translation:b.getCenterObjectSpace(),anchor:c.anchor};"Icon"===d.type?(d=b._graphics[0].getScreenSize(),b.isDraped()?a.anchor="center":(b=b._graphics[0].stageObject.getGeometryRecords()[0].materials[0],b instanceof X?(b=b.getParams(),
a.screenOffset=[d[0]/2*(c.normalizedOffset[0]-2*(b.anchorPos[0]-0.5)),d[1]/2*(c.normalizedOffset[1]-2*(b.anchorPos[1]-0.5))]):a.screenOffset=[d[0]/2*c.normalizedOffset[0],d[1]/2*c.normalizedOffset[1]])):"Object"===d.type&&(b=b._graphics[0].getBoundingBoxObjectSpace(),d=[b[3]-b[0],b[4]-b[1],b[5]-b[2]],b=Math.max(d[0],d[1]),a.centerOffset[0]=1.1*b/2*c.normalizedOffset[0],a.translation[2]+=1.1*d[2]/2*c.normalizedOffset[1],b=g.length(d),a.centerOffset[2]=1.1*b/2*c.normalizedOffset[2]);return a},_pendingRendererChange:null,
_recreateAllGraphics:function(){this._clearSymbolsAndGraphics();this.computedExtent=null;this._updateSuspendResumeExtent();this._graphicsCollection&&this.add(this._graphicsCollection.getAll())},_rendererChange:function(a,b,c,d){this.get("symbols-updating")?this._pendingRendererChange=Array.prototype.slice.call(arguments,0):(this._symbolCreationContext.renderer=a,this._recreateAllGraphics())},_opacityChange:function(a){a=!1;for(var b in this._canvas3DGraphicsBySymbol){var c=this._canvas3DGraphicsBySymbol[b];
this._canvas3DSymbols[b].layerPropertyChanged("opacity");if(!a)for(var d in c)if(c[d].isDraped()){this.emit("draped-data-change");a=!0;break}}},layerLabelsEnabled:function(){return this.layer.get("showLabels")},_showLabelsChange:function(a){if(this.get("suspended"))this._showLabelsChangeOnResume=!0;else if(this._graphicsCollection){var b=this.layerLabelsEnabled();this._graphicsCollection.forEach(function(a){var d=this._canvas3DGraphics[a.id];if(d){if(b&&0===d._labelGraphics.length){var e=this.getRenderingInfo(a),
d=this._createLabelsForGraphic(a,d,e);for(a=0;a<d._labelGraphics.length;a++)e=d._labelGraphics[a],e.initialize(this._labelStageLayer,this._stage)}for(a=0;a<d._labelGraphics.length;a++)e=d._labelGraphics[a],e.setVisibilityFlag("VISIBILITY_LABEL_SHOW",b)}}.bind(this));this.view.labelManager.setDirty();this._showLabelsChangeOnResume=!1}},_elevationInfoChange:function(a){this._labelClasses&&this._labelClasses.forEach(function(a){a.canvas3DSymbol.layerPropertyChanged("elevationInfo",{})});for(var b in this._canvas3DGraphicsBySymbol)if(a=
this._canvas3DGraphicsBySymbol[b],this._canvas3DSymbols[b].layerPropertyChanged("elevationInfo",a))for(var c in a)for(var d=a[c],e=d.graphic,d=d._labelGraphics,f=0;f<d.length;f++){var h=d[f];h.canvas3DSymbol.updateGraphicElevationInfo(e,h)}else this._recreateSymbol(b)},_scaleUpdateHandler:function(a){if(!this.suspended&&0<this._spatialIndexNumGraphics){var b=a.extent,c=a.scale;this._spatialIndexNumPendingQueries++;this._spatialIndex.intersects(b,void 0,void 0,!0).then(function(a){this._spatialIndexNumPendingQueries--;
for(var e=this._visibleAtScale(c),f=!1,h=a.results.length,n=0;n<h;n++){var g=this._canvas3DGraphics[a.results[n]];if(g){var m=g.centroid;if(!m||!(b[0]>m.x||b[1]>m.y||b[2]<m.x||b[3]<m.y)){for(var m=g.setVisibilityFlag("VISIBILITY_SCALERANGE",e),l=0;l<g._labelGraphics.length;l++){var k=g._labelGraphics[l];if(k._labelClass&&null!=k._labelClass.minScale&&null!=k._labelClass.maxScale)var p=this._visibleAtScaleLabel(c,k._labelClass),m=m||k.setVisibilityFlag("VISIBILITY_SCALERANGE_LABEL",p)}m&&this.view.labelManager.setDirty();
m&&g.isDraped()&&(f=!0)}}}f&&this.emit("draped-data-change")}.bind(this))}this._scaleVisibilityDirty=!0},_visibleAtScaleLabel:function(a,b){return a>b.maxScale&&(!b.minScale||a<b.minScale)},_visibleAtScale:function(a){var b=this.layer.get("minScale"),c=this.layer.get("maxScale");return a>c&&(!b||a<b)},_graphicVisibleAtScale:function(a,b){var c;b.centroid?c=b.centroid:"point"===a.geometry.type&&(c=a.geometry);return c?(c=this.view.basemapTerrain?this.view.basemapTerrain.getScale(c):1,this._visibleAtScale(c)):
!0},_scaleRangeEnabled:function(){var a=this.layer.get("minScale");return null!==a&&0<a&&8E7>a||1E3<this.layer.get("maxScale")},_layerMinMaxScaleChangeHandler:function(){if(this.view.basemapTerrain){var a=this._scaleRangeEnabled();a&&!this._scaleChangeEventHandle?(this._scaleChangeEventHandle=this.view.basemapTerrain.on("scale-change",this._scaleUpdateHandler.bind(this)),this.suspended||this._addGraphicsToSpatialIndex()):!a&&this._scaleChangeEventHandle&&(this._scaleChangeEventHandle.remove(),this._scaleChangeEventHandle=
null);this.suspended||this._updateGraphicsVisibility();this._scaleVisibilityDirty=!0}},_graphicUpdateHandler:function(a){var b=this._canvas3DGraphics[a.graphic.id];if(b)switch(a.property){case "visible":b.setVisibilityFlag("VISIBILITY_GRAPHIC",a.newValue)&&(b.isDraped()&&this.emit("draped-data-change"),this.view.labelManager.setDirty())}},_updateGraphicsVisibility:function(){if(null!=this._graphicsCollection){var a=!1;this._graphicsCollection.forEach(function(b){var c=this._canvas3DGraphics[b.id];
c&&(b=this._graphicVisibleAtScale(b,c),c.setVisibilityFlag("VISIBILITY_SCALERANGE",b)&&c.isDraped()&&(a=!0))}.bind(this));a&&this.emit("draped-data-change");this.view.labelManager.setDirty()}},_hideAllGraphics:function(){if(this._graphicsCollection){var a=!1;this._graphicsCollection.forEach(function(b){(b=this._canvas3DGraphics[b.id])&&b.setVisibilityFlag("VISIBILITY_SCALERANGE",!1)&&b.isDraped()&&(a=!0)}.bind(this));a&&this.emit("draped-data-change");this.view.labelManager.setDirty()}},_updateSuspendResumeExtentEngine:function(){if(this._suspendResumeExtentEngineDirty){this._suspendResumeExtentEngineDirty=
!1;var a,b=this._suspendResumeExtent,c=this._suspendResumeExtentEngine,d=this.view.renderCoordsHelper.worldUpAtPosition;g.set3(b[0],b[1],s,c.extent[0].origin);g.set3(b[2],b[1],s,c.extent[1].origin);g.set3(b[2],b[3],s,c.extent[2].origin);g.set3(b[0],b[3],s,c.extent[3].origin);if(!this._renderSREqualsMapSR){var e=this._mapSR,f=this.view.renderSpatialReference;for(a=0;4>a;a++)k.vectorToVector(c.extent[a].origin,e,c.extent[a].origin,f)}g.add(c.extent[0].origin,c.extent[2].origin,c.center.origin);g.scale(c.center.origin,
0.5);d(c.center.origin,c.center.direction);for(a=0;4>a;a++)e=c.extent[a],d(e.origin,e.direction),f=c.extent[3==a?0:a+1],e.cap.next=f.origin,g.direction(f.origin,e.origin,e.cap.direction),g.cross(c.extent[a].cap.direction,c.extent[a].direction,c.planes[a]),c.planes[a][3]=-g.dot(c.planes[a],c.extent[a].origin);c.maxSpan=Math.max(Math.abs(b[0]-b[2]),Math.abs(b[1]-b[3]))}},_isVisibleInFrustumGlobal:function(){var a=this._suspendResumeExtentEngine,b=this.view.getFrustum();if(0>g.dot(a.center.direction,
b.direction))return!0;for(var c=0;4>c;c++)if(0>g.dot(a.extent[c].direction,b.direction))return!0;return!1},_isVisibleInFrustum:function(){var a=this.view.getFrustum();this._updateSuspendResumeExtentEngine();if(this._viewIsSpherical){if(this._suspendResumeExtentEngine.maxSpan>ba)return!0;if(a.altitude()>=ca)return this._isVisibleInFrustumGlobal()}for(var b=0;b<this._suspendResumeExtentEngine.extent.length;b++){var c=this._suspendResumeExtentEngine.extent[b];if(w.frustumRay(a.planes,c.origin,null,c.direction)||
w.frustumLineSegment(a.planes,c.origin,c.cap.next,c.cap.direction))return!0}for(b=0;b<a.lines.length;b++)if(c=a.lines[b],w.frustumLineSegment(this._suspendResumeExtentEngine.planes,c.origin,c.endpoint,c.direction))return!0;return!1},_updateSuspendFrustumVisible:function(){if(this._suspendResumeExtent){var a=this._isVisibleInFrustum();a!==this._frustumVisibility&&(this._frustumVisibility=a,this.notifyChange("suspended"))}},_updateSuspendScaleVisibleFinish:function(a){this._scaleVisibilityQuery=!1;
this._scaleVisibility!==a&&(this._scaleVisibility=a,this.notifyChange("suspended"))},_updateSuspendScaleVisible:function(){var a=this.view.basemapTerrain;if(!this._suspendResumeExtent||!a||!this._scaleRangeEnabled())this._updateSuspendScaleVisibleFinish(!0);else if(!this._scaleVisibilityQuery){this._scaleVisibilityQuery=!0;var b=this.layer.minScale,c=this.layer.maxScale,b=b?a.tilingScheme.levelAtScale(b):0,c=c?a.tilingScheme.levelAtScale(c):Infinity;a.queryVisibleScaleRange(this._suspendResumeExtent,
b,c,this._updateSuspendScaleVisibleFinish)}},canResume:function(){return!this.inherited(arguments)||!this._frustumVisibility||!this._scaleVisibility?!1:!0},_elevationUpdateHandler:function(a){a=a.extent;if(this.suspended){if(!this.updateElevation){var b=this.computedExtent;b&&(a[2]>b.xmin&&a[0]<b.xmax&&a[3]>b.ymin&&a[1]<b.ymax)&&(this.updateElevation=!0)}}else-Infinity===a[0]?this._markAllGraphicsElevationDirty():0<this._spatialIndexNumGraphics&&(this._spatialIndexNumPendingQueries++,this._spatialIndex.intersects(a,
void 0,void 0,!0).then(function(a){this._spatialIndexNumPendingQueries--;a=a.results;for(var b=a.length,e=0;e<b;e++){var f=a[e],h=this._canvas3DGraphics[f];h&&h.mustAlignToTerrain()&&this._markGraphicElevationDirty(f)}this._evaluateUpdatingState()}.bind(this)))},_markGraphicElevationDirty:function(a){this._elevationDirtyGraphicsSet[a]||(this._elevationDirtyGraphicsSet[a]=!0,this._elevationDirtyGraphicsQueue.push(a))},_markAllGraphicsElevationDirty:function(){for(var a in this._canvas3DGraphics)this._markGraphicElevationDirty(a);
this._evaluateUpdatingState()},_evaluateUpdatingState:function(){var a=this._elevationDirtyGraphicsQueue.length+Object.keys(this._updatingGraphicIds).length;this._progressMaxNumNodes=Math.max(a,this._progressMaxNumNodes);0===a&&(this._progressMaxNumNodes=1);this.updatingPercentage=this._graphicsControllerLoading||this._overlayUpdating?100:100*a/this._progressMaxNumNodes;this.updating=0<a||0<this._spatialIndexNumPendingQueries||this._graphicsControllerLoading||this._overlayUpdating},_beginGraphicUpdate:function(a){this._updatingGraphicIds[a.id]=
!0;this.get("symbols-updating")||this.set("symbols-updating",!0);this._evaluateUpdatingState()},_endGraphicUpdate:function(a,b){a&&delete this._updatingGraphicIds[a.id];if(b&&(this.get("symbols-updating")&&G.objectEmpty(this._updatingGraphicIds))&&(this.view.flushDisplayModifications(),this.set("symbols-updating",!1),this._pendingRendererChange)){var c=this._pendingRendererChange;this._pendingRendererChange=null;this._rendererChange.apply(this,c)}this._evaluateUpdatingState()},_expandComputedExtent:function(a){var b,
c,d,e,f,h;if("point"===a.type)b=c=a.x,d=e=a.y,a.z&&(f=h=a.z);else{h=a.extent;if(!h)return;b=h.xmin;c=h.xmax;d=h.ymin;e=h.ymax;f=h.zmin;h=h.zmax}var g=this._mapSR;!a.spatialReference.equals(g)&&k.xyzToVector(b,d,0,a.spatialReference,p,g)&&(b=p[0],d=p[1],k.xyzToVector(c,e,0,a.spatialReference,p,g),c=p[0],e=p[1]);(g=this.computedExtent)?(g.xmin=Math.min(b,g.xmin),g.xmax=Math.max(c,g.xmax),g.ymin=Math.min(d,g.ymin),g.ymax=Math.max(e,g.ymax)):this.computedExtent=g=new O(b,d,c,e,a.spatialReference);null!=
f&&null!=h&&(g.zmin=null!=g.zmin?Math.min(f,g.zmin):f,g.zmax=null!=g.zmax?Math.max(h,g.zmax):h);this._updateSuspendResumeExtent()},_updateSuspendResumeExtent:function(){if(this.computedExtent){this._suspendResumeExtent||(this._suspendResumeExtent=t.create());var a=this.computedExtent,b=this._suspendResumeExtent,c=0.5*a.width*(1.2-1),d=0.5*a.height*(1.2-1);a.width<1E-7*a.height?c+=d/20:a.height<1E-7*a.width&&(d+=c/20);t.set4(a.xmin-c,a.ymin-d,a.xmax+c,a.ymax+d,b)}else this._suspendResumeExtent=null;
this._suspendResumeExtentEngineDirty=this._scaleVisibilityDirty=this._frustumVisibilityDirty=!0},_updateHasDraped:function(){this.hasDraped=!1;for(var a in this._canvas3DGraphicsDrapedIds)if(this._canvas3DGraphicsDrapedIds.hasOwnProperty(a)){this.hasDraped=!0;break}},getStats:function(){var a=0,b=0,c=0,d=0,e;for(e in this._canvas3DGraphics){var f=this._canvas3DGraphics[e];f&&f.areVisibilityFlagsSet("VISIBILITY_SCALERANGE",null)&&a++;f&&f.areVisibilityFlagsSet("VISIBILITY_GRAPHIC",null)&&b++;f&&f.areVisibilityFlagsSet("VISIBILITY_SCALERANGE_LABEL",
null)&&c++;f&&f.areVisibilityFlagsSet("VISIBILITY_LABEL_SHOW",null)&&d++}e="null";this._suspendResumeExtent&&(e=this._suspendResumeExtent.map(function(a){return a.toPrecision(4)}).join(", "));f="null";this.computedExtent&&(f=[this.computedExtent.xmin,this.computedExtent.ymin,this.computedExtent.xmax,this.computedExtent.ymax].map(function(a){return a.toPrecision(4)}).join(", "));return{numCollection:this._graphicsCollection&&this._graphicsCollection.getAll().length||null,numGraphics:this._canvas3DGraphics&&
Object.keys(this._canvas3DGraphics).length||null,numDraped:this._canvas3DGraphicsDrapedIds&&Object.keys(this._canvas3DGraphicsDrapedIds).length||null,numUpdatingGraphics:this._updatingGraphicIds&&Object.keys(this._updatingGraphicIds).length||null,numVisibleScale:a,numVisibleGraphic:b,numVisibleLabelScale:c,numVisibleShowLabels:d,numElevationDirty:this._elevationDirtyGraphicsQueue&&this._elevationDirtyGraphicsQueue.length||null,visibilityFrustum:this._frustumVisibility,resumeExtent:e,computedExtent:f,
suspended:this.suspended}}});var l={"above-center":{normalizedOffset:[0,1,0],anchor:"bottom"},"above-left":{normalizedOffset:[-1,1,0],anchor:"bottomRight"},"above-right":{normalizedOffset:[1,1,0],anchor:"bottomLeft"},"below-center":{normalizedOffset:[0,-1,2],anchor:"top"},"below-left":{normalizedOffset:[-1,-1,0],anchor:"topRight"},"below-right":{normalizedOffset:[1,-1,0],anchor:"topLeft"},"center-center":{normalizedOffset:[0,0,1],anchor:"center"},"center-left":{normalizedOffset:[-1,0,0],anchor:"right"},
"center-right":{normalizedOffset:[1,0,0],anchor:"left"}};q={"above-center":["default","esriServerPointLabelPlacementAboveCenter"],"above-left":["esriServerPointLabelPlacementAboveLeft"],"above-right":["esriServerPointLabelPlacementAboveRight"],"below-center":["esriServerPointLabelPlacementBelowCenter"],"below-left":["esriServerPointLabelPlacementBelowLeft"],"below-right":["esriServerPointLabelPlacementBelowRight"],"center-center":["esriServerPointLabelPlacementCenterCenter"],"center-left":["esriServerPointLabelPlacementCenterLeft"],
"center-right":["esriServerPointLabelPlacementCenterRight"]};for(var I in q){var da=l[I];q[I].forEach(function(a){l[a]=da})}Object.freeze&&(Object.freeze(l),Object.keys(l).forEach(function(a){Object.freeze(l[a]);Object.freeze(l[a].normalizedOffset)}));return u});