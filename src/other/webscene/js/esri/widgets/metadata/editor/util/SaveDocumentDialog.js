define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "dijit/_WidgetBase",
        "dojo/i18n!../../nls/i18nBase",
        "dijit/Dialog",
        "./SaveDocumentPane",
        "../../../../kernel"],
function(declare, lang, domClass, domConstruct, has, _WidgetBase, i18nBase, Dialog, SaveDocumentPane, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    dialog: null,
    dialogTitle: i18nBase.editor.save.dialogTitle,
    editor: null,
    gxeDocument: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    hide: function() {
      if(!this.dialog) {
        return;
      }
      this.dialog.hide();
    },

    onSave: function(dialog, isSaveAndClose, pushToItem) {
    },

    show: function() {

      var content = domConstruct.create("div", {});

      var pane = new SaveDocumentPane({
        dialogBroker: this,
        editor: this.editor,
        gxeDocument: this.gxeDocument,
        onCancel: lang.hitch(this, function() {
          if(this.dialog) {
            this.dialog.hide();
          }
        }),
        onSave: lang.hitch(this, function(isSaveAndClose, pushToItem) {
          if(this.dialog) {
            this.onSave(this.dialog, isSaveAndClose, pushToItem);
          }
        })
      }, domConstruct.create("div", {}, content));

      var dialog = this.dialog = new Dialog({
        "class": "gxeDialog  gxePopupDialog",
        title: this.dialogTitle,
        content: content,
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