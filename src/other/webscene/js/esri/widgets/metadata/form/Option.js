define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../base/Templated",
        "dojo/text!./templates/Option.html",
        "../../../kernel"],
function(declare, lang, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    _isGxeOption: true,
    templateString: template,

    /* gxe/form/Option properties, configurable */
    label: null,
    value: null,
    selected: false,

    postCreate: function() {
      this.inherited(arguments);
    }

  });

  

  return oThisClass;
});