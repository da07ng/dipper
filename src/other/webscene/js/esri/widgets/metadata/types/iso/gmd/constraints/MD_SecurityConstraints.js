define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "./MD_ClassificationCode",
        "dojo/text!./templates/MD_SecurityConstraints.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, CodeListReference, GcoElement, MD_ClassificationCode,
  template, esriKernel) {
  
  var oThisClass = declare(Descriptor, {
    
    templateString : template
    
  });

  

  return oThisClass;
});