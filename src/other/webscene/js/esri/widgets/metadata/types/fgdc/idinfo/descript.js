define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputTextArea",
        "dojo/text!./templates/descript.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputTextArea, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});