define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MI_Plan",
        "dojo/text!./templates/AcquisitionPlan.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MI_Plan, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});