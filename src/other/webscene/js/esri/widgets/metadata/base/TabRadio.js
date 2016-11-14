define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-attr",
        "dojo/has",
        "./TabButton",
        "dojo/text!./templates/TabRadio.html",
        "../../../kernel"],
function(declare, lang, domAttr, has, TabButton, template, esriKernel) {

  var oThisClass = declare([TabButton], {

    checkedAttr: "",
    radioName: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    setChecked: function(bChecked) {
      domAttr.set(this.radioNode, "checked", bChecked);
    }

  });

  

  return oThisClass;
});