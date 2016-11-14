define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../../../iso/gmd/identification/DataRepresentation",
        "../../../iso/gmd/identification/ResourceClassification",
        "../../../iso/gmd/identification/ResourceExtent",
        "../identification/ResourceLanguage",
        "dojo/text!./templates/DataResourceTab.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, DataRepresentation, ResourceClassification, ResourceExtent,
  ResourceLanguage, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});