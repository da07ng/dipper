define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Tabs",
        "../gmd/identification/GemetConceptKeywords",
        "../gmd/identification/OtherKeywords",
        "./ServiceCategoryKeywords",
        "dojo/text!./templates/ServiceResourceKeywords.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, GemetConceptKeywords, OtherKeywords, ServiceCategoryKeywords, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});