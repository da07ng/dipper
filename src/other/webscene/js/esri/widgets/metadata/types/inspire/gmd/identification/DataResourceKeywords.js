define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../identification/DataThemeKeywords",
        "../identification/GemetConceptKeywords",
        "../identification/OtherKeywords",
        "dojo/text!./templates/DataResourceKeywords.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, DataThemeKeywords, GemetConceptKeywords, OtherKeywords, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});