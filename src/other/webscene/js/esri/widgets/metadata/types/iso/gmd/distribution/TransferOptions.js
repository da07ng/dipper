define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../citation/CI_OnlineFunctionCode",
        "dojo/text!./templates/TransferOptions.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, CodeListReference, GcoElement, ObjectReference,
  CI_OnlineFunctionCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});