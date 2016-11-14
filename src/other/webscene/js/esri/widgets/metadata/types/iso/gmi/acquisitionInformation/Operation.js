define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MI_Operation",
        "dojo/text!./templates/Operation.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MI_Operation, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});