define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/InputTextArea",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../../gmd/citation/SimpleCI_Citation",
        "../../gmd/identification/SimpleMD_Identifier",
        "dojo/text!./templates/MI_Instrument.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, InputTextArea, AbstractObject, GcoElement, ObjectReference,
  SimpleCI_Citation, SimpleMD_Identifier, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});