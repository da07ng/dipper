define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./ClickableTool",
        "../../../../kernel"],
function(declare, lang, has, ClickableTool, esriKernel) {

  var oThisClass = declare([ClickableTool], {

    /* ClickableValueTool Properties, configurable */
    // label: "", see ClickableTool
    value: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    whenToolClicked: function(evt, inputWidget) {
      if(inputWidget) {
        inputWidget.setInputValue(this.value);
      }
    }

  });

  

  return oThisClass;
});