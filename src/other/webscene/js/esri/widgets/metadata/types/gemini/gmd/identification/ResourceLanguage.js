define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/CodeListReference",
        "../freeText/LanguageCode",
        "dojo/text!./templates/ResourceLanguage.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, CodeListReference, LanguageCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});