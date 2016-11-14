define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../base/Templated",
        "../base/OptionsMixin",
        "dojo/text!./templates/Options.html",
        "../../../kernel"],
function(declare, lang, has, Templated, OptionsMixin, template, esriKernel) {

  var oThisClass = declare([Templated, OptionsMixin], {

    _isGxeOptions: true,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    /* 
     * Returns a deferred resolved to an array of gxe/form/Option widgets.
     * The base implementation is in OptionsMixin, 
     * Override if an AJAX call is required (be sure to cache the result for later use).
     */
    fetchOptionWidgets: function() {
      return this.inherited(arguments);
    }

  });

  

  return oThisClass;
});