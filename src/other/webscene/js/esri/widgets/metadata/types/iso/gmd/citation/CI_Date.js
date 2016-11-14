define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputDate",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "./CI_DateTypeCode",
        "dojo/text!./templates/CI_Date.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputDate, AbstractObject, CodeListReference, GcoElement,
  CI_DateTypeCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});