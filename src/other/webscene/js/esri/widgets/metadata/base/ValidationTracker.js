define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dijit/_WidgetBase",
        "../../../kernel"],
function(declare, lang, array, has, _WidgetBase, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    documentTitle: null,
    hadValidationErrors: false,
    ignoreErrors: false,
    isSaveAsDraft: false,
    validationPane: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    handleValidationError: function(xnode, message, inputWidget) {
      if(this.ignoreErrors) {
        return;
      }
      if(!this.isSaveAsDraft) {
        this.hadValidationErrors = true;
        this.validationPane.addWarning(message, inputWidget);
      } else {
        if(xnode.isDocumentTitle) {
          this.hadValidationErrors = true;
          this.validationPane.addWarning(message, inputWidget);
        }
      }
    },

    whenComplete: function() {
      if(this.validationPane) {
        this.validationPane.whenComplete();
      }
    }

  });

  

  return oThisClass;
});