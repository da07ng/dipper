define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../tools/ClickableTool",
        "../../../base/etc/docUtil",
        "./ThemeDialog",
        "../../../../../kernel"],
function(declare, lang, has, ClickableTool, docUtil, ThemeDialog, esriKernel) {

  var oThisClass = declare([ClickableTool], {

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      if(this._started) {
        return;
      }
      var gxeContext = docUtil.findGxeContext(this);
      if(!gxeContext || !gxeContext.gemetUrl || !gxeContext.gemetInspireThemeThesaurus) {
        this.domNode.style.display = "none";
      }
    },

    whenToolClicked: function(evt, inputWidget) {
      if(!inputWidget || !inputWidget.parentXNode) {
        return;
      }
      var values = inputWidget.getInputValue();
      if((values !== null) && !values.push) {
        values = [values];
      }
      var d = new ThemeDialog({
        gxeDocument: inputWidget.parentXNode.gxeDocument,
        initiallySelectedValues: values,
        onSelect: lang.hitch(this, function(selectedValues) {
          inputWidget.importValues(null, selectedValues);
        })
      });
      d.show();
    }

  });

  

  return oThisClass;
});