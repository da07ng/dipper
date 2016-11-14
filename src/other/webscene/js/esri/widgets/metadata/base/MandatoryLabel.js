define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./Templated",
        "dojo/text!./templates/MandatoryLabel.html",
        "../../../kernel"],
function(declare, lang, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    label: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    }

  });

  

  return oThisClass;
});