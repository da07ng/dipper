define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/fgdc/InputDate",
        "../../../form/InputSelectOne",
        "../../../form/InputText",
        "../../../form/InputTextArea",
        "../../../form/Options",
        "../../../form/Option",
        "../../../form/Section",
        "../../../form/Tabs",
        "../cntinfo/cntinfo",
        "dojo/text!./templates/metainfo.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputDate, InputSelectOne, InputText, InputTextArea, Options, Option,
  Section, Tabs, cntinfo, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});