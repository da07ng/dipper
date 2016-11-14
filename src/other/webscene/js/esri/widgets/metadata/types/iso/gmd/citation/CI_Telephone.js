define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/CI_Telephone.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});