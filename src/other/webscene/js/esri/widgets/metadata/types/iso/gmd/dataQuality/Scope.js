define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/ObjectReference",
        "../maintenance/MD_ScopeCode",
        "dojo/text!./templates/Scope.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, AbstractObject, CodeListReference, ObjectReference, MD_ScopeCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});