define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/ElementChoice",
        "../../../form/InputNumber",
        "../../../form/InputSelectOne",
        "../../../form/Options",
        "../../../form/Option",
        "dojo/text!./templates/horizsys.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, ElementChoice, InputNumber, InputSelectOne, Options, Option, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});