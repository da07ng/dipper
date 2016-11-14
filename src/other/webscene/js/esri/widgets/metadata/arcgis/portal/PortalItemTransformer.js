define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dojo/query",
        "dijit/registry",
        "dijit/_WidgetBase",
        "../../../../kernel"],
function(declare, lang, array, has, query, registry, _WidgetBase, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    gxeDocument: null,
    isPull: true,
    portal: null,
    portalItem: null,
    portalUser: null,
    portalUrl: null,

    itemPropertiesToPush: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    afterPullValue: function(inputWidget, path) {
    },

    checkCoordinate: function(v) {
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

    checkVisibility: function(inputWidget, path) {
    },

    findInputValue: function(name, path, firstOk) {
      var parent, iw = this.findInputWidget(name, path, firstOk);
      if(iw !== null) {
        parent = iw.getParent();
        while(parent) {
          if(parent._isOptionallyOff) {
            iw = null;
            break;
          }
          parent = parent.getParent();
        }
      }
      if(iw !== null) {
        return iw.getInputValue();
      }
    },

    findInputWidget: function(name, path, firstOk) {
      var el, nl = query("[data-gxe-path='" + path + "']", this.gxeDocument.rootDescriptor.domNode);
      if(nl && (nl.length === 1)) {
        el = registry.byNode(nl[0]);
        if(el) {
          return el.inputWidget;
        }
      } else if(nl && (nl.length > 0) && firstOk) {
        el = registry.byNode(nl[0]);
        if(el) {
          return el.inputWidget;
        }
      }
      return null;
    },

    generatePush: function(gxeDocument, portalItem) {
      this.isPull = false;
      this.gxeDocument = gxeDocument;
      this.portalItem = portalItem;
      this.itemPropertiesToPush = null;
      var propsToPush = {};
      var ti = this.newTransformationInfo(gxeDocument);
      this.populateTransformationInfo(gxeDocument, portalItem, ti);
      var sProp = null, hasProps = false;
      for(sProp in ti) {
        if(ti.hasOwnProperty(sProp)) {
          this.pushValue(propsToPush, ti, sProp);
        }
      }
      for(sProp in propsToPush) {
        if(propsToPush.hasOwnProperty(sProp)) {
          hasProps = true;
        }
      }
      if(hasProps) {
        this.itemPropertiesToPush = propsToPush;
      }
      return this.itemPropertiesToPush;
    },

    pull: function(gxeDocument, portalItem) {
      this.isPull = true;
      this.gxeDocument = gxeDocument;
      this.portalItem = portalItem;
      var ti = this.newTransformationInfo(gxeDocument);
      this.populateTransformationInfo(gxeDocument, portalItem, ti);
      var sProp = null;
      for(sProp in ti) {
        if(ti.hasOwnProperty(sProp)) {
          this.pullValue(portalItem, ti, sProp, false);
        }
      }
    },

    newTransformationInfo: function(gxeDocument) {

      var newPropertyInfo = function(canPush) {
        return {
          path: null,
          canPull: true,
          canPush: canPush,
          isSelected: true,
          valueToPush: null
        };
      };

      var transformationInfo = {
        id: newPropertyInfo(false),
        title: newPropertyInfo(false),
        snippet: newPropertyInfo(true),
        description: newPropertyInfo(true),
        accessInformation: newPropertyInfo(false), // Credits
        licenseInfo: newPropertyInfo(false), // Access and Use Constraints
        thumbnail: newPropertyInfo(false),
        culture: newPropertyInfo(false),
        url: newPropertyInfo(false),
        created: newPropertyInfo(false),
        modified: newPropertyInfo(false),
        type: newPropertyInfo(false),
        tags: newPropertyInfo(true),
        typeKeywords: newPropertyInfo(false),
        extent: {
          xmin: newPropertyInfo(true),
          ymin: newPropertyInfo(true),
          xmax: newPropertyInfo(true),
          ymax: newPropertyInfo(true)
        },
        spatialReference: newPropertyInfo(false),
        name: newPropertyInfo(false),
        owner: newPropertyInfo(false)
      };

      return transformationInfo;
    },

    populateTransformationInfo: function(gxeDocument, portalItem, transformationInfo) {
    },

    pullValue: function(item, transformationInfo, name, isSubProperty) {
      var iw = null, pi = null, p = null, v = null, ext = null, sProp = null;

      if((name in item) && (name in transformationInfo)) {
        v = item[name];
        pi = transformationInfo[name];
        if(typeof v === "undefined") {
          return;
        }
        if(typeof pi === "undefined") {
          return;
        }

        if(name === "extent") {
          if(v && v.push && (v.length === 2)) {
            if((v[0].length === 2) && (v[1].length === 2)) {
              ext = {
                xmin: v[0][0],
                ymin: v[0][1],
                xmax: v[1][0],
                ymax: v[1][1]
              };
              for(sProp in ext) {
                if(ext.hasOwnProperty(sProp)) {
                  this.pullValue(ext, pi, sProp, true);
                }
              }
            }
          }
          return;
        }

        if(pi !== null) {
          if(pi.canPull && pi.isSelected) {
            p = pi.path;
            if(typeof p === "undefined") {
              p = null;
            }
          }
        }
        if(name === "id") {
          if(v !== null) {
            v = "itemid" + v;
          }
        }
        if(name === "tags") {
          if((v !== null) && (v.length === 0)) {
            v = null;
          }
        }
      }

      var firstOk = !isSubProperty;
      if((v !== null) && (p !== null)) {
        //console.warn(name,pi);
        iw = this.findInputWidget(name, p, firstOk);
        if(iw !== null) {
          iw.setInputValue(v);
          if(iw.parentXNode && iw.parentXNode.toggleContent) {
            iw.parentXNode.toggleContent(true);
          }
          //console.warn(name,p,v);
          this.checkVisibility(iw, p);
          this.afterPullValue(iw, p);
        }
      }
    },

    pushExtent: function(props, xmin, ymin, xmax, ymax) {
      xmin = this.checkCoordinate(xmin);
      ymin = this.checkCoordinate(ymin);
      xmax = this.checkCoordinate(xmax);
      ymax = this.checkCoordinate(ymax);
      if((xmin === null) || (xmax === null)) {
        return;
      }
      if((ymin === null) || (ymax === null)) {
        return;
      }
      if((xmin < -180) || (xmin > 180)) {
        return;
      }
      if((xmax < -180) || (xmax > 180)) {
        return;
      }
      if((ymin < -90) || (ymin > 90)) {
        return;
      }
      if((ymax < -90) || (ymax > 90)) {
        return;
      }
      if(xmax < xmin) {
        return;
      }
      if(ymax < ymin) {
        return;
      }

      var bPush = true;
      var v = this.portalItem.extent;
      if(v && v.push && (v.length === 2)) {
        if((v[0].length === 2) && (v[1].length === 2)) {
          if((xmin === v[0][0]) && (ymin === v[0][1]) &&
            (xmax === v[1][0]) && (ymax === v[1][1])) {
            bPush = false;
          }
        }
      }

      if(bPush) {
        props.extent = xmin + "," + ymin + "," + xmax + "," + ymax;
      }
    },

    pushString: function(props, name, v) {
      if((typeof v === "undefined") || (v === null)) {
        return;
      }
      if(typeof v !== "string") {
        return;
      }
      var v2 = lang.trim(v);
      if(v2.length === 0) {
        return;
      }
      var v3 = this.portalItem[name];
      var bPush = ((typeof v3 === "undefined") || (v2 !== v3));
      if(bPush) {
        props[name] = v2;
      }
    },

    pushTags: function(props, v) {
      if((typeof v === "undefined") || (v === null)) {
        return;
      }
      if(!(v.push && (v.length > 0))) {
        return;
      }

      var v2 = this.portalItem.tags, v3 = [];
      var bPush = true, nFound = 0;
      if((typeof v2 !== "undefined") && (v2 !== null) && v2.push) {
        array.forEach(v2, function(t) {
          v3.push(t);
        });
        array.forEach(v, function(t) {
          var b = array.some(v2, function(t2) {
            return (t === t2);
          });
          if(!b) {
            v3.push(t);
          }
        });
        if(v3.length === v2.length) {
          array.forEach(v3, function(t) {
            var b = array.some(v2, function(t2) {
              return (t === t2);
            });
            if(b) {
              nFound++;
            }
          });
          if(nFound === (v3.length)) {
            bPush = false;
          }
        }
        if(bPush) {
          props.tags = v3.join(",");
        }
      } else {
        props.tags = v.join(",");
      }
    },

    pushValue: function(props, transformationInfo, name) {

      var p = null, pi, sProp = null, ext = {};

      pi = transformationInfo[name];
      if(typeof pi === "undefined") {
        return;
      }

      if(name === "extent") {
        for(sProp in pi) {
          if(pi.hasOwnProperty(sProp)) {
            this.pushValue(ext, pi, sProp);
          }
        }
        this.pushExtent(props, ext.xmin, ext.ymin, ext.xmax, ext.ymax);
        return;
      }

      if(pi.canPush && pi.isSelected) {
        p = pi.path;
        if(typeof p === "undefined") {
          p = null;
        }
      }
      if(p === null) {
        return;
      }

      var firstOk = (name === "tags");
      var v = this.findInputValue(name, p, firstOk);
      if((typeof v !== "undefined") && (v !== null)) {
        if(typeof v === "string") {
          this.pushString(props, name, v);
        } else if(v.push && (v.length > 0)) {
          if(name === "tags") {
            this.pushTags(props, v);
          }
        }
      }
    }

  });

  

  return oThisClass;
});