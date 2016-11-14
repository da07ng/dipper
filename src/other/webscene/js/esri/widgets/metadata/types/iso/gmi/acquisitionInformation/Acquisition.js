define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/ObjectReference",
        "./AcquisitionPlan",
        "./AcquisitionRequirement",
        "./EnvironmentalConditions",
        "./Instrument",
        "./Objective",
        "./Operation",
        "./Platform",
        "dojo/text!./templates/Acquisition.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, AbstractObject, ObjectReference, AcquisitionPlan, AcquisitionRequirement,
  EnvironmentalConditions, Instrument, Objective, Operation, Platform, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});