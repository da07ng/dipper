define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../tools/ClickableTool",
        "../../../base/etc/docUtil",
        "./ConceptDialog",
        "../../../../../kernel"],
function(declare, lang, has, ClickableTool, docUtil, ConceptDialog, esriKernel) {

  var oThisClass = declare([ClickableTool], {

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      if(this._started) {
        return;
      }
      var gxeContext = docUtil.findGxeContext(this);
      if(!gxeContext || !gxeContext.gemetUrl || !gxeContext.gemetConceptThesaurus) {
        this.domNode.style.display = "none";
      }
    },

    whenToolClicked: function(evt, inputWidget) {
      if(!inputWidget || !inputWidget.parentXNode) {
        return;
      }
      var value = inputWidget.getInputValue();
      var d = new ConceptDialog({
        gxeDocument: inputWidget.parentXNode.gxeDocument,
        initialValue: value,
        onSelect: lang.hitch(this, function(selectedValue) {
          inputWidget.setInputValue(selectedValue);
        })
      });
      d.show();
    }

  });

  

  return oThisClass;
});