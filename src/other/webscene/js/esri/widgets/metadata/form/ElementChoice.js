define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/has",
        "./Tabs",
        "../../../kernel"],
function(declare, lang, domClass, has, Tabs, esriKernel) {

  var oThisClass = declare([Tabs], {

    _isGxeElementChoice: true,

    /* gxe/form/ElementChoice properties, configurable */
    useRadios: true,

    postCreate: function() {
      this.inherited(arguments);
      domClass.add(this.domNode, "gxeElementChoice");
    }

  });

  

  return oThisClass;
});