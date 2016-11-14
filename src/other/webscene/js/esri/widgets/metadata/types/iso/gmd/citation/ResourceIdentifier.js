define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/ElementChoice",
        "../../../../form/InputText",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "dojo/text!./templates/ResourceIdentifier.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, ElementChoice, InputText, AbstractObject, GcoElement, ObjectReference,
  template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});