define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/MD_Constraints.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, MD_Constraints, template, esriKernel) {
  
  var oThisClass = declare(Descriptor, {
    
    templateString : template
    
  });

  

  return oThisClass;
});