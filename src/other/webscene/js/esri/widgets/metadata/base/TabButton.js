define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-attr",
        "dojo/has",
        "./Templated",
        "dojo/text!./templates/TabButton.html",
        "../../../kernel"],
function(declare, lang, domAttr, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    label: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    _onClick: function() {
      this.onClick(this);
    },

    onClick: function(tabButton) {
    },

    setLabel: function(label) {
      if(typeof label === "undefined") {
        label = null;
      }
      this.label = label;
      this.setI18nNodeText(this.labelNode, label);
    }

  });

  

  return oThisClass;
});