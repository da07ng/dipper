define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MI_Objective",
        "dojo/text!./templates/Objective.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MI_Objective, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});