define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputNumber",
        "../../../form/InputSelectOne",
        "../../../form/Options",
        "../../../form/Option",
        "dojo/text!./templates/vertdef.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputNumber, InputSelectOne, Options, Option, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});