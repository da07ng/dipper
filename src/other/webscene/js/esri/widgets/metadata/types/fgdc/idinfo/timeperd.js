define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputSelectOne",
        "../../../form/Options",
        "../../../form/Option",
        "../timeinfo/timeinfo",
        "dojo/text!./templates/timeperd.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputSelectOne, Options, Option, timeinfo, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});