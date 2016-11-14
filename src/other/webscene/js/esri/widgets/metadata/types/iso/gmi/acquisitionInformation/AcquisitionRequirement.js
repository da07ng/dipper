define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MI_Requirement",
        "dojo/text!./templates/AcquisitionRequirement.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MI_Requirement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});