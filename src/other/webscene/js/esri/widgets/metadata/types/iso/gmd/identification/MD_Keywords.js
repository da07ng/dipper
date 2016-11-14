define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputDelimitedTextArea",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/ObjectReference",
        "../citation/SpecificationCitation",
        "./MD_KeywordTypeCode",
        "dojo/text!./templates/MD_Keywords.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputDelimitedTextArea, AbstractObject, CodeListReference,
  ObjectReference, SpecificationCitation, MD_KeywordTypeCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});