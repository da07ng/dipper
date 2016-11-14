define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../base/Templated",
        "dojo/text!./templates/EditDocumentPane.html",
        "../../../kernel"],
function(declare, lang, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    gxeDocument: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    }

  });

  

  return oThisClass;
});