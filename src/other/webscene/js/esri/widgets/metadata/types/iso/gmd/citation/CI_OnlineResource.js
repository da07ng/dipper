define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputTextArea",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "./CI_OnlineFunctionCode",
        "dojo/text!./templates/CI_OnlineResource.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputTextArea, AbstractObject, CodeListReference, GcoElement,
  CI_OnlineFunctionCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});
