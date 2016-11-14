define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputText",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/SimpleMD_Identifier.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputText, AbstractObject, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});