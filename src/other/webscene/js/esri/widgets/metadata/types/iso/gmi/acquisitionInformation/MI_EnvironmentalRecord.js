define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputNumber",
        "../../../../form/InputTextArea",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/MI_EnvironmentalRecord.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputNumber, InputTextArea, AbstractObject, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});