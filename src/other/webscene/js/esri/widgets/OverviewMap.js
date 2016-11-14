// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/templates/OverviewMap.html":'\x3cdiv class\x3d"esriOverviewMap"\x3e\r\n  \x3cdiv class\x3d"ovwContainer" dojoattachpoint\x3d"_body" style\x3d"width: ${width}px; height: ${height}px;"\x3e\r\n    \x3cdiv id\x3d"${id}-map" style\x3d"width: 100%; height: 100%;"\x3e\r\n      \x3cdiv class\x3d"ovwHighlight" dojoattachpoint\x3d"_focusDiv" title\x3d"${NLS_drag}" style\x3d"border: 1px solid ${color}; background-color: ${color};"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwController" title\x3d"${NLS_show}" dojoattachpoint\x3d"_controllerDiv" dojoattachevent\x3d"onclick: _visibilityHandler"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwMaximizer" title\x3d"${NLS_maximize}" dojoattachpoint\x3d"_maximizerDiv" dojoattachevent\x3d"onclick: _maximizeHandler"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("../core/declare dojo/_base/lang dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/dnd/Moveable dijit/_Widget dijit/_Templated ../Map ../geometry/Point ../geometry/ScreenPoint ../layers/TiledLayer ../layers/ArcGISTiledLayer ../layers/ArcGISDynamicLayer ../layers/ArcGISImageServiceLayer ../layers/OpenStreetMapLayer ../virtualearth/VETiledLayer ../config ../core/domUtils dojo/text!./templates/OverviewMap.html dojo/i18n!../nls/jsapi".split(" "),function(n,l,e,p,g,q,r,s,t,h,u,v,w,m,x,y,z,k,
f,A,B){return n([r,s],{declaredClass:"esri.widgets.OverviewMap",widgetsInTemplate:!0,templateString:A,constructor:function(a,b){l.mixin(this,B.widgets.overviewMap);a=a||{};if(a.map){var c={};b&&(this._detached=!0,c=p.position(b,!0));this.map=a.map;this.baseLayer=a.baseLayer;this.width=a.width||c.w||this.map.width/4;this.height=a.height||c.h||this.map.height/4;this.attachTo=a.attachTo||"top-right";this.expandFactor=a.expandFactor||2;this.color=a.color||"#000000";this.opacity=a.opacity||0.5;this.maximizeButton=
!!a.maximizeButton;this.visible=!!a.visible;if(this.map.loaded)this._initialSetup();else var d=this.map.on("load",function(){d.remove();d=null;this._initialSetup()}.bind(this));this._detached&&(this.visible=!0);this._maximized=!1}else console.error("esri.widgets.OverviewMap: "+this.NLS_noMap)},startup:function(){this.inherited(arguments);this.domNode.parentNode||this.map.container.appendChild(this.domNode);if(this._detached)if(g.set(this._body,"display","block"),g.set(this._controllerDiv,"display",
"none"),g.set(this._maximizerDiv,"display","none"),this.map.loaded)this._initialize();else this.map.on("load",this._initialize.bind(this));else"bottom"===this.attachTo.split("-")[0]&&this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv),this.maximizeButton||e.add(this._maximizerDiv,"ovwDisabledButton"),e.add(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]),e.add(this._controllerDiv,"ovwShow"),e.add(this._maximizerDiv,"ovwMaximize"),
this.visible&&this.map.loaded&&(this.visible=!1,this.show());g.set(this._focusDiv,"opacity",this.opacity)},destroy:function(){this._deactivate();this.overviewMap&&this.overviewMap.destroy();this.overviewMap=this.baseLayer=null;this.inherited(arguments)},resize:function(a){a&&!(0>=a.w||0>=a.h)&&this._resize(a.w,a.h)},show:function(){if(!this.visible){var a=this._controllerDiv;a.title=this.NLS_hide;e.remove(a,"ovwShow");e.add(a,"ovwHide");f.show(this._body);f.show(this._maximizerDiv);this._initialize();
this.visible=!0}},hide:function(){if(this.visible){var a=this._controllerDiv;a.title=this.NLS_show;e.remove(a,"ovwHide");e.add(a,"ovwShow");this._maximized&&this._maximizeHandler();f.hide(this._body);f.hide(this._maximizerDiv);this._deactivate();this.visible=!1}},_initialSetup:function(){if(this._mainMapLayer=this.map.getLayer(this.map.layerIds[0])){var a=this.baseLayer||this._mainMapLayer,b=this.map.spatialReference,c=a.spatialReference;if(c.wkid!==b.wkid&&c.wkt!==b.wkt)console.error("esri.widgets.OverviewMap: "+
this.NLS_invalidSR);else{b=a.declaredClass;if(a instanceof v)if(-1!==b.indexOf("VETiledLayer"))this.baseLayer=new z({resourceInfo:a.getResourceInfo(),culture:a.culture,mapStyle:a.mapStyle,bingMapsKey:a.bingMapsKey});else if(-1!==b.indexOf("OpenStreetMapLayer"))this.baseLayer=new y({tileServers:a.tileServers});else if(-1!==b.indexOf("WebTiledLayer")){var b=a.initialExtent,c=a.fullExtent,d=a.tileInfo;this.baseLayer=new a.constructor(a.urlTemplate,{initialExtent:b&&new b.constructor(b.toJSON()),fullExtent:c&&
new c.constructor(c.toJSON()),tileInfo:d&&new d.constructor(d.toJSON()),tileServers:a.tileServers&&a.tileServers.slice(0)})}else this.baseLayer=new w(a.url,{resourceInfo:a.getResourceInfo()});else if(a instanceof m)-1!==b.indexOf("ArcGISImageServiceLayer")?this.baseLayer=new x(a.url):(this.baseLayer=new m(a.url),this.baseLayer.setImageFormat("png24"));else{console.error("esri.widgets.OverviewMap: "+this.NLS_invalidType);return}if(!this._detached&&this.visible&&this._controllerDiv)if(a=function(){this.visible=
!1;this.show()},this.baseLayer.loaded)a.call(this);else this.baseLayer.on("load",a.bind(this))}}else console.error("esri.widgets.OverviewMap: "+this.NLS_noLayer)},_visibilityHandler:function(){this.visible?this.hide():this.show()},_maximizeHandler:function(){var a=this._maximizerDiv;this._maximized?(a.title=this.NLS_maximize,e.remove(a,"ovwRestore"),e.add(a,"ovwMaximize"),this._resize(this.width,this.height)):(a.title=this.NLS_restore,e.remove(a,"ovwMaximize"),e.add(a,"ovwRestore"),this._resize(this.map.width,
this.map.height));this._maximized=!this._maximized},_resize:function(a,b){g.set(this._body,{width:a+"px",height:b+"px"});var c=k.defaults.map.panDuration,d=this.overviewMap;k.defaults.map.panDuration=0;d&&(d.resize(!0),d.centerAt(this._focusExtent.getCenter()));k.defaults.map.panDuration=c},_initialize:function(){if(this.overviewMap)this._activate();else{var a;a=this.overviewMap=new t(this.id+"-map",{slider:!1,showAttribution:!1,logo:!1,lods:this._overviewLods,wrapAround180:this.map.wrapAround180});
a.on("load",function(){this._map_resize_override=l.hitch(a,this._map_resize_override);a.disableMapNavigation();this._activate()}.bind(this));a.addLayer(this.baseLayer)}},_activate:function(){var a=this.map,b=this.overviewMap;this._moveableHandle=new q(this._focusDiv);this._soeConnect=a.on("extent-change",this._syncOverviewMap.bind(this));this._ufoConnect=a.on("pan",this._updateFocus.bind(this));this._oecConnect=b.on("extent-change",this._ovwExtentChangeHandler.bind(this));this._opaConnect=b.on("pan",
this._ovwPanHandler.bind(this));this._ozsConnect=b.on("zoom-start",function(){f.hide(this._focusDiv)}.bind(this));this._ozeConnect=b.on("zoom-end",function(){f.show(this._focusDiv)}.bind(this));this._omsConnect=this._moveableHandle.on("MoveStop",this._moveStopHandler.bind(this));this._syncOverviewMap(a.extent,null,null,null)},_deactivate:function(){this._soeConnect.remove();this._ufoConnect.remove();this._oecConnect.remove();this._opaConnect.remove();this._ozsConnect.remove();this._ozeConnect.remove();
this._omsConnect.remove();this._moveableHandle&&this._moveableHandle.destroy()},_syncOverviewMap:function(a,b,c,d){this._suspendPanHandling?this._suspendPanHandling=!1:(this._focusExtent=a,this.overviewMap.setExtent(a.expand(this.expandFactor),!0))},_updateFocus:function(a){this._suspendPanHandling||(this._focusExtent=a,this._drawFocusDiv(a))},_drawFocusDiv:function(a,b){var c=this.overviewMap,d=c.toScreen(new h(a.xmin,a.ymax,c.spatialReference)),e=c.toScreen(new h(a.xmax,a.ymin,c.spatialReference)),
c=e.x-d.x,e=e.y-d.y,f=!0;c>this.overviewMap.width&&e>this.overviewMap.height&&(f=!1);g.set(this._focusDiv,{left:d.x+(b?b.x:0)+"px",top:d.y+(b?b.y:0)+"px",width:c+"px",height:e+"px",display:f?"block":"none"})},_moveStopHandler:function(a){var b=this._moveableHandle.node.style;a=this._focusExtent;var c=this.overviewMap,b=c.toMap(new u(parseInt(b.left,10),parseInt(b.top,10))),d=new h(a.xmin,a.ymax,c.spatialReference);this._focusExtent=a.offset(b.x-d.x,b.y-d.y);this._maximized?this._maximizeHandler():
c.centerAt(this._focusExtent.getCenter());this._suspendPanHandling=!0;this.map.setExtent(this._focusExtent)},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent)},_ovwPanHandler:function(a,b){this._drawFocusDiv(this._focusExtent,b)}})});