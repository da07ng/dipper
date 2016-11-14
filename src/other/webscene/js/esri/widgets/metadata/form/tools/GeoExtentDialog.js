define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "dijit/_WidgetBase",
        "dojo/i18n!../../nls/i18nBase",
        "dijit/Dialog",
        "./GeoExtent",
        "../../../../kernel"],
function(declare, lang, array, aspect, domClass, domConstruct, has,
         _WidgetBase, i18nBase, Dialog, GeoExtent, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    dialog: null,
    title: i18nBase.geoExtent.title,

    gxeDocument: null,
    xmin: null,
    ymin: null,
    xmax: null,
    ymax: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    onChange: function(extent) {
    },

    show: function() {
      var dialog = null;

      var pane = new GeoExtent({
        dialogBroker: this,
        gxeDocument: this.gxeDocument,
        xmin: this.xmin,
        ymin: this.ymin,
        xmax: this.xmax,
        ymax: this.ymax,
        onOkClick: lang.hitch(this, function(ext) {
          if(ext) {
            this.onChange(ext);
          }
          if(dialog) {
            dialog.hide();
          }
        }),
        onCancelClick: lang.hitch(this, function() {
          if(dialog) {
            dialog.hide();
          }
        })
      });

      dialog = this.dialog = new Dialog({
        "class": "gxeDialog gxePopupDialog",
        title: this.title,
        content: pane,
        autofocus: false
      });
      if(!this.isLeftToRight()) {
        domClass.add(dialog.domNode, "gxeRtl");
      }

      this.own(aspect.after(dialog, "_position", function() {
        if(pane._map) {
          pane._map.reposition();
        }
      }, true));

      this.own(dialog.on("hide", lang.hitch(this, function() {
        setTimeout(lang.hitch(this, function() {
          pane.destroyRecursive(false);
          dialog.destroyRecursive(false);
          this.destroyRecursive(false);
        }), 300);
      })));

      dialog.show().then(function() {
        pane.initialize();
      });

    }

  });

  

  return oThisClass;
});