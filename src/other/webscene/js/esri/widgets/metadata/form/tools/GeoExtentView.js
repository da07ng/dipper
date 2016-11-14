define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/fx",
        "dojo/dom-class",
        "dojo/dom-style",
        "dojo/has",
        "./geoExtentUtil",
        "../../base/Templated",
        "dojo/text!./templates/GeoExtentView.html",
        "dojo/i18n!../../nls/i18nBase",
        "../../../../Map",
        "../../../../geometry/Extent",
        "../../../../geometry/support/webMercatorUtils",
        "../../../../kernel"],
function(declare, lang, fx, domClass, domStyle, has, geoExtentUtil, Templated,
         template, i18nBase, Map, Extent, webMercatorUtils, esriKernel) {

  var oThisClass = declare([Templated], {

    _fitExtent: false,
    _initialExtent: null,
    _interval: null,
    _map: null,
    _wasInitialized: false,

    gxeDocument: null,
    i18nBase: i18nBase,
    templateString: template,

    xmin: null,
    ymin: null,
    xmax: null,
    ymax: null,

    postCreate: function() {
      this.inherited(arguments);
      domStyle.set(this.mapNode, "opacity", 0);
      this._initialExtent = geoExtentUtil.makeGeographicExtent(
        this.xmin, this.ymin, this.xmax, this.ymax
      );
      if(!this._initialExtent) {
        domStyle.set(this.domNode, "display", "none");
        return;
      }

      var handle = null, nd = this.domNode;
      handle = this._interval = setInterval(lang.hitch(this, function() {
        if(!this._wasInitialized) {
          if(nd.offsetHeight !== 0) {
            clearInterval(handle);
            this._wasInitialized = true;
            this.initialize();
          }
        }
      }), 500);
    },

    destroyRecursive: function() {
      if(this._interval !== null) {
        clearInterval(this._interval);
      }
      if(this._map) {
        this._map.destroy();
      }
      this._map = null;
      this.inherited(arguments);
    },

    initialize: function() {
      if(!this.gxeDocument || !this.gxeDocument.gxeContext) {
        return;
      }
      var gxeContext = this.gxeDocument.gxeContext;
      var mapId = this.id + "_map";
      var options = {autoResize: false, wrapAround180: false, slider: false, logo: true, showAttribution: true};
      if(gxeContext.wrapAround180) {
        options.wrapAround180 = true;
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

      this.own(map.on("load", lang.hitch(this, function() {

        var ext = null;
        if(this._initialExtent) {
          ext = this._asWebMercatorExtent(this._initialExtent, true);
          map.setExtent(ext, this._fitExtent).then(lang.hitch(this, function() {
            this._addGraphic(this._asWebMercatorExtent(this._initialExtent, false));
            this._fadeIn();
          }));
        }

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
    }

  });

  

  return oThisClass;
});