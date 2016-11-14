define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MI_EnvironmentalRecord",
        "dojo/text!./templates/EnvironmentalConditions.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MI_EnvironmentalRecord, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});