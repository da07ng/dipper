define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/InputSelectOne",
        "../../../form/Options",
        "../../../form/Option",
        "../../../form/iso/CodeListAttribute",
        "../../../form/iso/CodeListValueAttribute",
        "../../../form/iso/CodeListElement",
        "../../../form/iso/CodeListReference",
        "../../../form/iso/CodeSpaceAttribute",
        "dojo/text!./templates/CouplingType.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, InputSelectOne, Options, Option, CodeListAttribute, CodeListValueAttribute,
  CodeListElement, CodeListReference, CodeSpaceAttribute, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});