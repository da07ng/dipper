define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/has",
        "dijit/_WidgetBase",
        "dojo/i18n!../../../nls/i18nBase",
        "dojo/i18n!../../../nls/i18nIso",
        "dijit/Dialog",
        "./ThemePane",
        "../../../../../kernel"],
function(declare, lang, domClass, has, _WidgetBase, i18nBase, i18nIso, Dialog, GemetPane, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    dialog: null,
    gxeDocument: null,
    initiallySelectedValues: null,
    title: i18nIso.gemet.theme.dialogTitle,

    postCreate: function() {
      this.inherited(arguments);
    },

    onSelect: function(selectedValues) {
    },

    show: function() {
      var dialog = null;

      var pane = new GemetPane({
        dialogBroker: this,
        gxeDocument: this.gxeDocument,
        initiallySelectedValues: this.initiallySelectedValues,
        onOkClick: lang.hitch(this, function(selectedValues) {
          if(selectedValues) {
            this.onSelect(selectedValues);
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
        "class": "gxeDialog gxePopupDialog gxeGemetDialog",
        title: this.title,
        content: pane,
        autofocus: false
      });
      if(!this.isLeftToRight()) {
        domClass.add(dialog.domNode, "gxeRtl");
      }

      this.own(dialog.on("hide", lang.hitch(this, function() {
        setTimeout(lang.hitch(this, function() {
          pane.destroyRecursive(false);
          dialog.destroyRecursive(false);
          this.destroyRecursive(false);
        }), 300);
      })));

      dialog.show();
    }

  });

  

  return oThisClass;
});