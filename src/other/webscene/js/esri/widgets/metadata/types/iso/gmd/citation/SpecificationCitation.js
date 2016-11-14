define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "./CI_Date",
        "dojo/text!./templates/SpecificationCitation.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, GcoElement, CI_Date, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});