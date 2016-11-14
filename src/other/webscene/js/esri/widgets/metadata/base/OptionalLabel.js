define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./Templated",
        "dojo/text!./templates/OptionalLabel.html",
        "../../../kernel"],
function(declare, lang, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    checkedAttr: "",
    label: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    _onClick: function() {
      this.onClick(this.checkBoxNode.checked);
    },

    onClick: function(checked) {
    }

  });

  

  return oThisClass;
});