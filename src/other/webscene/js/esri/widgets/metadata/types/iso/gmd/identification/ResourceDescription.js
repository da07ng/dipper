define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputTextArea",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/ResourceDescription.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputTextArea, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});