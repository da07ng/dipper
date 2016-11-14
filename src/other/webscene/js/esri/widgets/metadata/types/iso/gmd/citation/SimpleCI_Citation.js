define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/SimpleCI_Citation.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, AbstractObject, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});