define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/ObjectReference",
        "../../gmd/identification/MD_ProgressCode",
        "../../gmd/citation/SimpleCI_Citation",
        "./MI_GeometryTypeCode",
        "dojo/text!./templates/MI_Plan.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, AbstractObject, CodeListReference, ObjectReference, MD_ProgressCode,
  SimpleCI_Citation, MI_GeometryTypeCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});