define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/query",
        "dojo/has",
        "dijit/registry",
        "../tools/ClickableTool",
        "./IsoTopicDialog",
        "../../../../kernel"],
function(declare, lang, array, query, has, registry, ClickableTool, IsoTopicDialog, esriKernel) {

  var oThisClass = declare([ClickableTool], {

    thesaurus: "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",

    postCreate: function() {
      this.inherited(arguments);
    },

    whenToolClicked: function(evt, inputWidget) {
      if(!inputWidget || !inputWidget.parentXNode) {
        return;
      }
      var d, nl, themeKeyElement, keywordsInputWidget = null, values = null;
      var themeElement = inputWidget.parentXNode.getParentElement();
      if(themeElement) {
        nl = query("[data-gxe-path='/metadata/idinfo/keywords/theme/themekey']", themeElement.domNode);
        if(nl && (nl.length === 1)) {
          themeKeyElement = registry.byNode(nl[0]);
          if(themeKeyElement) {
            keywordsInputWidget = themeKeyElement.inputWidget;
            values = keywordsInputWidget.getInputValue();
            if((values !== null) && !values.push) {
              values = [values];
            }
          }
        }
      }
      if(keywordsInputWidget) {
        d = new IsoTopicDialog({
          values: values,
          onChange: lang.hitch(this, function(selectedValues) {
            inputWidget.setInputValue(this.thesaurus);
            keywordsInputWidget.importValues(null, selectedValues);
          })
        });
        d.show();
      }
    }

  });

  

  return oThisClass;
});