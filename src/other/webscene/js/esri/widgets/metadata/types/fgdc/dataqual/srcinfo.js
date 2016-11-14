define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputNumber",
        "../../../form/InputSelectOne",
        "../../../form/InputTextArea",
        "../../../form/Options",
        "../../../form/Option",
        "../citeinfo/citeinfo",
        "../timeinfo/timeinfo",
        "dojo/text!./templates/srcinfo.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputNumber, InputSelectOne, InputTextArea, Options, Option, citeinfo, timeinfo, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});