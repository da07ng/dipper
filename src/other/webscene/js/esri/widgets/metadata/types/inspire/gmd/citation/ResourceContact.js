define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../../../iso/gmd/citation/CI_RoleCode",
        "dojo/text!./templates/ResourceContact.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, CodeListReference, GcoElement, ObjectReference,
  CI_RoleCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});