define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputNumber",
        "../../../form/InputTextArea",
        "dojo/text!./templates/vertacc.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputNumber, InputTextArea, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});