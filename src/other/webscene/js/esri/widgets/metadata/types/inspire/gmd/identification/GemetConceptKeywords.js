define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputText",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListAttribute",
        "../../../../form/iso/CodeListValueAttribute",
        "../../../../form/iso/CodeListElement",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../../../../form/iso/gemet/GemetConceptTool",
        "dojo/text!./templates/GemetConceptKeywords.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputText, AbstractObject, CodeListAttribute, CodeListValueAttribute,
  CodeListElement, CodeListReference, GcoElement, ObjectReference, GemetConceptTool, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});