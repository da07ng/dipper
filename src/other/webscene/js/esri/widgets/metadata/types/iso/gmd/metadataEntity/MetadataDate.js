define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputDate",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/MetadataDate.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputDate, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});