define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "dijit/_WidgetBase",
        "../../../../kernel"],
function(declare, lang, has, _WidgetBase, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    gxeDocument: null,
    toDocumentType: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    checkTarget: function(xNode, target) {
      return target;
    }

  });

  

  return oThisClass;
});