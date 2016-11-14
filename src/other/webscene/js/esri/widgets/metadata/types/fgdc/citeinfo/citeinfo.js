define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/fgdc/InputDate",
        "../../../form/fgdc/InputTime",
        "../../../form/tools/ClickableValueTool",
        "../../../form/InputSelectOne",
        "../../../form/InputTextArea",
        "../../../form/Options",
        "../../../form/Option",
        "dojo/text!./templates/citeinfo.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputDate, InputTime, ClickableValueTool, InputSelectOne, InputTextArea,
  Options, Option, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});