define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/ElementChoice",
        "../../../../form/Section",
        "../../../../form/iso/ObjectReference",
        "./MD_Constraints",
        "./MD_LegalConstraints",
        "./MD_SecurityConstraints",
        "dojo/text!./templates/ResourceConstraints.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ElementChoice, Section, ObjectReference, MD_Constraints, MD_LegalConstraints,
  MD_SecurityConstraints, template, esriKernel) {
  
  var oThisClass = declare(Descriptor, {
    
    templateString : template
    
  });

  

  return oThisClass;
});