define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "dijit/_WidgetBase",
        "dojo/i18n!../../nls/i18nBase",
        "dijit/Dialog",
        "./OkCancelBar",
        "./LoadDocumentPane",
        "../../../../kernel"],
function(declare, lang, domClass, domConstruct, has, _WidgetBase, i18nBase, Dialog,
         OkCancelBar, LoadDocumentPane, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    dialog: null,
    dialogTitle: i18nBase.editor.load.dialogTitle,
    editor: null,
    okCancelBar: null,
    prompt: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    onSelect: function(dialog, documentType, xmlDocument, asTemplate) {
    },

    onSelectPullItem: function(dialog) {
    },

    show: function() {

      var content = domConstruct.create("div", {});

      var pane = new LoadDocumentPane({
        editor: this.editor,
        dialogBroker: this,
        prompt: this.prompt,
        onSelect: lang.hitch(this, function(documentType, xmlDocument, asTemplate) {
          if(this.dialog) {
            this.onSelect(this.dialog, documentType, xmlDocument, asTemplate);
          }
        }),
        onSelectPullItem: lang.hitch(this, function() {
          if(this.dialog) {
            this.onSelectPullItem(this.dialog);
          }
        })
      }, domConstruct.create("div", {}, content));

      var okCancel = this.okCancelBar = new OkCancelBar({
        showOk: false,
        onCancelClick: lang.hitch(this, function() {
          if(this.dialog) {
            this.dialog.hide();
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
          okCancel.destroyRecursive(false);
          dialog.destroyRecursive(false);
          this.destroyRecursive(false);
        }), 300);
      })));
      dialog.show();

    }

  });

  

  return oThisClass;
});