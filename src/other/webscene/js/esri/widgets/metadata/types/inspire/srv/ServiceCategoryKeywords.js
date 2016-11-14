define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputSelectMany",
        "../../../form/iso/AbstractObject",
        "../../../form/iso/CodeListAttribute",
        "../../../form/iso/CodeListValueAttribute",
        "../../../form/iso/CodeListElement",
        "../../../form/iso/CodeListReference",
        "../../../form/iso/ObjectReference",
        "./ServiceCategoryOptions",
        "dojo/text!./templates/ServiceCategoryKeywords.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputSelectMany, AbstractObject, CodeListAttribute,
  CodeListValueAttribute, CodeListElement, CodeListReference, ObjectReference, ServiceCategoryOptions, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});