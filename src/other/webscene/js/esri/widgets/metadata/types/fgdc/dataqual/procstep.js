define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputTextArea",
        "../../../form/fgdc/InputDate",
        "../../../form/fgdc/InputTime",
        "../../../form/tools/ClickableValueTool",
        "../cntinfo/cntinfo",
        "dojo/text!./templates/procstep.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputTextArea, InputDate, InputTime, ClickableValueTool, cntinfo, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});