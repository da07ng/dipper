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
    },

    toggleContent: function(bVisible) {
      if(this.parentElement) {
        this.parentElement.toggleContent(bVisible);
      } else {
        this.inherited(arguments);
      }
    }

  });

  

  return oThisClass;
});