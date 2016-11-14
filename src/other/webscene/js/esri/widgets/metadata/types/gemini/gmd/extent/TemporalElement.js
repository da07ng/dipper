define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/InputDate",
        "../../../../form/InputSelectOne",
        "../../../../form/InputText",
        "../../../../form/Options",
        "../../../../form/Option",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/ObjectReference",
        "dojo/text!./templates/TemporalElement.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, InputDate, InputSelectOne, InputText, Options, Option,
  AbstractObject, ObjectReference, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});