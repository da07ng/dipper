define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputSelectOne",
        "../../../form/InputTextArea",
        "../../../form/Options",
        "../../../form/Option",
        "../../../form/Section",
        "../../../form/Tabs",
        "../cntinfo/cntinfo",
        "../timeinfo/timeinfo",
        "dojo/text!./templates/distinfo.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputSelectOne, InputTextArea, Options, Option, Section, Tabs, cntinfo, timeinfo, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});