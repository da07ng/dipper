define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-style",
        "dojo/has",
        "../../base/Templated",
        "dojo/text!./templates/SaveDocumentPane.html",
        "dojo/i18n!../../nls/i18nBase",
        "../../../../kernel"],
function(declare, lang, array, domClass, domStyle, has, Templated, template, i18nBase, esriKernel) {

  var oThisClass = declare([Templated], {

    _disabled: false,

    dialogBroker: null,
    editor: null,
    gxeDocument: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
      this._initialize();
    },

    _getPushToItem: function() {
      return true;
    },

    _initialize: function() {
      var canSaveAndClose = (this.editor && this.editor.dialogBroker);
      if(!canSaveAndClose) {
        domStyle.set(this.saveAndCloseButton, "display", "none");
      }
    },

    onCancel: function() {
    },

    onSave: function(isSaveAndClose, pushToItem) {
    },

    _onCancelClick: function() {
      if(this._disabled) {
        return;
      }
      this.onCancel();
    },

    _onSaveClick: function() {
      if(this._disabled) {
        return;
      }
      this.onSave(false, this._getPushToItem());
    },

    _onSaveAndCloseClick: function() {
      if(this._disabled) {
        return;
      }
      this.onSave(true, this._getPushToItem());
    }

  });

  

  return oThisClass;
});