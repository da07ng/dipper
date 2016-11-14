define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/Tabs",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "./CI_Contact",
        "./CI_RoleCode",
        "dojo/text!./templates/CI_ResponsibleParty.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, AbstractObject, CodeListReference, GcoElement, ObjectReference,
  CI_Contact, CI_RoleCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});
