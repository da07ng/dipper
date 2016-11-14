define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/fx",
        "dojo/dom-class",
        "dojo/dom-geometry",
        "dojo/dom-style",
        "dojo/has",
        "dojo/window",
        "./geoExtentUtil",
        "../../base/Templated",
        "dojo/text!./templates/GeoExtent.html",
        "dojo/i18n!../../nls/i18nBase",
        "../../../../Map",
        "../../../Geocoder",
        "../../../../toolbars/draw",
        "../../../../geometry/Extent",
        "../../../../geometry/support/webMercatorUtils",
        "../../../../kernel"],
function(declare, lang, fx, domClass, domGeometry, domStyle, has, win,
         geoExtentUtil, Templated, template, i18nBase, Map, Geocoder, 
         DrawTb, Extent, webMercatorUtils, esriKernel) {

  var oThisClass = declare([Templated], {

    _drawnExtent: null,
    _drawtb: null,
    _fitExtent: false,
    _geocoder: null,
    _initialExtent: null,
    _map: null,

    dialogBroker: null,
    gxeDocument: null,
    i18nBase: i18nBase,
    templateString: template,

    // TODO make these configurable?
    basemap: "streets",
    wrapAround180: false,

    xmin: null,
    ymin: null,
    xmax: null,
    ymax: null,

    postCreate: function() {
      this.inherited(arguments);
      this.okButton.disabled = true;
      domStyle.set(this.mapNode, "opacity", 0);
    },

    destroyRecursive: function() {
      if(this._geocoder) {
        this._geocoder.destroyRecursive(false);
      }
      if(this._map) {
        this._map.destroy();
      }
      this.inherited(arguments);
    },

    initialize: function() {
      if(!this.gxeDocument || !this.gxeDocument.gxeContext) {
        return;
      }
      this._initialExtent = geoExtentUtil.makeGeographicExtent(
        this.xmin, this.ymin, this.xmax, this.ymax
      );

      var gxeContext = this.gxeDocument.gxeContext;
      var mapId = this.id + "_map";
      var options = {autoResize: false, wrapAround180: false, slider: true, logo: true, showAttribution: true};
      if(gxeContext.wrapAround180) {
        options.wrapAround180 = gxeContext.wrapAround180;
      }
      if(!gxeContext.showMapLogo) {
        options.logo = false;
      }
      if(!gxeContext.showMapAttribution) {
        options.showAttribution = false;
      }
      if(gxeContext.basemap) {
        options.basemap = gxeContext.basemap;
      } else {
        options.basemap = "streets";
      }

      var map = this._map = new Map(mapId, options);

      // TODO AMD not working for "esri/widgets/Geocoder" reference required in Editor.js
      var geocoderId = this.id + "_geocoder";
      var goptions = {map: map};
      if(gxeContext.arcgisGeocoder) {
        options.arcgisGeocoder = gxeContext.arcgisGeocoder;
      }
      this._geocoder = new Geocoder(goptions, geocoderId);
      this._geocoder.startup();

      this.own(map.on("load", lang.hitch(this, function() {
        //map.resize();
        //map.reposition();

        var ext = null;
        if(this._initialExtent) {
          ext = this._asWebMercatorExtent(this._initialExtent, true);
          map.setExtent(ext, this._fitExtent).then(lang.hitch(this, function() {
            this._addGraphic(this._asWebMercatorExtent(this._initialExtent, false));
            this._fadeIn();
          }));
        } else {
          this._fadeIn();
        }

        this._drawtb = new DrawTb(map, {showTooltips: false});
        this._onDrawClick();
        this.own(this._drawtb.on("draw-end", lang.hitch(this, function(evt) {
          if(evt.geometry) {
            this._drawnExtent = new Extent(evt.geometry.toJSON());
            this._addGraphic(evt.geometry);
            this.okButton.disabled = false;
          }
        })));

      })));
    },

    _addGraphic: function(geometry) {
      if(!this._map || !geometry) {
        return;
      }
      geoExtentUtil.addGraphic(this._map, geometry, true);
    },

    _asGeographicExtent: function(extent) {
      // TODO: base map might not be web mercator?
      return webMercatorUtils.webMercatorToGeographic(extent);
    },

    _asWebMercatorExtent: function(extent, bExpand) {
      // TODO: base map might not be web mercator?
      var ext = extent;
      if(bExpand) {
        if((ext.xmin >= -170) && (ext.xmax <= 170) && (ext.ymin >= -80) && (ext.ymax <= 80)) {
          ext = ext.expand(1.05);
          this._fitExtent = true;
        }
      }
      return webMercatorUtils.geographicToWebMercator(ext);
    },

    _fadeIn: function() {
      fx.fadeIn({
        node: this.mapNode,
        onEnd: function() {
        }
      }).play();
    },

    _onCancelClick: function(evt) {
      this.onCancelClick(evt);
    },

    onCancelClick: function(evt) {
    },

    _onDrawClick: function(evt) {
      if(!this._map || !this._drawtb) return;
      domClass.remove(this.navigateButton, "current");
      domClass.add(this.drawButton, "current");
      domClass.remove(this.drawHint, "gxeDisplayNone");
      this._drawtb.deactivate();
      this._drawtb.activate("extent");
      this._map.disableMapNavigation();
      this._map.hideZoomSlider();
    },

    _onNavigateClick: function(evt) {
      if(!this._map || !this._drawtb) return;
      domClass.remove(this.drawButton, "current");
      domClass.add(this.navigateButton, "current");
      domClass.add(this.drawHint, "gxeDisplayNone");
      this._drawtb.deactivate();
      this._map.enableMapNavigation();
      this._map.showZoomSlider();
    },

    _onOkClick: function(evt) {
      var extent = null;
      if(this._drawnExtent) {
        extent = this._asGeographicExtent(this._drawnExtent);
      }
      this.onOkClick(extent);
    },

    onOkClick: function(extent) {
    },

    resize: function() {
      if(!this.dialogBroker) {
        return;
      }
      var winBox = win.getBox(this.ownerDocument);
      var thisBox = domGeometry.getMarginBox(this.domNode);
      var topBox = domGeometry.getMarginBox(this.topNode);
      var bottomBox = domGeometry.getMarginBox(this.bottomNode);
      var nDialogContainerNodePadding = thisBox.l;

      var w = (winBox.w - 100);
      var h = (winBox.h - thisBox.t - nDialogContainerNodePadding - 50 - 80);

      var mapH = (h - (topBox.h + bottomBox.h));
      if(mapH < 50) {
        mapH = 50;
      }
      var mapW = (w - (nDialogContainerNodePadding * 2));
      if(mapW < 450) {
        mapW = 450;
      }
      if(mapW > 1000) {
        mapW = 1000;
      }

      domStyle.set(this.mapNode, "width", mapW + "px");
      domStyle.set(this.mapNode, "height", mapH + "px");
      if(this._map) {
        this._map.resize();
        this._map.reposition();
      }
    }

  });

  

  return oThisClass;
});
