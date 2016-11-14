define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/InputSelectOne",
        "../../../../form/Options",
        "../../../../form/Option",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListAttribute",
        "../../../../form/iso/CodeListValueAttribute",
        "../../../../form/iso/CodeListElement",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/CodeSpaceAttribute",
        "../../../../form/iso/ObjectReference",
        "./OtherConstraints",
        "./UseLimitation",
        "dojo/text!./templates/ResourceConstraints.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, InputSelectOne, Options, Option, AbstractObject, CodeListAttribute,
  CodeListValueAttribute, CodeListElement, CodeListReference, CodeSpaceAttribute, ObjectReference, OtherConstraints,
  UseLimitation, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});