define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputTextArea",
        "../../../form/Section",
        "../../../form/Tabs",
        "../../../form/tools/ClickableValueTool",
        "../citeinfo/citeinfo",
        "../cntinfo/cntinfo",
        "../idinfo/bounding",
        "../idinfo/browse",
        "../idinfo/descript",
        "../idinfo/keywords",
        "../idinfo/secinfo",
        "../idinfo/status",
        "../idinfo/timeperd",
        "dojo/text!./templates/idinfo.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputTextArea, Section, Tabs, ClickableValueTool, citeinfo, cntinfo,
  bounding, browse, descript, keywords, secinfo, status, timeperd, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});