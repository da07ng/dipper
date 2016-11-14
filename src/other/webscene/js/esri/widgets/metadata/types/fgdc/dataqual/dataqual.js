define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputNumber",
        "../../../form/InputTextArea",
        "../../../form/Section",
        "../../../form/Tabs",
        "../../../form/tools/ClickableValueTool",
        "../dataqual/attracc",
        "../dataqual/horizpa",
        "../dataqual/lineage",
        "../dataqual/vertacc",
        "dojo/text!./templates/dataqual.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputNumber, InputTextArea, Section, Tabs, ClickableValueTool,
  attracc, horizpa, lineage, vertacc, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});