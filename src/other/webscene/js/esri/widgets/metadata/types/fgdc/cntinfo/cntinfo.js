define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/ElementChoice",
        "../../../form/InputSelectOne",
        "../../../form/InputTextArea",
        "../../../form/Options",
        "../../../form/Option",
        "../../../form/Section",
        "../../../form/Tabs",
        "dojo/text!./templates/cntinfo.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, ElementChoice, InputSelectOne, InputTextArea, Options, Option, Section, Tabs, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});