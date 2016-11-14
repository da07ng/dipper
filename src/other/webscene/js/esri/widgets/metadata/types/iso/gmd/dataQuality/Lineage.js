define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputTextArea",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "dojo/text!./templates/Lineage.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputTextArea, AbstractObject, GcoElement, ObjectReference, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});