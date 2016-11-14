define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputText",
        "../../../form/InputTextArea",
        "../../../form/tools/ClickableValueTool",
        "dojo/text!./templates/attracc.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputText, InputTextArea, ClickableValueTool, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});