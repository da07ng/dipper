// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("dojo/_base/array ../core/declare dojo/_base/lang dojo/dom-construct dojo/has dojox/gfx/canvas dojox/json/query ../Color ../core/lang ../core/screenUtils ../layers/support/layerUtils ../geometry/Polygon ../geometry/support/scaleUtils ../renderers/SimpleRenderer ./support/PrintTemplate ./Geoprocessor ./Task".split(" "),function(n,v,k,w,x,r,y,z,t,p,u,A,B,C,D,E,F){return v(F,{declaredClass:"esri.tasks.PrintTask",classMetadata:{computed:{printGp:["url"]}},constructor:function(){this._handleExecuteResponse=
this._handleExecuteResponse.bind(this)},url:null,_printGpGetter:function(){return new E(this.url)},async:!1,_colorEvaluator:y("$..color"),execute:function(b){var g=b.template||new D,f=g.exportOptions,a;f&&(a={outputSize:[f.width,f.height],dpi:f.dpi});var f=g.layoutOptions,d,c=[];if(f){this.legendAll=!1;f.legendLayers?n.forEach(f.legendLayers,function(a){var b={};b.id=a.layerId;a.subLayerIds&&(b.subLayerIds=a.subLayerIds);c.push(b)}):this.legendAll=!0;var l,m;if("Miles"===f.scalebarUnit||"Kilometers"===
f.scalebarUnit)l="esriKilometers",m="esriMiles";else if("Meters"===f.scalebarUnit||"Feet"===f.scalebarUnit)l="esriMeters",m="esriFeet";d={esriMiles:"mi",esriKilometers:"km",esriFeet:"ft",esriMeters:"m"};d={titleText:f.titleText,authorText:f.authorText,copyrightText:f.copyrightText,customTextElements:f.customTextElements,scaleBarOptions:{metricUnit:l,metricLabel:d[l],nonMetricUnit:m,nonMetricLabel:d[m]},legendOptions:{operationalLayers:c}}}l=this._getPrintDefinition(b.map,g);b.outSpatialReference&&
(l.mapOptions.spatialReference=b.outSpatialReference.toJSON());b.template&&t.isDefined(b.template.showAttribution)&&(l.mapOptions.showAttribution=b.template.showAttribution);k.mixin(l,{exportOptions:a,layoutOptions:d});this.allLayerslegend&&k.mixin(l.layoutOptions,{legendOptions:{operationalLayers:this.allLayerslegend}});g={Web_Map_as_JSON:JSON.stringify(t.fixJson(l)),Format:g.format,Layout_Template:g.layout};b.extraParameters&&(g=k.mixin(g,b.extraParameters));return(this.async?this.printGp.submitJob(g):
this.printGp.execute(g)).then(this._handleExecuteResponse)},_handleExecuteResponse:function(b){return this.async&&"esriJobSucceeded"===b.jobStatus?this.printGp.getResultData(b.jobId,"Output_File").then(k.hitch(this,function(b){return b.value})):b[0].value},_createMultipointLayer:function(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}},_createPolygonLayer:function(){return{layerDefinition:{name:"polygonLayer",
geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}},_createPointLayer:function(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}},_createPolylineLayer:function(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",
features:[]}}},_convertSvgSymbol:function(b){if(!(8>=x("ie"))&&b.path){this._canvasHolder||(this._canvasHolder=w.create("div"),this._canSurface=r.createSurface(this._canvasHolder,200,200));var g=this._canSurface.createObject(r.Path,b.path).setFill(b.color).setStroke(b.outline);"pendingRender"in this._canSurface&&this._canSurface._render(!0);var f=this._canSurface.rawNode.getContext("2d"),a=Math.ceil(g.getBoundingBox().width+g.getBoundingBox().x),d=Math.ceil(g.getBoundingBox().height+g.getBoundingBox().y),
c=f.getImageData(g.getBoundingBox().x,g.getBoundingBox().y,a,d);f.canvas.width=a;f.canvas.height=d;f.putImageData(c,0,0);f=f.canvas.toDataURL("image/png");return{type:"esriPMS",imageData:f.substr(22,f.length),angle:-b.angle,contentType:"image/png",height:b.size?b.size:d-g.getBoundingBox().y,width:b.size?b.size:a-g.getBoundingBox().x,xoffset:b.xoffset,yoffset:b.yoffset}}},_convertSvgRenderer:function(b){"simple"===b.type&&b.symbol&&b.symbol.path?b.symbol=this._convertSvgSymbol(b.symbol):"uniqueValue"===
b.type?(b.defaultSymbol&&b.defaultSymbol.path&&(b.defaultSymbol=this._convertSvgSymbol(b.defaultSymbol)),b.uniqueValueInfos&&n.forEach(b.uniqueValueInfos,function(b){b.symbol.path&&(b.symbol=this._convertSvgSymbol(b.symbol))},this)):"classBreaks"===b.type&&(b.defaultSymbol&&b.defaultSymbol.path&&(b.defaultSymbol=this._convertSvgSymbol(b.defaultSymbol)),b.classBreakInfos&&n.forEach(b.classBreakInfos,function(b){b.symbol.path&&(b.symbol=this._convertSvgSymbol(b.symbol))},this))},_createFeatureCollection:function(b,
g,f){var a=this._createPolygonLayer(),d=this._createPolylineLayer(),c=this._createPointLayer(),l=this._createMultipointLayer(),m=this._createPointLayer();m.layerDefinition.name="textLayer";delete m.layerDefinition.drawingInfo;if("esri.layers.FeatureLayer"===b.declaredClass||"esri.layers.StreamLayer"===b.declaredClass)a.layerDefinition.name=d.layerDefinition.name=c.layerDefinition.name=l.layerDefinition.name=k.getObject("arcgisProps.title",!1,b)||b.name||b.id;if(b.renderer&&!k.isFunction(b.renderer.attributeField)){var e=
b.renderer.toJSON();if("temporal"===e.type){var e={latestObservationRenderer:e.latestObservationRenderer,trackLinesRenderer:e.trackRenderer,observationAger:e.observationAger,renderer:e.observationRenderer},h={};b._trackIdField&&(h.trackIdField=b._trackIdField);b._startTimeField&&(h.startTimeField=b._startTimeField);b._endTimeField&&(h.endTimeField=b._endTimeField);a.layerDefinition.drawingInfo=e;a.layerDefinition.timeInfo=h;d.layerDefinition.drawingInfo=e;d.layerDefinition.timeInfo=h;c.layerDefinition.drawingInfo=
e;c.layerDefinition.timeInfo=h;l.layerDefinition.drawingInfo=e;l.layerDefinition.timeInfo=h}else a.layerDefinition.drawingInfo.renderer=e,d.layerDefinition.drawingInfo.renderer=e,c.layerDefinition.drawingInfo.renderer=e,l.layerDefinition.drawingInfo.renderer=e}else delete a.layerDefinition.drawingInfo,delete d.layerDefinition.drawingInfo,delete c.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo;e=b.fields;!e&&(b.renderer&&!k.isFunction(b.renderer.attributeField))&&("esri.renderer.ClassBreaksRenderer"===
b.renderer.declaredClass?(e=[{name:b.renderer.attributeField,type:"esriFieldTypeDouble"}],b.renderer.normalizationField&&e.push({name:b.renderer.normalizationField,type:"esriFieldTypeDouble"})):"esri.renderer.UniqueValueRenderer"===b.renderer.declaredClass&&(e=[{name:b.renderer.attributeField,type:"esriFieldTypeString"}],b.renderer.attributeField2&&e.push({name:b.renderer.attributeField2,type:"esriFieldTypeString"}),b.renderer.attributeField3&&e.push({name:b.renderer.attributeField3,type:"esriFieldTypeString"})));
e&&(a.layerDefinition.fields=e,d.layerDefinition.fields=e,c.layerDefinition.fields=e,l.layerDefinition.fields=e);var e=b.graphics.length,s;for(s=0;s<e;s++){var q=b.graphics[s];if(!1!==q.visible&&q.geometry&&(h=q.toJSON(),!h.symbol||!(h.symbol.outline&&"esriCLS"===h.symbol.outline.type))){h.symbol&&(h.symbol.outline&&h.symbol.outline.color&&h.symbol.outline.color[3])&&(h.symbol.outline.color[3]=255);if(b.renderer&&!h.symbol&&(k.isFunction(b.renderer.attributeField)||b.renderer.hasVisualVariables()||
"esri.renderer.DotDensityRenderer"===b.renderer.declaredClass||f)){f=f||b.renderer;var p=f.getSymbol(q);if(!p)continue;h.symbol=p.toJSON();f.hasVisualVariables()&&this._applyVisualVariables(h.symbol,{renderer:f,graphic:q,symbol:p,mapResolution:g&&g.getResolutionInMeters()})}h.symbol&&(h.symbol.path?h.symbol=this._convertSvgSymbol(h.symbol):h.symbol.text&&delete h.attributes);switch(q.geometry.type){case "polygon":a.featureSet.features.push(h);break;case "polyline":d.featureSet.features.push(h);break;
case "point":h.symbol&&h.symbol.text?m.featureSet.features.push(h):c.featureSet.features.push(h);break;case "multipoint":l.featureSet.features.push(h);break;case "extent":h.geometry=A.fromExtent(q.geometry).toJSON(),a.featureSet.features.push(h)}}}g=[];0<a.featureSet.features.length&&g.push(a);0<d.featureSet.features.length&&g.push(d);0<l.featureSet.features.length&&g.push(l);0<c.featureSet.features.length&&g.push(c);0<m.featureSet.features.length&&g.push(m);n.forEach(g,function(a){a.layerDefinition.drawingInfo&&
a.layerDefinition.drawingInfo.renderer&&this._convertSvgRenderer(a.layerDefinition.drawingInfo.renderer)},this);return{id:b.id,opacity:b.opacity,minScale:b.minScale||0,maxScale:b.maxScale||0,featureCollection:{layers:g}}},_getPrintDefinition:function(b,g){var f={operationalLayers:this._createOperationalLayers(b,g)},a=b.extent,d=b.spatialReference;b.spatialReference.isWrappable()&&(a=a._normalize(!0),d=a.spatialReference);a={mapOptions:{showAttribution:b.showAttribution,extent:a.toJSON(),spatialReference:d.toJSON()}};
g.preserveScale&&k.mixin(a.mapOptions,{scale:g.outScale||B.getScale(b)});b.timeExtent&&k.mixin(a.mapOptions,{time:[b.timeExtent.startTime.getTime(),b.timeExtent.endTime.getTime()]});d={};k.mixin(d,a,f);return d},_createOperationalLayers:function(b,g){var f,a,d,c,l=[],m=[];this.allLayerslegend=this.legendAll?[]:null;var e=n.map(b.layerIds,b.getLayer,b);b._mapImageLyr&&e.push(b._mapImageLyr);for(f=0;f<e.length;f++)if(a=e[f],a.loaded&&a.visible&&-1===n.indexOf(l,a.id))switch(d=a.declaredClass,c={id:a.id,
title:k.getObject("arcgisProps.title",!1,a)||a.id,opacity:a.opacity,minScale:a.minScale||0,maxScale:a.maxScale||0},c=k.mixin(c,this._getUrlAndToken(a)),d){case "esri.layers.ArcGISDynamicMapServiceLayer":var h=[];d=!!a._params.layers;if(a._params.dynamicLayers)d=JSON.parse(a._params.dynamicLayers),n.forEach(d,function(a){h.push({id:a.id,name:a.name,layerDefinition:a});delete a.id;delete a.name;delete a.maxScale;delete a.minScale});else if(a.supportsDynamicLayers){if(d||a.layerDefinitions||a.layerTimeOptions){var p=
a.createDynamicLayerInfosFromLayerInfos(),q=null;d&&(q=a.visibleLayers);var q=u._getVisibleLayers(p,q),r=u._getLayersForScale(g.outScale||b.getScale(),p);n.forEach(p,function(b){if(!b.subLayerIds){var c=b.id;-1<n.indexOf(q,c)&&-1<n.indexOf(r,c)&&(b={source:b.source.toJSON()},a.layerDefinitions&&a.layerDefinitions[c]&&(b.definitionExpression=a.layerDefinitions[c]),a.layerTimeOptions&&a.layerTimeOptions[c]&&(b.layerTimeOptions=a.layerTimeOptions[c].toJSON()),h.push({id:c,layerDefinition:b}))}});0===
h.length&&(c.visibleLayers=[-1])}}else n.forEach(a.layerInfos,function(b){var c={id:b.id,layerDefinition:{}};a.layerDefinitions&&a.layerDefinitions[b.id]&&(c.layerDefinition.definitionExpression=a.layerDefinitions[b.id]);a.layerTimeOptions&&a.layerTimeOptions[b.id]&&(c.layerDefinition.layerTimeOptions=a.layerTimeOptions[b.id].toJSON());(c.layerDefinition.definitionExpression||c.layerDefinition.layerTimeOptions)&&h.push(c)}),d&&(c.visibleLayers=a.visibleLayers);h.length&&(c.layers=h);m.push(c);this.allLayerslegend&&
this.allLayerslegend.push({id:a.id,subLayerIds:a.visibleLayers});break;case "esri.layers.ArcGISImageServiceLayer":c=k.mixin(c,{url:a.url,bandIds:a.bandIds,compressionQuality:a.compressionQuality,format:a.format,interpolation:a.interpolation});a.mosaicRule&&k.mixin(c,{mosaicRule:a.mosaicRule.toJSON()});a.renderingRule&&k.mixin(c,{renderingRule:a.renderingRule.toJSON()});m.push(c);this.allLayerslegend&&this.allLayerslegend.push({id:a.id});break;case "esri.layers.WMSLayer":c=k.mixin(c,{url:a.url,title:a.title,
type:"wms",version:a.version,transparentBackground:a.imageTransparency,visibleLayers:a.visibleLayers});m.push(c);this.allLayerslegend&&this.allLayerslegend.push({id:a.id,subLayerIds:a.visibleLayers});break;case "esri.virtualearth.VETiledLayer":d=a.mapStyle;"aerialWithLabels"===d&&(d="Hybrid");c=k.mixin(c,{visibility:a.visible,type:"BingMaps"+d,culture:a.culture,key:a.bingMapsKey});m.push(c);break;case "esri.layers.OpenStreetMapLayer":c=k.mixin(c,{type:"OpenStreetMap",url:a.tileServers[0]});m.push(c);
break;case "esri.layers.WMTSLayer":c=k.mixin(c,{url:a.url,type:"wmts",layer:a._identifier,style:a._style,format:a.format,tileMatrixSet:a._tileMatrixSetId});m.push(c);break;case "esri.layers.MapImageLayer":d=a.getImages();n.forEach(d,function(b,d){b.href&&(c={id:a.id+"_image"+d,type:"image",title:a.id,minScale:a.minScale||0,maxScale:a.maxScale||0,opacity:a.opacity*b.opacity,extent:b.extent.toJSON()},"data:image/png;base64,"===b.href.substr(0,22)?c.imageData=b.href.substr(22):c.url=b.href,m.push(c))});
break;case "esri.layers.WebTiledLayer":d=a.url.replace(/\$\{/g,"{");c=k.mixin(c,{type:"WebTiledLayer",urlTemplate:d,credits:a.copyright});a.subDomains&&0<a.subDomains.length&&(c.subDomains=a.subDomains);m.push(c);break;default:if(a.getTileUrl||a.getImageUrl)c=k.mixin(c,{url:a.url}),m.push(c)}for(f=0;f<b.graphicsLayerIds.length;f++)if(a=b.getLayer(b.graphicsLayerIds[f]),a.loaded&&a.visible&&-1===n.indexOf(l,a.id))switch(d=a.declaredClass,d){case "esri.layers.FeatureLayer":case "esri.layers.LabelLayer":case "esri.layers.CSVLayer":case "esri.layers.StreamLayer":if("esri.layers.LabelLayer"===
d&&!g.showLabels||a.renderer&&"esri.renderer.HeatmapRenderer"===a.renderer.declaredClass)continue;e=null;a.url&&a.renderer&&("esri.renderer.ScaleDependentRenderer"===a.renderer.declaredClass?"scale"===a.renderer.rangeType?e=a.renderer.getRendererInfoByScale(b.getScale())&&a.renderer.getRendererInfoByScale(b.getScale()).renderer:"zoom"===a.renderer.rangeType&&(e=a.renderer.getRendererInfoByZoom(b.getZoom())&&a.renderer.getRendererInfoByZoom(b.getZoom()).renderer):e=a.renderer);if(e&&("esri.renderer.SimpleRenderer"===
e.declaredClass||"esri.renderer.TemporalRenderer"===e.declaredClass||k.isString(e.attributeField)&&a._getField(e.attributeField,!0))&&!e.hasVisualVariables()&&"esri.renderer.DotDensityRenderer"!==e.declaredClass&&"esri.layers.CSVLayer"!==a.declaredClass&&"esri.layers.StreamLayer"!==a.declaredClass)if(c={id:a.id,title:k.getObject("arcgisProps.title",!1,a)||a.id,opacity:a.opacity,minScale:a.minScale||0,maxScale:a.maxScale||0,layerDefinition:{drawingInfo:{renderer:e.toJSON()}}},c=k.mixin(c,this._getUrlAndToken(a)),
"esri.renderer.TemporalRenderer"===e.declaredClass&&(d=c.layerDefinition.drawingInfo,d.latestObservationRenderer=d.renderer.latestObservationRenderer,d.trackLinesRenderer=d.renderer.trackRenderer,d.observationAger=d.renderer.observationAger,d.renderer=d.renderer.observationRenderer,a._trackIdField&&(c.layerDefinition.timeInfo={trackIdField:a._trackIdField})),this._convertSvgRenderer(c.layerDefinition.drawingInfo.renderer),1>a.opacity||"esri.renderer.TemporalRenderer"===e.declaredClass||this._updateLayerOpacity(c))if(a._params.source&&
(e=a._params.source.toJSON(),k.mixin(c.layerDefinition,{source:e})),a.getDefinitionExpression()&&k.mixin(c.layerDefinition,{definitionExpression:a.getDefinitionExpression()}),2!==a.mode)0<a.getSelectedFeatures().length&&(e=n.map(a.getSelectedFeatures(),function(b){return b.attributes[a.objectIdField]}),0<e.length&&a.getSelectionSymbol()&&k.mixin(c,{selectionObjectIds:e,selectionSymbol:a.getSelectionSymbol().toJSON()}));else{e=n.map(a.getSelectedFeatures(),function(b){return b.attributes[a.objectIdField]});
if(0===e.length||!a._params.drawMode)break;k.mixin(c.layerDefinition,{objectIds:e});e=null;a.getSelectionSymbol()&&(e=new C(a.getSelectionSymbol()));k.mixin(c.layerDefinition.drawingInfo,{renderer:e&&e.toJSON()})}else c=this._createFeatureCollection(a);else c=e&&(e.hasVisualVariables()||"esri.renderer.DotDensityRenderer"===e.declaredClass)?this._createFeatureCollection(a,b,e):this._createFeatureCollection(a);m.push(c);this.allLayerslegend&&this.allLayerslegend.push({id:a.id});break;case "esri.layers.GraphicsLayer":c=
this._createFeatureCollection(a),m.push(c),this.allLayerslegend&&this.allLayerslegend.push({id:a.id})}b.graphics&&0<b.graphics.graphics.length&&(c=this._createFeatureCollection(b.graphics),m.push(c));b._labels&&g.showLabels&&(c=this._createFeatureCollection(b._labels),m.push(c));return m},_getUrlAndToken:function(b){return{token:b._getToken(),url:b._url?b._url.path:null}},_updateLayerOpacity:function(b){var g=this._colorEvaluator(b),g=n.filter(g,function(a){return k.isArray(a)&&4===a.length}),f=!0;
if(g.length){var a=g[0][3],d;for(d=1;d<g.length;d++)if(a!==g[d][3]){f=!1;break}if(f){b.opacity=a/255;for(d=0;d<g.length;d++)g[d][3]=255}}return f},_applyVisualVariables:function(b,g){var f=g.renderer,a=g.graphic,d=g.symbol,c=g.mapResolution,l=d.type;if(!("textsymbol"===l||"shieldlabelsymbol"===l)){var k=f.getVisualVariablesForType("sizeInfo"),e=f.getVisualVariablesForType("colorInfo"),h=f.getVisualVariablesForType("opacityInfo"),k=k&&k[0],e=e&&e[0],h=h&&h[0];k&&(d=f.getSize(a,{sizeInfo:k,shape:"simplemarkersymbol"===
l?d.style:null,resolution:c}),null!=d&&("simplemarkersymbol"===l?b.size=p.px2pt(d):"picturemarkersymbol"===l?(b.width=p.px2pt(d),b.height=p.px2pt(d)):"simplelinesymbol"===l?b.width=p.px2pt(d):b.outline&&(b.outline.width=p.px2pt(d))));if(e&&(d=f.getColor(a,{colorInfo:e}))&&("simplemarkersymbol"===l||"simplelinesymbol"===l||"simplefillsymbol"===l))b.color=z.toJSON(d);h&&(f=f.getOpacity(a,{opacityInfo:h}),null!=f&&b.color&&(b.color[3]=Math.round(255*f)))}}})});