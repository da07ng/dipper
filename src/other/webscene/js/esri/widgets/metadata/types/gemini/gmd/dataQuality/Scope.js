define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/ElementChoice",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../../../iso/gmd/maintenance/MD_ScopeCode",
        "dojo/text!./templates/Scope.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, ElementChoice, AbstractObject, CodeListReference,
  GcoElement, ObjectReference, MD_ScopeCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});