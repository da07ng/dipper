define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-style",
        "dojo/has",
        "../base/Templated",
        "dojo/text!./templates/ViewDocumentPane.html",
        "../../../kernel"],
function(declare, lang, domStyle, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    gxeDocument: null,
    templateString: template,
    xmlString: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    hideMessage: function() {
      this.messageNode.innerHTML = "";
      domStyle.set(this.messageNode, "display", "none");
    },

    showMessage: function(message) {
      this.setNodeText(this.messageNode, message);
      domStyle.set(this.messageNode, "display", "");
    }

  });

  

  return oThisClass;
});