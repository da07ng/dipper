define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/number",
        "dojo/has",
        "dojo/_base/Color",
        "../../../../Graphic",
        "../../../../geometry/SpatialReference",
        "../../../../geometry/Extent",
        "../../../../symbols/SimpleFillSymbol",
        "../../../../symbols/SimpleLineSymbol",
        "../../../../kernel"],
function(lang, array, number, has, Color, Graphic, SpatialReference, Extent,
         SimpleFillSymbol, SimpleLineSymbol, esriKernel) {

  var oThisObject = {

    addGraphic: function(map, geometry, bClear) {
      if(!map || !geometry) {
        return;
      }
      var ls = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 2);
      var fs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, ls, new Color([0, 0, 0, 0.0]));
      if(bClear) {
        map.graphics.clear();
      }
      map.graphics.add(new Graphic(geometry, fs));
    },

    checkNumber: function(v) {
      var t = typeof(v);
      if((t === "undefined") && (v === null)) {
        return null;
      }
      if(t === "string") {
        v = parseFloat(v);
        if(isNaN(v)) {
          return null;
        }
        t = typeof(v);
      }
      if(t === "number") {
        if(!isFinite(v)) {
          return null;
        }
        return v;
      }
      return null;
    },

    formatCoordinate: function(n) {
      var endsWith = function(sv, sfx) {
        return (sv.indexOf(sfx, (sv.length - sfx.length)) !== -1);
      };
      var trimLast = function(sv) {
        return sv.substring(0, (sv.length - 1));
      };

      var s = number.format(n, {places: 4});
      while(endsWith(s, "0")) {
        s = trimLast(s);
      }
      if(endsWith(s, ".")) {
        s = trimLast(s);
      }
      return s;
    },

    makeGeographicExtent: function(xmin, ymin, xmax, ymax) {
      var n;
      xmin = this.checkNumber(xmin);
      ymin = this.checkNumber(ymin);
      xmax = this.checkNumber(xmax);
      ymax = this.checkNumber(ymax);
      if((xmin === null) || (xmax === null)) {
        return null;
      }
      if((ymin === null) || (ymax === null)) {
        return null;
      }

      // TODO WebMercator
      //if (xmin < -176) xmin = -176;
      //if (xmax > 176) xmax = 176;
      if(ymin < -85) {
        ymin = -85;
      }
      if(ymax > 85) {
        ymax = 85;
      }


      // TODO return null instead of flipping
      if(xmax < xmin) {
        n = xmax;
        xmax = xmin;
        xmin = n;
      }
      if(ymax < ymin) {
        n = ymax;
        ymax = ymin;
        ymin = n;
      }

      try {
        return new Extent(xmin, ymin, xmax, ymax, new SpatialReference({wkid: 4326}));
      } catch(ex) {
      }
      return null;
    }

  };

  

  return oThisObject;
});