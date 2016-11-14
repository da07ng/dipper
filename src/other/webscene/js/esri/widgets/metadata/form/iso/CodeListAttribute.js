define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../Attribute",
        "../../../../kernel"],
function(declare, lang, has, Attribute, esriKernel) {

  var oThisClass = declare([Attribute], {

    fixed: true,
    hide: true,
    minOccurs: 1,
    showHeader: false,
    target: "codeList",

    postCreate: function() {
      this.inherited(arguments);
    }

  });

  

  return oThisClass;
});