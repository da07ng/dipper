define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../Attribute",
        "../../../../kernel"],
function(declare, lang, has, Attribute, esriKernel) {

  var oThisClass = declare([Attribute], {

    isIsoCodeListValue: true,
    minOccurs: 1,
    showHeader: false,
    target: "codeListValue",

    postCreate: function() {
      this.inherited(arguments);
    },

    resolveMinOccurs: function() {
      if(this.parentElement) {
        return this.parentElement.resolveMinOccurs();
      }
      return this.minOccurs;
    }

  });

  

  return oThisClass;
});