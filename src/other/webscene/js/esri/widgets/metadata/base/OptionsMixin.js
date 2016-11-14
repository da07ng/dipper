define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dojo/Deferred",
        "../../../kernel"],
function(declare, lang, array, has, Deferred, esriKernel) {

  var oThisClass = declare(null, {

    constructor: function(args) {
      lang.mixin(this, args);
    },

    fetchOptionWidgets: function() {
      var deferred = new Deferred();
      var optionsWidget = null, optionWidgets = [];
      array.forEach(this.getChildren(), function(widget) {
        if(widget._isGxeOptions) {
          optionsWidget = widget;
        } else if(widget._isGxeOption) {
          optionWidgets.push(widget);
        }
      });
      if(optionsWidget === null) {
        deferred.resolve(optionWidgets);
        return deferred;
      } else {
        return optionsWidget.fetchOptionWidgets();
      }
    }

  });

  

  return oThisClass;
});