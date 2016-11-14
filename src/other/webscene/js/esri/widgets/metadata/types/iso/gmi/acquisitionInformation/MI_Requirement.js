define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/InputDate",
        "../../../../form/Section",
        "../../../../form/Tabs",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../../gmd/citation/SimpleCI_Citation",
        "../../gmd/identification/SimpleMD_Identifier",
        "../../gmd/citation/CI_ResponsibleParty",
        "./MI_PriorityCode",
        "dojo/text!./templates/MI_Requirement.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, InputDate, Section, Tabs, AbstractObject, GcoElement,
  ObjectReference, SimpleCI_Citation, SimpleMD_Identifier, CI_ResponsibleParty, MI_PriorityCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});