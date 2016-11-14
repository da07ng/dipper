define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputDelimitedTextArea",
        "../../../form/InputText",
        "../../../form/Tabs",
        "../../../form/tools/ClickableValueTool",
        "../../../form/fgdc/IsoTopicTool",
        "dojo/text!./templates/keywords.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputDelimitedTextArea, InputText, Tabs, ClickableValueTool,
  IsoTopicTool, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});