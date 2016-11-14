define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/InputSelectOne",
        "../../../../form/Options",
        "../../../../form/Option",
        "../../../../form/iso/CodeListAttribute",
        "../../../../form/iso/CodeListValueAttribute",
        "../../../../form/iso/CodeListElement",
        "../../../../form/iso/CodeSpaceAttribute",
        "dojo/text!./templates/MI_ObjectiveTypeCode.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, InputSelectOne, Options, Option, CodeListAttribute, CodeListValueAttribute,
  CodeListElement, CodeSpaceAttribute, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});