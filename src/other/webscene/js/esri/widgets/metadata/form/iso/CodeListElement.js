define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../Element",
        "../../../../kernel"],
function(declare, lang, has, Element, esriKernel) {

  var oThisClass = declare([Element], {

    showHeader: false,

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