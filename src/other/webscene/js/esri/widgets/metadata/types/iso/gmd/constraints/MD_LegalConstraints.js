define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "./MD_RestrictionCode",
        "dojo/text!./templates/MD_LegalConstraints.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, CodeListReference, GcoElement, MD_RestrictionCode,
  template, esriKernel) {
  
  var oThisClass = declare(Descriptor, {
    
    templateString : template
    
  });

  

  return oThisClass;
});