define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/ElementChoice",
        "../../../../form/InputNumber",
        "../../../../form/InputSelectOne",
        "../../../../form/Options",
        "../../../../form/Option",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "../../../iso/gmd/identification/MD_SpatialRepresentationTypeCode",
        "dojo/text!./templates/DataRepresentation.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, ElementChoice, InputNumber, InputSelectOne, Options, Option,
  AbstractObject, CodeListReference, GcoElement, ObjectReference, MD_SpatialRepresentationTypeCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});