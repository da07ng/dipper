define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputTextArea",
        "../../../../form/Tabs",
        "../../../../form/iso/GcoElement",
        "./DataRepresentation",
        "./ResourceExtent",
        "./ResourceLanguage",
        "../../../iso/gmd/identification/ResourceClassification",
        "dojo/text!./templates/DataResourceTab.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputTextArea, Tabs, GcoElement, DataRepresentation,
  ResourceExtent, ResourceLanguage, ResourceClassification, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});