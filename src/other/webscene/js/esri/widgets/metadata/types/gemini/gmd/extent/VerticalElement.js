define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/InputNumber",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "dojo/text!./templates/VerticalElement.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, InputNumber, AbstractObject, GcoElement, ObjectReference, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});