define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/InputTextArea",
        "../../../../form/Section",
        "../../../../form/Tabs",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../../gmd/citation/SimpleCI_Citation",
        "../../gmd/identification/SimpleMD_Identifier",
        "../../gmd/identification/MD_ProgressCode",
        "./MI_OperationTypeCode",
        "dojo/text!./templates/MI_Operation.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, InputTextArea, Section, Tabs, AbstractObject,
  CodeListReference, GcoElement, ObjectReference, SimpleCI_Citation, SimpleMD_Identifier, MD_ProgressCode,
  MI_OperationTypeCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});