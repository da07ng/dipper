define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputText",
        "../../../../form/iso/GcoElement",
        "dojo/text!./templates/MetadataLanguage.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputText, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});