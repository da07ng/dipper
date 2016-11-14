define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/ElementChoice",
        "../../../form/fgdc/InputDate",
        "../../../form/fgdc/InputTime",
        "../../../form/tools/ClickableValueTool",
        "dojo/text!./templates/timeinfo.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, ElementChoice, InputDate, InputTime, ClickableValueTool, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});